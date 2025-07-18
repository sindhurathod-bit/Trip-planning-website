const naturePlaces = [
    {
      name: "Dzukou Valley, Nagaland",
      image: "images/Dzukou Valley, Nagaland.jpeg",
      description: "A hidden gem in Northeast India, known for seasonal flowers and untouched beauty.",
      link: "https://en.wikipedia.org/wiki/Dzukou_Valley"
    },
    {
      name: "Phugtal Monastery, Ladakh",
      image: "images/Phugtal Monastery, Ladakh.jpeg",
      description: "Built into a cliffside, this monastery overlooks the wild beauty of Lungnak Valley.",
      link: "https://en.wikipedia.org/wiki/Phugtal_Monastery"
    },
    {
      name: "Chopta Valley, Sikkim",
      image: "images/Chopta Valley, Sikkim.jpeg",
      description: "An untouched Himalayan valley with rivers, alpine forests, and rich biodiversity.",
      link: "https://en.wikipedia.org/wiki/Chopta_Valley"
    },
    {
      name: "Tirthan Valley, Himachal Pradesh",
      image: "images/Tirthan Valley, Himachal Pradesh.jpeg",
      description: "Part of the Great Himalayan National Park, this valley is ideal for offbeat eco-tourism.",
      link: "https://en.wikipedia.org/wiki/Tirthan_Valley"
    },
    {
      name: "Gandikota Canyon, Andhra Pradesh",
      image: "images/Gandikota Canyon, Andhra Pradesh.jpeg",
      description: "Known as the 'Grand Canyon of India', this gorge offers breathtaking views of the Pennar River.",
      link: "https://en.wikipedia.org/wiki/Gandikota"
    },
    {
      name: "Bhimbetka Rock Shelters, Madhya Pradesh",
      image: "images/Bhimbetka Rock Shelters, Madhya Pradesh.jpeg",
      description: "Prehistoric natural rock formations and ancient cave paintings surrounded by forested hills.",
      link: "https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters"
    },
    {
      name: "Valley of Flowers, Uttarakhand",
      image: "images/Valley of Flowers, Uttarakhand.jpeg",
      description: "A UNESCO World Heritage site known for its alpine flowers and stunning meadows.",
      link: "https://en.wikipedia.org/wiki/Valley_of_Flowers_National_Park"
    },
    {
      name: "Munnar, Kerala",
      image: "images/Munnar_hill_station_.JPG",
      description: "Famous for tea gardens, misty hills, and green landscapes.",
      link: "https://en.wikipedia.org/wiki/Munnar"
    },
    {
      name: "Coorg, Karnataka",
      image: "images/Coorg, Karnataka.jpeg",
      description: "Also known as Kodagu, this place is known for its coffee plantations and lush forests.",
      link: "https://en.wikipedia.org/wiki/Coorg"
    },
    {
      name: "Tawang, Arunachal Pradesh",
      image: "images/Tawang, Arunachal Pradesh.jpeg",
      description: "A beautiful hill town known for its monasteries and pristine mountain views.",
      link: "https://en.wikipedia.org/wiki/Tawang"
    }
  ];
  
  
  
  const placeContainer = document.getElementById("places");
  
  naturePlaces.forEach(place => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}">
      <h3>${place.name}</h3>
      <p>${place.description}</p>
      <a href="${place.link}" target="_blank"><button>More Info</button></a>
    `;
    placeContainer.appendChild(card);
  });
  