import express from  'express'
import ProductController from './src/controllers/product.controller.js'
import path from 'path'

const server = express()

const pc = new ProductController()


//set up view engine
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),'src','views'))

server.use(express.static('src/views'))

server.get('/',pc.getProduct);

server.listen(3000,()=>console.log('start'))