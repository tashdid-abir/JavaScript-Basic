function convertTemp() {
    const input = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("unit").value;
    let output;

    if (isNaN(input)) {
        output = "❌ Please enter a valid number!";
    } else {
        if (unit === "cToF") {
          const fahrenheit = (input * 9/5) + 32;
          output = `${input}°C = ${fahrenheit.toFixed(2)}°F`;
        } else {
          const celsius = (input - 32) * 5/9;
          output = `${input}°F = ${celsius.toFixed(2)}°C`;
        }
    }

    document.getElementById("result").innerText = output;
}