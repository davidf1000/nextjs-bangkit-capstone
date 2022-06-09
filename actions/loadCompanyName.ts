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

const loadCompanyName = async (partnerId: string): string => {
  // GET/user/:partnerid
  const config = {
    headers: { Authorization: `Bearer ${allCookies.token}` },
  };
  const partnerResponse: PartnerResponse = await axios.get(
    "https://backend-capstone-h3lwczj22a-et.a.run.app/partner/" + partnerId,
    config
  );
  return partnerResponse.data.partner.partnerName;
};

export default loadCompanyName;
