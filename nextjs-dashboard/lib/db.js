import mysql from 'mysql2/promise';

let connection;

export const createConnection= async () => {
    if(!connection){
        connection= await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database:process.env.DATABASE_NAME  
        });
    }

    return connection;
};

export const query = async (sql, params) => {
    const conn = await createConnection();
    const [rows] = await conn.execute(sql, params);
    return rows;
  };