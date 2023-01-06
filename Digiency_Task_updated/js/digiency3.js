let caseStudy = document.querySelector('.case-study');
const URL_CASESTUDY ='  http://localhost:3000/casestudy';

async function caseStudyProject(){


    let respo =await fetch(URL_CASESTUDY);
    let dataCaseStudy =await respo.json();
    console.log(dataCaseStudy);
    for(let i in dataCaseStudy){
        caseStudy.innerHTML+= `<div class="col-md-4"><img src="${dataCaseStudy[i].img}"></img></div>`
    }
}
export{caseStudy,URL_CASESTUDY,caseStudyProject};