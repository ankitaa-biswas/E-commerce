import mongoose from "mongoose";


const connectDB= async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DB connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)

}



export default connectDB;

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("DB connected");
//     } catch (error) {
//         console.error("DB connection failed:", error.message);
//         process.exit(1); // Exit the application if DB connection fails
//     }
// };
