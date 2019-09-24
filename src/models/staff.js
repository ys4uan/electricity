
import { queryStaff,changeStatus} from '@/services/staff';
const StaffModel = {
  namespace: 'staff',
  state: {
    staffData:[],
    total:0,
    staffId:0,
  },
  effects: {
    *fetchLoadStaff(_, { call, put }) {
        
      const response = yield call(queryStaff,_.payload);
    //   console.log(response);
      yield put({
        type: 'changeStaffData',
        payload: response,
      });
    },
    *fetchChangeStatus(_, { call, put }) {
        const response = yield call(changeStatus,_.payload.forms);
        // console.log(_.payload.forms);
        yield put({
          type: 'fetchLoadStaff',
          payload: _.payload.page,
        });
      }

  },
  reducers: {
    changeStaffData(state, action) {
      return { 
          ...state,
          total:action.payload.data.total,
          staffData:action.payload.data.list,
      };
    },
  },
};
export default StaffModel;















