const express = require('express');
const app = express();
const port = 3000;
app.get('/temperature/:location_code', function(req, res){
    const varlocation = req.params.location_code;
    weather.current(locarion, function(err, temp_f){
        //...
    })
})
let server = app.listen(port, function(){
    console.log(`listening on url http://localhost:${port}`);
});