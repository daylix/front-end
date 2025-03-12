'use client';

export async function setClientAuthCookie(jwt: string): Promise<void> {
  console.warn('setClientAuthCookie: Cannot set httpOnly cookies from client side');
}

export async function getClientAuthCookie(): Promise<string | undefined> {
  console.warn('getClientAuthCookie: Cannot access httpOnly cookies from client side');
  return undefined;
}

export async function removeClientAuthCookie(): Promise<void> {
  console.warn('removeClientAuthCookie: Cannot remove httpOnly cookies from client side');
}
