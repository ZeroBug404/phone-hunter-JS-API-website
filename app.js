document.getElementById("search-btn").addEventListener("click", () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
//   console.log(searchText);
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));

    searchInput.value = '';
});

// display all search result phones 
const displayPhones = (phones) => {
  // console.log(phones);
  const displayContainer = document.getElementById("display-container");
  displayContainer.textContent = '';
  phones.forEach((phone) => {
    // console.log(phone);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="col">
            <div class="card h-100 p-3">
                <img src="${phone.image}" class="card-img-top w-50 m-auto" alt="...">
                <div class="card-body">
                <h4 class="card-title">Name: ${phone.phone_name}</h4>
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                
                </div>
                <div class="text-center my-2">
                    <button onclick="getDetails('${phone.slug}')" class="btn btn-success w-50 p-2">Details</button>
                </div>
                
            </div>
        </div>
        `;
    displayContainer.appendChild(div);
    });
    if (displayContainer.innerHTML == '') {
        document.getElementById('no-phone-msg').style.display = 'block';
    }
    else{
        document.getElementById('no-phone-msg').style.display = 'none';
    }

};

// get display details 
const getDetails = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.data));
};


// dispaly phone details 
const displayDetails = (detail) => {
//   console.log(detail);
    if (detail.releaseDate === '') {
        document.getElementById('display-text').innerHTML = `
    <div class="row g-0 p-3">
        <div class="col-md-4">
        <img src="${detail.image}" class="img-fluid rounded-start mt-5" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Storage: ${detail.name}</h5>
            <div class="card-footer">
                    <small class="text-muted">Released Date: <span class="text-danger">Phone is not released yet</span></small>
            </div>
            
            <div class="card  mt-3" style="width: 22rem;">
                    <div class="card-header">
                    Features
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${detail.mainFeatures.storage}</li>
                        <li class="list-group-item">${detail.mainFeatures.displaySize}</li>
                        <li class="list-group-item">${detail.mainFeatures.chipSet}</li>
                        <li class="list-group-item">${detail.mainFeatures.memory}</li>
                    </ul>
            </div>

        </div>
        </div>
    </div>
    `;
    } else {
        document.getElementById('display-text').innerHTML = `
    <div class="row g-0 p-3">
        <div class="col-md-4">
        <img src="${detail.image}" class="img-fluid rounded-start mt-5" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h3 class="card-title ">${detail.name}</h3>
            <div class="card-footer">
                    <small class="text-muted">Release Date: ${detail.releaseDate}</small>
            </div>

                <div class="card  mt-3" style="width: 22rem;">
                    <div class="card-header">
                    Features
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${detail.mainFeatures.storage}</li>
                        <li class="list-group-item">${detail.mainFeatures.displaySize}</li>
                        <li class="list-group-item">${detail.mainFeatures.chipSet}</li>
                        <li class="list-group-item">${detail.mainFeatures.memory}</li>
                    </ul>
                </div>
            
            </div>
        </div>
    </div>
    `;
    }

};
