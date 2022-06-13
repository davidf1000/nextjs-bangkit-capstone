import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { PartnerResponse } from "../api.types";

// Things to load first in dashboard
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // get Cookies
  const { partnerId } = req.query;
  // GET/user/:partnerid
  const config = {
    headers: { Authorization: `Bearer ${req.cookies.token}` },
  };

  try {
    const partnerResponse: PartnerResponse = await axios.get(
      "https://backend-capstone-h3lwczj22a-et.a.run.app/partner/" + partnerId,
      config
    );
    res
      .status(200)
      .json({ companyName: partnerResponse.data.partner.partnerName });
  } catch (e: any) {
    res.status(500).json({ msg: e.message });
  }
};

export default handler;
