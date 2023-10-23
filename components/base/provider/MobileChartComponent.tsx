import { Header } from '@/components/ui/Header'
import { LineGraph } from '@/features/population/components/LineGraph'
import { Prefectures } from '@/features/prefecture/components/Prefectures'

export const MobileChartComponent = () => {
  return (
    <>
      <Header />
      <Prefectures />
      <LineGraph />
    </>
  )
}
