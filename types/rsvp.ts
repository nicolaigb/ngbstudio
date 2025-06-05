export interface RSVP {
  id: number
  email: string
  created_at: Date
  user_agent?: string
  ip_address?: string
}

export interface RSVPResult {
  success: boolean
  error?: string
  data?: RSVP
}

export interface RSVPCountResult {
  success: boolean
  count?: number
  error?: string
}
