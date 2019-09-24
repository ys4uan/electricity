import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'C:/Users/54181/Desktop/cloud/cloud/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
          LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    Routes: [require('../Authorized').default],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        name: 'welcome',
        icon: 'smile',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Welcome" */ '../Welcome'),
              LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
                .default,
            })
          : require('../Welcome').default,
        exact: true,
      },
      {
        path: '/staff',
        name: 'staff',
        icon: 'user',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__staff__Staff" */ '../staff/Staff'),
              LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
                .default,
            })
          : require('../staff/Staff').default,
        exact: true,
      },
      {
        path: '/logDetails',
        hideInMenu: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__staff__LogDetails" */ '../staff/LogDetails'),
              LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
                .default,
            })
          : require('../staff/LogDetails').default,
        exact: true,
      },
      {
        path: '/logs',
        name: 'logs',
        icon: 'file-text',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__logs__Logs" */ '../logs/Logs'),
              LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
                .default,
            })
          : require('../logs/Logs').default,
        exact: true,
      },
      {
        path: '/businessManege',
        name: 'businessManege',
        icon: 'shopping-cart',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__businessManege__BusinessManege" */ '../businessManege/BusinessManege'),
              LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
                .default,
            })
          : require('../businessManege/BusinessManege').default,
        exact: true,
      },
      {
        path: '/newsCenter',
        name: 'newsCenter',
        icon: 'mail',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__newsCenter__NewsCenter" */ '../newsCenter/NewsCenter'),
              LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
                .default,
            })
          : require('../newsCenter/NewsCenter').default,
        exact: true,
      },
      {
        path: '/market',
        name: 'market',
        icon: 'usergroup-add',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__market__Market" */ '../market/Market'),
              LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
                .default,
            })
          : require('../market/Market').default,
        exact: true,
      },
      {
        path: '/shopManage',
        name: 'shopManage',
        icon: 'shop',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__shopManage__ShopManage" */ '../shopManage/ShopManage'),
              LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
                .default,
            })
          : require('../shopManage/ShopManage').default,
        exact: true,
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/54181/Desktop/cloud/cloud/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import(/* webpackChunkName: "p__404" */ '../404'),
          LoadingComponent: require('C:/Users/54181/Desktop/cloud/cloud/src/components/PageLoading/index')
            .default,
        })
      : require('../404').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/54181/Desktop/cloud/cloud/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
