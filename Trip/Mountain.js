const mountains = [
    {
      name: "Kanchenjunga",
      description: "The third highest mountain in the world, located in Sikkim and Nepal, standing at 8,586 meters.",
      img: "images/Kanchenjunga.jpeg",
    },
    {
      name: "Nanda Devi",
      description: "The second highest mountain in India, located in Uttarakhand, with a height of 7,816 meters.",
      img: "images/Nanda Devi.jpeg",
    },
    {
      name: "Mount Everest",
      description: "The highest mountain in the world (8,848 meters), located on the border of Nepal and Tibet, partially in India’s Himalayan region.",
      img: "images/Mount Everest.jpeg",
    },
    {
      name: "Zemu Peak",
      description: "The highest peak in the Eastern Himalayas of Sikkim, rising to 7,780 meters.",
      img: "images/Zemu Peak.jpeg",
    },
    {
      name: "Kamet",
      description: "The second highest peak in Uttarakhand, with an elevation of 7,756 meters.",
      img: "images/Kamet.jpeg",
    },
    {
      name: "Saltoro Kangri",
      description: "Located in the Karakoram range in Jammu & Kashmir, this peak reaches 7,742 meters.",
      img: "images/Saltoro Kangri.jpeg",
    },
    {
      name: "Saser Kangri",
      description: "A group of peaks in the Saser Muztagh range of the Karakoram in Ladakh, highest is 7,672 meters.",
      img: "images/Saser Kangri.jpeg",
    },
    {
      name: "Dunagiri",
      description: "A Himalayan mountain in Uttarakhand, standing at 7,066 meters.",
      img: "images/Dunagiri.jpeg",
    },
    {
      name: "Trisul",
      description: "A group of three Himalayan mountain peaks, with Trisul I reaching 7,120 meters.",
      img: "images/Trisul.jpeg",
    },
    {
      name: "Hathi Parbat",
      description: "A peak in the Kashmir Himalayas with an altitude of 6,727 meters.",
      img: "images/Hathi Parbat.jpeg",
    },
    {
      name: "Guru Shikhar",
      description: "The highest peak of the Aravalli Range, located in Rajasthan, 1,722 meters tall.",
      img: "images/Guru Shikhar.jpeg",
    },
    {
      name: "Anamudi",
      description: "The highest peak in South India, located in Kerala, standing at 2,695 meters.",
      img: "images/Anamudi.jpeg",
    },
    {
      name: "Mukut Parbat",
      description: "A peak in the Garhwal Himalayas with an elevation of 7,242 meters.",
      img: "images/Mukut Parbat.jpeg",
    },
    {
      name: "Nanda Kot",
      description: "Located in Uttarakhand, it has an elevation of 6,861 meters.",
      img: "images/Nanda Kot.jpeg",
    },
    {
      name: "Kamet South",
      description: "A subsidiary peak of Kamet, elevation around 7,756 meters.",
      img: "images/Kamet South.jpeg",
    },
    {
      name: "Kang Yatze",
      description: "Located in Ladakh, popular trekking peak, 6,400 meters tall.",
      img: "images/Kang Yatze.jpeg",
    },
    {
      name: "Bandarpunch",
      description: "A mountain massif in the Garhwal Himalayas, elevation 6,316 meters.",
      img: "images/Bandarpunch.jpeg",
    },
    {
      name: "Siniolchu",
      description: "A mountain in Sikkim, about 6,888 meters high.",
      img: "images/Siniolchu.jpeg",
    },
    {
      name: "Nanda Ghunti",
      description: "Located in Uttarakhand, elevation 6,309 meters.",
      img: "images/Nanda Ghunti.jpeg",
    },
    {
      name: "Nilkanth",
      description: "Located in Uttarakhand, elevation 6,596 meters.",
      img: "images/Nilkanth.jpeg",
    },
  ];
  
  function loadMountains() {
    const list = document.getElementById("mountain-list");
  
    mountains.forEach((mtn) => {
      const card = document.createElement("div");
      card.className = "mountain-card";
  
      card.innerHTML = `
        <img class="mountain-img" src="${mtn.img}" alt="${mtn.name}" />
        <div class="mountain-info">
          <div class="mountain-name">${mtn.name}</div>
          <div class="mountain-desc">${mtn.description}</div>
        </div>
      `;
  
      list.appendChild(card);
    });
  }
  
  window.onload = loadMountains;
  