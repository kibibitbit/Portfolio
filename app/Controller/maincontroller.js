async function index(req,res){
    try {
        res.render('index');
    }catch (e) {
        console.log(e)
    }
}
async function error(req,res){
    try {
        res.render('Error');
    }catch (e){
        console.log(e)
    }
}

module.exports = {
    index,
    error
}