export default [
  {
    title: 'Dashboard',
    route: 'dashboard-analytics',
    icon: 'HomeIcon',
    tagVariant: 'light-warning',
  },
  {
    title: 'Employee',
    icon: 'UsersIcon',
    children: [
      {
        title: 'List',
        route: 'apps-users-list',
      },
      {
        title: 'View',
        route: { name: 'apps-users-view', params: { id: 21 } },
      },
      {
        title: 'Edit',
        route: { name: 'apps-users-edit', params: { id: 21 } },
      },
    ],
  },
  {
    title: 'University',
    icon: 'BookOpenIcon',
    children: [
      {
        title: 'List',
        route: 'apps-invoice-list',
      },
      {
        title: 'Preview',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Edit',
        route: { name: 'apps-invoice-edit', params: { id: 4987 } },
      },
      {
        title: 'Add',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
  {
    title: 'Student',
    icon: 'UserIcon',
    children: [
      {
        title: 'List',
        route: 'apps-students-list',
      },
      {
        title: 'View',
        route: { name: 'apps-students-view', params: { id: 21 } },
      },
      {
        title: 'Edit',
        route: { name: 'apps-students-edit', params: { id: 21 } },
      },
    ],
  },
]
