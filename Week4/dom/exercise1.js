// select empty div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside of the div
//create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas weigh between 280 and 450 pounds and can carry 25 to 30 percent of their body weight';
heading.style.cursor = 'pointer';

heading.addEventListener('click', handleHeadingClick);
//now attach to dom
myEmptyDiv.appendChild(heading);

function handleHeadingClick () {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = 'teal';
}