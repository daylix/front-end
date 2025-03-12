import { NextRequest, NextResponse } from 'next/server';
import { setAuthCookie } from '@daylix/utils/server';

export async function POST(request: NextRequest) {
  try {
    const { jwt, user } = await request.json();

    if (!jwt) {
      return NextResponse.json(
        { error: 'JWT token is required' },
        { status: 400 }
      );
    }

    await setAuthCookie(jwt);

    // Return user data without the JWT (since it's in the cookie)
    return NextResponse.json({ user });
  } catch (error: Error | unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Login cookie error:', error);
    return NextResponse.json(
      { error: errorMessage || 'Failed to set authentication cookie' },
      { status: 500 }
    );
  }
}
