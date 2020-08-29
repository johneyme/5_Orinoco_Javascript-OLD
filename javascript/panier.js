    function articlesPanier (){
        
        const nomProd = localStorage.getItem('name')
        const priceProd = localStorage.getItem('price')

        
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

        const liPrice = document.createElement('li')
        liPrice.setAttribute('class', 'list-group-item d-flex justify-content-between')
        liPrice.innerHTML = `<span>Total (EUR)</span><strong>${Math.round(priceProd/6.5597)} €</strong>`
        ulList.appendChild(liPrice)

        const butVider = document.getElementById('viderpanier')
        butVider.addEventListener('click', function() {
            localStorage.clear()
        })

        //LocalStorage
        console.log(localStorage)
        }

        


articlesPanier()
