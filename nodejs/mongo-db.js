const mongoose = require(`mongoose`);

mongoose.connect('mongodb://localhost:27017/mean-crud', { useNewUrlParser:true, useUnifiedTopology:true }, (err) => {
    if(!err)
        console.log('MongoDB connection successfully.');
    else
        console.log('Error in DB connnection: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
