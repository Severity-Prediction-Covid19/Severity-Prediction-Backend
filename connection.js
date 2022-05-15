var mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'newuser',
    password:'Exequieljr26',
    database:'analisiscovid_tes'
})

con.connect((err)=>{
    if(err) throw err
    console.log('MySQL is connected')
})

module.exports = con