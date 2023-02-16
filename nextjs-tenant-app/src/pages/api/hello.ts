// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { Cookie } from 'app/page';
// import { Console } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const respons = await fetch('http://localhost:8000/items');
  const data = await respons.json();
  if (req.method === 'POST') {
    let test = '';
    data.map((item: any) => {
      if (item.name === req.body) {
        test = req.body;
        res.status(200).json({ name: `${test}` });
      }
    });
    // res.status(404);
  }
}
