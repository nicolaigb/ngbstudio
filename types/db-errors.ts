/**
 * Extends the standard Error type with properties specific to PostgreSQL errors
 */
export interface PostgresError extends Error {
  code?: string;  // PostgreSQL error code (e.g., '23505' for unique constraint violation)
}