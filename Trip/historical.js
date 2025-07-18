const historicalPlaces = [
  {
      name: "Taj Mahal",
      image: "images/tajmahal.jpg",
      description: "A UNESCO World Heritage site in Agra, known for its beautiful Mughal architecture.",
      location: "Agra, Uttar Pradesh",
      type: "Monument",
      link: "details/tajmahal.html"
    },
    {
      name: "Red Fort",
      image: "images/red-fort.jpg",
      description: "A symbol of India's rich history, built by Shah Jahan in the 17th century.",
      location: "Delhi",
      type: "Fort",
      link: "details/redfort.html"
    },
    {
      name: "Hampi",
      image: "images/Hampi.jpg",
      description: "The ruins of Hampi are a UNESCO World Heritage site showcasing Vijayanagara architecture.",
      location: "Karnataka",
      type: "Temple",
      link: "details/hampi.html"
    },
    {
      name: "Qutub Minar",
      image: "QutubMinar.jpeg",
      description: "A 73-meter tall minaret, a fine example of Indo-Islamic architecture.",
      location: "Delhi",
      type: "Monument",
      link: "details/qutubminar.html"
    },
    {
      name: "Ajanta Caves",
      image: "images/Ajanta caves.jpg",
      description: "Rock-cut Buddhist cave monuments dating back to the 2nd century BCE.",
      location: "Maharashtra",
      type: "Cave",
      link: "details/ajantacaves.html"
    },
    {
      name: "Konark Sun Temple",
      image: "images/konark sun temple.jpg",
      description: "13th-century Sun Temple built in the shape of a colossal chariot.",
      location: "Odisha",
      type: "Temple",
      link: "details/konark.html"
    },
    {
      name: "Khajuraho Temples",
      image: "images/khajuraho.jpg",
      description: "Famous for their intricate erotic sculptures and Nagara-style architecture.",
      location: "Madhya Pradesh",
      type: "Temple",
      link: "details/khajuraho.html"
    },
    {
      name: "Victoria Memorial",
      image: "images/Victoria.jpg",
      description: "A large marble building dedicated to Queen Victoria, now a museum.",
      location: "Kolkata, West Bengal",
      type: "Monument",
      link: "details/victoriamemorial.html"
    },
    {
      name: "Charminar",
      image: "images/charminar.jpg",
      description: "An iconic 16th-century mosque with four grand arches.",
      location: "Hyderabad, Telangana",
      type: "Monument",
      link: "details/charminar.html"
    },
    {
      name: "Meenakshi Temple",
      image: "images/Meenakshi Temple.jpg",
      description: "A historic Hindu temple dedicated to Meenakshi, a form of Parvati.",
      location: "Madurai, Tamil Nadu",
      type: "Temple",
      link: "details/meenakshi.html"
    },
    {
      name: "Golden Temple",
      image: "images/Golden Temple.jpeg",
      description: "The holiest Gurdwara and the most important pilgrimage site of Sikhism.",
      location: "Amritsar, Punjab",
      type: "Temple",
      link: "details/goldentemple.html"
    },
    {
      name: "Golconda Fort",
      image: "images/Golconda Fort.jpg",
      description: "A fortified citadel and early capital of the Qutb Shahi dynasty.",
      location: "Hyderabad, Telangana",
      type: "Fort",
      link: "details/golconda.html"
    },
    {
      name: "Sanchi Stupa",
      image: "images/Sanchi Stupa.jpg",
      description: "A Buddhist complex famous for its Great Stupa, one of the oldest stone structures in India.",
      location: "Sanchi, Madhya Pradesh",
      type: "Stupa",
      link: "details/sanchi.html"
    },
    {
      name: "Fatehpur Sikri",
      image: "images/Fatehpur Sikri.jpg",
      description: "A historic city founded by Mughal Emperor Akbar, known for its stunning architecture.",
      location: "Uttar Pradesh",
      type: "City",
      link: "details/fatehpursikri.html"
    },
    {
      name: "Rani ki Vav",
      image: "images/Rani ki Vav.jpg",
      description: "An intricately constructed stepwell built in the 11th century.",
      location: "Patan, Gujarat",
      type: "Stepwell",
      link: "details/ranikivav.html"
    },
    {
      name: "Mahabodhi Temple",
      image: "images/Mahabodhi Temple.jpg",
      description: "A UNESCO World Heritage site marking the location where Buddha attained enlightenment.",
      location: "Bodh Gaya, Bihar",
      type: "Temple",
      link: "details/mahabodhi.html"
    },
    {
      name: "Cellular Jail",
      image: "images/Cellular jail.jpg",
      description: "A colonial prison used by the British to exile political prisoners.",
      location: "Port Blair, Andaman and Nicobar Islands",
      type: "Prison",
      link: "details/cellularjail.html"
    },
    {
      name: "Umaid Bhawan Palace",
      image: "images/Umaid Bhawan Palace.jpg",
      description: "One of the world's largest private residences, a blend of eastern and western architectural influences.",
      location: "Jodhpur, Rajasthan",
      type: "Palace",
      link: "details/umaidbhawan.html"
    },
    {
      name: "Shore Temple",
      image: "images/Shore Temple.jpg",
      description: "A structural temple built with blocks of granite, dating back to the 8th century AD.",
      location: "Mahabalipuram, Tamil Nadu",
      type: "Temple",
      link: "details/shoretemple.html"
    },
    {
      name: "Gateway of India",
      image: "images/Gateway of india.jpg",
      description: "An arch-monument built in the early 20th century in the city of Mumbai.",
      location: "Mumbai, Maharashtra",
      type: "Monument",
      link: "details/gatewayofindia.html"
    }
  ];
  
  
  
  const container = document.getElementById("places-container");
  
  historicalPlaces.forEach(place => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}">
      <div class="card-content">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <p><strong>Location:</strong> ${place.location}</p>
        <button onclick="alert('More info coming soon about ${place.name}')">More Info</button>
      </div>
    `;
    container.appendChild(card);
  });
  