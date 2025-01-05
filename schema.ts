import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, decimal, timestamp, password, select } from '@keystone-6/core/fields';

export const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      password: password({ validation: { isRequired: true } }),
      role: select({
        type: 'string',
        options: [
          { label: 'Admin', value: 'admin' },
          { label: 'AVM Yöneticisi', value: 'manager' },
        ],
        defaultValue: 'manager',
      }),
      managedMalls: relationship({ ref: 'Mall', many: true }),
    },
  }),
  Mall: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      city: text({ validation: { isRequired: true } }),
      address: text({ validation: { isRequired: true } }),
      managers: relationship({ ref: 'User', many: true }),
      stores: relationship({ ref: 'Store', many: true }),
    },
  }),
  Store: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      storeNumber: text({ validation: { isRequired: true } }),
      floor: text({ validation: { isRequired: true } }),
      area: decimal({ validation: { isRequired: true } }),
      rentAmount: decimal({ validation: { isRequired: true } }),
      mall: relationship({ ref: 'Mall' }),
      client: relationship({ ref: 'Client' }),
      payments: relationship({ ref: 'Payment', many: true }),
    },
  }),
  Client: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      companyName: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      phone: text({ validation: { isRequired: true } }),
      taxNumber: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      stores: relationship({ ref: 'Store', many: true }),
    },
  }),
  Payment: list({
    access: allowAll,
    fields: {
      store: relationship({ ref: 'Store' }),
      amount: decimal({ validation: { isRequired: true } }),
      paymentDate: timestamp(),
      month: text({ validation: { isRequired: true } }),
      year: text({ validation: { isRequired: true } }),
      status: select({
        type: 'string',
        options: [
          { label: 'Ödendi', value: 'paid' },
          { label: 'Beklemede', value: 'pending' },
          { label: 'Gecikti', value: 'late' },
        ],
        defaultValue: 'pending',
      }),
    },
  }),
};
