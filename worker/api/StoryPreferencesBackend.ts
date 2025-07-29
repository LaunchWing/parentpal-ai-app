export async function StoryPreferencesBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const requestBody = await req.json();
    const validationError = validateStoryPreferencesInput(requestBody);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const { childName, interests, genre } = requestBody;
    // Here you would typically call your AI service to generate a story
    // For this mockup, we'll return a dummy story
    const story = `Once upon a time, there was a child named ${childName} who loved ${interests.join(', ')}. One day, they embarked on a ${genre} adventure.`;

    return new Response(JSON.stringify({ story }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

interface StoryPreferencesInput {
  childName: string;
  interests: string[];
  genre: string;
}

function validateStoryPreferencesInput(input: any): string | null {
  if (!input || typeof input !== 'object') {
    return 'Invalid input data';
  }
  const { childName, interests, genre } = input;
  if (typeof childName !== 'string' || childName.trim() === '') {
    return 'Invalid or missing childName';
  }
  if (!Array.isArray(interests) || interests.length === 0 || interests.some(interest => typeof interest !== 'string')) {
    return 'Invalid or missing interests';
  }
  if (typeof genre !== 'string' || genre.trim() === '') {
    return 'Invalid or missing genre';
  }
  return null;
}
