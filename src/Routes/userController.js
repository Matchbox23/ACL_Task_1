// #Task route solution
const express = require('express');
const router = express.Router();
const Model = require('../Models/User');
module.exports = router;

//Post
router.post('/trypost', (req, res) => {
    const data = new Model({
        Name: 'Yousef Korayem',
        Age: '100',
        StudentId: '49-5052',
        Job: 'Paladin',
        PhoneNumber: '01009000223',
        MartialStatus: 'Divorced Repeatedly',
        LivesIn: 'Planet Mars',
        BornIn: 'Planet Earth',
        Email: 'yousef.korayem@student.guc.edu.eg',

    })

    data.save();
    console.log(data);
    res.status(200).json(data);
})

router.post('/trypostdynamic', (req, res) => {
    const data = new Model({
        Name: req.body.Name,
        Age: req.body.Age
    })

    data.save();
    console.log(data);
    res.status(200).json(data);
})