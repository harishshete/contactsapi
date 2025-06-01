const contacts = require('../models/contacts');
const Contact = require('../models/contacts');

//Create Contacts
exports.creaateContact = async (req, res, next) =>{
if(req.params.pass_string){
        if (req.params.pass_string == 'perforce')
        {
            const newContact = new Contact({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone
            });

            try {
                const savedContact = await newContact.save();
                if(savedContact)
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

}


// Get all the contacts
exports.getAllContacts = async (req,res) =>{
    if(req.params.pass_string){
        if (req.params.pass_string == 'perforce'){
            try {
                const allContacts = await Contact.find();
                if(allContacts)
                res.status(200).json(allContacts);
            } catch (error) {
                res.status(500).json(error);
            }
        }
        else
        res.status(401).json("You are NOT allowed to create contact")
    }
    else
    res.status(400).json("Something went wrong! Contact the administrator")
}



// Update Contact 
exports.updateContact = async (req,res)=>{
  //  const startTime = Date.now();
  // console.log(`[${Date.now() - startTime}ms] Starting to update in the database`);
        if(req.params.pass_string){
        if (req.params.pass_string == 'perforce'){
            const { id, name, email, phone } = req.body;
            console.log(id);
            try {
                const updatedContact = await Contact.findByIdAndUpdate(id,{$set: { name:name, email:email, phone:phone } },{ new: true });
                console.log("Printing the value of updatedContact\n"+updatedContact);
                res.status(200).json(updatedContact);
            } catch (error) {
                res.status(500).json("Could Not Update " + error)
            }
        }
        else
        res.status(401).json("You are NOT allowed to create contact")
    }
    else
    res.status(400).json("Something went wrong! Contact the administrator")
}


//Delete Contact
exports.deleteContact = async (req,res)=>{

        if(req.params.pass_string){
        if (req.params.pass_string == 'perforce'){
            try {
                const updatedContact = await Contact.findByIdAndDelete(req.body.id,{$set: req.body},{ new: true });
                if(updatedContact)
                 res.status(200).json(updatedContact);
            } catch (error) {
                res.status(500).json("Could Not Update " + error)
            }
        }
        else
        res.status(401).json("You are NOT allowed to create contact")
    }
    else
    res.status(400).json("Something went wrong! Contact the administrator")

}