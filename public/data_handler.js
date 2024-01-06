// public/js/script.js
async function sendData() {
  // Get input values
  const temperature = parseFloat(document.getElementById("temperature").value);
  const volume = parseFloat(document.getElementById("volume").value);
  const amount = parseFloat(document.getElementById("amount").value);

  // Make a POST request to the Julia API endpoint
  const response = await fetch("http://127.0.0.1:8000/pressure", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      n: amount,
      T: temperature,
      V: volume,
    }),
  });

  // Get the result from the response
  const result = await response.json();

  // Display the result in the "pressure" output tag
  document.getElementById("pressure").value = result.pressure;
}

// Add an event listener to the form to prevent default form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  sendData();
});
