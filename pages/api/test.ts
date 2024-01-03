import * as https from 'https';
import { NextApiRequest, NextApiResponse } from 'next';

const url = 'https://api.line.me/v2/bot/message/push';
const myId = process.env.LINE_API_MY_ID;
const accessToken = process.env.LINE_API_ACCESS_TOKEN;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = JSON.stringify({
      to: myId,
      messages: [
        {
          type: 'text',
          text: req.body.events[0].source.groupId,
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
  } catch (err) {
    const data = JSON.stringify({
      to: myId,
      messages: [
        {
          type: 'text',
          text: 'エラー',
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
