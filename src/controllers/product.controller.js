import * as path from 'path'
import ProductModel from '../models/product.model.js'

export default class ProductController
{
 getProduct(req,res)
 {
    const products = ProductModel.get()
    console.log(path.resolve())
    res.render("products", { products })
 }

}
