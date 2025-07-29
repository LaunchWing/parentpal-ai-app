export async function validateStoryRequest(req: Request): Promise<{ valid: boolean, error?: string }> {
  try {
    const data = await req.json();
    if (!data.childName || typeof data.childName !== 'string') {
      return { valid: false, error: 'Invalid or missing childName' };
    }
    if (!data.interests || !Array.isArray(data.interests)) {
      return { valid: false, error: 'Invalid or missing interests' };
    }
    if (!data.genre || typeof data.genre !== 'string') {
      return { valid: false, error: 'Invalid or missing genre' };
    }
    return { valid: true };
  } catch {
    return { valid: false, error: 'Malformed JSON' };
  }
}

export async function generateStory(req: Request): Promise<string> {
  const data = await req.json();
  const { childName, interests, genre } = data;
  // Placeholder for AI story generation logic
  return `Once upon a time, in a ${genre} world, there was a child named ${childName} who loved ${interests.join(', ')}.`;
}