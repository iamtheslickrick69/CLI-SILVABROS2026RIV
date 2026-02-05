"use client"

import dynamic from 'next/dynamic'

const RivUnifiedWidget = dynamic(() => import('@/components/riv-unified-widget').then(mod => ({ default: mod.RivUnifiedWidget })), {
  ssr: false,
  loading: () => null
})

export function ClientWidgets() {
  return (
    <>
      <RivUnifiedWidget />
    </>
  )
}
