let ID = () => Math.random().toString(36).substr(2,9);
// ----Accordian creation---//
let innercaraid = ID();
let outercaraid = ID();

let CreateAccordion = (title,items,id) =>
{
    string = "";
    string+= `<div class="accordion-item">
    <h2 class="accordion-header" id="heading${id}">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}" aria-expanded="true" aria-controls="collapse${id}">
        ${title}
      </button>
    </h2>
    <div id="collapse${id}" class="accordion-collapse collapse show" aria-labelledby="heading${id}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      ${createoutercaroseul(items,id)}
      </div>
    </div>`;
    return string;
};
// ----Accordian creation---//


//----Outer Carousel creation----//

let createoutercaroseul = (items,id) =>
{ 


  string="";
  string+= `<div id="carouselExample${id}" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner" id=${id}>
        ${createinnercarosuel(items,innercaraid)}
      </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample${id}" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample${id}" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;
  return string;

};

//----Outer Carousel creation----//


//----Inner Carousel creation----//

let createinnercarosuel = (items,id) =>
{

  let string = "";

  for(let i=0;i<items.length;i++)
  {

    string+= `<div class="carousel-item ${i === 0?"active":""}" id="${id}">
                  
    <div class="card">
    <a href = ${items[i].link} target="_blank">
    <img src="${items[i].enclosure.link}" class="card-img-top" alt="...">
    </a>
  <div class="card-body">
    <h5 class="card-title">${items[i].title}</h5>
    <p class="card-text">${items[i].author} . ${items[i].pubDate}</p>
  </div>
</div>
  
</div>`;

    
  }
  return string;

};

//----Inner Carousel creation----//
let addcontent = async() =>

{


    //--Accordian creation--//
    for(let i=0;i<magazines.length;i++)
    {

      let accordianid = ID();
      let url=magazines[i];
      let response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${(url)}`);
      let recvreq = await response.json();
      let accordiancreation = CreateAccordion(recvreq.feed.title,recvreq.items,accordianid);
      let mergeaccordian = document.getElementById("accordionExample");
      console.log(mergeaccordian)
      mergeaccordian.innerHTML+= accordiancreation;

    }

    //--Accordian creation--//

}

addcontent();