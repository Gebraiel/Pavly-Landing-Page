let ps = document.querySelectorAll('.typing-words p');
let words = [];
let span = document.querySelector('.dynamic-typing')
ps.forEach((word)=>{
    words.push(word.innerHTML);
})
let i = 0;
setInterval(()=> {
    let word = words[i++];
    span.innerHTML = word;
    if(i === words.length)
        i = 0;
} , 3000)
