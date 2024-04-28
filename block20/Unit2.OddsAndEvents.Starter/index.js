document.addEventListener('DOMContentLoaded', function() {
    // use querySelector which returns first element document matches the specific selectors
    const numberBankOutput = document.querySelector('#numberBank output');
    const oddsOutput = document.querySelector('#odds output');
    const evensOutput = document.querySelector('#evens output');
    const addNumberButton = document.querySelector('button');
    const sortOneButton = document.querySelector('#sortOne');
    const sortAllButton = document.querySelector('#sortAll');
  
    let numberBank = [];
  
    addNumberButton.addEventListener('click', function(event) {
      event.preventDefault();
      const numberInput = document.querySelector('input[name="number"]');
      const value = parseInt(numberInput.value);
      if (!isNaN(value)) {
        numberBank.push(value);
        numberBankOutput.textContent = numberBank.join(', ');
        numberInput.value = ''; // Clear input field
      }
    });
  
    sortOneButton.addEventListener('click', function(event) {
      event.preventDefault();
      if (numberBank.length > 0) {
        const number = numberBank.shift();
        if (number % 2 === 0) {
          evensOutput.textContent += number + ', ';
        } else {
          oddsOutput.textContent += number + ', ';
        }
        numberBankOutput.textContent = numberBank.join(', ');
      }
    });
  
    sortAllButton.addEventListener('click', function(event) {
      event.preventDefault();
      for (const number of numberBank) {
        if (number % 2 === 0) {
          evensOutput.textContent += number + ', ';
        } else {
          oddsOutput.textContent += number + ', ';
        }
      }
      numberBank = []; // Clear number bank
      numberBankOutput.textContent = '';
    });
  });
  