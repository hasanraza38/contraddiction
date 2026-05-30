import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const businessId = process.env.INSTAGRAM_BUSINESS_ID;
    const token = process.env.FACEBOOK_PAGE_TOKEN;

    if (!businessId || !token) {
      return NextResponse.json(
        { error: 'Missing Instagram API configuration in environment variables.' },
        { status: 500 }
      );
    }

    const url = `https://graph.facebook.com/v25.0/${businessId}?fields=business_discovery.username(contradictionspk){media{media_url,thumbnail_url,caption,media_type,permalink,timestamp,like_count,comments_count}}&access_token=${token}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Instagram API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to fetch Instagram data from Meta Graph API.' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const media = data?.business_discovery?.media?.data || [];

    return NextResponse.json({ data: media });
  } catch (error) {
    console.error('Error in Instagram API route:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while fetching Instagram posts.' },
      { status: 500 }
    );
  }
}
