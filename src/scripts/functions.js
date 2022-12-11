const periodicTable = require('periodic-table').all();

function handleSearch(input) {
  for (let element of periodicTable) {
    if (element.atomicNumber == input) {
      return {
        isValid: true,
        elementName: element.name,
        elementSymbol: element.symbol,
        atomicNumber: element.atomicNumber,
        atomicMass: element.atomicMass,
        elementCategory: element.groupBlock
      }
    }
  }
}

function categoryColorOf(element) {
  let hexCode;

  switch (element.elementCategory) {
    case 'nonmetal':
      hexCode = '#2a4065';
      break;
    case 'alkali metal':
      hexCode = '#234d57';
      break;
    case 'alkaline earth metal':
      hexCode = '#612e39';
      break;
    case 'transition metal':
      hexCode = '#433c65';
      break;
    case 'metal':
      hexCode = '#2f4d47';
      break;
    case 'metalloid':
      hexCode = '#523e1b';
      break;
    case 'noble gas':
      hexCode = '#623842';
      break;
    case 'lanthanoid':
      hexCode = '#004a76';
      break;
    case 'actinoid':
      hexCode = '#613b27';
      break;
  }

  if (element.atomicNumber >= 109) {
    hexCode = '#46474c';
  }

  return hexCode;
}

module.exports = {
  handleSearch: handleSearch,
  categoryColorOf: categoryColorOf
}
