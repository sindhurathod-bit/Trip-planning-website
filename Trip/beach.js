const beaches = [
    {
      name: "Goa Beach",
      description: "Famous for its lively nightlife and golden sands, Goa is the top beach destination in India.",
      img: "images/Goa Beach.jpeg",
    },
    {
      name: "Radhanagar Beach",
      description: "Located in the Andaman Islands, this beach is known for its pristine beauty and turquoise waters.",
      img: "images/Radhanagar Beach.jpeg",
    },
    {
      name: "Marina Beach",
      description: "One of the longest urban beaches in the world, located in Chennai, Tamil Nadu.",
      img: "images/Marina Beach.jpeg",
    },
    {
      name: "Varkala Beach",
      description: "Known for its cliff-side views and natural springs in Kerala.",
      img: "images/Varkala Beach.jpeg",
    },
    {
      name: "Puri Beach",
      description: "Famous for the annual Puri Beach Festival and scenic sunrise views.",
      img: "images/Puri Beach.jpeg",
    },
    {
      name: "Kovalam Beach",
      description: "A popular beach in Kerala with palm-lined shores and a lighthouse.",
      img: "images/Kovalam Beach.jpeg",
    },
    {
      name: "Gokarna Beach",
      description: "A serene and less crowded beach town in Karnataka famous for its pristine beaches.",
      img: "images/Gokarna.jpeg",
    },
    {
      name: "Digha Beach",
      description: "A popular beach destination in West Bengal known for its calm waves.",
      img: "images/Digha Beach.jpeg",
    },
    {
      name: "Mandarmani Beach",
      description: "A beautiful beach in West Bengal known for its long shoreline and water sports.",
      img: "images/Mandarmani Beach.jpeg",
    },
    {
      name: "Tarkarli Beach",
      description: "Known for its clear waters and scuba diving in Maharashtra.",
      img: "images/Tarkarli Beach.jpeg",
    },
    {
      name: "Mahabalipuram Beach",
      description: "Famous for ancient temples and rock carvings, this beach is near Chennai.",
      img: "images/Mahabalipuram Beach.jpeg",
    },
    {
      name: "Bekal Beach",
      description: "A picturesque beach in Kerala with the famous Bekal Fort nearby.",
      img: "images/Bekal Beach.jpeg",
    },
    {
      name: "Rushikonda Beach",
      description: "A popular beach near Visakhapatnam, Andhra Pradesh, known for water sports.",
      img: "images/Rushikonda Beach.jpeg",
    },
    {
      name: "Marari Beach",
      description: "A peaceful beach in Kerala known for its laid-back vibe and coconut palms.",
      img: "images/Marari Beach.jpeg",
    },
    {
      name: "Palolem Beach",
      description: "A beautiful crescent-shaped beach in Goa, popular with backpackers.",
      img: "images/Palolem Beach.jpeg",
    },
    {
      name: "Dhanushkodi Beach",
      description: "Located in Tamil Nadu, known for its haunting ruins and scenic beauty.",
      img: "images/Dhanushkodi Beach.jpeg",
    },
    {
      name: "Paradise Beach",
      description: "A remote beach in the Andaman Islands famous for its crystal-clear water.",
      img: "images/Paradise Beach.jpeg",
    },
    {
      name: "Om Beach",
      description: "A scenic beach in Gokarna shaped like the Hindu symbol 'Om'.",
      img: "images/Om Beach.jpeg",
    },
    {
      name: "Cavelossim Beach",
      description: "A quiet and clean beach in South Goa, ideal for relaxation.",
      img: "images/Cavelossim Beach.jpeg",
    },
    {
      name: "Baga Beach",
      description: "One of the most famous beaches in North Goa, known for nightlife.",
      img: "images/Baga Beach.jpeg",
    }
  ];
  
  
  function loadBeaches() {
    const beachList = document.getElementById("beach-list");
  
    beaches.forEach((beach) => {
      const card = document.createElement("div");
      card.className = "beach-card";
  
      card.innerHTML = `
        <img class="beach-img" src="${beach.img}" alt="${beach.name}" />
        <div class="beach-info">
          <div class="beach-name">${beach.name}</div>
          <div class="beach-desc">${beach.description}</div>
        </div>
      `;
  
      beachList.appendChild(card);
    });
  }
  
  // Load beaches on page load
  window.onload = loadBeaches;
  