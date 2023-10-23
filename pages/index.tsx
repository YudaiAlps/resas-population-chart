import React from 'react'
import { LineGraph } from '@/features/population/components/LineGraph'
import { Prefectures } from '@/features/prefecture/components/Prefectures'
import { Header } from '@/components/ui/Header'

export default function Main() {
  return (
    <>
      <Header />
      <Prefectures />
      <LineGraph />
    </>
  )
}
