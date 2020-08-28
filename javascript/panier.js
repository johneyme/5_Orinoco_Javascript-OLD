    function articlesPanier (){
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
        itemTitle.textContent = "APN N°000"
        div.appendChild(itemTitle)

        const price = document.createElement('span')
        price.setAttribute('class', 'text-muted')
        price.textContent = '€' //Prix de chaques articles
        liList.appendChild(price)

        const liPrice = document.createElement('li')
        liPrice.setAttribute('class', 'list-group-item d-flex justify-content-between')
        liPrice.innerHTML = '<span>Total (EUR)</span><strong>00000€</strong>'
        ulList.appendChild(liPrice)
        }


articlesPanier()
