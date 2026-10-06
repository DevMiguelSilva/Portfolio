/** Live demo defaults use the existing Vercel production domains. */
export const LIVE_URLS = {
  jobTracker: 'https://applytrack-board.vercel.app',
  fitTracker: 'https://fit-tracker-jet-ten.vercel.app',
}

function resolveLiveUrl(envValue: string | undefined, fallback: string): string {
  const configured = envValue?.trim()
  if (!configured) return fallback
  try {
    const url = new URL(configured)
    if (
      !['http:', 'https:'].includes(url.protocol) ||
      url.hostname.startsWith('your-') ||
      configured.includes('REPLACE')
    ) return fallback
    return configured.replace(/\/$/, '')
  } catch {
    return fallback
  }
}

export function getJobTrackerUrl(): string {
  return resolveLiveUrl(import.meta.env.VITE_JOB_TRACKER_URL, LIVE_URLS.jobTracker)
}

export function getFitTrackerUrl(): string {
  return resolveLiveUrl(import.meta.env.VITE_FIT_TRACKER_URL, LIVE_URLS.fitTracker)
}
