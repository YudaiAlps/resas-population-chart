import { useEffect } from "react";
import { getPopulationAsync } from "../api/getPopulation";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import dayjs from 'dayjs';
import { castToPrefectureName, getLineColor, notNull } from "../../../lib/utils";
import { PopulationData, useRasas } from "../../../lib/stores";
import { Line } from 'react-chartjs-2'
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = () => {
  const populations = useRasas((state) => state.populations)
  const addPopulations = useRasas((state) => state.addPopulations)
  const prefectures = useRasas((state) => state.selectedPrefectures)
  const today = dayjs()

  useEffect(() => {
    (async() => {
      const allPopulationPromises = prefectures.map(async(prefecture) => {
        const result =  await getPopulationAsync({prefCode:prefecture}).then((res): PopulationData | null  => {
          if (!res) return null
          const graphValues = res.result?.data[0].data.map((population) => {
            if(today.year() < population.year) return null
            return population.value
          }).filter(notNull)
          return {
            label: castToPrefectureName(prefecture),
            data: graphValues,
            borderColor: getLineColor(prefecture)
          }
        })
        return result
      })
      const allPopulation = await Promise.all(allPopulationPromises)
      const notNullPopulation = allPopulation.filter(notNull)

      addPopulations(notNullPopulation)
    })()
  }, [prefectures])

  const labels = [
    1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020
  ]
  const graphData = {
    labels,
    datasets: populations
  }

  return (
    <div>
      <Line data={graphData} />
    </div>
  )
}