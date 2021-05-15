function getdetails(){
    var id = document.getElementById("updatedid").value;
    console.log(id)
    var name = document.getElementById("updatedpname").value;
    console.log(name)
    var type = document.getElementById("updatedPtype").value;
    console.log(type)
    var price = document.getElementById("updatedprice").value;
    console.log(price)

    // PUT to the resource with id = 5 to change the name of task
    fetch(`http://localhost:8001/Product/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            pname: name,
            Ptype: type,
            price: price
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    
    })
    .then(response => response.json())
    .then(json => console.log(json));



}

function deleteproduct(){

    var id = document.getElementById("deleteid").value;
    console.log(`Id is ${id}`)
           // DELETE task with id = 1
           fetch(`http://localhost:8001/Product/${id}`, {
            method: 'DELETE'
        })
        // empty response: {}
}
