let cardList = document.querySelector('.card-details');
const API_URL = 'https://jsonplaceholder.typicode.com/';
const USER = `${API_URL}users`;
async function getApiData(){
    let res = await fetch(USER);
    let data = await res.json();
    console.log(data);
         for(let i=0;i<data.length;i++){
            cardList.innerHTML+= ` <div class="col-md-3">
                                <div class="card-body">
                                    <div class="card">
                                        <h5 class="card-title">NAME : ${data[i].name}</h5>                           
                                        <p class="card-text">USER NAME :${data[i].username}</p>
                                        <p class="card-text">EMAIL : ${data[i].email}</p>
                                        <p>ADDRESS :</p>
                                        <p class="card-text">street : ${data[i].address.street}</p>
                                        <p class="card-text">suite : ${data[i].address.suite}</p>
                                        <p class="card-text">city : ${data[i].address.city}</p>
                                        <p class="card-text">zipcode : ${data[i].address.zipcode}</p>
                                    </div>
                                    <button class="btn btn-primary">view</button>
                                    <button class="btn btn-info">edit</button>
                                    <button class="btn btn-danger">Delete</button>
                                </div>
                            </div>`
                    }
}
getApiData();