const eo = require('express');
app = eo();
port = process.env.PORT || 8080;

router = require('./app/router.js');


el = require('express-ejs-layouts');
app.use(eo.static(__dirname + '/public'));
app.use(el);
app.set('view engine', 'ejs');
app.use(router);
app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});