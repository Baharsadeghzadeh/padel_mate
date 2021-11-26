var config = require('../config/dbconfig');
const sql = require('mssql');

async function getAll(table_name){
    try{
        let pool = await sql.connect(config);
        let all_data = await pool.request().query(`SELECT * FROM ${ table_name } WHERE [Deleted] = 0`);
        return all_data.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

async function getOneById(table_name, id){
    try{
        let pool = await sql.connect(config);
        let data = await pool.request()
        .input('Id', sql.Int, id)
        .query(`SELECT * FROM ${ table_name } WHERE [Id] = @Id`);
        return data.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getDataByUserId(table_name, user_id){
    try{
        let pool = await sql.connect(config);
        let data = await pool.request()
        .input('UserId', sql.Int, user_id)
        .query(`SELECT * FROM ${ table_name } WHERE [UserId] = @UserId`);
        return data.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

const getSqlDataType = (field_name, type_length) => {
    const field_lenght = field_name.length;
    return field_name.substring(field_lenght - type_length, field_lenght);
}

async function addOne(table_name, data){
    try{
        const fields = [];
        const values = [];
        let pool = await sql.connect(config);
        let insert = await pool.request();

        for (const [key, value] of Object.entries(data)) {
            const key_length = key.length;
            let data_type = '';
            
            if(key !== 'Id' && key !== 'Deleted'){
                if(getSqlDataType(key, 2) === 'Id' || getSqlDataType(key, 3) === 'Int'){
                    data_type = sql.Int;
                }
                else if(getSqlDataType(key, 3) === 'Bit'){
                    data_type = sql.Bit;
                }
                else if(getSqlDataType(key, 4) === 'Date'){
                    data_type = sql.Date;
                }
                else if(getSqlDataType(key, 4) === 'Time'){
                    data_type = sql.Time;
                }
                else{
                    data_type = sql.NVarChar;
                }
                
                fields.push(`[${key}]`);
                values.push("'" + value + "'");
                insert.input(`${key}`, data_type, value);
            }
          }

          insert.input("Deleted", sql.Bit, false);

          insert.query(`INSERT INTO ${table_name} (${fields.toString()}) VALUES(${values.toString()})`);
          return insert.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function updateOne(table_name, data){
    try{
        const fields_set = [];
        let pool = await sql.connect(config);
        let update = await pool.request();

        for (const [key, value] of Object.entries(data)) {
            if(key !== 'Id'){
                fields_set.push(`[${key}] = '${value}'`);
            }
          }
          update.query(`UPDATE ${table_name} SET ${fields_set.toString()} WHERE [Id] = ${data.Id}`);
          return update.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function deleteOneById(table_name, id){
    try{
        let pool = await sql.connect(config);
        let data = await pool.request()
        .input('Id', sql.Int, id)
        .query(`UPDATE ${ table_name } SET [Deleted] = 1 WHERE Id = @Id`);
        return data.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function executeSp(sp_name, data){
    try{
        let pool = await sql.connect(config);
        let sp = await pool.request();
        for (const dataumn of data) {
            sp.input(dataumn.name, datamn.data_type, dataumn.value);
        }
        sp.execute(sp_name);
    }
    catch(error){
        console.log(error);
    }
}

async function getSpData(sp_name, data){
    try{
        let pool = await sql.connect(config);
        let sp = await pool.request();
        for (const dataumn of data) {
            sp.input(dataumn.name, datamn.data_type, dataumn.value);
        }
        sp.execute(sp_name);
        return data.recordsets;
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {
    addOne: addOne,
    deleteOneById: deleteOneById,
    getAll: getAll,
    getOneById: getOneById,
    updateOne: updateOne,
    executeSp: executeSp,
    getSpData: getSpData,
    getDataByUserId: getDataByUserId,
}