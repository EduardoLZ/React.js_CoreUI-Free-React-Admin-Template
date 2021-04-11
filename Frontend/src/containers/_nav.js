import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  
 
 
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Ticket Center',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Ticket',
        to: '/dashboard',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create sistem ticket',
        to: '/dashboard',
      },
      
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Bulletin Board',
    route: '/buttons',
    icon: 'cil-cursor'
   
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Notification Center',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
 
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Consumo de API',
    to: '/dashboard2',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  
 
  
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
