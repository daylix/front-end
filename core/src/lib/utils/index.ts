export function largeImageUrl(imageUrl: string): string {
  try {
    const decodedUrl = decodeURIComponent(imageUrl);
    const url = new URL(decodedUrl);
    const pathParts = url.pathname.split('/');
    const filename = pathParts[pathParts.length - 1];

    if (pathParts.includes('large_')) {
      return imageUrl;
    }

    const baseUrl = `${url.protocol}//${url.host}`;
    return `${baseUrl}/large_${filename}`;
  } catch (err) {
    console.error('Invalid URL:', imageUrl, err);
    return imageUrl;
  }
}

export default largeImageUrl;
