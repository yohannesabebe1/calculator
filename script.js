let calculation = '';
      function pickButton(pickedButton) {
        const inputElement = document.querySelector('.js-input')
        const currentValue = inputElement.value
        const parts = calculation.split(/[\+\-\×\×]/)
        const currentNumber = parts[parts.length - 1]. trim();
        const lastChar = calculation[calculation.length - 1];

        if (pickedButton === '.'){
          if (currentNumber.includes('.')) {
            return;
          }
          calculation += '.';
          inputElement.value = calculation;
        } else if (['+', '-', '×', '÷'].includes(pickedButton)) {
            if (['+', '-', '×', '÷'].includes(lastChar)) {
              calculation = calculation.slice(0, -1) + pickedButton;
              inputElement.value = calculation;
              return;
            }
            if (calculation === '' && pickedButton !== '-') {
              return;
            }
            calculation += pickedButton;
            inputElement.value = calculation;
        } else if (pickedButton === '1') {
            calculation += '1';
            inputElement.value = calculation;
        } else if(pickedButton === '2') {
            calculation += '2';
            inputElement.value = calculation;;
        } else if (pickedButton === '3') {
            calculation += '3';
            inputElement.value = calculation;;
        } else if (pickedButton === '4') {
            calculation += '4';
            inputElement.value = calculation;;
        } else if (pickedButton === '5') {
            calculation += '5';
            inputElement.value = calculation;;
        } else if (pickedButton === '6') {
            calculation += '6';
            inputElement.value = calculation;;
        } else if (pickedButton === '7') {
            calculation += '7';
            inputElement.value = calculation;;
        } else if (pickedButton === '8') {
            calculation += '8';
            inputElement.value = calculation;;
        } else if (pickedButton === '9') {
            calculation += '9';
            inputElement.value = calculation;;
        } else if (pickedButton === '%') {
            if (currentNumber === '' || ['+', '-', '*', '/'].includes(lastChar)) {
              return;
            }
            const number = parseFloat(currentNumber) / 100;
            calculation = calculation.slice(0, calculation.length - currentNumber.length) + number.toString();
            inputElement.value = calculation;
        } else if(pickedButton === '⌫') {
            if(calculation !== ''){
              calculation = calculation.slice(0, -1);
              inputElement.value = calculation;
            }
          } else if (pickedButton === '=') {
              if ([' + ', ' - ', '*', '/'].includes(lastChar)) {
                return;
              }
              try {

                const expression = calculation
                  .replace(/×/g, '*')
                  .replace(/÷/g, '/');

                const result = eval(expression);
                calculation = result.toString();
                inputElement.value = result;
              } catch (error) {
                inputElement.value = 'Error';
                calculation = '';
              }
        } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(pickedButton)) {
            if (pickedButton === '0' && currentNumber === '0' && !currentNumber.includes('.')) {
              return;
            }
            calculation += pickedButton;
            inputElement.value = calculation;
        } else if (pickedButton === 'C') {
            calculation = '';
            inputElement.value = '';
        } else if (pickedButton === 'CE') {
            calculation = '';
            inputElement.value = '';
        }
      }
