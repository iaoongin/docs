
// 自动获取文件到目录结构
const getConfig = require("vuepress-bar");
 
const config = getConfig(`${__dirname}/..`);
console.log("config.sidebar:", config.sidebar);
 
module.exports = {
  title: "我的文档",
  description: "",
  dest: "dist",
  themeConfig: {
    locales: {
      "/": {
        sidebar: [...config.sidebar],
      },
    },
    sidebarDepth: 3 // 设置左边目录到第几层
  },
 
 
  
 
};
