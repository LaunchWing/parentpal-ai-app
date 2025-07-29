
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
