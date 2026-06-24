import * as path from 'path'
import ProductModel from '../models/product.model.js'

export default class ProductController
{
 getProduct(req,res)
 {
   console.log(ProductModel.get())
    console.log(path.resolve())
    return res.sendFile(path.join(path.resolve(),'src','views','products.html'))
 }

}
