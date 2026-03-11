let buttonContainer = document.getElementById('button-container')
let cards = document.getElementById('cards')


let img = document.getElementById('img')
let names = document.getElementById('name')
let breed = document.getElementById('breed')
let gender = document.getElementById('gender')
let dob = document.getElementById('dob')
let vaccine = document.getElementById('vaccine')
let price = document.getElementById('price')
let info = document.getElementById('info')
let p = document.getElementById('p')


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
        // btn.classList.add('bg-green-300')
        btn.onclick = () => loadAllPets(type.category)
        // btn.onclick = () => loadAllPets(type.category)
        btn.innerHTML = `
         <img src="${type.category_icon}" alt="">
                    <h1 class="text-2xl">${type.category}</h1>
        `
        buttonContainer.appendChild(btn)

    });

}


// function for load all pets

const loadAllPets = (category) => {


    // console.log(category);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(res => res.json())
        .then(data => displayPets(data.data))
}


// function for display cards
const displayPets = (pets) => {
    cards.innerHTML = ''
    pets.forEach(pet => {
        // console.log(pet)
        let card = document.createElement('div')
        card.className = 'card w-full p-3 border border-gray-300 mx-auto'
        // console.log(pet.petId)
        card.innerHTML = `
         <img src="${pet.image}" class="mx-auto" alt="">
                        <h1 class="text-2xl font-bold">${pet.pet_name}</h1>
                        <p>Breed:<span id="breed">${pet.breed ? pet.breed : 'Breed not found'}</span></p>
                        <p>Birth:<span id="birth">${pet.date_of_birth ? pet.date_of_birth : "Date of Birth not found"}</span></p>
                        <p>Gender<span id="gender">${pet.gender ? pet.gender : "Gender not Found"}</span></p>
                        <p>Price: <span id="price">${pet.price ? pet.price : "price not found"}</span></p>
                        <hr>
                        <div class="flex justify-between my-3">
                            <button class="border border-gray-300 rounded p-1"><i class="fa-regular fa-thumbs-up"></i></button>
                            <button class="border border-gray-300 rounded p-1">Adopt</button>
                            <button class="border border-gray-300 rounded p-1" id="details" onclick="loadModalData('${pet.petId}')">Details</button>
                        </div>
        `
        cards.appendChild(card)
    });
    if (cards.children.length === 0) {

        let div = document.createElement('div')
        div.className = "w-full col-span-full mx-auto bg-gray-300 p-5 rounded"
        div.innerHTML = `
        <img src="./images/error.webp" alt="" class="mx-auto">
            <h1 class="text-2xl font-bold text-center">No Information Available</h1> 
            <p class="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at
                its layout. The point of using Lorem Ipsum is that it has a.</p>
       `
        cards.appendChild(div)
    }


}



// function for load modal data
const loadModalData = (petId) => {

    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
        .then(res => res.json())
        .then(data => {
            img.src = data.petData.image
            names.textContent = data.petData.pet_name
            breed.textContent = data.petData.breed
            gender.textContent = data.petData.gender
            dob.textContent = data.petData.date_of_birth
            vaccine.textContent = data.petData.vaccinated_status
            price.textContent = data.petData.price
            info.textContent = data.petData.pet_details
           

            // console.log(data.petData)
        })
    // console.log(petId)
    my_modal_1.showModal()
}


