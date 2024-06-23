export const auth = (req, res, next)=>{

    if(req.session.userEmail){
        next();
    }
    else{
        res.status(404).render('errorPage');
    }
}