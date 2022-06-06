
import { getCookie } from 'cookies-next';
import { getCookies, setCookies, removeCookies } from 'cookies-next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // get Cookies 
    const token = getCookie("token");
    console.log("REQUEST HANDLER",req.cookies.token);
    
    res.status(200).json({ token: token || '' })
  }

export default handler;