
const catalogSearch = async (event) => {
    event.preventDefault();

    const type = document.getElementById('firearmType').value.trim();
    const action = document.getElementById('firearmAction').value.trim();
    const caliber = document.getElementById('firearmCaliber').value.trim();


    if (type && action && caliber) {
        // const response = await fetch(`/catalog/${type}/${action}/${caliber}`, {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json' },
        // });
        document.location.replace(`/catalog/${type}/${action}/${caliber}`);
    } 
    // if (response.ok) {

    // } else {
    //     alert(response.statusText);
    // }
};

document.querySelector('.catalog-search-form').addEventListener('submit', catalogSearch);