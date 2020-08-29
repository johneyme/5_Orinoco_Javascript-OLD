

// Récupération de l'id du produit
const queryString = window.location.search;
const cameraId = new URLSearchParams(queryString).get('id');
console.log(cameraId);
const api = "http://localhost:3000/api/cameras/" + cameraId;



const getProduct = async function () {
  try {
    let response = await fetch(api);
    if (response.ok) {
      let data = await response.json();
      console.log(data)
    

      
      function templateItems() {

        
        // Ajout de la Div Col dans la div row items
        const cardItems = document.getElementById("items")
          const divCol = document.createElement('div');
          divCol.setAttribute('class', 'col-12')
          cardItems.appendChild(divCol)

          // Creation div card dans la div col
          const card = document.createElement('div');
          card.setAttribute('class', 'card')
          divCol.appendChild(card)

          // Creation div card body dans la div card
          const cardBody = document.createElement('div');
          cardBody.setAttribute('class', 'card-body')
          card.appendChild(cardBody)

          // Creation Div title (+ ajout du titre)  dans la div card body
          const cardTitle = document.createElement('div');
          cardTitle.setAttribute('class', 'card-title')
          cardBody.appendChild(cardTitle)
          const titleProd = document.createElement('h5')
          titleProd.textContent = data.name
          cardTitle.appendChild(titleProd)

          // Creation div text/description (+ ajout du prix + ajout du bouton acheter) dans la div cardItems
          const cardText = document.createElement('div');
          cardText.setAttribute('class', 'card-text')
          cardTitle.appendChild(cardText)
          const desProd = document.createElement('p')
          const priProd = document.createElement('p')
          desProd.textContent = data.description
          priProd.textContent = `${data.price} Francs => ${Math.round(data.price/6.5597)} €`
          cardText.appendChild(desProd)
          cardText.appendChild(priProd)

          
          //ajout choix lenses via form
          const form = document.createElement("form"); 
	        form.setAttribute("id", "formSelect");

	        const selectLenses = document.createElement("select"); // ON CREE UN ELEMENT SELECT
	        selectLenses.setAttribute("class", "form-control custom-select mb-4");
	        selectLenses.setAttribute("required", ""); // CHOIX OBLIGATOIRE

	        let optionTitle = document.createElement("option"); // ON CREE UNE PREMIERE OPTION QUI SERVIRA D'INFORMATION
	        optionTitle.setAttribute("selected", ""); // ON CHOISI LA PREMIERE OPTION DE BASE
	        optionTitle.setAttribute("disabled", ""); // ON LA DESACTIVE AFIN QU'ELLE NE SOIT PAS SELECTIONNABLE
	        optionTitle.setAttribute("value", "");
          optionTitle.textContent = "Choisissez la taille de la lentille:";
          cardText.appendChild(form)
          form.appendChild(selectLenses);
          selectLenses.appendChild(optionTitle)

          let lenses = data.lenses;
          for (let lense of lenses) {
              let choixLentille = document.createElement('option');
              choixLentille.textContent = lense;
              selectLenses.appendChild(choixLentille);
          }
          /*
          document.getElementsByName('select').addEventListener('change', (event) => {
            const lensesChosen = event.target.value;
            console.log(lensesChosen)
          })
          */
          
          // Ajout Bouton Ajouter au panier
          const butProd = document.createElement('button')
          butProd.setAttribute('class', 'float-right btn btn-warning')
          butProd.textContent = 'Ajouter au panier'         
          cardText.appendChild(butProd)
          
         /* butProd.addEventListener('click', function(){
 
            let prodDATA = {
                nom: data.name,
                price: data.price,
                _id: data._id
            };
            prodDATA = JSON.stringify(prodDATA);
             
            
            var prodId = localStorage.length+1;
            localStorage[prodId] = prodDATA;
             
            return false;
        });*/

          butProd.addEventListener("click", function remplissageStockage() {
            localStorage.setItem('name', data.name);
            localStorage.setItem('price', data.price);
            localStorage.setItem('_id', data._id);
            butProd.textContent = 'Ajouté !'
          })
          
          /*for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            console.log(key, localStorage.getItem(key))
        }*/


          // Ajout de l'image dans la div card text
          const cardImg = document.createElement('img');
          cardImg.setAttribute('class', 'card-img mt-3')
          cardText.appendChild(cardImg)
          const imgProd = data.imageUrl
          cardImg.setAttribute('src', imgProd) 

          console.log(localStorage)
        } 

        templateItems()

      } else {
      console.error('reponse serveur : ', response.status);
    }
  } catch (e) { //catch permet de capturer l'erreur
    console.log(e) //le console.log de (e) affiche l'erreur en question
  }
}

getProduct();

