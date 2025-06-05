'use server'

// actions/rsvp/create-rsvp.ts
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'

import { sql } from '@/utils/db'
import { RSVP, RSVPResult } from 'types/rsvp'

export async function createRSVP(email: string): Promise<RSVPResult> {
  try {
    // Validate email
    if (!email || !email.includes('@') || email.length < 5) {
      return { success: false, error: 'Please enter a valid email address' }
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim()

    // Get request headers for tracking
    const headersList = await headers()
    const userAgent = headersList.get('user-agent') || undefined
    const forwarded = headersList.get('x-forwarded-for')
    const ipAddress = forwarded
      ? forwarded.split(',')[0].trim()
      : headersList.get('x-real-ip') || undefined

    // Insert RSVP
    const result = await sql`
      INSERT INTO rsvps (email, user_agent, ip_address)
      VALUES (${normalizedEmail}, ${userAgent}, ${ipAddress})
      RETURNING id, email, created_at, user_agent, ip_address
    `

    if (result.length === 0) {
      return { success: false, error: 'Failed to create RSVP' }
    }

    const rsvp: RSVP = {
      id: result[0].id,
      email: result[0].email,
      created_at: new Date(result[0].created_at),
      user_agent: result[0].user_agent,
      ip_address: result[0].ip_address,
    }

    // Revalidate any cached data
    revalidatePath('/')

    return { success: true, data: rsvp }
  } catch (error: any) {
    console.error('Create RSVP error:', error)

    // Handle duplicate email
    if (error.code === '23505' || error.message?.includes('duplicate')) {
      return { success: false, error: 'This email has already been registered' }
    }

    return {
      success: false,
      error: 'Unable to process RSVP. Please try again.',
    }
  }
}
