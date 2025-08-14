import { Metadata } from 'next'

import Invite from './Invite'

export const metadata: Metadata = {
  title: 'No Pets 001 - Endash',
  description: 'Audio visualizer with fullscreen capability',
  openGraph: {
    title: 'No Pets 001 ',
    description:
      'INTRNT BF & "–" are in the mix at Transmitter Park on August 23, 2025 from 6–10PM',
    images: [
      {
        url: '/no-pets-001.png',
        width: 1200,
        height: 630,
        alt: 'No Pets 001',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'No Pets 001',
    description:
      'INTRNT BF & "–" are in the mix at Transmitter Park on August 23, 2025 from 6–10PM',
    images: ['/no-pets-001.png'],
  },
}

/**
 * No Pets 001 page - Audio visualizer with fullscreen capability
 * Wraps the AudioVisualizer component with FullscreenContainer to enable
 * fullscreen overlay functionality that bypasses the main app layout.
 */
export default function Page() {
  return <Invite />
}
