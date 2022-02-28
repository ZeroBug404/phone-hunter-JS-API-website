document.getElementById('search-btn').addEventListener('click', () => {
    const searchText = document.getElementById('search-input').value;
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
})

const displayPhones = (phones) => {
    console.log(phones);
}