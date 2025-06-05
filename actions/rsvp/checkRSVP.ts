'use server'

import { sql } from '@/utils/db'

export async function checkRSVPExists(email: string): Promise<boolean> {
  try {
    if (!email) return false

    const normalizedEmail = email.toLowerCase().trim()
    const result = await sql`
      SELECT id FROM rsvps WHERE email = ${normalizedEmail} LIMIT 1
    `

    return result.length > 0
  } catch (error) {
    console.error('Check RSVP error:', error)
    return false
  }
}

export async function getRSVPByEmail(
  email: string,
): Promise<{ id: number; email: string; created_at: Date } | null> {
  try {
    if (!email) return null

    const normalizedEmail = email.toLowerCase().trim()
    const result = await sql`
      SELECT id, email, created_at FROM rsvps WHERE email = ${normalizedEmail} LIMIT 1
    `

    if (result.length === 0) return null

    return {
      id: result[0].id,
      email: result[0].email,
      created_at: new Date(result[0].created_at),
    }
  } catch (error) {
    console.error('Get RSVP by email error:', error)
    return null
  }
}
