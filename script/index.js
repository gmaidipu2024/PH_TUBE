function removeActiveClass(){
  const activeClass = document.getElementsByClassName("active");

  for(let btn of activeClass){
    btn.classList.remove('active')
  }
}

function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

function loadVideos(text = "") {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${text}`)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      document.getElementById("btn-all").classList.add("active");
      displayVideos(data.videos);
    });
};

    const loadCatagoriesVideos = (id)=>{

    const url= `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
   
      fetch (url)
      .then ((res)=>res.json())
      .then ((data)=>{
        removeActiveClass();
        const clickBtn= document.getElementById(`btn-${id}`)
        clickBtn.classList.add("active");
        displayVideos(data.category)
      })

    };
    

const loadVideoDetails =(videoI)=>{
  console.log(videoI);

 const url= `https://openapi.programming-hero.com/api/phero-tube/video/${videoI}`;
  fetch(url)
  .then((res)=>res.json())
  .then ((data)=> videoDetails(data.video))
  

};

  const videoDetails =(video) =>{
  console.log(video);
  document.getElementById("modal_details").showModal();
  const details =document.getElementById("details_container");
  details.innerHTML= `
    
    <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
  `
  }


// function
function displayCategories(categories) {
  // get container
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    // console.log(cat);

    // crateElement
    const category = document.createElement("div");
    category.innerHTML = `
        <button id="btn-${cat.category_id}" onclick="loadCatagoriesVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white"> ${cat.category}</button>
            `;
    // append Element
    categoryContainer.append(category);
  }
}

// {
//     "category_id": "1003",
//     "video_id": "aaac",
//     "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
//     "title": "Laugh at My Pain",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
//             "profile_name": "Kevin Hart",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "13885"
//     },
//     "description": "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
// }
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video_container");
  videoContainer.innerHTML= "";

  if(videos.length == 0){
  videoContainer.innerHTML= `
   <div class="col-span-full flex flex-col justify-center items-center py-5">
        <img  class="w-[120px]" src="./img/Icon.png" alt="">
        <h2 class="text-2xl font-semibold">
            Oops!! Sorry, There is no content here
        </h2>
    </div>
  
  `;
  return
  }

  videos.forEach((video) => {
    
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `

    <div class="card bg-base-100  s">
        <figure class="relative">
            <img class= "w-full h-[150px] object-cover"

            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute bottom-2 right-2 text-white bg-black px-2 rounded-md text-sm">
                3hrs 56 min ago
            </span>
        </figure>

        <div class=" flex gap-5  py-5"> 
            <div>
                
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 px-0 rounded-full ring ring-offset-2">
                        <img src="${video.authors[0].profile_picture}" alt="">
                    </div>
                  </div>
            </div>
            <div>
                <h2>Building a Winning </h2>
                <p class="text-sm text-gray-800 flex gap-1">${video.authors[0].profile_name}

                ${video.authors[0].verified== true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""> `:``}

                    
                    
                    </p>

                    <p class="text-sm text-gray-800" >${video.others.views} views</p>
                
            </div>
            
        </div>
        <button onclick= loadVideoDetails('${video.video_id}') class="btn btn-wide">Show Details</button>
    </div>
            `;
    videoContainer.append(videoCard);
  });
};
document.getElementById("inputData").addEventListener("keyup", (e)=>{

  const input = e.target.value;
  loadVideos(input);
  

})

loadCategories();

