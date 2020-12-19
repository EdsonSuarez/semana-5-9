//const config = require('../secret/config');
const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const tokenServices = require('../services/token')



exports.login = async(req, res, next)=>{

    try{ 
        
        const user = await db.Usuario.findOne({where: {email: req.body.email}});
        if (user) {
            
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

            if (passwordIsValid) {
                const token = await tokenServices.encode(user);
                
                res.status(200).send({
                    tokenReturn: token,
                    user:user,
                    id: user.id,
                    name: user.nombre,
                    email: user.email,
                    auth: true
                })                
            }else{
                res.status(401).send({
                    auth: false,
                    tokenReturn:null,
                    reason: "Invalid Password"
                })
            }
        }else{
            res.status(404).send(
                'User Not Found.'
            )
        }
     } catch(err){
       res.status(500).json({
             err: 'Error en la conexion con el servidor =('
         })
         next(err);
     }
};

exports.list = async(req, res, next) =>{
    try {
        const user = await db.Usuario.findAll();
        res.status(200).json(user);
            
    } catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};

exports.add = async(req, res, next) =>{
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await db.Usuario.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);   
    }
};

exports.update = async(req, res, next) =>{
    try {
        const user = await db.Usuario.findOne({where: {email: req.body.email}});
        if(user){
            const user = await db.Usuario.update({name: req.body.name},
            {
            where: {
                email: req.body.email
            },

            });
            res.status(200).json(user);
        } else {
            res.status(404).send({ message: 'User not found.'});
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};

exports.activate = async(req, res, next) =>{
    try {
        const register = await db.Articulo.update({estado: 1 },
            {
            where: {
                id: req.body.id
            },
            });
            res.status(200).json(register);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }
};

exports.deactivate = async(req, res, next) =>{
    try {
        const register = await db.Articulo.update({estado: 0 },
            {
            where: {
                id: req.body.id
            },
            });
            res.status(200).json(register);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }
};