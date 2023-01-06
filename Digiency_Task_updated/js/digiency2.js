let clientDetails = document.querySelector('.client--info');
const URL_CLIENT = '  http://localhost:3000/client';

async function client(){
    let res =await fetch(URL_CLIENT);
    let data = await res.json();
    console.log(data);
    for(let i in data){
        clientDetails.innerHTML+=` <div class="col-md-4 ">
         <div class="card ">
        <div class="row">
            <figure><img src="${data[i].rating}"></figure>
        </div>
        <div class="row">
            <p>${data[i].content}</p>
        </div>
        <div class="row">
            <figure class="col-3"><img src="${data[i].client_img}"></figure>
            <div class="col-6">
                <h5>${data[i].client_name}</h5>
                <p>${data[i].client_role}</p>
            </div>
            <figure class="col-3"><img src="${data[i].doubleqoute_icon}"></figure>
        </div>
        </div>
    
    </div>`}
}
export{clientDetails,URL_CLIENT,client};