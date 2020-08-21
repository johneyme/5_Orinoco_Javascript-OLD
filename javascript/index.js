const api = "http://localhost:3000/api/cameras";

const getProduct = async function () {
  try {
    let response = await fetch(api);
    if (response.ok) {
      let data = await response.json();
      console.log(data)
    

      
      function templateItems(data) {
          const cardItems = document.getElementById('items')
          const divRow = document.createElement("row")
          const divCol = document.createElement("row")
          const divRow = document.createElement("row")

         
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