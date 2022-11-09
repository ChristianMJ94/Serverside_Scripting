const dbh = require("../datasource/mysqldata");

exports.getAll = () => {
        return new Promise((success, failure) => {
            dbh.getAll()
            .then(data => {
                success(data);
                //console.log(data);
            })
            .catch( err => {
                console.log(err);
                failure(err);
        });
    });
}

exports.getById = id => {
    return new Promise((success, failure) => {
        dbh.getById(id)
        .then(data => {
            success(data);
            //console.log(data);
        })
        .catch( err => {
            console.log(err);
            failure(err);
    });
});
}