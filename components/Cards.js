// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.



function cardMaker (object){

    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline')
    headline.textContent = headline

    const author = document.createElement('div');
    author.classList.add('author')

    const img = document.createElement('div');
    img.classList.add('img-container')

    const image = document.querySelector('img-container');
    image.textContent = ('src', img)

    const span = document.createElement('span')
    span.textContent = span

    card.appendChild(headline);
    card.appendChild(author);
    card.appendChild(img);
    card.appendChild(span);

    return card
}

    const cards = document.querySelector('.cards-container');
    //cards.appendChild(cardMaker())

    axios.get('https://lambda-times-api.herokuapp.com/articles')
.then( response => {
    console.log(response.data.message);
    response.data.message.forEach( object => {
        cards.append(cardMaker(object))
    } )
})
.catch( error => {
    console.log(error)
})