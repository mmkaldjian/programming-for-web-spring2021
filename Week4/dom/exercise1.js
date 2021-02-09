// select empty div and assign it to a veriable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside of the div
//create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Hello class! it is a snow day!';
heading.style.cursor = 'pointer';

heading.addEventListener('click', handleHeadingClick);
//now attach to dom
myEmptyDiv.appendChild(heading);

function handleHeadingClick () {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = 'magenta';
}