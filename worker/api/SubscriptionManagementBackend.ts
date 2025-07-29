import { handleSubscriptionRequest } from '../../functions/api/handleSubscriptionRequest';

export async function SubscriptionManagementBackendHandler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Only POST requests are allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    return await handleSubscriptionRequest(req);
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}