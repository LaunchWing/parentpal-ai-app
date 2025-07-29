import { handleCreateProfile, handleGetProfile, handleUpdateProfile } from '../../functions/api/UserProfileHandlers';

export async function UserProfileManagementHandler(req: Request): Promise<Response> {
  try {
    const url = new URL(req.url);
    const { pathname, searchParams } = url;
    const method = req.method.toUpperCase();

    if (pathname.startsWith('/api/user/profile')) {
      switch (method) {
        case 'POST':
          return await handleCreateProfile(req);
        case 'GET':
          return await handleGetProfile(searchParams);
        case 'PUT':
          return await handleUpdateProfile(req);
        default:
          return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
      }
    }

    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error', details: error.message }), { status: 500 });
  }
}