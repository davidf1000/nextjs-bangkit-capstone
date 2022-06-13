import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { RegisterResponse } from "./api.types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const resp: RegisterResponse = await axios.post(
      "https://backend-capstone-h3lwczj22a-et.a.run.app/company/register",
      req.body
    );
    if (resp.status !== 201) {
      res.status(resp.status).json({msg: resp.data.msg});
      return;
    }
    res.status(201).json(resp.data);
  } catch (e: any) {
    res.status(500).json({ msg: e.message });
  }
};

export default handler;
