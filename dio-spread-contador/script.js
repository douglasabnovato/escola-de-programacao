let buttonSub = document.getElementById("subtrair");
      let buttonAdd = document.getElementById("adicionar");

      let bgBody = document.getElementById("bg-body");
      let currentNumberWrapper = document.getElementById("currentNumber");
      let currentNumber = 0;

      buttonSub.disabled = false;
      buttonAdd.disabled = false;

      buttonSub.addEventListener("click", stateHandle);
      buttonAdd.addEventListener("click", stateHandle);

      function checkBackground() {
        if (currentNumber < 0) {
          bgBody.style.backgroundColor = "#d96666";
        } else if (currentNumber > 0) {
          bgBody.style.backgroundColor = "#93bdf5";
        }
      }

      function increment() {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        checkBackground();
      }

      function decrement() {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        checkBackground();
      }

      function stateHandle() {
        if (currentNumber <= -10) {
          buttonSub.disabled = true;
          buttonAdd.disabled = false;
        }

        if (currentNumber > -10 && currentNumber < 10) {
          buttonSub.disabled = false;
          buttonAdd.disabled = false;
        }

        if (currentNumber >= 10) {
          buttonSub.disabled = false;
          buttonAdd.disabled = true;
        }
      }