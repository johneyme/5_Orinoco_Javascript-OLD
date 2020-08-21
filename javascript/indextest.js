const api = "http://localhost:3000/api/cameras";
const fetchUsers = async () => {
    try {
        const res = await fetch(api);
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data);

        function templateItems(data) {
            const cardItems = document.getElementById('items')
            const divRow = document.createElement("row")
            const divCol = document.createElement("row")
            const divRow = document.createElement("row")
  
           
        }
        
        for (let i = 0; i < data.length; i++) {
          templateItems(data[i]);
        }
     
    } catch (error) {
        console.log(error);
    }
}
 
fetchUsers();