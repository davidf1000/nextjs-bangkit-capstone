import axios from 'axios';
import { NextApiResponse } from 'next'
import cookie from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // axios post to login 
    const resp:Response = await axios.post("https://jsonplaceholder.typicode.com/posts",req.body)
    if (resp.status !== 201) {
      console.log("Error Login")
      res.status(500).json({ error: 'API Handler Error' })
      return
    }
    // Success, set httponly cookie 
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "TOKEN_HERE", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 24 * 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(201).json({...req.body,success:true});
  }

interface Data {
  error: Boolean;
  msg: String;
  loginResult: {
    token: String;
    userId: String;
  }
}
interface Response{
  status: Number;
  statusText: String;
  data: Data;
}

export default handler;