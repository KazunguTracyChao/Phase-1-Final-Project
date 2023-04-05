fetch('https://fakestoreapi.com/products').then ((data)=>{
//console.log(data);
return data.json();
}).then((completedata)=>{
// console.log(completedata);

let data1="";
completedata.map((values)=>{
data1+=` <div class="card">
<h1 class="title">${values.title}</h1>
<img src=${values.image} alt="img" class="images">
<p>${values.description}</p>
<p class="category">${values.category}</p>
<p class="price">${values.price}</p>
</div>`;
});
document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
    })

document.querySelector('.grid-container').innerHTML=card
    const deleteButtons = document.querySelectorAll(".btn-remove");
    console.log(deleteButtons)
    deleteButtons.forEach((btn)=> {
     btn.addEventListener('click', (e)=>{
       console.log (e.target)
       e.target.parentNode.remove()
     })    
    })