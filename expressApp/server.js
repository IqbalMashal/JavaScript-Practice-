const express = require('express')


const app = express()

const PORT = process.env.PORT || 8080


function checkCredintionals(password, email){
    if(!password || !email) return false;
    return password.length > 8 && email.includes('@')
}

app.use(express.json());

app.get('/', (req,res)=>{
    return res.send("Hello World")
})


app.post('/login',(req,res)=>{
    try{
        const {email, password} = req.body
        console.log(`the user email is ${email} and the user password is ${password}`)

        let validCredintails =  checkCredintionals(password,email) // 

        if(validCredintails){
            return res.status(200).json({
                message: "Login successful",
                user: email
            })
        }else{
            return res.status(401).json({
                error: "Invalid email or password."
            })
        }
    }catch(e){
        console.error(e);
        res.status(500).json({ error: "Internal Server Error" });    }

})


app.listen(PORT, ()=>{
    console.log(`Express app running on port ${PORT}`)
})