import jwt from "jsonwebtoken"

const auth = (req,res,next) =>{
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    }

    try{
        jwt.verify(token, process.env.SECRET_KEY)
        next();
    }catch(error){
        res.json({success: false, message: "Invalid token"})
    }
}

export default auth;