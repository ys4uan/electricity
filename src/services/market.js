import request from '@/utils/request';

export async function queryMarket(param){
    return request ('/api/user/pageQuery',{
        method:'get',
        params:param,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    });
}
export async function findUserDetailsById(param){
    return request ('/api/user/findUserDetailsById',{
        method:'get',
        params:param,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    });
}
export async function accountQuery(param){
    return request ('/api/account/query',{
        method:'get',
        params:param,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    });
}
export async function businesPageQuery (param){
    return request ('/api/busines/pageQuery',{
        method:'get',
        params:param,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    });
}














