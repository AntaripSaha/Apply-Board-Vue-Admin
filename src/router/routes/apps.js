export default [
  {
    path: '/apps/calendar',
    name: 'apps-calendar',
    component: () => import('@/views/apps/calendar/Calendar.vue'),
  },

  // *===============================================---*
  // *--------- EMAIL & IT'S FILTERS N LABELS -------------------------------*
  // *===============================================---*
  {
    path: '/apps/email',
    name: 'apps-email',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
    },
  },
  {
    path: '/apps/email/:folder',
    name: 'apps-email-folder',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
      navActiveLink: 'apps-email',
    },
    beforeEnter(to, _, next) {
      if (['sent', 'draft', 'starred', 'spam', 'trash'].includes(to.params.folder)) next()
      else next({ name: 'error-404' })
    },
  },
  {
    path: '/apps/email/label/:label',
    name: 'apps-email-label',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
      navActiveLink: 'apps-email',
    },
    beforeEnter(to, _, next) {
      if (['personal', 'company', 'important', 'private'].includes(to.params.label)) next()
      else next({ name: 'error-404' })
    },
  },

  // *===============================================---*
  // *--------- TODO & IT'S FILTERS N TAGS ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/todo',
    name: 'apps-todo',
    component: () => import('@/views/apps/todo/Todo.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
    },
  },
  {
    path: '/apps/todo/:filter',
    name: 'apps-todo-filter',
    component: () => import('@/views/apps/todo/Todo.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
      navActiveLink: 'apps-todo',
    },
    beforeEnter(to, _, next) {
      if (['important', 'completed', 'deleted'].includes(to.params.filter)) next()
      else next({ name: 'error-404' })
    },
  },
  {
    path: '/apps/todo/tag/:tag',
    name: 'apps-todo-tag',
    component: () => import('@/views/apps/todo/Todo.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
      navActiveLink: 'apps-todo',
    },
    beforeEnter(to, _, next) {
      if (['team', 'low', 'medium', 'high', 'update'].includes(to.params.tag)) next()
      else next({ name: 'error-404' })
    },
  },

  // *===============================================---*
  // *--------- CHAT  ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/chat',
    name: 'apps-chat',
    component: () => import('@/views/apps/chat/Chat.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'chat-application',
    },
  },

  // *===============================================---*
  // *--------- ECOMMERCE  ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/e-commerce/shop',
    name: 'apps-e-commerce-shop',
    component: () => import('@/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue'),
    meta: {
      contentRenderer: 'sidebar-left-detached',
      contentClass: 'ecommerce-application',
      pageTitle: 'Shop',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Shop',
          active: true,
        },
      ],
    },
  },
  {
    path: '/apps/e-commerce/wishlist',
    name: 'apps-e-commerce-wishlist',
    component: () => import('@/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue'),
    meta: {
      pageTitle: 'Wishlist',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Wishlist',
          active: true,
        },
      ],
    },
  },
  {
    path: '/apps/e-commerce/checkout',
    name: 'apps-e-commerce-checkout',
    component: () => import('@/views/apps/e-commerce/e-commerce-checkout/ECommerceCheckout.vue'),
    meta: {
      pageTitle: 'Checkout',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Checkout',
          active: true,
        },
      ],
    },
  },
  {
    path: '/apps/e-commerce/:slug',
    name: 'apps-e-commerce-product-details',
    component: () => import('@/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue'),
    meta: {
      pageTitle: 'Product Details',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Shop',
          active: true,
        },
        {
          text: 'Product Details',
          active: true,
        },
      ],
    },
  },

  // *===============================================---*
  // *--------- USER ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/users/list',
    name: 'apps-users-list',
    component: () => import('@/views/apps/user/users-list/UsersList.vue'),
  },
  {
    path: '/apps/users/view/:id',
    name: 'apps-users-view',
    component: () => import('@/views/apps/user/users-view/UsersView.vue'),
  },
  {
    path: '/apps/users/edit/:id',
    name: 'apps-users-edit',
    component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
  },
  // *===============================================---*
  // *--------- AGENT ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/agent/list',
    name: 'apps-agent-list',
    component: () => import('@/views/apps/user/users-list/UsersList.vue'),
  },
  {
    path: '/apps/agent/view/:id',
    name: 'apps-agent-view',
    component: () => import('@/views/apps/user/users-view/UsersView.vue'),
  },
  {
    path: '/apps/agent/edit/:id',
    name: 'apps-agent-edit',
    component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
  },
  // *--------- STUDENT ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/students/list',
    name: 'apps-students-list',
    component: () => import('@/views/apps/user/users-list/UsersList.vue'),
  },
  {
    path: '/apps/students/view/:id',
    name: 'apps-students-view',
    component: () => import('@/views/apps/user/users-view/UsersView.vue'),
  },
  {
    path: '/apps/students/edit/:id',
    name: 'apps-students-edit',
    component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
  },

  // University
  {
    path: '/apps/university/list',
    name: 'apps-university-list',
    component: () => import('@/views/apps/university/invoice-list/InvoiceList.vue'),
  },
  {
    path: '/apps/university/preview/:id',
    name: 'apps-university-preview',
    component: () => import('@/views/apps/university/invoice-preview/InvoicePreview.vue'),
  },
  {
    path: '/apps/university/add/',
    name: 'apps-university-add',
    component: () => import('@/views/apps/university/university-add/universityAdd.vue'),
  },
  {
    path: '/apps/department/add/',
    name: 'apps-department-add',
    component: () => import('@/views/apps/university/department/departmentAdd.vue'),
  },
  {
    path: '/apps/university/edit/:id',
    name: 'apps-university-edit',
    component: () => import('@/views/apps/university/invoice-edit/InvoiceEdit.vue'),
  },
  // Program
  {
    path: '/apps/program/list',
    name: 'apps-program-list',
    component: () => import('@/views/apps/program/program-list/InvoiceList.vue'),
  },
  {
    path: '/apps/program/preview/:id',
    name: 'apps-program-preview',
    component: () => import('@/views/apps/invoice/invoice-preview/InvoicePreview.vue'),
  },
  {
    path: '/apps/program/add/',
    name: 'apps-program-add',
    component: () => import('@/views/apps/program/program-add/ProgramAdd.vue'),
  },
  {
    path: '/apps/program/edit/:id',
    name: 'apps-program-edit',
    component: () => import('@/views/apps/invoice/invoice-edit/InvoiceEdit.vue'),
  },
]
