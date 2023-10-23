import { LineGraph } from '@/features/population/components/LineGraph'
import { Prefectures } from '@/features/prefecture/components/Prefectures'
import { Header } from '@/components/ui/Header'

export const MobileChartComponent = () => {
  return (
    <>
      <Header />
      <Prefectures />
      <LineGraph />
    </>
  )
}
