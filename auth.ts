import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password', 'role'],
  },
});

const session = statelessSessions({
  secret: 'your-long-secure-secret-string-at-least-32-chars',
});

export { withAuth, session };
