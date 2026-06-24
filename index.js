import express from  'express'
import ProductController from './src/controllers/product.controller.js'

const server = express()

const pc = new ProductController()


server.use(express.static('src/views'))

server.get('/',pc.getProduct);

server.listen(3000,()=>console.log('start'))