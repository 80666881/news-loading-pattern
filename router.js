app.get('/getNews',function(req,res){
	var index = req.query.index;

	var arr = [];
	arr.length = 6;
	for (var i = 0; i<arr.length; i++) {
		var index = parseInt(index);
		arr[i] = '内容'+ (index + i + 1);
	}
	res.send(arr);
	// res.send('aaa');
})