const contacts = require('../models/contacts');
const Contact = require('../models/contacts');

exports.creaateContact = async (req, res, next) =>{
//    res.status(200).json({pass_string:req.params.pass_string})

if(req.params.pass_string)
    {
        console.log(req.params.pass_string)
        if (req.params.pass_string == 'perforce')
        {
            const newContact = new Contact({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone
            });

            try {
                const savedContact = await newContact.save();
                res.status(201).json(savedContact);
            } catch (error) {
                res.status(500).json(error);
            }
        }
        else
        res.status(401).json("You are NOT allowed to create contact")
    }
else
    res.status(400).json("Something went wrong! Contact the administrator")    






    /*
    if(req.params.pass_string)
    {
        if (req.params.pass_string == 'perforce')
        {
            res.status(201).json("You are allowed to create contact");
        }
        else
        res.status(401).json("You are NOT allowed to create contact")
    }
    else
    res.status(400).json("Something went wrong! Contact the administrator")
    */


}







/*

exports.isPresent = async (req, res, next) => {
    const token = req.headers['authorization'];
    const authToken = await AuthTokens.findOne({ token: token });
    console.log(authToken);
    if (authToken != null) {
        // res.status(204).json("Login First");
        next();
    } else {
        res.json("Login First");
    }
}


*/