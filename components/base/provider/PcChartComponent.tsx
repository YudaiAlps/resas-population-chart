import { LineGraph } from "../../../features/population/components/LineGraph"
import { Prefectures } from "../../../features/prefecture/components/Prefectures"
import { Header } from "../../ui/Header"

export const PcChartComponent = () => {
  return (
    <>
      <Header />
      <Prefectures />
      <LineGraph />
    </>
  )
}