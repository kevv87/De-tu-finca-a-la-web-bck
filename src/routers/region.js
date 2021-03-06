const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const auth = require('../middleware/auth')
const utmObj = require('utm-latlng')
const utm = new utmObj()
const { sendWelcomeEmail, sendCancelationEmail } = require('../emails/account')
const router = new express.Router()
const Region = require('../models/region')


router.post('/region',async(req,res)=>{
  const region = new Region(req.body)
  try{
    await region.save()
    res.status(201).send(region)
  }catch(e){
    console.log(e)
    res.status(400).send(e)
  }
})


router.get('/region', async(req,res)=>{
  const regiones = await Region.find({})
  try{
    res.status(200).send(regiones)
  }catch(e){
    res.status(500).send()
  }
})


module.exports = router
