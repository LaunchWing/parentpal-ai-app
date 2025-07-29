// Auto-generated entrypoint for Cloudflare Worker

import { StoryPreferencesBackendHandler } from './api/StoryPreferencesBackend';
import { AIStoryGeneratorHandler } from './api/AIStoryGenerator';
import { NarrationAudioIntegrationHandler } from './api/NarrationAudioIntegration';
import { SubscriptionManagementBackendHandler } from './api/SubscriptionManagementBackend';
import { UserProfileManagementHandler } from './api/UserProfileManagement';

const INDEX_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>ParentPal AI - Personalized Parenting, Powered by AI</title>
</head>
<body class="bg-blue-50 text-gray-800">
    <header class="bg-blue-600 p-4 flex justify-between items-center">
        <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-mZik6Ou36U1KpmpM583inNxH.png?st=2025-07-29T00%3A33%3A13Z&se=2025-07-29T02%3A33%3A13Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-28T15%3A16%3A36Z&ske=2025-07-29T15%3A16%3A36Z&sks=b&skv=2024-08-04&sig=hp8A12orTPHr1NCuV6IP2r%2Bszdlxm%2BxPGXqDlPAZ4V8%3D" alt="ParentPal AI Logo" class="h-10">
        <h1 class="text-white font-bold text-lg">ParentPal AI</h1>
    </header>
    <main class="max-w-2xl mx-auto mt-10 p-4">
        <section class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold text-blue-600 mb-4">Create a Personalized Story</h2>
            <form id="storyForm" class="space-y-4">
                <div>
                    <label for="childName" class="block text-sm font-medium text-gray-700">Child's Name</label>
                    <input type="text" id="childName" name="childName" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
                </div>
                <div>
                    <label for="interests" class="block text-sm font-medium text-gray-700">Child's Interests</label>
                    <input type="text" id="interests" name="interests" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
                </div>
                <div>
                    <label for="genre" class="block text-sm font-medium text-gray-700">Preferred Genre</label>
                    <select id="genre" name="genre" class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                        <option value="fantasy">Fantasy</option>
                        <option value="adventure">Adventure</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">Generate Story</button>
            </form>
        </section>
        <section id="storyOutput" class="mt-8 hidden bg-green-50 p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold text-green-600 mb-4">Your Story</h2>
            <p id="storyText" class="text-gray-700"></p>
        </section>
    </main>
    <footer class="bg-blue-600 p-4 mt-10 text-center text-white">
        <p>&copy; 2023 ParentPal AI. All rights reserved.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
`;
const STYLE_CSS = ``;
const SCRIPT_JS = `
document.getElementById('storyForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const childName = document.getElementById('childName').value;
    const interests = document.getElementById('interests').value;
    const genre = document.getElementById('genre').value;

    const response = await fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            childName,
            interests,
            genre
        })
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById('storyText').textContent = data.story;
        document.getElementById('storyOutput').classList.remove('hidden');
    } else {
        alert('Failed to generate story. Please try again.');
    }
});
`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    if (path === '/api/StoryPreferencesBackend') return StoryPreferencesBackendHandler(request);
    if (path === '/api/AIStoryGenerator') return AIStoryGeneratorHandler(request);
    if (path === '/api/NarrationAudioIntegration') return NarrationAudioIntegrationHandler(request);
    if (path === '/api/SubscriptionManagementBackend') return SubscriptionManagementBackendHandler(request);
    if (path === '/api/UserProfileManagement') return UserProfileManagementHandler(request);
    return new Response('Not found', { status: 404 });
  }
};
