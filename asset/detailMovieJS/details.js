// details.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const filmId = parseInt(params.get("id"));
    const film = DataMovie.find(f => f.id === filmId);
  
    if (film) {
      const detailsContainer = document.getElementById("film-details");
  
      detailsContainer.innerHTML = `
        <div class="film-info-container">
        <div class="film-left">
               <img src="${film.image}" alt="${film.name}" class="film-image">
                 <div id="movieAchat">   
                    <h3 style="color:aliceblue">9.5</h3>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
                    <h3 style="color:aliceblue">${film.price}DH</h3>
                    <button style="width:100px; background-color: aliceblue;color:orange; border-radius:5px">Buy Now</button>
                    <i class="fa-solid fa-cart-plus" style="color: #ffffff; font-size: 20px;"></i>
                  </div> 
        </div>
           <div class="film-info">
            <h1><b>${film.name}</b></h1>
            <p><strong>Description:</strong> <br>${film.text}</p>
            <p><strong>Genre:</strong><br> ${film.genre}</p>
            <p><strong>Date de production:</strong><br> ${film.date}</p>
            <p><strong>Time:</strong><br> ${film.dure}</p>
            <p><strong>Author:</strong><br> ${film.autheur}</p>
            <iframe width="800" height="300" src="${film.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
                
      `;
    } else {
      document.getElementById("film-details").innerHTML = "<p>Film non trouvé.</p>";
    }
  });

    function afficherDetail(num){
      for(let i=0;i<2;i++){
        if(num===1){
          window.location.href = `detailMovie.html?id=${DataMovie.id=num}`;
        }
        if(num===2){
          window.location.href = `detailMovie.html?id=${DataMovie.id=num}`;
        }
        if(num===3){
          window.location.href = `detailMovie.html?id=${DataMovie.id=num}`;
        }
      }
      DataMovie.forEach(film => {
       
      });
    }
  



