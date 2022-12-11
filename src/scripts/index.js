const functions = require('./functions');

const previousElementBlock = document.getElementsByClassName('previous-element')[0];
const previousElementName = document.getElementsByClassName('previous-element-name')[0];
const previousElementAbbreviation = document.getElementsByClassName('previous-abbreviation')[0];
const previousAtomicNumber = document.getElementsByClassName('previous-atomic-number')[0];
const previousAtomicMass = document.getElementsByClassName('previous-atomic-mass')[0];

const currentElementBlock = document.querySelectorAll('.element');
const currentElementName = document.querySelectorAll('.element-name');
const currentElementAbbreviation = document.querySelectorAll('.abbreviation');
const currentAtomicNumber = document.querySelectorAll('.atomic-number');
const currentAtomicMass = document.querySelectorAll('.atomic-mass');

const nextElementBlock = document.getElementsByClassName('next-element')[0];
const nextElementName = document.getElementsByClassName('next-element-name')[0];
const nextElementAbbreviation = document.getElementsByClassName('next-abbreviation')[0];
const nextAtomicNumber = document.getElementsByClassName('next-atomic-number')[0];
const nextAtomicMass = document.getElementsByClassName('next-atomic-mass')[0];

const input = document.getElementsByTagName('input')[0];
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', searchForElement);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchForElement();
  }
});

previousElementBlock.addEventListener('click', () => {
  let thisAtomicNumber = Number(previousElementBlock.children[0].children[0].innerText);
  input.value = thisAtomicNumber;
  searchForElement()
})

nextElementBlock.addEventListener('click', () => {
  let thisAtomicNumber = Number(nextElementBlock.children[0].children[0].innerText);
  input.value = thisAtomicNumber;
  searchForElement()
})

function searchForElement() {
  let searchResult = functions.handleSearch(Number(input.value));

  if (searchResult.isValid) {
    currentElementName.forEach((elementName) => {
      elementName.innerText = searchResult.elementName;
    })

    currentElementAbbreviation.forEach((elementAbbreviation) => {
      elementAbbreviation.innerText = searchResult.elementSymbol;
    })

    currentAtomicNumber.forEach((atomicNumber) => {
      atomicNumber.innerText = searchResult.atomicNumber;
    })

    currentAtomicMass.forEach((atomicMass) => {
      atomicMass.innerText = searchResult.atomicMass;
    })

    currentElementBlock.forEach((elementBlock) => {
      elementBlock.style.backgroundColor = functions.categoryColorOf(searchResult);
    })
  }

  setPreviousElement(Number(input.value));
  setNextElement(Number(input.value));

  input.value = '';
}

function setPreviousElement(input) {
  try {
    let searchResult = functions.handleSearch(input - 1);

    if (searchResult.isValid) {
      previousElementName.innerText = searchResult.elementName;
      previousElementAbbreviation.innerText = searchResult.elementSymbol;
      previousAtomicNumber.innerText = searchResult.atomicNumber;
      previousAtomicMass.innerText = searchResult.atomicMass;
      previousElementBlock.style.backgroundColor = functions.categoryColorOf(searchResult);
      previousElementBlock.style.display = 'block';
    }
  } catch(error) {
    previousElementBlock.style.display = 'none';
  } 
}

function setNextElement(input) {
  try {
    let searchResult = functions.handleSearch(input + 1);

    if (searchResult.isValid) {
      nextElementName.innerText = searchResult.elementName;
      nextElementAbbreviation.innerText = searchResult.elementSymbol;
      nextAtomicNumber.innerText = searchResult.atomicNumber;
      nextAtomicMass.innerText = searchResult.atomicMass;
      nextElementBlock.style.backgroundColor = functions.categoryColorOf(searchResult);
      nextElementBlock.style.display = 'block';
    }
  } catch(error) {
    nextElementBlock.style.display = 'none';
    console.log(error);
  }
}
