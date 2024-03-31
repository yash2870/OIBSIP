function convertTemperature(value, type) {
    let celsius = document.getElementById("celsius");
    let fahrenheit = document.getElementById("fahrenheit");
    let kelvin = document.getElementById("kelvin");
  
    if (type === 'C') {
      fahrenheit.value = (value * 9/5) + 32;
      kelvin.value = parseFloat(value) + 273.15;
    } else if (type === 'F') {
      celsius.value = (value - 32) * 5/9;
      kelvin.value = ((value - 32) * 5/9) + 273.15;
    } else if (type === 'K') {
      celsius.value = value - 273.15;
      fahrenheit.value = (value - 273.15) * 9/5 + 32;
    }
  }
  
  function clearAll() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
  }
  