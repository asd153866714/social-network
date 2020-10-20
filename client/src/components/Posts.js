import { post } from "../../../server/routes/auth";

let singlePost = (element) => {
    return (
        `

        `
    )
}

export let Posts = async () => {
    let res = await fetch(`http://localhost:3000/posts`, {
        method: 'GET',
    })
    let posts = await res.json()
    let mainDiv = document.querySelector('#main')
    posts.forEach(post => {
        mainDiv.
            post.author
        post.content
    });
}