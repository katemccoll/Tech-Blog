const updateButton = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    const blogId = window.location.pathname.split('/').pop();


    if (title && content) {
        const response = await fetch('/api/blogs/' + blogId,  {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update blog');
        }
    }
};

const deleteButton = async () => {

    const blogId = window.location.pathname.split('/').pop();
    const response = await fetch('/api/blogs/' + blogId, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete blog');
    }
};

document
    .querySelector('#update-blog')
    .addEventListener('click', updateButton);

document
    .querySelector('#delete-blog')
    .addEventListener('click', deleteButton);
