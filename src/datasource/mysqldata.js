const mysql = require("mysql2");
const config = require("../config/dbconfig.json");

let pool;
try {
    pool = mysql.createPool(config);    
} catch (error) {
    console.log(error);
}

exports.getAll = () => {
    return new Promise((success, failure) => {
        const sql = "select * from tblapi order by fullname";
        pool.execute(sql, (error, rows) => {
            if (error) {
                failure(error);
                return;
            }
            success(rows);
        });
    });
}

exports.getById = id => {
    return new Promise((success, failure) => {
        const sql = "select * from tblapi where id = ? order by fullname";
        pool.execute(sql, [id], (error, rows) => {
            if (error) {
                failure(error);
                return;
            }
            success(rows);
        });
    });
}