const User = require('../models/user');
//const {body, validationResult} = require('express-validator');
  
module.exports.formdata = async function(req, res)
{
    // const errors = validationResult(req);
    // if(!errors.isEmpty())
    // {
    //     return res.status(400).json({"error": errors.array()});
    // }
    try
    {
        let user = await User.findOne({email: req.body.email});
        if(!user)
        {
            user = await User.create({
                full_name: req.body.full_name,
                email: req.body.email,
                phone_no: req.body.phone_no,
                today_date: req.body.today_date
            });
            let newUser = await user.save();
            console.log('User is created');
            return res.status(200).json({"message": "You application form has been submitted"});
        }
        else
        {
            console.log('You have already filled with form this email id');
            return res.status(200).json({"message": "You have already filled form with this email id"});
        }
    }
    catch(err)
    {
        console.log('Error occured', err);
        return res.status(500).json({"error": "Error occured"});
    }
}
