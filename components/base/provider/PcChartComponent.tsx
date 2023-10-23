import { Header } from '@/components/ui/Header'
import { LineGraph } from '@/features/population/components/LineGraph'
import { Prefectures } from '@/features/prefecture/components/Prefectures'

export const PcChartComponent = () => {
  return (
    <>
      <Header />
      <Prefectures />
      <LineGraph />
    </>
  )
}
