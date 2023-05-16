function generateLocationCards(count) {
  console.log(1)
    const container = document.querySelector(".locations-container");
  
    for (let i = 0; i < count; i++) {
      const card = document.createElement("div");
      card.className = "location-card";
  
      const cardInfo = document.createElement("div");
      cardInfo.className = "location-card-info";
  
      const img = document.createElement("img");
      img.className = "location-img";
      img.src = `https://picsum.photos/50${i}`;
  
      const cardContact = document.createElement("div");
      cardContact.className = "location-card-contact";
  
      const title = document.createElement("div");
      title.className = "location-title";
      title.textContent = "LUGAR";
  
      const address = document.createElement("div");
      address.className = "location-address";
      address.textContent = "Avenida Reforma 1-11 Zona 100 Edifício X 1 LOCALES 101-102 Guatemala, Guatemala";
  
      const email = document.createElement("div");
      email.className = "location-email";
      email.textContent = "noemail@noemail";
  
      const hr = document.createElement("hr");
  
      const schedule = document.createElement("div");
      schedule.className = "location-schedule";
      schedule.textContent = "Lunes a viernes 08:30 a 18:00, Sábado 09:00 a 15:00";
  
      const parqueo = document.createElement("a");
      parqueo.href = "";
      parqueo.className = "location-parqueo";
      parqueo.textContent = "PARQUEO";
  
      cardContact.appendChild(title);
      cardContact.appendChild(address);
      cardContact.appendChild(email);
      cardContact.appendChild(hr);
      cardContact.appendChild(schedule);
  
      cardInfo.appendChild(img);
      cardInfo.appendChild(cardContact);
  
      card.appendChild(cardInfo);
      card.appendChild(parqueo);
  
      container.appendChild(card);
    }
  }
  
  generateLocationCards(10);