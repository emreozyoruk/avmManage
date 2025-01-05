/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const data = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
    datasets: [
      {
        label: 'Aylık Toplam Kira Geliri (₺)',
        data: [150000, 200000, 180000, 220000, 250000, 300000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'AVM Kira Gelirleri',
      },
    },
  };

  return (
    <PageContainer header="AVM Yönetim Paneli">
      <div css={{ padding: '20px' }}>
        <div css={{ maxWidth: '800px', margin: '0 auto' }}>
          <Line options={options} data={data} />
          <div css={{ marginTop: '20px', textAlign: 'right' }}>
            <a
              href="/admin/signout"
              css={{
                padding: '8px 16px',
                backgroundColor: '#ef4444',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: '#dc2626',
                },
              }}
            >
              Çıkış Yap
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
} 