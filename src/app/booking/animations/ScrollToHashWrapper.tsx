'use client'

import dynamic from 'next/dynamic'

const ScrollToHash = dynamic(
  () => import('@/app/booking/animations/ScrollToHash'),
  { ssr: false },
)

export default function ScrollToHashWrapper() {
  return <ScrollToHash />
}