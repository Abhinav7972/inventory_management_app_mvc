export const setLastVisit = (req,res,next) =>{

    //if a cookie is set than add a local variable with last visit time data

    if(req.cookies.lastvisit)
    {
        res.locals.lastvisit =  new Date(req.cookies.lastvisit).toLocaleString()    
    }
  res.cookie('lastvisit',new Date().toISOString(),{
   maxAge : 2*24*60*60*1000, //2 days
  });
  next();
};