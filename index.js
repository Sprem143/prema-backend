const express=require('express');
const app= express();
const cors= require('cors')
const PORT= process.env.PORT || 7000;
const db=require('./config/db');
const router= require('./Router')

db();
app.use(express.json());
app.use(cors({
    origin:true,
    methods:['PUT','PATCH','DELETE','GET','POST'],
    Credential:true
}))


app.use('/', router);

app.listen(PORT, (err)=>{
    err? console.log(err) : console.log(`Server is live on PORT ${PORT}`)
})