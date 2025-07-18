const religiousPlaces = [
    {
      name: "Kedarnath Temple",
      image: "images/kedarnath.jpg",
      description: "One of the twelve Jyotirlingas, dedicated to Lord Shiva in the Himalayas.",
      location: "Uttarakhand",
      type: "Temple",
      link: "details/kedarnath.html"
    },
    {
      name: "Golden Temple",
      image: "images/Golden Temple.jpeg",
      description: "The most sacred Gurudwara and spiritual center of Sikhism.",
      location: "Amritsar, Punjab",
      type: "Gurudwara",
      link: "details/golden_temple.html"
    },
    {
      name: "Mecca Masjid",
      image: "images/Mecca Masjid.jpeg",
      description: "One of the largest and oldest mosques in India, located in Hyderabad.",
      location: "Hyderabad, Telangana",
      type: "Mosque",
      link: "details/mecca_masjid.html"
    },
    {
      name: "Basilica of Bom Jesus",
      image: "images/Basilica of Bom Jesus.jpeg",
      description: "A UNESCO World Heritage Site that holds the remains of St. Francis Xavier.",
      location: "Old Goa, Goa",
      type: "Church",
      link: "details/basilica_bom_jesus.html"
    },
    {
      name: "Vaishno Devi",
      image: "images/Vaishno Devi.jpeg",
      description: "A revered Hindu temple located in the Trikuta Mountains.",
      location: "Jammu & Kashmir",
      type: "Temple",
      link: "details/vaishno_devi.html"
    },
    {
      name: "Ajmer Sharif Dargah",
      image: "images/Ajmer sharif Dargah.jpeg",
      description: "A prominent Sufi shrine of Khwaja Moinuddin Chishti in Rajasthan.",
      location: "Ajmer, Rajasthan",
      type: "Mosque",
      link: "details/ajmer_sharif.html"
    },
    {
      name: "Akshardham Temple",
      image: "images/Akshardham Temple.jpeg",
      description: "A modern spiritual-cultural complex dedicated to Swaminarayan.",
      location: "Delhi",
      type: "Temple",
      link: "details/akshardham.html"
    },
    {
      name: "Velankanni Church",
      image: "images/Velankanni church.jpeg",
      description: "Known as the 'Lourdes of the East', a famous pilgrimage site for Christians.",
      location: "Tamil Nadu",
      type: "Church",
      link: "details/velankanni.html"
    },
    {
      name: "Jagannath Temple",
      image: "images/Jagannath Temple.jpeg",
      description: "Famous for the Rath Yatra and one of the Char Dhams of Hinduism.",
      location: "Puri, Odisha",
      type: "Temple",
      link: "details/jagannath.html"
    },
    {
      name: "Hazratbal Shrine",
      image: "images/Hazratbal Shrine.jpeg",
      description: "A revered Muslim site that houses a relic believed to be a hair of Prophet Muhammad.",
      location: "Srinagar, Jammu & Kashmir",
      type: "Mosque",
      link: "details/hazratbal.html"
    },
    {
      name: "Ramanathaswamy Temple",
      image: "images/Ramanathaswamy Temple.jpeg",
      description: "One of the twelve Jyotirlingas and part of the Char Dham pilgrimage.",
      location: "Rameswaram, Tamil Nadu",
      type: "Temple",
      link: "details/ramanathaswamy.html"
    },
    {
      name: "St. Paul's Cathedral",
      image: "images/St. Paul's Cathedral.jpeg",
      description: "A historic Anglican cathedral built in Gothic Revival style.",
      location: "Kolkata, West Bengal",
      type: "Church",
      link: "details/paul_cathedral.html"
    },
    {
      name: "Hemkund Sahib",
      image: "images/Hemkund Sahib.jpeg",
      description: "A high-altitude Sikh shrine in the Himalayas.",
      location: "Uttarakhand",
      type: "Gurudwara",
      link: "details/hemkund.html"
    },
    {
      name: "Mahabodhi Temple",
      image: "images/Mahabodhi Temple.jpg",
      description: "Buddhist temple marking the location where Buddha attained enlightenment.",
      location: "Bodh Gaya, Bihar",
      type: "Temple",
      link: "details/mahabodhi.html"
    },
        {
          name: "Somnath Temple",
          image: "images/Somnath Temple.jpeg",
          description: "One of the 12 Jyotirlingas, this temple has been rebuilt several times in history.",
          location: "Veraval, Gujarat",
          type: "Temple",
          link: "details/somnath.html"
        },
        {
          name: "Haji Ali Dargah",
          image: "images/Haji Ali Dargah.jpeg",
          description: "An iconic mosque and tomb located on an islet in Mumbai.",
          location: "Mumbai, Maharashtra",
          type: "Mosque",
          link: "details/haji_ali.html"
        },
        {
          name: "Sai Baba Temple",
          image: "images/Sai Baba Temple.jpeg",
          description: "A famous temple dedicated to Shirdi Sai Baba, visited by millions every year.",
          location: "Shirdi, Maharashtra",
          type: "Temple",
          link: "details/sai_baba.html"
        },
        {
          name: "Dharmasthala Manjunatha Temple",
          image: "images/Dharmasthala Manjunatha Temple.jpeg",
          description: "A well-known Shiva temple that welcomes people from all faiths.",
          location: "Karnataka",
          type: "Temple",
          link: "details/dharmasthala.html"
        },
        {
          name: "Lotus Temple",
          image: "images/Lotus Temple.jpeg",
          description: "A Baháʼí House of Worship famous for its lotus-like architecture and peaceful ambiance.",
          location: "Delhi",
          type: "Temple",
          link: "details/lotus_temple.html"
        },
        {
          name: "Tawang Monastery",
          image: "images/Tawang Monastery.jpeg",
          description: "The largest monastery in India and a major center of Tibetan Buddhism.",
          location: "Arunachal Pradesh",
          type: "Temple",
          link: "details/tawang.html"
        },
            {
              name: "Velankanni Shrine of Our Lady of Good Health",
              image: "images/Velankanni Shrine.jpeg",
              description: "One of the most visited Christian pilgrimage sites in Asia.",
              location: "Tamil Nadu",
              type: "Church",
              link: "details/velankanni_shrine.html"
            },
            {
              name: "Namdroling Monastery (Golden Temple)",
              image: "images/Namdroling Monastery.jpeg",
              description: "A beautiful Tibetan Buddhist monastery in Karnataka.",
              location: "Bylakuppe, Karnataka",
              type: "Temple",
              link: "details/namdroling.html"
            },
            {
              name: "Tarakeswar Temple",
              image: "images/Tarakeswar Temple.jpeg",
              description: "An important Shaiva pilgrimage center dedicated to Lord Shiva.",
              location: "West Bengal",
              type: "Temple",
              link: "details/tarakeswar.html"
            },
            {
              name: "Dargah-e-Hakim Syed Ziauddin",
              image: "images/Dargah-e-Hakim Syed Ziauddin.jpeg",
              description: "A revered Sufi dargah known for its spiritual healing traditions.",
              location: "Andhra Pradesh",
              type: "Mosque",
              link: "details/ziauddin_dargah.html"
            },
                {
                  name: "Amarnath Cave Temple",
                  image: "images/Amarnath Cave Temple.jpeg",
                  description: "A famous shrine dedicated to Lord Shiva, known for its naturally forming ice Shiva Linga.",
                  location: "Jammu & Kashmir",
                  type: "Temple",
                  link: "details/amarnath.html"
                },
                {
                  name: "Kamakhya Temple",
                  image: "images/Kamakhya Temple.jpeg",
                  description: "An important Shakti Peetha, this temple is associated with goddess Kamakhya.",
                  location: "Guwahati, Assam",
                  type: "Temple",
                  link: "details/kamakhya.html"
                },
                {
                  name: "Gurudwara Bangla Sahib",
                  image: "images/Gurudwara Bangla Sahib.jpeg",
                  description: "One of the most prominent Sikh gurdwaras in Delhi, known for its golden dome and sarovar.",
                  location: "Delhi",
                  type: "Gurudwara",
                  link: "details/bangla_sahib.html"
                },
                {
                  name: "Sun Temple, Konark",
                  image: "images/Sun Temple.jpeg",
                  description: "A 13th-century temple dedicated to the Sun God and a UNESCO World Heritage Site.",
                  location: "Konark, Odisha",
                  type: "Temple",
                  link: "details/konark_sun_temple.html"
                },
                {
                  name: "Bodhgaya Mahabodhi Temple",
                  image: "images/Bodhgaya Mahabodhi Temple.jpeg",
                  description: "A Buddhist pilgrimage site where Gautama Buddha is said to have attained enlightenment.",
                  location: "Bodh Gaya, Bihar",
                  type: "Temple",
                  link: "details/mahabodhi_bodhgaya.html"
                },
                {
                  name: "Dwarkadhish Temple",
                  image: "images/Dwarkadhish Temple.jpeg",
                  description: "An ancient temple dedicated to Lord Krishna, part of the Char Dham Yatra.",
                  location: "Dwarka, Gujarat",
                  type: "Temple",
                  link: "details/dwarkadhish.html"
                },
                {
                  name: "ISKCON Temple",
                  image: "images/ISKCON Temple.jpeg",
                  description: "A modern temple dedicated to Lord Krishna and Radha, part of the Hare Krishna movement.",
                  location: "Delhi",
                  type: "Temple",
                  link: "details/iskcon.html"
                },
                {
                  name: "St. Francis Church",
                  image: "images/St. Francis Church.jpeg",
                  description: "One of the oldest European churches in India, originally built in 1503.",
                  location: "Kochi, Kerala",
                  type: "Church",
                  link: "details/st_francis.html"
                },
                {
                  name: "Kalighat Temple",
                  image: "images/Kalighat Temple.jpeg",
                  description: "A major Shakti Peetha and a highly revered Kali temple in eastern India.",
                  location: "Kolkata, West Bengal",
                  type: "Temple",
                  link: "details/kalighat.html"
                },
                {
                  name: "Sankat Mochan Hanuman Temple",
                  image: "images/Sankat Mochan Hanuman Temple.jpeg",
                  description: "A famous temple dedicated to Lord Hanuman located in Varanasi.",
                  location: "Varanasi, Uttar Pradesh",
                  type: "Temple",
                  link: "details/sankat_mochan.html"
                }
              
              
      
      
  ];
  
  const container = document.getElementById("places-container");
  const filter = document.getElementById("typeFilter");
  
  function renderCards(filterType = "All") {
    container.innerHTML = "";
    const filtered = filterType === "All" ? religiousPlaces : religiousPlaces.filter(p => p.type === filterType);
    filtered.forEach(place => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${place.image}" alt="${place.name}">
        <div class="card-content">
          <h3>${place.name}</h3>
          <p>${place.description}</p>
          <p><strong>Location:</strong> ${place.location}</p>
          <button onclick="window.location.href='${place.link}'">More Info</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  filter.addEventListener("change", () => {
    renderCards(filter.value);
  });
  
  renderCards(); // Initial render
  