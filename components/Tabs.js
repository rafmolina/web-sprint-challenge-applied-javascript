// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then( response => {
    console.log(response)
})
.catch( error => {
    console.log(error)
})

function Tabs () {

    const topics = document.createElement('div')
    topics.classList.add('topics-tabs')

    const java = document.createElement('div');
    java.classList.add('tab');
    java.textContent = 'Javascript';

    const boot = document.createElement('div');
    boot.classList.add('tab');
    boot.textContent = 'Bootstrap';

    const tech = document.createElement('div');
    tech.classList.add('tab');
    tech.textContent = 'Technology';

    const jQuery = document.createElement('div');
    jQuery.classList.add('tab');
    jQuery.textContent = 'Jquery';

    const node = document.createElement('div');
    node.classList.add('tab');
    node.textContent = 'Node.js';

    topics.appendChild(java);
    topics.appendChild(boot);
    topics.appendChild(tech);
    topics.appendChild(jQuery);
    topics.appendChild(node);


    return topics

}

    const topics = document.querySelector('.topics')
    topics.appendChild(Tabs())