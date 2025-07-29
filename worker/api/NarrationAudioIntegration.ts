import { validateInput, generateAudioResponse } from '../../functions/api/helpers';

export async function NarrationAudioIntegrationHandler(req: Request): Promise<Response> {
  try {
    const { valid, errors } = validateInput(req);
    if (!valid) {
      return new Response(JSON.stringify({ errors }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const audioResponse = await generateAudioResponse(req);
    return new Response(JSON.stringify(audioResponse), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}