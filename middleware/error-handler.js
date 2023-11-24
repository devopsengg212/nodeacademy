const {constants} = require('../constants')


const errorHandler = (err,req,res,next) =>{

const statusCode = res.statusCode ? res.statusCode : 500

switch(statusCode){
    case constants.VALIDATION_ERROR:
        res.json({title:'VALIDATION ERROR ',msg:err.message})
        
        break;
    case constants.FORBIDDEN:
        res.json({title:'FORBIDDEN ERROR ',msg:err.message})
        
        break;
    case constants.UNAUTHORIZED:
        res.json({title:'UNAUTHORIZED ERROR ',msg:err.message})
        
        break;
    case constants.NOT_FOUND:
        res.json({title:'NOT FOUND ERROR ',msg:err.message})
        
        break;
    case constants.SERVER_ERROR:
        res.json({title:'SERVER ERROR ',msg:err.message})
        
        break;
    default:
        res.json({title:'NO ERROR ',msg:err.message,stacktrace:err.stack})
        
}



}

module.exports = errorHandler