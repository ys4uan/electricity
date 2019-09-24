import { businesPageQuery ,findBusinessDetailsById ,orderQuery ,findStoreByBusinessId, rechargeQuery,} from '@/services/businessManege';
// import BusinessManege from '@/pages/businessManege/BusinessManege';
const BusinessManege = {
    namespace: 'businessManege',
    state: {
        businessManegeData:[],
        total:0,
        oneData:{},
        twoData:[],
        sixData:[],
        sevenData:[],
    },
    effects: {
        *fetchLoadBusinessManege(_, { call, put }) {
            // console.log(_.payload);
            const response = yield call(businesPageQuery,_.payload);
            //console.log(response);
            yield put({
                type: 'businesPageQuery',
                payload: response,
            });
        },
        //one
        *fetchLoadOne(_, { call, put }) {
        //   console.log(_.payload);
            const response = yield call(findBusinessDetailsById,_.payload);
        //   console.log(response);
            yield put({
                type: 'findBusinessDetailsById',
                payload: response,
            });
        },
        //two  three four five
        *fetchLoadTwo(_, { call, put }) {
        //   console.log(_.payload);
            const response = yield call(orderQuery,_.payload);
        //   console.log(response);
            yield put({
                type: 'orderQuery',
                payload: response,
        });
        },
        //six
        *fetchLoadSix(_, { call, put }) {
            console.log(_.payload);
            const response = yield call(findStoreByBusinessId,_.payload);
            console.log(response);
            yield put({
                type: 'findStoreByBusinessId',
                payload: response,
            });
        },
        //seven eight
        *fetchLoadSeven(_, { call, put }) {
            // console.log(_.payload);
            const response = yield call(rechargeQuery,_.payload);
            // console.log(response);
            yield put({
                type: 'rechargeQuery',
                payload: response,
            });
        },
    
    },
    reducers: {
        businesPageQuery(state, action) {
            return { 
                ...state,
                total:action.payload.data.tatal,
                businessManegeData:action.payload.data.list,
            };
        },
        //one
        findBusinessDetailsById(state,action){
            return{
                ...state,
                oneData:action.payload.data,
            }
        },
        //two three four  fiv
        orderQuery(){
            return{
                ...state,
                twoData:action.payload.data.list,
            }
        },
        //six
        findStoreByBusinessId(state, action){
            return{
                ...state,
                sixData:action.payload.datalist,
            }
        },
        //seven eight
        rechargeQuery(state,action){
            return{
                ...state,
                sevenData:action.payload.data.list,
            }
        },
    
    },
};
export default BusinessManege;