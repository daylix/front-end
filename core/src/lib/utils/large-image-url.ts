export function largeImageUrl (imageUrl: string): string {
    return imageUrl.replace(/(.*)(\.[^\.]*$)/, '$1/large_$2');
  }
  
  export default largeImageUrl;