import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let posts = []; // This array will store blog posts temporarily


app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

 app.get("/",(req,res)=>{
     res.render("index.ejs",{posts : posts});
 })

app.get("/new",(req,res)=>{
    res.render("new.ejs");
})

// app.post("/submit",(req,res)=>{
//     const newPost : {
//         title : req.body.blogTitle
//         content: req.body.blogContent
//     };
//     posts.push(newPost);
//     res.redirect()
// })


app.post("/submit", (req, res) => {
    const newPost = {                     //new object
        title: req.body.blogTitle,
        content: req.body.blogContent
    };
    posts.push(newPost); 
    res.redirect("/"); 
});

app.get("/post/:id",(req,res)=>{
    const postId = req.params.id;  // to get the post index from the url 
    const post = posts[postId] 
    res.render("post.ejs",{post:post});
})





app.listen(port,()=>{
    console.log(`running on ${port} successfully`);
})