// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {

  return rp('http://api.bilibili.cn/recommend')
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.err(err);
    });
}