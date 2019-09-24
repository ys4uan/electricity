
import { queryNews,deleteNews,addNews} from '@/services/newsCenter';
const NewsModel = {
  namespace: 'newsCenter',
  state: {
    newsData:[],
    total:0,
  },
  effects: {
    *fetchNews(_, { call, put }) {
      const response = yield call(queryNews,_.payload);
      yield put({
        type: 'changeNewsData',
        payload: response,
      });
    },
    *fetchDeleterNews(_, { call, put }) {
        // console.log(_.payload.forms);
        const response = yield call(deleteNews,_.payload.forms);
        // console.log(response);
        yield put({
          type: 'fetchNews',
          payload: _.payload.page,
        });
      },
    *fetchAddNews(_, { call, put }) {
        
        const response = yield call(addNews,_.payload.forms);
        console.log(response);
        console.log(_.payload.forms);
        yield put({
          type: 'fetchNews',
          payload:_.payload.page,
        });
    },
  },
  reducers: {
    changeNewsData(state, action) {

    	// console.log(action.payload)
      return { 
      	...state,
      	total:action.payload.data.total,
      	newsData:action.payload.data.list
      };
    },
  },
};
export default NewsModel;
































