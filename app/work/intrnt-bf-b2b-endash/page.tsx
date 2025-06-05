import React from 'react'

import { Display, H3 } from '@/components/atoms'
import RSVPSnackBar from '@/components/organisms/RSVPSnackBar'
import UnicornScene from '@/components/UnicornScene'

export default function Page() {
  return (
    <div className="relative h-[calc(100vh-116px)] overflow-hidden">
      <div className="absolute z-10 flex w-full justify-between p-3">
        <H3 isPlus className="text-white">
          UNDER
        </H3>
        <H3 isPlus className="text-white">
          THE
        </H3>
        <H3 isPlus className="text-white">
          &ldquo;K&rdquo;
        </H3>
        <H3 isPlus className="text-white">
          BRIDGE
        </H3>
      </div>
      <Display
        isPlus
        className="absolute top-1/2 z-10 w-[calc(100%-16px)] -translate-y-1/2 text-center text-white"
      >
        INTRNT BF B2B &ldquo;&#8211;&rdquo;
      </Display>
      <div className="absolute bottom-0 z-10 flex w-full justify-between p-3">
        <H3 isPlus className="text-white">
          JUNE
        </H3>
        <H3 isPlus className="text-white">
          21
        </H3>
        <H3 isPlus className="text-white">
          2025
        </H3>
        <H3 isPlus className="text-white">
          7PM
        </H3>
      </div>
      <UnicornScene height={900} projectId="OEzAfEz0yujlULaD6sEZ" />
      <RSVPSnackBar />
    </div>
  )
}
