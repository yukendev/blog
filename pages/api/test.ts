import * as https from 'https';
import { NextApiRequest, NextApiResponse } from 'next';

const url = 'https://api.line.me/v2/bot/message/push';
const myId = process.env.LINE_API_MY_ID;
const accessToken = process.env.LINE_API_ACCESS_TOKEN;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  let reqStr;
  let resStr;

  try {

    reqStr = req.toString();
    resStr = res.toString();

    console.log('ログです', req.body)

    const data = JSON.stringify({
      to: myId,
      messages: [
        {
          type: 'text',
          text: reqStr,
        },
        {
          type: 'text',
          text: resStr,
        },
      ],
    });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const request = https.request(url, options);
    request.write(data);
    request.end();
  }
  catch (err) {
    const data = JSON.stringify({
      to: myId,
      messages: [
        {
          type: 'text',
          text: err.toString(),
        },
      ],
    });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const request = https.request(url, options);
    request.write(data);
    request.end();
  }
  
};

export default handler;