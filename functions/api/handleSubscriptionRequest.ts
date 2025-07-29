interface SubscriptionRequest {
  userId: string;
  action: 'subscribe' | 'unsubscribe';
  planId?: string;
}

export async function handleSubscriptionRequest(req: Request): Promise<Response> {
  const contentType = req.headers.get('Content-Type') || '';
  if (!contentType.includes('application/json')) {
    return new Response(JSON.stringify({ error: 'Content-Type must be application/json' }), { status: 415, headers: { 'Content-Type': 'application/json' } });
  }

  const body: SubscriptionRequest = await req.json();
  if (!body.userId || !body.action) {
    return new Response(JSON.stringify({ error: 'Missing userId or action in request body' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  if (body.action === 'subscribe' && !body.planId) {
    return new Response(JSON.stringify({ error: 'Missing planId for subscription action' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  // Simulating subscription management logic
  let responseMessage;
  if (body.action === 'subscribe') {
    responseMessage = `User ${body.userId} subscribed to plan ${body.planId}`;
  } else {
    responseMessage = `User ${body.userId} unsubscribed`;
  }

  return new Response(JSON.stringify({ message: responseMessage }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}