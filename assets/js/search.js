function searchPosts() {
    let input = document.getElementById("search-box").value.toLowerCase();
    let posts = document.querySelectorAll("#post-list li");

    posts.forEach(post => {
        let title = post.querySelector(".post-title").innerText.toLowerCase();
        let content = post.querySelector(".post-content").innerText.toLowerCase();

        if (title.includes(input) || content.includes(input)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}
