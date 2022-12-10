const periodicTable = require('periodic-table').all();

const elementBlock = document.getElementsByClassName('element')[0];
const elementName = document.getElementById('element-name');
const elementAbbreviation = document.getElementById('abbreviation');
const atomicNumber = document.getElementById('atomic-number');
const atomicMass = document.getElementById('atomic-mass');

const input = document.getElementsByTagName('input')[0];
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', handleSearch);
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

function handleSearch() {
  let atomicNumberInput = input.value;

  for (let element of periodicTable) {
    if (element.atomicNumber == atomicNumberInput) {
      elementName.innerText = element.name;
      elementAbbreviation.innerText = element.symbol;
      atomicNumber.innerText = element.atomicNumber;
      atomicMass.innerText = element.atomicMass;

      switch (element.groupBlock) {
        case 'nonmetal':
          elementBlock.style.backgroundColor = '#2a4065';
          break;
        case 'alkali metal':
          elementBlock.style.backgroundColor = '#234d57';
          break;
        case 'alkaline earth metal':
          elementBlock.style.backgroundColor = '#612e39';
          break;
        case 'transition metal':
          elementBlock.style.backgroundColor = '#433c65';
          break;
        case 'metal':
          elementBlock.style.backgroundColor = '#2f4d47';
          break;
        case 'metalloid':
          elementBlock.style.backgroundColor = '#523e1b';
          break;
        case 'noble gas':
          elementBlock.style.backgroundColor = '#623842';
          break;
        case 'lanthanoid':
          elementBlock.style.backgroundColor = '#004a76';
          break;
        case 'actinoid':
          elementBlock.style.backgroundColor = '#613b27';
          break;
      }

      if (element.atomicNumber >= 109) {
        elementBlock.style.backgroundColor = '#46474c';
      }
    }
  }

  input.value = '';
}
