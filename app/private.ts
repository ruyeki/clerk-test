import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';
import { clerkClient } from "@clerk/nextjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Obtain the request body from the incoming request
      const { stripeId, userId } = await req.body;

      // Update user metadata using Clerk client
      await clerkClient.users.updateUserMetadata(userId, {
        unsafeMetadata: {
          "birthday": "11-30-1969"
        }
      });

      // Return a JSON response indicating success
      res.json({ success: true });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Return a 405 Method Not Allowed error if the request method is not POST
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
