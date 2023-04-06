

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

<button class ="btn btn-remove">Remove</button>

</div>`;
});
document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
    })

    function deleteCallback(e) {
        console.log(e.target);
        if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Delete') {
            const id = e.target.className.split(" ")[0];
            console.log(id);
            e.preventDefault();
            fetch(`http://localhost:3000/skincareProducts/${Number(id)}`, {
                method: 'DELETE',
            })
            .then((result) => {
                console.log(result);
                e.target.parentNode.parentNode.parentNode.remove();
            })
            .catch((error) => console.log(error));
            e.preventDefault();
        }
    }
    document.addEventListener('click', deleteCallback);
