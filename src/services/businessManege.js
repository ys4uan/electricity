import request from '@/utils/request';
export async function businesPageQuery (param){
    return request ('/api/busines/pageQuery',{
        method:'get',
        params:param,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    });
}
//one
export async function findBusinessDetailsById (param){
    return request ('/api/busines/findBusinessDetailsById',{
        method:'get',
        params:param,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    });
}
//two three four five
export async function orderQuery (param){
    return request ('/api/order/query',{
        method:'get',
        params:param,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    });
}
//six
export async function findStoreByBusinessId (param){
    return request ('/api/store/findStoreByBusinessId',{
        method:'get',
        params:param,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    });
}
//seven eight
export async function rechargeQuery (param){
    return request ('/api/recharge/query',{
        method:'get',
        params:param,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    });
}