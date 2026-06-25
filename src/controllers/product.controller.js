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


 getProductForm(req,res)
 {
   return res.render('new-products',{errorMessage:null})
 }
 
 addNewProduct(req,res)
 {
   console.log(req.body)
  
    ProductModel.add(req.body)
    const products = ProductModel.get()
  res.render("products",{products}) 
 }

 getUpdateProductView(req,res,next)
 {
   const {id} = req.query;
   const productFound = ProductModel.getByID(id);

   if(productFound)
   {
    res.render('update-product',{
      product: productFound,
      errorMessage:null,
    })
   }
   else
   {
    res.status(401).send('product not found');
   }
 }
}
