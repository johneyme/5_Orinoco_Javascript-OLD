    function articlesPanier (){
        
        

        
        if(localStorage.length === 0){
          location.replace('http://127.0.0.1:5500/html/paniervide.html')
        }
        /*const camId = product[0];
        const camName = product [1];
        const camPrice = Math.round(product[2]/6.5597);
    

        const nomProd = camName
        const priceProd = camPrice
        */

        
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
        

        

        /*const liPrice = document.createElement('li')
        liPrice.setAttribute('class', 'list-group-item d-flex justify-content-between')
        liPrice.innerHTML = `<span>Total (EUR)</span><strong>${Math.round(priceProd/6.5597)} €</strong>`
        ulList.appendChild(liPrice)*/

        const butVider = document.getElementById('viderpanier')
        butVider.addEventListener('click', function() {
            localStorage.clear()
            butVider.textContent = "Veuillez patienter ..."
            window.setTimeout(function(){location.replace("paniervide.html")}, 2000)
        })


        let product = ""
        for (var i = 0; i < localStorage.length; i++) {
            product = JSON.parse(localStorage.getItem(localStorage.key(i))) 
            const nomProd = product[1]
            const priceProd = product[2]
                
        

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
            
          
        }

        


articlesPanier()
