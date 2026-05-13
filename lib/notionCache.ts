/**
 * Process-level in-memory cache for Notion API responses.
 * TTL: 60 s in development, 3600 s in production (matches ISR revalidate).
 * Keyed by an arbitrary string fingerprint (e.g. function name + args hash).
 */

const DEFAULT_TTL =
  process.env.NODE_ENV === "development" ? 60 : 3600;

interface Entry<T> {
  data: T;
  expiresAt: number;
}

const store = new Map<string, Entry<unknown>>();

export async function cached<T>(
  key: string,
  fn: () => Promise<T>,
  ttl: number = DEFAULT_TTL
): Promise<T> {
  const now = Date.now();
  const hit = store.get(key) as Entry<T> | undefined;

  if (hit && hit.expiresAt > now) {
    return hit.data;
  }

  const data = await fn();
  store.set(key, { data, expiresAt: now + ttl * 1000 });
  return data;
}
