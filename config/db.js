// DB connection goes here
const dotenv =require("dotenv");
const mongoose =require("mongoose");

dotenv.config();



const uri = process.env.MONGO_URL;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect MongoDB Atlas using mongoose connect method
const conn = mongoose.connection;
conn.openUri(uri, options).then(() => {
    console.log("Database connection established!");
    },
    err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    }
);
module.exports = conn

// const connectDB = async () => {
//   try {
//     console.log(process.env.MONGODB_URL)
//     await mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true });
//     console.log("DB Connected");
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports=connectDB;
