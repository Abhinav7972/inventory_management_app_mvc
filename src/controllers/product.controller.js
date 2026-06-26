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
  const{name,description,price,image} = req.body;
  const imageURL = 'images/'+req.file.filename;
   
   console.log(req.body)
    ProductModel.add(name,description,price,imageURL);
    const products = ProductModel.get()
  res.render("products",{products}) 
 }

 getUpdateProductView(req,res,next)
 {
   const id = req.params.id;
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


 postUpdateproduct(req,res,next)
 {
console.log(req.body)
  
    ProductModel.update(req.body)
    const products = ProductModel.get()
  res.render("products",{products}) 
 }

 deleteProduct(req,res)
 {
   const id = req.params.id;

const productFound = ProductModel.getByID(id);

   if(!productFound)
   {
    return res.status(401).send('product not found');
   }
   ProductModel.delete(id);
   let products =  ProductModel.get()
   res.render('products',{products})
 }
}
