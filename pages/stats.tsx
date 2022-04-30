import { FC } from 'react'
import { PolarArea, Bar } from 'react-chartjs-2'
import {
  Chart,
  CategoryScale,
  LinearScale,
  ArcElement,
  RadialLinearScale,
  BarElement,
} from 'chart.js'
import Layout from '../layout/layout'

Chart.register(
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
)

interface StatsPageProps {}

const StatsPage: FC<StatsPageProps> = () => {
  const label_data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
  }

  const bars_data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div
            className="flex flex-col rounded-xl
                   bg-white p-6 py-6 text-black"
          >
            <h3>Hours per day</h3>
            <Bar data={bars_data} />
          </div>
          <div
            className="flex flex-col rounded-xl
                   bg-white p-6 py-6 text-black"
          >
            <h3>Hours per label</h3>
            <Bar data={bars_data} />
          </div>
        </div>

        <div>
          <div
            className="flex flex-col rounded-xl
                   bg-white p-6 py-6 text-black"
          >
            <h3>Label Goals</h3>
          </div>
          <div
            className="flex flex-col rounded-xl
                   bg-white p-6 py-6 text-black"
          >
            <h3>Labels</h3>
            <PolarArea data={label_data} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default StatsPage
