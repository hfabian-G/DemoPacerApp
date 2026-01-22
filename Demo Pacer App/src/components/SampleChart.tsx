import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false, // We use the card title in the dashboard
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'User Signups',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Completed Workflows',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const SampleChart = () => {
    return <Bar options={options} data={data} />;
}

export default SampleChart;
