const quoteText = document.querySelector(".quote")
const quoteBtn = document.querySelector("button")
const name = document.querySelector(".author .name")
const soundBtn = document.querySelector(".sound")
const copyBtn = document.querySelector(".copy")
const twitterBtn = document.querySelector(".twitter")


const randomQuote = () => {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote";
    fetch('https://api.quotable.io/random').then(res => res.json()).then(data => {
        console.log(data) 
        quoteText.innerText = data.content;
        name.innerText = data.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading")
    })
}
soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${name.innerText}`);
    speechSynthesis.speak(utterance)
})
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText)
})
twitterBtn.addEventListener('click', () => {
    alert('Sorry Twiter is not available now')
})
quoteBtn.addEventListener('click', randomQuote);