import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

db.connect((error)=>{
    if(error){
        console.log("Error de conexion", error)
        db.end();
        throw error;
    }
    console.log("Conexion exitosa" , db.config.database)
})