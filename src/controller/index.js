const Base = require('./base.js');
const fs = require('fs');
const path = require('path');
const util = require('util');
const axios = require('axios');

module.exports = class extends think.Controller {
  async indexAction() {
    const model = this.model('lists');
    const data = await model.order({sort: 'DESC', id: 'DESC'}).where({'status': 1}).select();
    console.log(data);
    this.assign('lists', data);
    return this.display();
  }
  async adminStarAction() {
    return this.display();
  }
  async imgUploadAction() {
    const file = this.file('file');
    const filepath = file.path;
    const basename = file.name;
    const uploadpath = path.join(think.ROOT_PATH, '/www/static/images/products', basename);

    // fs.renameSync(filepath, uploadpath);

    fs.copyFile(filepath, uploadpath, (err) => {
      if (err) throw err;
      console.log('源文件已拷贝到目标文件');
    });

    this.success(file);
  }
};
