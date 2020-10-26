import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  About: {
    path: '/about',
    exact: true,
    component: lazy(() => import('../pages/About'))
  },
  Contact: {
    path: '/contact',
    exact: true,
    component: lazy(() => import('../pages/Contact'))
  },
  Story: {
    path: '/story/:storyId',
    component: lazy(() => import('../pages/Story'))
  }
}
