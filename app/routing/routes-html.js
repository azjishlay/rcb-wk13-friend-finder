var path = require('path');

module.exports = function(app){

    // Link to quiz page
    app.get('/quiz', function(req,res){
        res.sendFile(path.join(__dirname +
            '/../public/survey.html'));
    });

    // Default link to home page
    app.use(function(req,res){
        res.sendFile(path.join(__dirname +
            '/../public/home.html'));
    });

};