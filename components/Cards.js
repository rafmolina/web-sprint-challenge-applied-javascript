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
    card.textContent =  object.headline

    const author = document.createElement('div');
    author.classList.add('author')

    const img = document.createElement('div');
    img.classList.add('img-container')

    const image = document.createElement('img');
    image.src = object.authorPhoto

    const span = document.createElement('span')
    span.textContent = object.authorName

    // span.addEventListener('click', () => {
    //     card.classList.toggle('selected')

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(img);
    img.appendChild(image);
    author.appendChild(span);

    return card
}

    //const cards = document.querySelector('.cards-container');
    //cards.append(cardMaker())

    axios.get('https://lambda-times-api.herokuapp.com/articles')
.then( response => {
    console.log(response.data)
    console.log(response.data.message);
    const info = Object.values(response.data.articles);
    const cards = document.querySelector('.cards-container');
    info.forEach( item => {
        item.forEach( element => {
            cards.appendChild(cardMaker(element))
        })
    })
})
.catch( error => {
    console.log(error)
})



// info.forEach( item => {
//     const card = cardMaker(item)
//     cards.append(cardMaker(item))