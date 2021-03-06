const Conversation = require('../models/conversation')


exports.create = function (req, res, next) {
    let conversation = new Conversation({
        idUser: req.body.idUser,
        idProfessional: req.body.idProfessional,
        messages: req.body.messages,
        
    })

    conversation.save(err => {
        if(err){
            return next(err)
        }else{
            res.send(conversation._id)
        }
    })

}

exports.details = function (req,res,next){
    Conversation.findById(req.params.id, function(err, conversation){
        if(err){
            return next(err);
        }else{
            res.send(conversation)
        }
    })
}

exports.update = function (req,res,next){
    Conversation.findByIdAndUpdate(req.params.id, { $set: req.body} , function(err, conversation){
        if(err){
            return next(err);
        }else{
            res.send('Conversation Updated Succesfully')
        }
    })
}
exports.delete = function (req,res,next){
    Conversation.findByIdAndDelete(req.params.id, function(err, conversation){
        if(err){
            return next(err);
        }else{
            res.send('Conversation Deleted Succesfully')
        }
    })
}

exports.index = function (req,res,next){
    let conversations =Conversation.find({}, function(err, conversations){
        if(err){
            return next(err);
        }else{
            res.send(conversations)
        }
    })
}
