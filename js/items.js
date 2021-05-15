

// fetch("items.json")


// .then(response=>response.json())
// .then(data=>{
//     myArray = data;
// console.log(data[0].id)
// document.querySelector("#debug").innerText = data[0].id + " "+ data[0].name+ " "+ data[0].rate;

   
// })


// console.log(myArray);

var myArray = []; 
$.getJSON( "./items.json", function( data){ 
  myArray = data; 
  buildTable(myArray)



  function buildTable(data){
      var table = document.getElementById('myTable')

      for (var i = 0; i < data.length; i++){
          var row = `<tr>
                          <td>${data[i].id}</td>
                          <td>${data[i].name}</td>
                          <td>${data[i].rate}</td>
                          <td>${data[i].count}</td>
                    </tr>`
          table.innerHTML += row


      }
  }
  
}); 

