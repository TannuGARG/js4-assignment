function RunCallback(a, b, cb) {
    return cb(a+b)
}
// function cb(res){
//     return res
// }

module.exports = RunCallback;
