const mySql = require("mysql");
const dbInfo = 
{
    host: "localhost",
    user: "admin999",
    password: "djemals999",
    database: "local",
}

const pool = mySql.createPool(dbInfo);

module.exports = (callback)=>{
    pool.getConnection( (err,conn) => {
        if(!err){
            callback(conn);
        }
    });
}