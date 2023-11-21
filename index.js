const application = require('./application');

const http = require('http');

const hostname = "";	//10.129.0.4
const port = 3000;		//80

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})