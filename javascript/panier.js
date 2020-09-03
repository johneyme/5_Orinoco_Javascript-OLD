    function articlesPanier (){
        
        

        
        if(localStorage.length === 0){
          location.replace('http://127.0.0.1:5500/html/paniervide.html')
        }


        
        const rowId = document.getElementById('contenupanier')
        const divCol = document.createElement('div')
        divCol.setAttribute('class', 'col-md-8 order-md-2 mb-4')
        rowId.appendChild(divCol)


        const panierTitle = document.createElement('h4')
        panierTitle.setAttribute('class', 'd-flex justify-content-between align-items-center mb-3')
        panierTitle.innerHTML = '<span class="text-muted">Panier</span>'
        divCol.appendChild(panierTitle)

        const ulList = document.createElement('ul')
        ulList.setAttribute('class', "list-group mb-3")
        divCol.appendChild(ulList)

      
    

        let product = ""

        const cartInformation = {
            contact: {},
            products: []
    }
        for (var i = 0; i < localStorage.length; i++) {
            
            product = JSON.parse(localStorage.getItem(localStorage.key(i))) 
            const nomProd = product[1]
            const priceProd = product[2] 
            const idProd = product[0]   
        
        const liList = document.createElement('li')
        liList.setAttribute('class', 'list-group-item d-flex justify-content-between lh-condensed')
        ulList.appendChild(liList)

        const div = document.createElement('div')
        liList.appendChild(div)


        const itemTitle = document.createElement('h6')
        itemTitle.setAttribute("class", 'my-0')
        itemTitle.textContent = nomProd
        div.appendChild(itemTitle)

        const price = document.createElement('span')
        price.setAttribute('class', 'text-muted')
        price.textContent = `${Math.round(priceProd/6.5597)} €` 
        liList.appendChild(price)
        
        
        cartInformation.products.push(idProd)
        
            };
        

       
        
        console.log(localStorage)
                
       
        const liPrice = document.createElement('li')
        liPrice.setAttribute('class', 'list-group-item d-flex justify-content-between')
        liPrice.innerHTML = `<span>Total (EUR)</span><strong>0 €</strong>`
        ulList.appendChild(liPrice)

        const butVider = document.getElementById('viderpanier')
        butVider.addEventListener('click', function() {
        localStorage.clear()
        butVider.textContent = "Veuillez patienter ..."
        window.setTimeout(function(){location.replace("paniervide.html")}, 2000)
        })
        
    
        const prenomId = document.getElementById('prenom')
        const nomId = document.getElementById('nom')
        const adresseId = document.getElementById('adresse')
        const villeId = document.getElementById('ville')
        const emailId = document.getElementById('email')
        const btnCommande = document.getElementById('confirmercommande')
        

        const validationForm = () => {

            const isNotEmpty = value => value !== ""  ? true:false;
            const isLongEnough = value => value.length >= 2 ? true:false;
            const containNumber = /[0-9]/;
            const doNotContainNumber = value => !value.match(containNumber) ? true : false;
            const specialCharacter = /[$£°&+,:;=?@#|'<>.^*()!"{}_]/
            const doNotContainSpecialCharacter = value => !value.match(specialCharacter) ? true: false;
            const regexEmail = /.+@.+\..+/
            const isValidEmail = (value) => value.match(regexEmail)? true : false;
            const isValidInput = (value) => isNotEmpty(value) && isLongEnough(value) && doNotContainNumber(value) && doNotContainSpecialCharacter(value);

        /*const prenomErrorMessage = document.getElementById('prenominvalide')
        const nomErrorMessage = document.getElementById('prenominvalide')
        const adresseMessage = document.getElementById('prenominvalide')
        const villeErrorMessage = document.getElementById('prenominvalide')
        const emailErrorMessage = document.getElementById('prenominvalide')*/
            const prenom = prenomId.value
            const nom = nomId.value
            const adresse = adresseId.value
            const ville = villeId.value
            const email = emailId.value

          if(isValidInput(prenom)) {
              true
          } else {
              prenomId.setAttribute('placeholder', 'Prenom requis !')
              return false
          }

          if(isValidInput(nom)) {
              true
          } else {
              nomId.setAttribute('placeholder', 'Nom requis !')
              return false
          }

          if(isNotEmpty(adresse) && isLongEnough(adresse)) {
              true
          } else {
              adresseId.setAttribute('placeholder', 'Adresse requise !')
              return false
          }
          if(isValidInput(ville)) {
              true
          } else {
            villeId.setAttribute('placeholder', 'Ville requise !')
            return false
          }

          if(isValidEmail(email)) {
              true
          } else {
            emailId.setAttribute('placeholder', 'Email requis !')
            return false
          }

          return cartInformation.contact = {
                "prenom": prenom,
                "nom": nom,
                "adresse": adresse,
                "ville": ville,
                "email": email
                }
        }

        const postData = async (method, url, dataElt) =>{
            const response = await fetch (url, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method,
                body: JSON.stringify(dataElt)
            })
            return await response.json();
        }
       

        btnCommande.addEventListener('click', async function(e){
            e.preventDefault()
            if(validationForm()){
            
        btnCommande.textContent = "Veuillez patienter ..."
        const formValid = validationForm()
        if (formValid !== false){
            const response = await postData('POST', 'http://localhost:3000/api/cameras/order', cartInformation)
            //window.setTimeout(function(){location.replace("confirmation.html")}, 2000)
        }
    } else {
        validationForm()
        btnCommande.textContent = "Veuillez remplir correctement les champs ..."
    }
        //localStorage.clear()
        
        console.log(cartInformation)
            })

        }

articlesPanier()




/*class Client {
    constructor(prenom, nom, email, adresse, pays, zipcode){
    this.prenom = 'prenom'
    this.nom = 'nom'
    this.email = 'email@g.com'
    this.adresse = 'adresse'
    this.pays = 'pays'
    this.zipcode = '01000'
         }
    }
Client.push(prenom.value, nom.value, email.value, adresse.value, pays.value, codePostal.value)*/