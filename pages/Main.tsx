import React, { FC } from 'react'
import { useMediaQueryContext } from '@/components/base/provider/mediaQueryProvider'
import { MobileChartComponent } from '@/components/base/provider/MobileChartComponent'
import { PcChartComponent } from '@/components/base/provider/PcChartComponent'

const MainComponent: FC = () => {
  const { isMobileSite, isPcSite } = useMediaQueryContext()

  return (
    <>
      {isMobileSite && <MobileChartComponent />}
      {isPcSite && <PcChartComponent />}
    </>
  )
}

export default MainComponent
