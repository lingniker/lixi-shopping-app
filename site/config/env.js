/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = 'http://127.0.0.1:8035/img/';


if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = 'http://127.0.0.1:8035/img/';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '//localhost:8001';
  imgBaseUrl = 'http://127.0.0.1:8035/img/';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}