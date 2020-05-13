const express =  require('express');
var router = express.Router();
const app = express();

const port  = 3000;

app.get('/',(req,res)=>res.send('Hello World'));
app.get('/login',(req,res)=>{
	let body  =  JSON.parse(req.body);
	res.send(body);
}
	);

app.listen(port,()=>console.log(`the port on which your app is listening is ${port}`));
