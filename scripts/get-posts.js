fetch('content/posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = document.getElementById('posts')
    data.forEach(postData => {
      const postCard = document.createElement('div');
      const date = document.createElement('h3');
      const title = document.createElement('h3');
      const intro = document.createElement('div');
      const content = document.createElement('div');

      date.innerHTML = postData.date;
      title.innerHTML = postData.title;
      content.innerHTML = postData.content;
      intro.innerHTML = postData.intro;
      intro.classList.add('intro');

      postCard.appendChild(title);
      postCard.appendChild(date);
      postCard.appendChild(intro);
      postCard.appendChild(content);
      
      blogPosts.appendChild(postCard);
    });
  })