var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){

    // GET Requests
    // Shows json data on the page

    app.get('/api/friends', function(req,res){
        res.json(friendsData);
    });

    // POST Requests
    // Handles data after submit form

    app.post('/api/friends', function(req,res){
        friendsData.push(req.body);
    });
}