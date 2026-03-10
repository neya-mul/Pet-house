let buttonContainer = document.getElementById('button-container')

// function for loading all pets catagorie
const loadPetsCategorie = () => {
    let url = 'https://openapi.programming-hero.com/api/peddy/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => displayPetCategorie(data.categories))
}
loadPetsCategorie()

// function for display all categorie pets
const displayPetCategorie = (catagorie) => {
    catagorie.forEach(type => {
        // console.log(type);
        let btn = document.createElement('button')
        btn.className = ' border border-gray-300 rounded mx-auto w-[200px] px-8 py-2 flex gap-1 items-center'
        // btn.onclick = () => loadAllPets(type.category)
        btn.innerHTML = `
         <img src="${type.category_icon}" alt="">
                    <h1 class="text-2xl">${type.category}</h1>
        `
        buttonContainer.appendChild(btn)

    });

}

