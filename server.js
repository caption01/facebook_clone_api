const express       =   require('express');
const mysql         =   require('mysql2');
const bodyParser    =   require('body-parser');
const db            =   require('./models');
const cors          =   require('cors');
const User          =   require('./service/User')
const Post          =   require('./service/post')
const Comments      =   require('./service/Comments')
const PORT          =   3000;

const app = express();

app.use(bodyParser.json());
app.use(cors())

db.sequelize.sync({force: false}).then(() => {

    User(app, db)    
    Post(app, db)    
    Comments(app, db)
 
    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`)
    })
})