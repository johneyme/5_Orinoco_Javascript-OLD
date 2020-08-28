const api = "http://localhost:3000/api/cameras/"


const panierProduit = {
    lenses: [""],
    _id:"",
    name:"",
    price: 0,
    description:""
}
const postOptions = {
    method:'POST',
    body: JSON.stringify(panierProduit),
    headers: {
        'Content-Type':'application/json'
    }
}
const fetchUsers = async () => {
    try {
        const res = await fetch('api', postOptions);
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
 
fetchUsers();

