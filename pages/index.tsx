import React from 'react'
import { Header } from '@/components/ui/Header'
import { LineGraph } from '@/features/population/components/LineGraph'
import { Prefectures } from '@/features/prefecture/components/Prefectures'

export default function Main() {
  return (
    <>
      <Header />
      <Prefectures />
      <LineGraph />
    </>
  )
}
