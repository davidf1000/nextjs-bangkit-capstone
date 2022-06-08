import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'
import cookie from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const resp:Response = await axios.post("https://backend-capstone-h3lwczj22a-et.a.run.app/company/register",req.body)
    if (resp.status !== 201) {
      console.log("Error Login")
      return
    }
  res.status(201).json(resp.data);
  }
  catch(e : Error | AxiosError){
    console.log("ERROR with message", e.message);
    
    res.status(500).json({ error: e.message })
  }

  }

interface Data {
  error: Boolean;
  msg?: String;
  status?: String;
}
interface Response{
  status: Number;
  statusText: String;
  data: Data;
}

export default handler;