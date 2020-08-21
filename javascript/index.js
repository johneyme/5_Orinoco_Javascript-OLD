const getProduct = async function() {
    let response = await fetch ('http://localhost:3000/api/cameras')
    let data = await response.json()
    console.log(data)
}

getProduct()