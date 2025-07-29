interface UserProfile {
  name: string;
  interests: string[];
}

export async function handleCreateProfile(req: Request): Promise<Response> {
  try {
    const data: UserProfile = await req.json();
    if (!data.name || !Array.isArray(data.interests)) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
    }
    // Assume we save the data to a database here
    return new Response(JSON.stringify({ message: 'Profile created successfully' }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Bad request', details: error.message }), { status: 400 });
  }
}

export async function handleGetProfile(searchParams: URLSearchParams): Promise<Response> {
  try {
    const name = searchParams.get('name');
    if (!name) {
      return new Response(JSON.stringify({ error: 'Name query parameter is required' }), { status: 400 });
    }
    // Assume we retrieve the profile from a database
    const profile: UserProfile = { name, interests: ['exampleInterest'] };
    return new Response(JSON.stringify(profile), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error', details: error.message }), { status: 500 });
  }
}

export async function handleUpdateProfile(req: Request): Promise<Response> {
  try {
    const data: UserProfile = await req.json();
    if (!data.name || !Array.isArray(data.interests)) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
    }
    // Assume we update the profile in a database here
    return new Response(JSON.stringify({ message: 'Profile updated successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Bad request', details: error.message }), { status: 400 });
  }
}