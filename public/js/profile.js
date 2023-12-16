const newFormHandler = async (event) => {
  event.preventDefault();

  const blogPost = document.querySelector('#project-name').value.trim();
  const postContent = document.querySelector('#project-desc').value.trim();
  console.log(blogPost);
  console.log(postContent);

  if (blogPost && postContent) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ blogPost, postContent }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

// reworked entire delete button function. Delete button now deletes parent div based on current id. Only the delete button on the top div project worked beforehand.
const delButtonHandler = async (id) => {

  const response = await fetch(`/api/projects/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to delete project');
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
