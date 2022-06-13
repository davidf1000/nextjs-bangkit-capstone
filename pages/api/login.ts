import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { LoginResponse } from "./api.types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // axios post to login
  console.log("/API/LOGIN HANDLER");
  try {
    const resp: LoginResponse = await axios.post(
      "https://backend-capstone-h3lwczj22a-et.a.run.app/company/login",
      req.body
    );
    if (resp.status !== 200) {
      res.status(resp.status).json({msg: resp.data.msg});
      return;
    }
    res.status(200).json(resp.data);
  } catch (e: any) {
    console.log("ERROR with message", e.message);

    res.status(500).json({ msg: e.message });
  }
};

export default handler;
