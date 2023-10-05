const express=require('express');
const cors=require('cors');
const con=require('./config/db');
const aboutRoutes=require('./routes/about');
const experienceRoutes=require('./routes/experience');
const skillsRoutes=require('./routes/skill');
const adminRoutes=require("./routes/admin");
const projectRoutes=require("./routes/project");
const cvRoutes=require("./routes/cv")
const Port=5000;
const app=express();
app.use(express.json());
app.use(cors());
app.get("/", (req,res) => { res.setHeader("Access.Control.Allow.Credentials","true"); 
res.send("API is running..");});
con.Connectionf();
app.listen(Port,()=>{
    console.log(`your are listening to port :${Port}`);
});
app.use('/api/about',aboutRoutes);
app.use('/api/experiences',experienceRoutes);
app.use('/api/skills',skillsRoutes);
app.use('/api/admin',adminRoutes);
app.use('/api/projects',projectRoutes);
app.use('/api/cv',cvRoutes);
