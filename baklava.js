fs = require('fs');

module.exports = function (req, res, next) {
    var img = fs.readFileSync('./baklava1.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
}
