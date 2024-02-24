export default {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Wallet Address',
      type: 'string',
    },
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your user schema',
      options: {
        source: 'title',
      },
    },
    {
      name: 'transactions',
      title: 'Transactions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'transactions',
            },
          ],
        },
      ],
    },
  ],
}
