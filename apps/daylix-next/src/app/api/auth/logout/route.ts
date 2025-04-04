import { NextResponse } from 'next/server';
import { removeAuthCookie } from '@daylix/utils/server';

export async function POST() {
  try {
    await removeAuthCookie();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}
