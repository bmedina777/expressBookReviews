const express= require('express');
const myapp = express();
myapp.get("/employees", (req, res)=>{
  return res
  .status(401)
  .json({message:"Por favor inicie sesion para acceder a este recursos"});  
})
myapp.listen(5000,()=>{
    console.log('listening on port 5000');
});