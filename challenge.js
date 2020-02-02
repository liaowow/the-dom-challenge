// 1. As a user, i should see the timer increment every second once the page has loaded
const counter = document.querySelector("#counter")
let i = 0
let likeCounter = {}

function increment() {
    i++
    counter.innerText = i
}

// function start() {
//     setInterval(increment, 1000)
// }

// start()

let startCount = setInterval(increment, 1000)
startCount

// 2. As a user, i can manually increment and decrement the counter as i like
const minusBtn = document.getElementById("-")
const plusBtn = document.getElementById("+")

minusBtn.addEventListener("click", e => i--)
plusBtn.addEventListener("click", e => i++)

// 3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
const ul = document.querySelector(".likes")

const likeBtn = document.getElementById("<3")

likeBtn.addEventListener("click", handleLike)

function handleLike() {
    // store & show current liked number
    const numLikes = document.createElement("li")
    ul.appendChild(numLikes)
    // store likeCounter
    if (!likeCounter[i]) {
        likeCounter[i] = 1
        numLikes.innerText = `You liked ${i}! This number has been liked 1 time.`
    } else {
        likeCounter[i] += 1
        numLikes.innerText = `You liked ${i}! This number has been liked ${likeCounter[i]} times.`
    }

}

// 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
const pauseBtn = document.querySelector("#pause")

pauseBtn.addEventListener("click", handlePause)

function handlePause() {
    // if pauseBtn text is "pause"...
    // ...(1) text turns into "resume"
    // ...(2) pause the game
    if (pauseBtn.innerText === "pause") {
        pauseBtn.innerText = "resume"
        minusBtn.disabled = true
        plusBtn.disabled = true
        likeBtn.disabled = true
        clearInterval(startCount)
    } else {
    // else...
    // ...(1) text turns into "pause"
    // ...(2) resume the game
        pauseBtn.innerText = "pause"
        minusBtn.disabled = false
        plusBtn.disabled = false
        likeBtn.disabled = false
        startCount = setInterval(increment, 1000)
        startCount
    }

}

// 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
const submitForm = document.querySelector("#comment-form")

submitForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    // always prevent the default action for submit events!
    event.preventDefault()
    // grab comments section
    const commentList = document.querySelector(".comments")
    // create individual <p> tag for each comment
    const comments = document.createElement("p")
    // get the form input, assign it as <p> tag content
    comments.innerText = event.target.input.value
    // add comments to comments section
    commentList.appendChild(comments)
    // reset input field to blank
    event.target.reset()
}