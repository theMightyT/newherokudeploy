import path from 'path';

module.exports.getMainRoute = (req, res) => {
	res.sendFile(path.join(__dirname, '../views/index.html'));
}

module.exports.getAnotherRoute = (req, res) => {
	res.render('home', { message : 'another route controller'});
}