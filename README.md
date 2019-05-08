# RNApp

#### 第三方框架
- 底部导航：react-native-tab-navigator
- 路由：react-native-router-flux
- 数据库：react-native-sqlite-storage
- 单向数据流：redux

#### 一、mac react-native环境搭建

工具：vscode

- 1.1 安装brew
```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- 1.2 安装node和webpack
```
brew install node
brew install webpack
```

- 1.3 设置国内镜像
```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

- 1.4 安装React Native
```
npm install -g react-native-cli
```

- 1.5 初始化项目和导入依赖模块
```
react-native init ProjectName
创建完成后在工程目录中执行： npm install 
```


#### 二、HTTP网络请求

```javascript
/**
 * http networkData request
 */

var HttpUtil = {};

/**
 *  基于fetch 封装的Get请求
 *  @param url
 *  @param params{}
 *  @param headers
 *  @returns {Promise}
 */

HttpUtil.get = function (url, params, headers) {
    if (params) {
        let paramsArray = [];
        // encodeURiComponet
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        }else  {
            url += '&' + paramsArray.join('&')
        }
    }

    return new  Promise (function (reslove, reject) {
        fetch(url,{
            method: 'GET',
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }else  {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                reslove(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })

}


/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @param headers
 * @returns {Promise}
 */
HttpUtil.post = function(url, formData, headers) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body:formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status:-1});
            })
    })
}

export default HttpUtil;

/*
// 使用
let formData = new FormData();
formData.append("id",1060);
HttpUtil.post(url,formData,headers).then((json) => {
    //处理 请求success
    if(json.code === 0 ){
        //我们假设业务定义code为0时，数据正常
    }else{
        //处理自定义异常
        this.doException(json);
    }
},(json)=>{
    //TODO 处理请求fail
})
*/
```


