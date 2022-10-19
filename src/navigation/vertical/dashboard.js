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
    ],
  },
  {
    title: 'Agent',
    icon: 'UserPlusIcon',
    children: [
      {
        title: 'List',
        route: 'apps-agent-list',
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
    ],
  },
  {
    title: 'University',
    icon: 'BookOpenIcon',
    children: [
      {
        title: 'List',
        route: 'apps-university-list',
      },
      {
        title: 'Add',
        route: { name: 'apps-university-add' },
      },
    ],
  },
  {
    title: 'Program',
    icon: 'BookIcon',
    children: [
      {
        title: 'List',
        route: 'apps-program-list',
      },
      {
        title: 'Add',
        route: { name: 'apps-program-add' },
      },
    ],
  },
]
