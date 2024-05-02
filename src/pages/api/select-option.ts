import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        res.status(200).json({ options: { 'key1': 'Option 1', 'key2': 'Option 2', 'key3': 'Option 3' } });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};


export default handler;