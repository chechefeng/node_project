const db = require("./db")
function select(res) {
    return new Promise((resolve, reject) => {
        // fetch(fullurl, transParamsed).then((response) => {
        //     return response.json()
        // }).then((data) => {
        //     resolve(data)
        // }).catch((err) => {
        //     // alert(err)
        //     reject(err)
        // })
        db.query(`select * from grade${res}`, function (err, data) {
            if(!err){
                resolve(data)
            }else {
                reject(err)
            }

        });
    })
}
function insert(req) {
    return new Promise((resolve, reject) => {

        console.log("sql==insert===",req)
        console.log(...Object.keys(req.body))

     // let ofv = ...Object.keys(req.body).join(",")
        db.query(`INSERT INTO grade${req.body.grade}() VALUES ("${studentId}","${name}","${classes}","${age}",${tel},"${address}",${tuition},"${headmaster}",${sex})`, function (err, data) {
            if(!err){
                resolve(data)
            }else {
                reject(err)
            }

        });
    })
}

module.exports = {
    select,
    insert
}
