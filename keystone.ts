import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';

export default config(
  withAuth({
    db: {
      provider: 'mysql',
      url: 'mysql://root:emreyrk1999@localhost:3306/avm_management',
    },
    lists,
    session,
    ui: {
      isAccessAllowed: ({ session }) => !!session,
      basePath: '/admin',
    },
  })
);
