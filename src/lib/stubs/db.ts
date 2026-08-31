/**
 * Browser stub for src/lib/db.ts
 * MongoDB connections are server-only. This stub prevents
 * "global is not defined" / "process is not defined" crashes
 * when db.ts is transitively bundled into the browser client.
 */

export async function connectToDatabase() {
  // No-op in browser — real DB access happens server-side only
  return null;
}
