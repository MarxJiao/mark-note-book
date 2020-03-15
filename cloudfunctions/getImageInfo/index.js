// 云函数入口文件
const cloud = require('wx-server-sdk');
const AipOcrClient = require("baidu-aip-sdk").ocr;


const { appId, secretKey, apiKey } = process.env;
const client = new AipOcrClient(appId, apiKey, secretKey);

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();

    const image = event.imageBase64;

    // 调用通用文字识别, 图片参数为本地图片
    const result = await client.generalBasic(image);

    return {
        event,
        result
    }
}