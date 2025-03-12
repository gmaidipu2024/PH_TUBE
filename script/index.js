function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

function displayCategories(categories) {
  // get container
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    // console.log(cat);

    // crateElement
    const category = document.createElement("div");
    category.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white"> ${cat.category}</button>
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

  videos.forEach((video) => {
    console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `

    <div class="card bg-base-100  shadow-sm">
    <figure>
        <img
        src="${video.thumbnail}"
        alt="Shoes" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">${video.title}</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
    </div>
            `;
    videoContainer.append(videoCard);
  });
};

loadCategories();
loadVideos();
