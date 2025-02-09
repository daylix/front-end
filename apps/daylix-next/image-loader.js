export default function imageLoader(image) {
  try {
    if (image.src.startsWith('/')) {
      return image.src;
    }

    const url = new URL(image.src);
    const pathParts = url.pathname.split('/');
    const filename = pathParts[pathParts.length - 1];
    
    if (pathParts.includes('large_')) {
      return image.src;
    }
    
    return `${url.protocol}//${url.host}/large_${filename}${url.search}`;
  } catch (error) {
    console.error('Error in imageLoader:', error);
    return image.src;
  }
}