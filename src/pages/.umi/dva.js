import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'businessManege', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/businessManege.js').default) });
app.model({ namespace: 'global', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/global.js').default) });
app.model({ namespace: 'login', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/login.js').default) });
app.model({ namespace: 'logs', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/logs.js').default) });
app.model({ namespace: 'market', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/market.js').default) });
app.model({ namespace: 'newsCenter', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/newsCenter.js').default) });
app.model({ namespace: 'setting', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/setting.js').default) });
app.model({ namespace: 'shopManage', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/shopManage.js').default) });
app.model({ namespace: 'staff', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/staff.js').default) });
app.model({ namespace: 'user', ...(require('C:/Users/54181/Desktop/cloud/cloud/src/models/user.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
