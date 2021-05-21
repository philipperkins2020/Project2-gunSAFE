
const catalogSearch = async (event) => {
    event.preventDefault();

    const type = document.getElementById('firearmType').value.trim();
    const action = document.getElementById('firearmAction').value.trim();
    const caliber = document.getElementById('firearmCaliber').value.trim();


    if (type && action && caliber) {
        document.location.replace(`/catalog/${type}/${action}/${caliber}`);
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.catalog-search-form').addEventListener('submit', catalogSearch);