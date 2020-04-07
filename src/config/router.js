module.exports = [
  [/\/lists(?:\/(\d+))?/, 'lists?id=:1', 'rest'], // 第一种方式
  ['/lists/:id?', '/lists', 'rest'], // 第二种方式
  ['/lists/:id?', 'rest'], // 第三种方式
  [/\/images(?:\/(\d+))?/, 'images?id=:1', 'rest'], // 第一种方式
  ['/images/:id?', '/images', 'rest'], // 第二种方式
  ['/images/:id?', 'rest'] // 第三种方式
];
