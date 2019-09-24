import { queryMarket , findUserDetailsById , accountQuery , businesPageQuery } from '@/services/market';
const MarketModel = {
  namespace: 'market',
  state: {
    marketData:[],
    total:0,
    oneData:{},
    twoData:[],
    threeData:[],
    fourData:[],
  },
  effects: {
    *fetchLoadMarket(_, { call, put }) {
      const response = yield call(queryMarket,_.payload);
      // console.log(response);
      yield put({
        type: 'changeMarketData',
        payload: response,
      });
    },
    //推广员详情
    *fetchLoadOne(_, { call, put }) {
      // console.log(_.payload);
      const response = yield call(findUserDetailsById,_.payload);
      // console.log(response);
      yield put({
        type: 'findUserDetailsById',
        payload: response,
      });
    },
    //账户信息
    *fetchLoadTwo(_, { call, put }) {
      // console.log(_.payload);
      const response = yield call(accountQuery,_.payload);
      // console.log(response);
      yield put({
        type: 'accountQuery',
        payload: response,
      });
    },
    //推广商家
    *fetchLoadThree(_, { call, put }) {
      // console.log(_.payload);
      const response = yield call(businesPageQuery,_.payload);
      // console.log(response);
      yield put({
        type: 'businesPageQuery',
        payload: response,
      });
    },
  },
  reducers: {
    changeMarketData(state, action) {
      return { 
          ...state,
          total:action.payload.data.total,
          marketData:action.payload.data.list,
      };
    },
    //推广员详情
    findUserDetailsById(state, action) {
      return { 
          ...state,
          oneData:action.payload.data,
      };
    },
    //账户信息
    accountQuery(state, action) {
      return { 
          ...state,
          twoData:action.payload.data.list,
      };
    },
    //推广商家
    businesPageQuery(state, action) {
      return { 
          ...state,
          threeData:action.payload.data.list,
      };
    },
  },
};
export default MarketModel;















