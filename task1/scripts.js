// function to convert rows into column
function rowtocol(valData) {

    var res = [];

    valData.forEach(function(v) {
        v.split('').forEach(function(v1, i) {
            res[i] = (res[i] || '') + v1;
        })
    });
    return res;
}