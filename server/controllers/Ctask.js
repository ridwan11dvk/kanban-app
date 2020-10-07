const {User,Task} = require('../models/index')

class CTask{
    static async listHandler(req,res,next){
        try{
            
          const data  = await Task.findAll({where:{
                UserId: +req.userData.id
            }})
            
                res.status(200).json(data)
           
        }
        catch(err){
            next(err)
        }

    }

    static addHandler(req,res,next){
        const input = {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            UserId: +req.userData.id
        }
        Task.create(input)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static async findHandler(req,res,next){
        try{
           const data = await Task.findByPk(+req.params.id)

           if(data){
               res.status(200).json(data)
           }
           else{
            next({name: 'Not Found', message: 'Data not found!'})
           }
        }
        catch(err){
            next(err)
        }
    }

    static async putHandler(req,res,next){
        try{
            const inputBody = {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                UserId: req.userData.id
            }
            const data = await Task.update(inputBody,{where:{
                id:+req.params.id
            }})

            if(!data[0]){
                next({name: 'Not Found', message: 'Data not found!'})
            }
            else{
                res.status(200).json(await Task.findByPk(+req.params.id))
            }
        }   
        catch(err){
            next(err)
        }
    }

    static async deleteHandler(req,res){
        try{
            const data = await Task.destroy({where:{id:+req.params.id}})

            if(data){
                res.status(200).json({message: "Task success to delete"})
            } 
            else{
                next({name: 'Not Found', message: 'Data not found!'})
            }

        }
        catch(err){
            next(err)
        }
    }

}

module.exports = CTask