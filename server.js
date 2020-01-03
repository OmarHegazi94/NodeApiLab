let express=require("express"),
    mongoose=require("mongoose"),
    path=require("path"),
    studentRouter=require("./Routes/studentRouter"),
    departmentRouter=require("./Routes/departmentRouter"),
    cors=require("cors");

//open server
let server=express();

mongoose.connect("mongodb://localhost:27017/apiDB",{useUnifiedTopology: true, useNewUrlParser: true})
        .then(()=>{
            console.log("DB Connected ...")
        })
        .catch((error)=>{
            console.log(error);
        })

//setting 
server.use(express.json());
server.use(express.urlencoded({extended:false}));
server.use(cors());

///Routing 
server.use(studentRouter);
server.use(departmentRouter);

//last MW
server.use((request,response,next)=>{
    response.send("WELOCME to API website ....")
});

//Error MW
server.use((error,request,response,next)=>{
    response.send(error.errmsg+"");
});

//listen
let port=process.env.port||8085;
server.listen(port,()=>{
    console.log("I am Listening ...........");
});
