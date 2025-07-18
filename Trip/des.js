const destinations = [
    {
      name: "Taj Mahal, Agra",
      image: "tajmahal.jpeg",
      description: "A symbol of eternal love, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
      price: "₹10,000",
      bestTime: "October to March",
      weather: "Pleasant",
      hotels: ["Hotel Taj View", "ITC Mughal"],
      food: ["Mughlai Cuisine", "Petha Sweets"]
    },
    {
      name: "Goa Beaches",
      image: "images/Panaji-Beach.jpg",
      description: "Famous for its sandy beaches, vibrant nightlife, and Portuguese colonial architecture.",
      price: "₹15,000",
      bestTime: "November to February",
      weather: "Warm and sunny",
      hotels: ["Taj Exotica", "Leela Goa"],
      food: ["Seafood", "Feni"]
    },
    {
      name: "Jaipur, Rajasthan",
      image: "images/jaipur.jpg",
      description: "Known as the Pink City, rich in cultural heritage with forts and palaces.",
      price: "₹12,000",
      bestTime: "October to March",
      weather: "Cool and dry",
      hotels: ["Rambagh Palace", "Jai Mahal Palace"],
      food: ["Dal Baati Churma", "Ghevar"]
    },
    {
      name: "Kerala Backwaters",
      image: "images/kerala-backwaters.jpg",
      description: "Serene backwaters with houseboat cruises, lush greenery, and tranquil surroundings.",
      price: "₹20,000",
      bestTime: "November to February",
      weather: "Moderate",
      hotels: ["Kumarakom Lake Resort", "The Leela Kovalam"],
      food: ["Kerala Sadya", "Karimeen Pollichathu"]
    },
    {
        name: "Varanasi, Uttar Pradesh",
        image:  "images/varanasi.jpg",
        description : "One of the oldest cities in the world, sacred to Hindus and known for its ghats and spiritual aura.",
        price : "₹8,000",
        bestTime : "October to March",
        weather : "Cool and pleasant",
        hotels: ["Taj Ganges", "BrijRama Palace"],
        food: ["Kachori Sabzi", "Banarasi Paan"]
      },
      {
        name: "Leh-Ladakh, Jammu & Kashmir",
        image: "images/ladakh.jpg",
        description: "A high-altitude desert known for its stark landscapes, Buddhist monasteries, and adventure trails.",
        price: "₹25,000",
        bestTime: "May to September",
        weather: "Cold and dry",
        hotels: ["The Grand Dragon", "The Zen Ladakh"],
        food: ["Thukpa", "Momos"]
      },
      {
        name: "Amritsar, Punjab",
        image: "images/Amritsar.jpg",
        description: "Home to the Golden Temple, a spiritual center for Sikhs and a symbol of peace and service.",
        price: "₹7,000",
        bestTime: "November to March",
        weather: "Pleasant and cool",
        hotels: ["Hyatt Regency Amritsar", "Ramada Amritsar"],
        food: ["Amritsari Kulcha", "Lassi"]
      },
      {
        name: "Ranthambore National Park, Rajasthan",
        image: "images/ranthambore.jpg",
        description: "A famous tiger reserve offering wildlife safaris and historic ruins within the forest.",
        price: "₹14,000",
        bestTime: "October to April",
        weather: "Cool and dry",
        hotels: ["Aman-i-Khas", "The Oberoi Vanyavilas"],
        food: ["Rajasthani Thali", "Laal Maas"]
      },
      {
        name: "Mysore, Karnataka",
        image: "images/mysore.jpg",
        description: "Known for its grand Mysore Palace, yoga retreats, and the vibrant Dussehra festival.",
        price: "₹10,000",
        bestTime: "October to March",
        weather: "Pleasant",
        hotels: ["Radisson Blu Plaza", "Royal Orchid Metropole"],
        food: ["Mysore Pak", "Masala Dosa"]
      }, {
        name: "Meghalaya Caves, Meghalaya",
        image: "images/meghalaya-caves.jpg",
        description: "Home to some of the longest and deepest caves in India, rich in natural beauty and biodiversity.",
        price: "₹18,000",
        bestTime: "October to April",
        weather: "Cool and misty",
        hotels: ["Ri Kynjai", "Polo Orchid Resort"],
        food: ["Jadoh", "Dohneiiong"]
      },
      {
        name: "Khajuraho Temples, Madhya Pradesh",
        image: "images/khajuraho.jpg",
        description: "Famous for intricately carved temples depicting ancient Indian art, dance, and erotic sculptures.",
        price: "₹9,000",
        bestTime: "October to March",
        weather: "Pleasant",
        hotels: ["Radisson Jass", "The Lalit Temple View"],
        food: ["Poha", "Sabudana Khichdi"]
      }, 
      {
        name: "Andaman Islands",
        image: "images/andaman.jpg",
        description: "Tropical paradise with pristine beaches, coral reefs, and history like Cellular Jail.",
        price: "₹30,000",
        bestTime: "October to May",
        weather: "Tropical and breezy",
        hotels: ["Taj Exotica", "Barefoot at Havelock"],
        food: ["Seafood Curry", "Coconut-based dishes"]
      },
      {
        name: "Sikkim",
        image: "images/sikkim.jpg",
        description: "A Himalayan state with snow-capped peaks, monasteries, and adventure spots like Gurudongmar Lake.",
        price: "₹20,000",
        bestTime: "March to June, September to December",
        weather: "Cool and alpine",
        hotels: ["Mayfair Spa Resort", "The Elgin Nor-Khill"],
        food: ["Phagshapa", "Sel Roti"]
      },
      {
        name: "Rishikesh, Uttarakhand",
        image: "images/rishkesh.jpg",
        description: "A spiritual town on the Ganges River known for yoga, temples, and river rafting.",
        price: "₹8,000",
        bestTime: "October to April",
        weather: "Cool and calm",
        hotels: ["Ananda in the Himalayas", "Aloha on the Ganges"],
        food: ["Satvik Thali", "Chole Bhature"]
      },
      {
        name: "Vaishno Devi, Jammu & Kashmir",
        image: "images/vaishno-devi.jpg",
        description: "One of the most visited Hindu pilgrimage sites, dedicated to Goddess Vaishno Devi.",
        price: "₹8,000",
        bestTime: "March to October",
        weather: "Cool and mountainous",
        hotels: ["Country Inn Katra", "The White Hotel"],
        food: ["Rajma Chawal", "Kachori with Sabzi"]
      },
      {
        name: "Tirupati Balaji, Andhra Pradesh",
        image: "images/tirupati.jpg",
        description: "Home to the revered Venkateswara Temple, one of the richest temples in the world.",
        price: "₹10,000",
        bestTime: "September to February",
        weather: "Pleasant",
        hotels: ["Marasa Sarovar", "Fortune Select Grand Ridge"],
        food: ["Andhra Thali", "Pulihora"]
      },
      {
        name: "Kedarnath, Uttarakhand",
        image: "images/kedarnath.jpg",
        description: "A sacred Shiva temple nestled in the Himalayas, part of the Char Dham pilgrimage.",
        price: "₹18,000",
        bestTime: "May to October",
        weather: "Cold and alpine",
        hotels: ["GMVN Tourist Rest House", "Hotel Bikaner House"],
        food: ["Satvik Bhojan", "Aloo Puri"]
      },
      {
        name: "Rameswaram, Tamil Nadu",
        image: "images/rameswaram.jpg",
        description: "One of the Char Dham sites, believed to be the place where Lord Rama built the bridge to Lanka.",
        price: "₹12,000",
        bestTime: "October to April",
        weather: "Warm and breezy",
        hotels: ["Daiwik Hotel", "Hotel Royal Park"],
        food: ["South Indian Thali", "Idiyappam"]
      },
      {
        name: "Dwarka, Gujarat",
        image: "images/dwarka.jpg",
        description: "A sacred city associated with Lord Krishna, home to Dwarkadhish Temple.",
        price: "₹10,000",
        bestTime: "November to February",
        weather: "Cool and dry",
        hotels: ["Hotel Roma Kristo", "Dwarkadhish Lords Eco Inn"],
        food: ["Gujarati Thali", "Khandvi"]
      },
      {
        name: "Shirdi, Maharashtra",
        image: "images/shiridi.jpg",
        description: "The spiritual home of Sai Baba, drawing devotees from across the globe.",
        price: "₹8,000",
        bestTime: "June to February",
        weather: "Pleasant",
        hotels: ["Sun-n-Sand Shirdi", "Hotel Sai Jashan"],
        food: ["Simple Maharashtrian meals", "Sabudana Khichdi"]
      },
      {
        name: "Puri Jagannath Temple, Odisha",
        image: "images/puri.jpg",
        description: "Famous for the Jagannath Temple and the grand Rath Yatra festival.",
        price: "₹9,000",
        bestTime: "October to February",
        weather: "Mild and coastal",
        hotels: ["Mayfair Heritage", "Toshali Sands"],
        food: ["Mahaprasad", "Chhena Poda"]
      }, 
      {
        name : "Amarnath Cave, Jammu & Kashmir",
        image: "images/amarnath.jpg",
        description: "A high-altitude cave temple dedicated to Lord Shiva, featuring a natural ice lingam.",
        price: "₹20,000",
        bestTime: "July to August (Yatra period)",
        weather: "Very cold",
        hotels: ["Tented accommodations", "GMVN camps"],
        food: ["Satvik Bhojan", "Roti with Sabzi"]
      },
      {
        name: "Bodh Gaya, Bihar",
        image: "images/bodh-gaya.jpg",
        description: "The place where Lord Buddha attained enlightenment under the Bodhi tree.",
        price: "₹9,000",
        bestTime: "October to March",
        weather: "Cool and dry",
        hotels: ["Hotel Taj Darbar", "Maha Bodhi Hotel"],
        food: ["Tibetan Thukpa", "Litti Chokha"]
      },
      {
        name: "Ajmer Sharif Dargah, Rajasthan",
        image: "images/ajmer-sharif.jpg",
        description: "A revered Sufi shrine of Khwaja Moinuddin Chishti, attracting people of all faiths.",
        price: "₹7,000",
        bestTime: "November to March",
        weather: "Cool and dry",
        hotels: ["Mansingh Palace", "Hotel Ajmer Inn"],
        food: ["Biryani", "Kebabs"]
      }
  ];
  
  function loadDestinations() {
    const container = document.getElementById("destination-cards");
    destinations.forEach(dest => {
      const card = document.createElement("div");
      card.classList.add("destination-card");
      card.innerHTML = `
        <div class="card-image">
          <img src="${dest.image}" alt="${dest.name}">
        </div>
        <div class="card-content">
          <h3 class="card-title">${dest.name}</h3>
          <p class="card-description">${dest.description}</p>
          <div class="card-footer">
            <span class="price">${dest.price} / per person</span>
            <button class="cta-btn" onclick="showDetails('${dest.name}')">Learn More</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  function showDetails(destinationName) {
    const dest = destinations.find(d => d.name === destinationName);
    alert(`
      ${dest.name}
      Best Time to Visit: ${dest.bestTime}
      Weather: ${dest.weather}
      Hotels: ${dest.hotels.join(", ")}
      Food: ${dest.food.join(", ")}
    `);
  }
  
  window.onload = loadDestinations;
  