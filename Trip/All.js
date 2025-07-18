const places = [
    { name: "Taj Mahal",
       type: "historical", 
       image: "images/tajmahal.jpg" 
      },
    { name: "Varanasi",
       type: "religious", 
       image: "images/varanasi.jpg" 
      },
    { name: "Goa Beach", 
      type: "beaches", 
      image: "images/Goa Beach.jpeg"
     },
    { name: "Manali Hills", 
      type: "mountain", 
      image: "images/Manali.jpeg" 
    },
    { name: "Jim Corbett",
       type: "nature", 
       image: "images/Jim Corbett.jpeg"
       },
    { name: "Rameshwaram", 
      type: "religious",
       image: "images/rameswaram.jpg" 
      },
    { name: "Red Fort", 
      type: "historical",
       image: "images/red-fort.jpg" 
      },
    { name: "Andaman Beach",
       type: "beaches",
        image: "images/andaman.jpg"
       },
    { name: "Valley of Flowers", 
      type: "nature", 
      image: "images/Valley of Flowers.jpeg"
     },
    { name: "Leh-Ladakh", 
      type: "mountain", 
      image: "images/ladakh.jpg" },
        // Nature
        { name: "Sundarbans", 
          type: "nature",
           image: "images/Sundarban.jpeg"
           },
        { name: "Coorg",
           type: "nature",
            image: "images/Coorg.jpeg"
           },
        { name: "Silent Valley", 
          type: "nature",
           image: "images/Silent Valley.jpeg" 
          },
        { name: "Mawsynram", 
          type: "nature",
           image: "images/Mawsynram.jpeg"
           },
        { name: "Chilika Lake",
          type: "nature", 
          image: "images/Chilika Lake.jpeg" },
      
        // Beaches
        { name: "Gokarna", 
          type: "beaches",
           image: "images/Gokarna.jpeg" }
           ,
        { name: "Varkala",
           type: "beaches",
            image: "images/Varkala.jpeg"
           },
        { name: "Radhanagar Beach", 
          type: "beaches",
           image: "images/Radhanagar Beach.jpeg"
           },
        { name: "Kovalam", 
          type: "beaches",
           image: "images/Kovalam.jpeg" 
          },
        { name: "Marina Beach",
           type: "beaches",
            image: "images/Marina Beach.jpeg" 
          },
      
        // Religious
        { name: "Badrinath", 
          type: "religious", 
          image: "images/Badrinath.jpeg" 
        },
        { name: "Golden Temple",
           type: "religious", 
           image: "images/Golden Temple.jpeg"
           },
        { name: "Somnath Temple",
           type: "religious", 
           image: "images/Somnath Temple.jpeg " 
          },
        { name: "Sanchi Stupa", 
          type: "religious",
           image: "images/Sanchi Stupa.jpg"
           },
        { name: "Kashi Vishwanath",
           type: "religious",
            image: "images/Kashi Vishwanath.jpeg"
           },
      
        // Historical
        { name: "Hampi",
           type: "historical", 
           image: "images/Hampi.jpg" 
          },
        { name: "Fatehpur Sikri", 
          type: "historical", 
          image: "images/Fatehpur Sikri.jpg"
         },
        { name: "Mehrangarh Fort", 
          type: "historical", 
          image: "images/Mehrangarh Fort.jpeg"
         },
        { name: "Qutub Minar", 
          type: "historical", 
          image: "images/Qutub minar.jpg"
         },
        { name: "Mahabalipuram", 
          type: "historical",
          image: "images/Mahabalipuram.jpeg" 
          },
      
        // Mountain
        { name: "Spiti Valley", 
          type: "mountain",
          image: "images/Spiti Valley.jpeg"
       },
        { name: "Auli", 
          type: "mountain", 
          image: "images/Auli.jpeg" 
        },
        { name: "Tawang",
           type: "mountain",
            image: "images/Tawang Monastery.jpeg" 
          },
        { name: "Lansdowne",
           type: "mountain", 
           image: "images/Lansdowne.jpeg" 
          },
        { name: "Yumthang Valley", 
          type: "mountain", 
          image: "images/Yumthang Valle.jpg" 
        }
      ];
      
  
  
  function renderPlaces(filter) {
    const container = document.getElementById("placesContainer");
    container.innerHTML = "";
  
    const filteredPlaces = filter === "all" ? places : places.filter(p => p.type === filter);
  
    filteredPlaces.forEach(place => {
      const card = document.createElement("div");
      card.className = "place-card";
      card.innerHTML = `
        <img src="${place.image}" alt="${place.name}" />
        <h3>${place.name}</h3>
        <p>Type: ${place.type.charAt(0).toUpperCase() + place.type.slice(1)}</p>
      `;
      container.appendChild(card);
    });
  }
  
  function filterPlaces() {
    const filterValue = document.getElementById("placeFilter").value;
    renderPlaces(filterValue);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderPlaces("all");
  });
  