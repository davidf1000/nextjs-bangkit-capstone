
import { getCookie } from 'cookies-next';
import { getCookies, setCookies, removeCookies } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";

interface PartnerResponse {
  status: number;
  data: {
    error: boolean;
    partner: {
      partnerId: string;
      partnerName: string;
      email: string;
      username: string;
      password: string;
      Vouchers?: any;
    };
  };
}

// Things to load first in dashboard
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // get Cookies 
    const {partnerId} = req.query
    // GET/user/:partnerid
    const config = {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    };
    
    try{
      const partnerResponse: PartnerResponse = await axios.get(
        ("https://backend-capstone-h3lwczj22a-et.a.run.app/partner/" + partnerId),
        config
      );
        res.status(200).json({ companyName: partnerResponse.data.partner.partnerName })
    }
    catch(e: Error | AxiosError){
      res.status(500).json({ msg:e.message })
    }

    }

export default handler;