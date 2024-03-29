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
]

const mainEl = document.querySelector("main")

function renderPosts() {
    for(let i=0; i< posts.length; i++) {

        let sectionEl = document.createElement("section")
        sectionEl.className = "container"

        
        sectionEl.innerHTML = 
            `<img src=${posts[i].avatar} class="painter-logo-img">
             <p class="painter-name"><span>${posts[i].name}</span></p>
             <p class="painter-location">${posts[i].location}</p>
             <img src=${posts[i].post} class="painter-image">
             <div class="icons">
                <img src="./images/icon-heart.png" class="icon">
                <img src="./images/icon-comment.png" alt="" class="icon">
                <img src="./images/icon-dm.png" class="icon">
             </div>
             <p class="likes"><span>${posts[i].likes} likes</span></p>
             <p class="comment"><span>${posts[i].username}</span> ${posts[i].comment}</p>`

        mainEl.append(sectionEl)
    }
}

renderPosts()