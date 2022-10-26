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
        Job: 'Student',
        PhoneNumber: '01009000223',
        MartialStatus: 'Divorced Repeatedly',
        LivesIn: 'Cairo',
        BornIn: 'Cairo',
        Email: 'yousef.korayem@student.guc.edu.eg',

    })

    data.save();
    console.log(data);
    res.status(200).json(data);
})

//Get
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Put
router.put('/tryput/:id', async (req, res) => {
    var idOfObject = req.params.id;
    Model.findByIdAndUpdate(idOfObject, {Name: 'Chicken Burger'}, function(err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log("Updated : ", idOfObject);
        }
    })
    res.status(500).json({Name: 'Chicken Burger'});
})