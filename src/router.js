import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import Analytics from './views/Analytics.vue';
import Node from './views/Node.vue';
import Publication from './views/Publication.vue';

Vue.use(Router);

const availableCardTypes = [
  'anatomy',
  'cellline',
  'disease',
  'function',
  'gene',
  'genotype',
  'homolog',
  'interaction',
  // 'literature',
  'model',
  'ortholog-phenotype',
  'ortholog-disease',
  'pathway',
  'phenotype',
  'variant',
];

const nodeRoutes = availableCardTypes.map(nodeType => (
  {
    path: `/${nodeType}/:id`,
    name: `/Node${nodeType}`,
    component: Node,
  }));

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...nodeRoutes,
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about/readme',
      name: 'about-readme',
      component: require('../README.md').default,
    },
    {
      path: '/about/monarch',
      name: 'about-monarch',
      component: require('@/views/AboutMonarch.md').default,
    },
    {
      path: '/about/team',
      name: 'about-team',
      component: require('@/views/AboutTeam.md').default,
    },
    {
      path: '/search/:query?',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (analytics.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "analytics" */ './views/Search.vue'),
    },
    {
      path: '/analyze/phenotypes',
      name: 'analyzephenotypes',
      // route level code-splitting
      // this generates a separate chunk (analytics.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "analyzephenotypes" */ './views/AnalyzePhenotypes.vue'),
    },
    {
      path: '/analytics',
      name: 'analytics',
      // route level code-splitting
      // this generates a separate chunk (analytics.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "analytics" */ './views/Analytics.vue'),
    },
    {
      path: '/literature/:id/:fromType?/:fromId?',
      name: 'literature',
      component: Publication,
    },
    {
      path: '/*',
      name: 'MonarchLegacy',
      // route level code-splitting
      // this generates a separate chunk (analytics.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "MonarchLegacy" */ './views/MonarchLegacy.vue'),
    },
  ],
});
