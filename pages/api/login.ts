import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'
import cookie from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // axios post to login 
    const resp:Response = await axios.post("https://jsonplaceholder.typicode.com/posts",req.body)
    if (resp.status !== 201) {
      console.log("Error Login")
      res.status(500).json({ error: 'API Handler Error' })
      return
    }
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