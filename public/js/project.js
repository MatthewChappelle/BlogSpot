const commentFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#comment-body').value.trim();

    if (name) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ name, comment }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            location.reload();
        } else {
            alert(response.statusText);
        }
    };
};
document
    .querySelector('.submit-comment')
    .addEventListener('submit', commentFormHandler);