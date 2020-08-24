const api = "http://localhost:3000/api/cameras";

const getProduct = async function () {
  try {
    let response = await fetch(api);
    if (response.ok) {
      let data = await response.json();
      console.log(data)
    

      
      function templateItems(data) {
          const cardItems = document.querySelectorAll('.row')
          const divCol = document.createElement('div');
          divCol.setAttribute('class', 'col-12 col-lg-4 mt-3')
          cardItems[2].appendChild(divCol)

          const card = document.createElement('div');
          card.setAttribute('class', 'card')
          divCol.appendChild(card)

          const cardBody = document.createElement('div');
          cardBody.setAttribute('class', 'card-body')
          card.appendChild(cardBody)

          const cardTitle = document.createElement('div');
          cardTitle.setAttribute('class', 'card-title')
          cardBody.appendChild(cardTitle)
          const titleProd = document.createElement('h5')
          titleProd.textContent = data.name
          cardTitle.appendChild(titleProd)

          const cardText = document.createElement('div');
          cardText.setAttribute('class', 'card-text')
          cardTitle.appendChild(cardText)
          const desProd = document.createElement('p')
          const priProd = document.createElement('p')
          const butProd = document.createElement('div')
          butProd.innerHTML = `<button class="float-right btn btn-warning" type='button'><a href="produit.html?id=${data._id}">Acheter</a></button>`
          desProd.textContent = data.description
          priProd.textContent = `${data.price} Francs => ${Math.round(data.price/6.5597)} €`
          cardText.appendChild(desProd)
          cardText.appendChild(priProd)
          cardText.appendChild(butProd)
          

          const cardImg = document.createElement('img');
          cardImg.setAttribute('class', 'card-img mt-3')
          cardText.appendChild(cardImg)
          const imgProd = data.imageUrl
          cardImg.setAttribute('src', imgProd)
          
        }
      
      for (let i = 0; i < data.length; i++) {
        templateItems(data[i]);
      }
    } 
    else {
      console.error('reponse serveur : ', response.status);
    }
  } catch (e) { //catch permet de capturer l'erreur
    console.log(e) //le console.log de (e) affiche l'erreur en question
  }
}

getProduct();

