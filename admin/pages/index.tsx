/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';
import { PageContainer } from '@keystone-6/core/admin-ui/components';

export default function HomePage() {
  return (
    <PageContainer header="AVM Yönetim Sistemi">
      <div css={{ padding: '20px', textAlign: 'center' }}>
        <a
          href="/admin/dashboard"
          css={{
            display: 'inline-block',
            padding: '15px 30px',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#1d4ed8',
            },
          }}
        >
          Kira Grafiğini Görüntüle
        </a>
      </div>
    </PageContainer>
  );
} 