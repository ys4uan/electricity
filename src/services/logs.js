
import request from '@/utils/request';
export async function queryLogs(param) {
    // console.log(param);
  return request('/api/logs/pageQuery',{
  	method:'get',
  	params:param,
  	headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  })
}















