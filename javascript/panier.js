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
        for (var i = 0; i < localStorage.length; i++) {
            product = JSON.parse(localStorage.getItem(localStorage.key(i))) 
            const nomProd = product[0]
            const priceProd = product[1]    
        
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
        /class Client {
            constructor(prenom, nom, email, adresse, pays, zipcode){
            this.prenom = 'prenom'
            this.nom = 'nom'
            this.email = 'email@g.com'
            this.adresse = 'adresse'
            this.pays = 'pays'
            this.zipcode = '01000'
                 }
            }
    
        const prenom = document.getElementById('prenom')
        const nom = document.getElementById('nom')
        const email = document.getElementById('email')
        const adresse = document.getElementById('adresse')
        const pays = document.getElementById('pays')
        const codePostal = document.getElementById('codepostal')
        const btnCommande = document.getElementById('confirmercommande')
        

        btnCommande.addEventListener('click', function(e){
            e.preventDefault()
          Client.push(prenom.value, nom.value, email.value, adresse.value, pays.value, codePostal.value)
          console.log(prenom.value) 
          console.log(nom.value)
          console.log(email.value)
          console.log(pays.value)
          console.log(codePostal.value) 
          console.log(adresse.value) 
                
         
        })
        
        console.log(client)  
        }

        


articlesPanier()
