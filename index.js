import express from  'express'
import ProductController from './src/controllers/product.controller.js'
import EjsLayouts from 'express-ejs-layouts'
import validateRequest from './src/middlewares/validation.middleware.js'
import path from 'path'
import { uploadFile } from './src/middlewares/fileUpload.middleware.js'
import UserController from './src/controllers/user.controller.js'
import session from 'express-session'
import { auth } from './src/middlewares/auth.middleware.js'

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

//express session
server.use(session({
     secret:'secretKey',
     resave:false,
     saveUninitialized: false,
     cookie: {secure:false}
}))

//settin routes 
server.get('/register',uc.getRegister)
server.get('/login',uc.getLogin)
server.get('/logout',uc.logout)
server.get('/',auth, pc.getProduct);
server.get('/new',auth,pc.getProductForm)
server.get('/update-product/:id',auth,pc.getUpdateProductView)
server.post('/delete-product/:id',auth,pc.deleteProduct)
server.post('/update-product',auth,pc.postUpdateproduct)
server.post('/register',uc.postRegister)
server.post('/login',uc.postLogin)


server.post('/',auth,
     uploadFile.single('image'),
     validateRequest,
     pc.addNewProduct)

server.listen(3000,()=>console.log('start'))
