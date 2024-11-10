const SaveMovie = document.getElementById("SaveMovie");
// ############################################################  remplissage movie  ###############################################################
let dataMovies = movie = JSON.parse(localStorage.getItem("movie")) || [] ;
let indexMovie = 0

SaveMovie.addEventListener("click",function(e){
    e.preventDefault();
    const nameMovie = document.querySelector("#nameMovie").value;
    const textareaMovie = document.querySelector("#textareaMovie").value;
    const priceMovie = document.querySelector("#priceMovie").value;
    const GenreMovie = document.querySelector("#GenreMovie").value;
    const dateMovie = document.querySelector("#dateMovie").value;
    const duréMovie = document.querySelector("#duréMovie").value;
    const autheurMovie = document.querySelector("#autheurMovie").value;
    const imageMovie = document.querySelector("#imageMovie").value;
    const vidéoMovie = document.querySelector("#vidéoMovie").value;
    
    // console.log(nameMovie);
    // console.log(imageMovie);
    // console.log(vidéoMovie);
    
    
        if(!nameMovie || !textareaMovie || !priceMovie || !GenreMovie || !dateMovie || !duréMovie || !autheurMovie || !imageMovie || !vidéoMovie){
            alert("remplir les inputs des movies")
            return
        }
    
        let Movie = {
            id : indexMovie++,
            name:nameMovie,
            Text:textareaMovie,
            price:priceMovie,
            genre:GenreMovie,
            date:dateMovie,
            dure:duréMovie,
            autheur:autheurMovie,
            image:imageMovie,
            video:vidéoMovie,
        }
    
        dataMovies.push(Movie);
        localStorage.setItem("movie",JSON.stringify(dataMovies))
        VideFormMovie();
    
})

// ###################################################################################################################################
const SaveTshirt = document.getElementById("SaveTshir");
// ############################################################  remplissage T-shirt  ################################################
let dataTshirt = movie = JSON.parse(localStorage.getItem("Tshirt")) || [] ;
let indexTshirt = 0

SaveTshirt.addEventListener("click",function(e){
    e.preventDefault();
    const titleTshirt = document.querySelector("#titleTshirt").value;
    const textareaTshirt = document.querySelector("#textTshirt").value;
    const priceTshirt = document.querySelector("#priceTshirt").value;
    const imageTshirt = document.querySelector("#imageTshirt").value;
    
    console.log(titleTshirt);
    console.log(textareaTshirt);
    console.log(priceTshirt);
    console.log(imageTshirt);
    
    
        if(!titleTshirt || !textareaTshirt || !priceTshirt || !imageTshirt){
            alert("remplir les inputs des tshirt")
            return
        }
    
        let Tshirt = {
            id : indexTshirt++,
            name:titleTshirt,
            Text:textareaTshirt,
            price:priceTshirt,
        }
    
        dataTshirt.push(Tshirt);
        localStorage.setItem("Tshirt",JSON.stringify(dataTshirt))
        VideFormTshirt();
    
})

// ###############################################  movie form vide   ######################################################
   
function VideFormMovie(){
    document.querySelector("#nameMovie").value = "";
    document.querySelector("#textareaMovie").value = "";
    document.querySelector("#priceMovie").value = "";
    document.querySelector("#GenreMovie").value = "";
    document.querySelector("#dateMovie").value = "";
    document.querySelector("#duréMovie").value = "";
    document.querySelector("#autheurMovie").value = "";
    document.querySelector("#imageMovie").value = "";
    document.querySelector("#vidéoMovie").value = "";
}

function VideFormTshirt(){
    document.querySelector("#titleTshirt").value = "";
    document.querySelector("#textTshirt").value = "";
    document.querySelector("#priceTshirt").value = "";
    document.querySelector("#imageTshirt").value = "";
}

// ###############################################  les models   ######################################################
function openModalMovie() {
    document.getElementById('ModalMovie').classList.remove('hidden');
}
function openModalTshirt() {
    document.getElementById('ModalTshirt').classList.remove('hidden');
}
function openModalAccessoire() {
    document.getElementById('ModalAccessoire').classList.remove('hidden');
}

function closeModalMovie() {
    document.getElementById('ModalMovie').classList.add('hidden');
}
function closeModalTshirt() {
    document.getElementById('ModalTshirt').classList.add('hidden');
}
function closeModalAccessoire() {
    document.getElementById('ModalAccessoire').classList.add('hidden');
}
// ########################################################################################################################

// ########################################################  Affichage   ##################################################

