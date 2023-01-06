let ourBlog = document.querySelector('.our-blog');
let URL_BLOG = ' http://localhost:3000/blog';

async function blog(){
    let respon = await fetch(URL_BLOG);
    let dataBlog = await respon.json();
    console.log(dataBlog);
    for(let i in dataBlog){

        ourBlog.innerHTML+=`
        <div class="col-4">
            <div class="card">
            <img src="${dataBlog[i].img}">
            </div>
            <div class="row">
                <p>${dataBlog[i].Title}</p>
            </div>
            <div class="row">
                
            </div>
            <div class="row">
              <p>${dataBlog[i].content}</p>
            </div>
           
            <button class="bg-orange" id="btn-blog">Read More</button>
            
        </div`
    }

}
export{ourBlog,URL_BLOG,blog};