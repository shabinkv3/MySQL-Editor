const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/',(req,res)=>{
        Alien.find()
        .then(aliens=>res.json(aliens))
        .catch(err=>res.send('Error: '+err))
})

router.get('/:id',(req,res)=>{
    Alien.findById(req.params.id)
    .then(alien=>res.json(alien))
    .catch(err=>res.send('Error: '+err))
})


router.patch('/:id',async (req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id)
        alien.sub=req.body.sub
        const al=await alien.save()
        res.json(al)
    }
    catch(err){
        res.send('Error: '+err)
    }
})


router.delete('/:id',(req,res)=>{
    Alien.findByIdAndRemove(req.params.id)
    .then(data=>res.json(data))
    .catch(err=>res.send(err))
})

router.post('/',async (req,res)=>{
    const alien=new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const al= await alien.save()
        res.json(al)
    }
    catch(err){
        res.send('Error: '+err)
    }
})

module.exports = router