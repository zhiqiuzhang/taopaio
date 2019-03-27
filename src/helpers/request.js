/**
**@desc: 请求方法封装
**@author: 程松(贰叁)
*/

export default async function (url, options) {
  // if (process.env.NODE_ENV === 'development') {
  //   // options.type = 'jsonp'
  //
  // }

  options.crossOrigin = true;
  options.withCredentials = true;
  url = 'https://www.easy-mock.com/mock/5a964cffdd997801d1e291fe' + url;
  options.method = options.method || 'POST';
  options.type = options.type || 'json';
  options.data = options.data || {};
  // options.data.format = 'json'

  try {
    const response = await fetch(url, options);
    const { data, status } = await response.json();

    if (status === 0) {
      return data;
    } else {
      // 错误处理
    }
  } catch (e) {
    // 错误处理
  }
  //
  // return new Promise((resolve, reject) => {
  //   reqwest(options)
  //     .then((data) => {
  //       if (data) {
  //         if (data.status === 0) {
  //           resolve(data.data);
  //         } else {
  //           if (!options.noUseMessage) {
  //             message(data.msg || '未知错误', 'error');
  //           }
  //           reject(data);
  //         }
  //       } else {
  //         // 返回异常的页面统一提示逻辑
  //         if (!options.noUseMessage) {
  //           message('网络或服务器异常，请稍后重试', 'error');
  //         }
  //         reject(new Error('请求异常'));
  //       }
  //     })
  //     .fail((err) => {
  //       if (process.env.NODE_ENV === 'development') {
  //         console.error(err);
  //       }
  //
  //       // 错误的页面统一提示逻辑
  //       if (!options.noUseMessage) {
  //         message('网络或服务器异常，请稍后重试', 'error');
  //       }
  //       reject(err);
  //     });
  // });
}



// WEBPACK FOOTER //
// ./src/helpers/request.js