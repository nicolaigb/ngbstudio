'use server'

// actions/rsvp/delete-rsvp.ts
import { revalidatePath } from 'next/cache'

import { sql } from '@/utils/db'
import { RSVPResult } from 'types/rsvp'

export async function deleteRSVP(email: string): Promise<RSVPResult> {
  try {
    const normalizedEmail = email.toLowerCase().trim()
    const result = await sql`
      DELETE FROM rsvps WHERE email = ${normalizedEmail}
      RETURNING email
    `

    if (result.length === 0) {
      return { success: false, error: 'RSVP not found' }
    }

    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Delete RSVP error:', error)
    return { success: false, error: 'Failed to delete RSVP' }
  }
}

export async function deleteRSVPById(id: number): Promise<RSVPResult> {
  try {
    const result = await sql`
      DELETE FROM rsvps WHERE id = ${id}
      RETURNING email
    `

    if (result.length === 0) {
      return { success: false, error: 'RSVP not found' }
    }

    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Delete RSVP by ID error:', error)
    return { success: false, error: 'Failed to delete RSVP' }
  }
}
