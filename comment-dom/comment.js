// step 1:
document.getElementById('submit-comment').addEventListener('click', function(){

    const commentBox = document.getElementById('new-comment');
    console.log(commentBox.value);

    const newComment = document.createElement('h2');
    newComment.innerText = commentBox.value;

    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    commentBox.value = "";
})

