import type { GoogleReview } from "@/components/GoogleReviews";

interface PlaceReview {
  author_name: string;
  author_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

interface PlaceDetailsResponse {
  result: {
    rating: number;
    user_ratings_total: number;
    reviews: PlaceReview[];
  };
  status: string;
}

export interface ReviewsPayload {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  placeUrl: string;
}

export async function fetchGoogleReviews(): Promise<ReviewsPayload | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) return null;

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=rating,user_ratings_total,reviews` +
    `&language=fr` +
    `&reviews_sort=newest` +
    `&key=${key}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } }); // re-fetch every hour
    if (!res.ok) return null;

    const data: PlaceDetailsResponse = await res.json();
    if (data.status !== "OK" || !data.result?.reviews?.length) return null;

    return {
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      placeUrl: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      reviews: data.result.reviews.slice(0, 3).map((r) => ({
        author: r.author_name,
        authorUrl: r.author_url,
        rating: r.rating,
        text: r.text,
        date: r.relative_time_description,
      })),
    };
  } catch {
    return null;
  }
}