function afficheTable(category) {
    const tableContainer = document.getElementById('table-container');
    const tableTitle = document.getElementById('table-title');
    const tableChange = document.getElementById('table-change');
    const ModelMovie = document.getElementById("ajouterMovie")
    const ModelTshirt = document.getElementById("ajouterTshirt")
    const ModelAccessoire = document.getElementById("ajouterAccessoire")

    tableContainer.classList.remove('hidden');

    if (category === 'clients') {

        ModelMovie.classList.add("hidden");
        ModelTshirt.classList.add("hidden");
        ModelAccessoire.classList.add("hidden");
        
        tableTitle.textContent = 'Clients Table';
        tableChange.innerHTML = `
            <thead class="bg-gray-100">
                <tr>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">User</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Email</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Date</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-t">
                    <td class="px-6 py-4 flex items-center">
                        <img class="w-10 h-10 rounded-full mr-3" src="https://via.placeholder.com/40" alt="John Michael">
                        <div>
                            <p class="font-semibold">John Michael</p>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <p class="text-gray-500 text-sm">john@creative-tim.com</p>
                    </td>
                    <td class="px-6 py-4 text-gray-600">23/04/18</td>
                    <td class="px-6 py-4" flex items-center>
                        <button  class=" px-4 py-2 rounded"><i class="bi bi-pencil-square text-blue-600"></i></button>
                        <button  class=" px-4 py-2 rounded ml-2"><i class="bi bi-trash text-red-600"></i></button>
                    </td>
                </tr>
            </tbody>
        `;
    }else if (category === 'Movie'){
        ModelMovie.classList.remove("hidden");
        ModelTshirt.classList.add("hidden");
        ModelAccessoire.classList.add("hidden");


        tableTitle.textContent = 'Movie Table';
        tableChange.innerHTML = `
            <thead class="bg-gray-100">
                <tr>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Name</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Description</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Price</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Genre</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Production Date</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Duration</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Author</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Image</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Video</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Actions</th> 
                </tr>
            </thead>
            <tbody>
                <tr class="border-t">
                    <td class="px-6 py-4">Movie</td>
                    <td class="px-6 py-4">Action-packed thriller with intense scenes.</td>
                    <td class="px-6 py-4">$15</td>
                    <td class="px-6 py-4">Action</td>
                    <td class="px-6 py-4">2024-06-15</td>
                    <td class="px-6 py-4">120 min</td>
                    <td class="px-6 py-4">Director</td>
                    <td class="px-6 py-4"><img src="" alt="Movie" class="w-16 h-16 object-cover"></td>
                    <td class="px-6 py-4"><video controls><source src="" type="video/mp4"></video></td>
                    <td class="px-6 py-4 flex items-center">
                        <button  class="px-4 py-2 rounded"><i class="bi bi-pencil-square text-blue-600"></i></button>
                        <button  class="px-4 py-2 rounded ml-2"><i class="bi bi-trash text-red-600"></i></button>
                    </td>
                </tr>
            </tbody>
        `;
    }else if (category === 'Tshirt'){

        ModelMovie.classList.add("hidden");
        ModelTshirt.classList.remove("hidden");
        ModelAccessoire.classList.add("hidden");

        tableTitle.textContent = 'T-shirt Table';
        tableChange.innerHTML = `
        <thead class="bg-gray-100">
            <tr>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Title</th>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Description</th>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Price</th>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Images</th>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-t">
                <td class="px-6 py-4">Classic White T-Shirt</td>
                <td class="px-6 py-4">A simple, classic white t-shirt made of 100% cotton.</td>
                <td class="px-6 py-4">$20</td>
                <td class="px-6 py-4">
                    <div class="flex space-x-2">
                        <img src="" alt="White T-Shirt" class="w-16 h-16 object-cover">
                    </div>
                </td>
                <td class="px-6 py-4 flex items-center">
                    <button  class="px-4 py-2 rounded"><i class="bi bi-pencil-square text-blue-600"></i></button>
                    <button  class="px-4 py-2 rounded ml-2"><i class="bi bi-trash text-red-600"></i></button>
                </td>
            </tr>
        </tbody>
    `;
    }else if (category === 'Accessoires'){


        ModelMovie.classList.add("hidden");
        ModelTshirt.classList.add("hidden");
        ModelAccessoire.classList.remove("hidden");


        tableTitle.textContent = 'Accessoires Table';
        tableChange.innerHTML = `
        <thead class="bg-gray-100">
            <tr>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Title</th>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Description</th>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Price</th>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Images</th>
                <th class="px-6 py-3 text-gray-600 font-medium uppercase">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-t">
                <td class="px-6 py-4">Classic White T-Shirt</td>
                <td class="px-6 py-4">A simple, classic white t-shirt made of 100% cotton.</td>
                <td class="px-6 py-4">$20</td>
                <td class="px-6 py-4">
                    <div class="flex space-x-2">
                        <img src="image1.jpg" alt="White T-Shirt" class="w-16 h-16 object-cover">
                        <img src="image2.jpg" alt="White T-Shirt Back" class="w-16 h-16 object-cover">
                        <img src="image3.jpg" alt="White T-Shirt Closeup" class="w-16 h-16 object-cover">
                    </div>
                </td>
                <td class="px-6 py-4 flex items-center">
                    <button  class="px-4 py-2 rounded"><i class="bi bi-pencil-square text-blue-600"></i></button>
                    <button  class="px-4 py-2 rounded ml-2"><i class="bi bi-trash text-red-600"></i></button>
                </td>
            </tr>
        </tbody>
    `;
    }
    
    
}

// #######################################################################################################################