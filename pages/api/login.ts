import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'
import cookie from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // axios post to login 
    console.log("/API/LOGIN HANDLER");
    try{
      const resp:Response = await axios.post("https://backend-capstone-h3lwczj22a-et.a.run.app/company/login",req.body)
      if (resp.status !== 200) {
        console.log("Error Login")
        return
      }
    res.status(200).json(resp.data);
    }
    catch(e : Error | AxiosError){
      console.log("ERROR with message", e.message);
      
      res.status(500).json({ error: e.message })
    }

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