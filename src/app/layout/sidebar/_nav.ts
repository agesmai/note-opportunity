import { INavData } from '@coreui/angular';
export const navItems: INavData[] = [
  {
    name: 'Timeline',
    url: '/app/dashboard',
    icon: 'fab fa-windows'
  },
  {
    title: true,
    name: 'Personal'
  },
  {
    name: 'Activities',
    url: '/app/activities',
    icon: 'fa fa-id-card',
    children: [
      {
        name: 'Overview',
        url: '/app/activities/overview',
        icon: 'fa fa-street-view'
      },
      {
        name: 'History',
        url: '/base/cards',
        icon: 'fa fa-id-badge'
      },
      {
        name: 'Relationship',
        url: '/base/tooltips',
        icon: 'fas fa-light fa-scroll'
      },
      {
        name: 'Ability',
        url: '/base/tooltips',
        icon: 'icon-layers'
      }
    ]
  },
  {
    name: 'Stories',
    url: '/app/stories',
    icon: 'fas fa-history',

    children: [
      {
        name: 'Library',
        url: '/app/stories/Library',
        icon: 'fas fa-book-open'
      },
      {
        name: 'Customers',
        url: '/base/cards',
        icon: 'fa fa-id-badge'
      },
      {
        name: 'Projects',
        url: '/base/tooltips',
        icon: 'cui-graph'
      },
      {
        name: 'Ability',
        url: '/base/tooltips',
        icon: 'icon-layers'
      }
    ]
  },
  {
    title: true,
    name: 'User manager'
  },
  {
    name: 'Organization',
    url: '/app/org-map',
    icon: 'fas fa-user',
  },
  {
    name: 'User Profile',
    url: '/app/user-profile',
    icon: 'fa fa-user-circle-o'
  },
  {
    title: true,
    name: 'Analytics',
  },
  {
    name: 'Reports',
    url: '/reports',
    icon: 'fa fa-line-chart'
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'cui-ban',
    badge: {
      color: 'secondary',
      text: 'Disabled'
    },
    attributes: {disabled: true},
  },

];
