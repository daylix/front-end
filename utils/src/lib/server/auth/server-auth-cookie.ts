import { cookies } from 'next/headers';

export async function setAuthCookie(jwt: string): Promise<void> {
  cookies().set({
    name: 'jwt',
    value: jwt,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    // Expire in 30 days
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function getAuthCookie(): Promise<string | undefined> {
  return cookies().get('jwt')?.value;
}

export async function removeAuthCookie(): Promise<void> {
  cookies().delete('jwt');
}
