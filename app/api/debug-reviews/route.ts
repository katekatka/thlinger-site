import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    return NextResponse.json({
      error: "missing_env",
      hasKey: !!key,
      hasPlaceId: !!placeId,
    });
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=rating,user_ratings_total,reviews` +
    `&language=fr` +
    `&reviews_sort=newest` +
    `&key=${key}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    return NextResponse.json({
      status: data.status,
      error_message: data.error_message ?? null,
      reviews_count: data.result?.reviews?.length ?? 0,
      rating: data.result?.rating ?? null,
      total: data.result?.user_ratings_total ?? null,
      // Show first review author only (no PII)
      first_review_author: data.result?.reviews?.[0]?.author_name ?? null,
    });
  } catch (e) {
    return NextResponse.json({ error: "fetch_failed", detail: String(e) });
  }
}
