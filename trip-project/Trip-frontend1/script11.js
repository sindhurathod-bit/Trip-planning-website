document.getElementById("getTripInfoBtn").addEventListener("click", function () {
  const city = document.getElementById("city").value;

  fetch(`http://localhost:5000/api/weather/${city}`)
    .then(response => response.json())
    .then(data => {
      if (data.main) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather Info</h3>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
      } else {
        document.getElementById("weather").innerText = "City not found.";
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weather").innerText = "Failed to fetch weather data.";
    });

  fetch(`http://localhost:5000/api/tripinfo/${city}`)
  .then(response => response.json())
  .then(data => {
    if (data.bestTime) {
      document.getElementById("trip-info").innerHTML = `
        <h3>Trip Information</h3>
        <p><strong>Best Time to Visit:</strong> ${data.bestTime}</p>
        <p><strong>Famous Hotels:</strong> ${(Array.isArray(data.hotels) ? data.hotels.join(", ") : "N/A")}</p>
        <p><strong>Famous Foods:</strong> ${(Array.isArray(data.food) ? data.food.join(", ") : "N/A")}</p>
        <p><strong>Famous Places:</strong> ${(Array.isArray(data.places) ? data.places.join(", ") : "N/A")}</p>
      `;
    } else {
      document.getElementById("trip-info").innerText = "No trip info found.";
    }
  })
  .catch(error => {
    console.error("Error fetching trip data:", error);
    document.getElementById("trip-info").innerText = "Failed to fetch trip info.";
  });

});
