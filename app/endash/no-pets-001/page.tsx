import { FullscreenContainer } from '@/components/ui/FullscreenContainer'
import { FullscreenToggle } from '@/components/ui/FullscreenToggle'

import AudioVisualizer from './AudioVisualizer'

/**
 * No Pets 001 page - Audio visualizer with fullscreen capability
 * Wraps the AudioVisualizer component with FullscreenContainer to enable
 * fullscreen overlay functionality that bypasses the main app layout.
 */
export default function Page() {
  return (
    <FullscreenContainer
      className="relative h-screen w-full overflow-hidden bg-black"
      fullscreenClassName="fullscreen-content bg-black"
    >
      <AudioVisualizer />
    </FullscreenContainer>
  )
}
