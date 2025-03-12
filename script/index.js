 function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then ((res)=> res.json())
    .then((data)=>displayCategories(data.categories))
}
    function displayCategories(categories){
        // get container
    const categoryContainer = document.getElementById("category-container");
    for (let cat of categories ){
        // console.log(cat);
        
        // crateElement
        const category= document.createElement("div")
        category.innerHTML= `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white"> ${cat.category}</button>
            `
        // append Element 
        categoryContainer.append(category);
    }

    }

loadCategories()