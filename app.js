document.getElementById("search-btn").addEventListener("click", () => {
  const searchText = document.getElementById("search-input").value;

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
});

const displayPhones = (phones) => {
  // console.log(phones);
  const displayContainer = document.getElementById("display-container");
  phones.forEach((phone) => {
    // console.log(phone);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="col">
            <div class="card h-100 p-3">
                <img src="${phone.image}" class="card-img-top w-50 m-auto" alt="...">
                <div class="card-body">
                <h5 class="card-title">Name: ${phone.phone_name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="text-center my-2">
                    <button onclick="getDetails('${phone.slug}')" class="btn btn-success w-50 p-2">Details</button>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
        `;
    displayContainer.appendChild(div);
  });
};

const getDetails = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.data));
};

const displayDetails = (detail) => {
//   console.log(detail);
    document.getElementById('display-text').innerHTML = `
    <div class="row g-0 p-3">
        <div class="col-md-4">
        <img src="${detail.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Storage: ${detail.mainFeatures.storage}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
    </div>
    `;

};
