import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";



const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//Route for user login

const loginUser=async()=>{

    

}

//Route for user Register

const registerUser=async(req,res)=>{

    

try{
    const {name,email,password}=req.body;

    //checking user already exist or not 

    const exists=await userModel.findOne({email})
    if(exists){
        return res.json({success:false,message:"user already exists"})
    }
    //validating email format and strong format

    if(!validator.isEmail(email)){
        return  res.json({success:false,message:"Please enter a valid email"})

    }

    if(password.length<8){
        return  res.json({success:false,message:"Please enter a strong password"})

    }

    // hasing user password
    const salt =await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)


    const newUser=new userModel({
        name,
        email,
        password:hashedPassword
    })
    const user=await newUser.save()
    const token=createToken(user._id)

    res.json({success:true,token})


}catch(error){
    console.log(error);
    res.json({success:false,message:error.message})

}


}

//Route for admin login

const adminLogin=async(req,res)=>{

}

export { loginUser,registerUser,adminLogin}




// import validator from 'validator';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import userModel from "../models/userModel.js";

// // Function to create a token
// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// };

// // Route for user login
// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the user exists
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     // Verify password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ success: false, message: "Invalid credentials" });
//     }

//     // Create and return token
//     const token = createToken(user._id);
//     res.json({ success: true, token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Route for user registration
// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if the user already exists
//     const exists = await userModel.findOne({ email });
//     if (exists) {
//       return res.status(409).json({ success: false, message: "User already exists" });
//     }

//     // Validate email format
//     if (!validator.isEmail(email)) {
//       return res.status(400).json({ success: false, message: "Please enter a valid email" });
//     }

//     // Validate password strength
//     if (password.length < 8) {
//       return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const newUser = new userModel({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     const user = await newUser.save();

//     // Create and return token
//     const token = createToken(user._id);
//     res.status(201).json({ success: true, token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Route for admin login
// const adminLogin = async (req, res) => {
//   // Implement role-based authentication here
// };

// export { loginUser, registerUser, adminLogin };
