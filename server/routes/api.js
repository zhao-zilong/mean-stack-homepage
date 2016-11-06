var Customer = require("../models/customer");
var Experience = require("../models/experience");
module.exports = function(router) {
    router.post('/customer', function(req, res) {
        console.log(req.body);
        var customer = new Customer();
        customer.firstname = req.body.firstname;
        customer.lastname = req.body.lastname;
        customer.phone = req.body.phone;
        if (req.body.address) {
            customer.address.street = req.body.address.street;
            customer.address.city = req.body.address.city;
            customer.address.region = req.body.address.region;
            customer.address.zip = req.body.address.zip;
        }
        customer.save(function(err, data) {
            if (err)
                throw err;
            res.json(data);
        });
    });


    router.get('/customer', function(req, res) {
        Customer.find({}, function(err, data) {
            res.json(data);
        })
    });

    router.delete('/customer', function(req, res) {
        Customer.remove({}, function(err) {
            res.json({
                result: err ? 'error' : 'ok'
            });
        })
    });

    router.get('/customer/:id', function(req, res) {
        Customer.findOne({
            _id: req.params.id
        }, function(err, data) {
            res.json(data);
        });
    });

    router.delete('/customer/:id', function(req, res) {
        Customer.remove({_id: req.params.id}, function(err) {
            res.json({
                result: err ? 'error' : 'ok'
            });
        })
    });

    router.post('/customer/:id', function(req, res) {
        Customer.findOne({_id: req.params.id}, function(err, data) {
            var customer = data;
            customer.firstname = req.body.firstname;
            customer.lastname = req.body.lastname;
            customer.phone = req.body.phone;
            if (req.body.address) {
                customer.address.street = req.body.address.street;
                customer.address.city = req.body.address.city;
                customer.address.region = req.body.address.region;
                customer.address.zip = req.body.address.zip;
            }
            customer.save(function(err, data) {
                if (err)
                    throw err;
                res.json(data);
            });
        });
    });








    router.post('/experience', function(req, res) {
        console.log(req.body);
        var experience = new Experience();
        experience.company = req.body.company;
        experience.title = req.body.title;
        experience.description = req.body.description;
        if (req.body.timePeriod) {
            experience.timePeriod.start = req.body.timePeriod.start;
            experience.timePeriod.end = req.body.timePeriod.end;
        }
        experience.save(function(err, data) {
            if (err)
                throw err;
            res.json(data);
        });
    });


    router.get('/experience', function(req, res) {
        Experience.find({}, function(err, data) {
            res.json(data);
        })
    });

    router.delete('/experience', function(req, res) {
        Experience.remove({}, function(err) {
            res.json({
                result: err ? 'error' : 'ok'
            });
        })
    });

    router.get('/experience/:id', function(req, res) {
        Experience.findOne({
            _id: req.params.id
        }, function(err, data) {
            res.json(data);
        });
    });

    router.delete('/experience/:id', function(req, res) {
        Experience.remove({_id: req.params.id}, function(err) {
            res.json({
                result: err ? 'error' : 'ok'
            });
        })
    });

    router.post('/experience/:id', function(req, res) {
        Experience.findOne({company: req.params.company}, function(err, data) {
            var experience = data;
            experience.company = req.body.company;
            experience.title = req.body.title;
            experience.description = req.body.description;
            if (req.body.timePeriod) {
                experience.timePeriod.start = req.body.timePeriod.start;
                experience.timePeriod.end = req.body.timePeriod.end;
            }
            experience.save(function(err, data) {
                if (err)
                    throw err;
                res.json(data);
            });
        });
    });
}
