const validateRequest = (req,res,next)=>{
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
   next()
}

export default validateRequest;