/* GET homepage */
const index = (rq, res) => {
    res.render('index', {title: 'Express'});
};
module.export = {
    index
};