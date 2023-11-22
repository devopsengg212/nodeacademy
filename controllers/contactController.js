//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = (req,res) =>{
    res.status(200).json({msg:'Get all Contacts'})
}

module.exports = {getContact}