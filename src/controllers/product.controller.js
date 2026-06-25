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
   //validate data
   const{name,price,image} = req.body;
   let errors=[];
   if(!name ||name.trim()=='')
   {
    errors.push('Name is required')
   }
   if(!price || parseFloat(price)<0)
   {
    errors.push('price must be positive')
   }
  
   try
   {
     const validURL = new URL(image);
   }
   catch(err)
   {
   errors.push('invalid URL');
   }

   if(errors.length>0)
   {
    return res.render('new-products',{
      errorMessage:errors[0],
    })
   }

    ProductModel.add(req.body)
    const products = ProductModel.get()
  res.render("products",{products}) 
 }
}
