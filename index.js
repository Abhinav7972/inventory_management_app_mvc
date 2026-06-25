import express from  'express'
import ProductController from './src/controllers/product.controller.js'
import EjsLayouts from 'express-ejs-layouts'
import validateRequest from './src/middlewares/validation.middleware.js'
import path from 'path'

const server = express()

//parse form data
server.use(express.urlencoded({extended : true}))

//instanciates product controller
const pc = new ProductController()


//set up view engine
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),'src','views'))


//set up views
server.use(express.static('src/views'))

//ejs layout
server.use(EjsLayouts)

//settin routes 
server.get('/',pc.getProduct);
server.get('/new',pc.getProductForm)
server.get('/update-product',pc.getUpdateProductView)
server.post('/',validateRequest,pc.addNewProduct)

server.listen(3000,()=>console.log('start'))
