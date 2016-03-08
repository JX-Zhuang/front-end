// // 加 md5
// fis.match('*.{js,css,png}', {
//   useHash: true
// });

//时间戳
//fis.set('date', new Date);
// fis.match('*.{js,css,png}', {
// 	var date=new Date();
// 	var year=date.getFullYear();
// 	var month=date.getMonth()+1;
// 	var day=date.getDate();
// 	var hour=date.getHours();
// 	var minute=date.getMinutes();
// 	var second=date.getMilliseconds();
// 	if (month<10) {
// 		month='0'+month;
// 	};
//     query: '?t='+year + month+ day+hour+minute+second;
// });

// // 启用 fis-spriter-csssprites 插件
// fis.match('::package', {
//   spriter: fis.plugin('csssprites')
// })

// // 对 CSS 进行图片合并
// fis.match('*.css', {
//   // 给匹配到的文件分配属性 `useSprite`
//   useSprite: true
// });

// fis.match('*.js', {
//   // fis-optimizer-uglify-js 插件进行压缩，已内置
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   // fis-optimizer-clean-css 插件进行压缩，已内置
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   // fis-optimizer-png-compressor 插件进行压缩，已内置
//   optimizer: fis.plugin('png-compressor')
// });
