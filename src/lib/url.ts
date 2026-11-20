/** "https://www.shapedivider.app/path" -> "shapedivider.app" */
export function hostname(link: string): string {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return link;
  }
}

/** "https://www.youtube.com/@Fireship" -> "@Fireship" (falls back to the hostname). */
export function youtubeHandle(link: string): string {
  const match = link.match(/youtube\.com\/(@[^/?#]+)/);
  return match ? match[1] : hostname(link);
}
