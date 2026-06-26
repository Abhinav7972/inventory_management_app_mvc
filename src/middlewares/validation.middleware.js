import { body,validationResult} from "express-validator";


const validateRequest = async (req,res,next)=>{
     //set the rules
     const rules = [
        body('name').notEmpty().withMessage('name is required'),
        body('price').isFloat({gt:0}).withMessage('price should be greater than 0'),
        body('image').custom((value,{req})=>{
         if(!req.file)
         {
          throw new Error('image is required')
         }
         return true;
        })
     ]
   
//run the rules
await Promise.all(rules.map((rule)=> rule.run(req)))

//check if  there are any  errors before running rules
var validationerror =  validationResult(req);


//if errors 
   if(!validationerror.isEmpty())
   {
    return res.render('new-products',{
      errorMessage:validationerror.array()[0].msg,
    })
   }
   next()
}

export default validateRequest;