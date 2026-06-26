import express from  'express'
import ProductController from './src/controllers/product.controller.js'
import EjsLayouts from 'express-ejs-layouts'
import validateRequest from './src/middlewares/validation.middleware.js'
import path from 'path'
import { uploadFile } from './src/middlewares/fileUpload.middleware.js'
import UserController from './src/controllers/user.controller.js'

const server = express()

//adding public folder
server.use(express.static('public'))

//parse form data
server.use(express.urlencoded({extended : true}))

//instanciates product controller
const pc = new ProductController()
const uc = new UserController()

//set up view engine
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),'src','views'))


//set up views
server.use(express.static('src/views'))

//ejs layout
server.use(EjsLayouts)

//settin routes 
server.get('/register',uc.getRegister)
server.get('/login',uc.getLogin)
server.get('/',pc.getProduct);
server.get('/new',pc.getProductForm)
server.get('/update-product/:id',pc.getUpdateProductView)
server.post('/delete-product/:id',pc.deleteProduct)
server.post('/update-product',pc.postUpdateproduct)
server.post('/register',uc.postRegister)

server.post('/',
     uploadFile.single('image'),
     validateRequest,
     pc.addNewProduct)

server.listen(3000,()=>console.log('start'))
