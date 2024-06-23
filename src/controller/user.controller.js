import UserModel from "../models/user.model.js";
import JobModels from "../models/jobs.model.js";
export default class UserController{

    getRegister(req, res){

        res.render('register');
    }

    getLogin(req, res){
        res.render('login');
    }

    postRegister(req, res){
        console.log(req.body);
        UserModel.addUser(req.body);
        res.redirect('/login');
    }
   
    postLogin(req, res){
    const user = UserModel.authenticateUser(req.body);
    if(!user){
      return res.send({success:false, Message:'login failed'});
    }
    req.session.userEmail = req.body.email;
    var users = UserModel.get();
    let job = JobModels.getJobs();
    res.render('jobs', {jobs : job, userEmail: req.session.userEmail});
  }

  logout(req, res){
    req.session.destroy((err)=>{
      if(err){
        console.log(err);
      }
      else{
        res.redirect('/login');
      }
    });
  }

}