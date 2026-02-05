"use client"

import dynamic from 'next/dynamic'

const RivUnifiedWidget = dynamic(() => import('@/components/riv-unified-widget').then(mod => ({ default: mod.RivUnifiedWidget })), {
  ssr: false,
  loading: () => null
})

const ScrollProgress = dynamic(() => import('@/components/scroll-progress').then(mod => ({ default: mod.ScrollProgress })), {
  ssr: false,
  loading: () => null
})

const BackToTop = dynamic(() => import('@/components/back-to-top').then(mod => ({ default: mod.BackToTop })), {
  ssr: false,
  loading: () => null
})

export function ClientWidgets() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <RivUnifiedWidget />
    </>
  )
}
