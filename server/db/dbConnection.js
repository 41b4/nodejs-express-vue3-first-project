const{createPool}=require('mysql2/promise')
const { devHOST, devUSER, devPASSWORD, devDATABASE }= require('./config')

const pool= createPool({
    host:devHOST,
    user:devUSER,
    password:devPASSWORD,
    port:3306,
    database:devDATABASE
})
module.exports=pool