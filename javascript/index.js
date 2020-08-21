const api = "http://localhost:3000/api/cameras";

const getProduct = async function () {
  try {
    let response = await fetch(api);
    if (response.ok) {
      let data = await response.json();
      console.log(data)
    

      
      function templateItems(data) {
          const cardItems = document.getElementById('items')
          
          const divRow = document.createElement('div');
          divRow.setAttribute('class', 'row')
          cardItems.appendChild(divRow)

          const divCol = document.createElement('div');
          divCol.setAttribute('class', 'col-12 col-lg-4')
          divRow.appendChild(divCol)

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


/*
<div class="row">
        <div class="col-12 col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Item 1</h5>
              <p class="card-text">blablabla</p>
            </div>
          </div>
        </div>

*/
