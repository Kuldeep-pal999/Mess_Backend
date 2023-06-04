import User from '../model/User.js';
 import bcrypt from 'bcryptjs';
 import jwt from'jsonwebtoken';
  export const getAllUser = async(req , res, next)=>{

    let user;

    try{
        user = await User.find();
    }catch(err){
        console.log(err);
    }

    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    
    return res.status(200).json({user});
};

export  const signup = async(req,res,next) =>{
  try{
    const{name,email,password} = req.body;
    let existingUser; 
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
        name,
        email,
       password: hashedPassword,
       

  });
  await user.save();
  return res.status(201).json({user});
  }catch(err){
    return res.status(400).json({message:"this user is already exist"});
  }
  
 
  //console.log("yes  yes ");
 
};

export const login = async(req,res,next) =>{
    const{email,password} = req.body;
    let existingUser;
  try{
      existingUser = await User.findOne({email});
      if(!existingUser){
        return res.status(404).json({message:"user not found with this email please signup "});
     }
     const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
   
     if(!isPasswordCorrect){
       return  res.status(400).json({message:"Incorrect password"});
     }
      // Generate a JWT token
      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      res.status(200).json({message:"login Successfully", token });
  }
   
  
   catch(err){
    console.error('Failed to authenticate user', err);
    return  res.status(500).json({ error: 'Internal server error' });
  }
 // return  res.status(200).json({message:"Login Successfuly"});
};

export const protectedRoute = (req, res) => {
  return  res.json({ message: 'Protected route accessed successfully' });
};