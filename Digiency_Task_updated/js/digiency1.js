let designs = document.querySelector('#ourservices');
const URL_SERVICES ='  http://localhost:3000/services';

async function home(){
    let resp = await fetch (URL_SERVICES);
    let dataService = await resp.json();
    console.log(dataService);
for(let i=0;i<dataService.length;i++){
    designs.innerHTML+=`<div id="ourservices--div">
    <div class="ourservices--img--div">
        <figure class="interface--img"><img src="${dataService[i].Image}"/></figure>
        <figure class="interface--num"><img src="${dataService[i].num}"/></figure>
    </div>
    <h2 class=" grapic">${dataService[i].Title}</h2>
    <p class="website">${dataService[i].Subtitle}</p>
    <p class="website--content">${dataService[i].Content}</p>

</div>`
}
}
export{designs,URL_SERVICES,home};