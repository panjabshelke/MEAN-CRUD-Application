const express = require('express');
var router = express.Router();

var { User } = require('../models/user');

// localhost/user
router.get('/', (req, res) => {
	User.find((err, docs) => {
		if (!err) { res.send(docs); }
		else { console.log('Error in Retriving User details:' + JSON.stringify(err, undefined, 2)); }
	});
});

router.post('/', (req, res) => {
	var user = new User({
		name: req.body.name,
		email: req.body.email,
		mobileNo: req.body.mobileNo,
		address: req.body.address,
		pinCode: req.body.pinCode
	});
	user.save((err, doc)=> {
		if(!err) {
			res.send(doc);
		} else {
			console.log('Error in user save : ' + JSON.stringigy(err, undefined, 2));
		}
	});
});

module.exports = router;
