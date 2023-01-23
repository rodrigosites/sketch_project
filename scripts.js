const pageContainer = document.querySelector('.page-container');

document.addEventListener('load', (event) => {
  const divCreator = document.createElement('div', class: 'square-div');
  for (let i = 0; i < 16*16; i++) {
    pageContainer.appendChild(divCreator);
  }
});