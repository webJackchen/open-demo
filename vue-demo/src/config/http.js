import Vue from 'vue';

let devApiHost = "http://192.168.1.228:3110/";
let betaApiHost = "http://service.kpaas.biaoxiaoxu.cn:3110/";
let releaseApiHost = "";

let httpConfig = {
    apiHost: ""
}

switch (process.env.NODE_ENV) {
    case "development"://开发环境
        httpConfig.apiHost = devApiHost;
        break;
    case "production"://正式环境
        httpConfig.apiHost = betaApiHost;
        break;
}

export default httpConfig