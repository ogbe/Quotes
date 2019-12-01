const quotes = [
    {
        name: "Stephen King",
        quote: "Get busy living or get busy dying."
    },
    {
        name: "John F.Kennedy",
        quote: "Those who dare to fail miserably can achieve greatly."
    },
    {
        name: "Abraham Lincoln",
        quote: "I'm a success today because I had a friend who believed \n\
        me and I didn't have the mind to let him down."
    },
    {
        name:"Leonardo Davinci",
        quote: `It had long since come to my attention that people of
        accomplishment rarely sat back and let things happen to them.
        they went out and happened to things.`
    },
    {
        name:"Leo Tolstoy",
        quote: "If you want to be happy, be."
    },
]

const newQuote = {
    name: "",
    quote: ""
}

const main = document.querySelector("#main")
const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");
const form = document.querySelector("#form");
const quoteInput = document.querySelector("#quoteInput");
const quoteAuthorInput = document.querySelector("#quoteAuthorInput");
const Btns = document.querySelector("#Btns");
const addBtn = document.querySelector("#addBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const addQuoteBtn = document.querySelector("#addQuoteBtn");

quoteBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    quoteAuthor.innerHTML = quotes[random].name;
});

addBtn.addEventListener("click", () => {
    main.style.display = "none";
    form.style.display = "table";
    Btns.style.display = "none";
    addQuoteBtn.style.display = "table";
});

deleteBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    quotes.splice(0, 1);
    console.log(quotes);
    
})

addQuoteBtn.addEventListener("click", () => {
    if (quoteAuthorInput.value === "" 
        || quoteInput.value === "") {
            alert("Invalid Quote or Author.")
        }

    else {
        newQuote.name = quoteAuthorInput.value;
        newQuote.quote = quoteInput.value;
        quotes.push(newQuote);
        main.style.display = "initial";
        form.style.display = "none";
        Btns.style.display = "initial";
        addQuoteBtn.style.display = "none";
        quoteAuthorInput.value = "";
        quoteInput.value = "";
    }
})