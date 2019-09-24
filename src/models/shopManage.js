import { queryStore} from '@/services/shopManage';
const StoreModel = {
    namespace: 'store',
    state: {
        storeData:[],
        total:0,
    
    },
    effects: {
        *fetchLoadStore(_, { call, put }) {
            console.log(_.payload);
            const response = yield call(queryStore,_.payload);
            console.log(response);
            yield put({
                type: 'changStoreData',
                payload: response,
            });
        },
    
    },
    reducers: {
        changStoreData(state, action) {
    	    // console.log(action.payload)
            return { 
      	        ...state,
      	        total:action.payload.data.total,
      	        storeData:action.payload.data.list
            };
        },
    },
};
export default StoreModel;











