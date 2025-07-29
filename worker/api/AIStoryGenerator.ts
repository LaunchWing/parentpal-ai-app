import { validateStoryRequest, generateStory } from '../../functions/api/storyUtils';

export async function AIStoryGeneratorHandler(req: Request): Promise<Response> {
  try {
    const { valid, error } = await validateStoryRequest(req);
    if (!valid) {
      return new Response(JSON.stringify({ error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const story = await generateStory(req);
    return new Response(JSON.stringify({ story }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}