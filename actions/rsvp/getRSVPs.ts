'use server'

// actions/rsvp/get-rsvps.ts
import { sql } from '@/utils/db'
import { RSVP } from 'types/rsvp'

export async function getAllRSVPs(): Promise<RSVP[]> {
  try {
    const result = await sql`
      SELECT id, email, created_at, user_agent, ip_address
      FROM rsvps
      ORDER BY created_at DESC
    `

    return result.map((row) => ({
      id: row.id,
      email: row.email,
      created_at: new Date(row.created_at),
      user_agent: row.user_agent,
      ip_address: row.ip_address,
    }))
  } catch (error) {
    console.error('Get all RSVPs error:', error)
    return []
  }
}

export async function getRSVPCount(): Promise<number> {
  try {
    const result = await sql`SELECT COUNT(*) as count FROM rsvps`
    return Number(result[0].count) || 0
  } catch (error) {
    console.error('Get RSVP count error:', error)
    return 0
  }
}
