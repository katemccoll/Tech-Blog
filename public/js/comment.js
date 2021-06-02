const newComment = async (event) => {
    event.preventDefault();

    const blogId = window.location.pathname.split('/').pop();
    const commentContent = document.querySelector('#comment-content').value.trim();

    if (commentContent) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ 'blog_id': blogId, 'comment_content': commentContent }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to new comment');
        }
    }
};

document
    .querySelector('#comment-form')
    .addEventListener('submit', newComment);
