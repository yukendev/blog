import * as https from 'https';

const url = 'https://api.line.me/v2/bot/message/push';
const myId = process.env.LINE_API_MY_ID;
const accessToken = process.env.LINE_API_ACCESS_TOKEN;

const handler = (req, res) => {
  const data = JSON.stringify({
    to: myId,
    messages: [
      {
        type: 'text',
        text: req.body,
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
};

export default handler;