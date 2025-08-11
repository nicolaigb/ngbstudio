import { Body, H1 } from '@/components/atoms'
import { FullscreenContainer } from '@/components/ui/FullscreenContainer'

import AudioVisualizer from './AudioVisualizer'

/**
 * No Pets 001 page - Audio visualizer with fullscreen capability
 * Wraps the AudioVisualizer component with FullscreenContainer to enable
 * fullscreen overlay functionality that bypasses the main app layout.
 */
export default function Page() {
  return (
    <FullscreenContainer
      className="relative h-[80vh] w-full overflow-hidden bg-black"
      fullscreenClassName="fullscreen-content bg-black"
      fullScreenToggleProps={{ variant: 'white' }}
    >
      <div className="absolute left-6 top-6 z-[100]">
        <H1 isPlus className="text-white">
          NO PETS 001
        </H1>
        <Body className="text-white">TRANSMITTER PARK, GREENPOINT</Body>
        <Body className="text-white">AUGUST 23</Body>
        <Body className="text-white">2PM</Body>
      </div>
      <AudioVisualizer />
    </FullscreenContainer>
  )
}
