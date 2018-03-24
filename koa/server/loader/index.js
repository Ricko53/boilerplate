const fs = require('fs');
const path = require('path');

const ObjToArr = obj => Object.keys(obj).map(key => obj[key])

function loadFiles(path) {
  return fs.readdirSync(path).reduce((result, file)=> {
    result[file.replace('.js', '')] = require(path + '/' +file);
    return result;
  }, {});
}

module.exports = {
  routers: ObjToArr(loadFiles(path.join(__dirname, '../router'))),
}