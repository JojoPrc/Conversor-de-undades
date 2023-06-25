// Mapeamento das unidades de cada categoria
const units = {
    length: ['metros', 'centímetros', 'polegadas'],
    weight: ['quilogramas', 'gramas', 'libras'],
    temperature: ['Celsius', 'Fahrenheit', 'Kelvin']
  };

  // Atualiza as opções das unidades de medida com base na categoria selecionada
  function updateUnitOptions() {
    const category = document.getElementById("category").value;
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");

    // Limpa as opções existentes
    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';

    // Adiciona as novas opções de unidade de medida
    units[category].forEach(unit => {
      const option1 = document.createElement("option");
      option1.text = unit;
      inputUnit.add(option1);
    });

    // Chama a função para atualizar as unidades de destino
    updateOutputUnit();
  }

  // Atualiza as opções da unidade de medida de destino com base na unidade de origem selecionada
  function updateOutputUnit() {
    const category = document.getElementById("category").value;
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit");

    // Limpa as opções existentes
    outputUnit.innerHTML = '';

    // Adiciona as novas opções de unidade de medida de destino, excluindo a unidade de origem
    units[category].forEach(unit => {
      if (unit !== inputUnit) {
        const option2 = document.createElement("option");
        option2.text = unit;
        outputUnit.add(option2);
      }
    });
  }

  // Função de conversão
  function convert(event) {
    event.preventDefault();

    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    let result;

    // Lógica de conversão para cada categoria
    if (document.getElementById("category").value === "length") {
      if (inputUnit === "metros" && outputUnit === "centímetros") {
        result = inputValue * 100;
      } else if (inputUnit === "metros" && outputUnit === "polegadas") {
        result = inputValue * 39.37;
      } else if (inputUnit === "centímetros" && outputUnit === "metros") {
        result = inputValue / 100;
      } else if (inputUnit === "centímetros" && outputUnit === "polegadas") {
        result = inputValue / 2.54;
      } else if (inputUnit === "polegadas" && outputUnit === "metros") {
        result = inputValue / 39.37;
      } else if (inputUnit === "polegadas" && outputUnit === "centímetros") {
        result = inputValue * 2.54;
      }
    } else if (document.getElementById("category").value === "weight") {
      if(inputUnit === "quilogramas" && outputUnit === "gramas"){
        result = inputValue * 1000
      } else if(inputUnit === "gramas" && outputUnit === "quilogramas"){
        result = inputValue / 1000
      } else if(inputUnit === "quilogramas" && outputUnit === "libras"){
        result = inputValue * 2.205
      } else if(inputUnit === "libras" && outputUnit === "quilogramas"){
        result = inputValue / 2.205
      } else if(inputUnit === "gramas" && outputUnit === "libras"){
        result = inputValue / 453.6
      } else if(inputUnit === "libras" && outputUnit === "gramas"){
        result = inputValue * 453.6
      }
      
    } else if (document.getElementById("category").value === "temperature") {
    if(inputUnit === "Celsius" && outputUnit === "Fahrenheit") {
      result = (inputValue * 9/5) + 32;
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Celsius") {
      result = (inputValue - 32) * 5/9;
    } else if (inputUnit === "Celsius" && outputUnit === "Kelvin") {
      result = inputValue + 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Celsius") {
      result = inputValue - 273.15;
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Kelvin") {
      result = (inputValue - 32) * 5/9 + 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Fahrenheit") {
      result = (inputValue - 273.15) * 9/5 + 32;
    }
}

    // Exibe o resultado da conversão
    document.getElementById("result").textContent = "Resultado: " + result;
  }