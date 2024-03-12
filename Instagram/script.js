const posts = [
    {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
    },
    {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
    },
    {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
    }
  ];

  const mainContainer = document.getElementById('main-container');

  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${post.avatar}" class="van-img">
      <div class="info">
        <h4>${post.name}</h4>
        <h5>${post.location}</h5>
      </div>
      <div>
        <img src="${post.post}" class="van-gough">
      </div>
      <div class="main-icons">
        <img src="icon-heart.png" class="icons-heart">
        <img src="icon-comment.png" class="icons-comm">
        <img src="icon-dm.png" class="icons-msg">
      </div>
      <div>
        <p class="nums">${post.likes} likes</p>
        <p class="mgs"><span>${post.username}</span> ${post.comment}</p>
      </div>
    `;
    mainContainer.appendChild(card);
  });