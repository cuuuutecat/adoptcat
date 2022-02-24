const express = require("express"); // express 패키지 import
const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname,'index.html');

});


//포트 설정
app.listen(3000, () =>  {
    console.log('http://127.0.0.1:3000/ app listening on port 3000!');
});