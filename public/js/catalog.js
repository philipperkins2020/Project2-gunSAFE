const { response } = require("express");

const catalogSearch = async (event) => {
    event.preventDefault();

    const type = document.getElementById('firearmType').value.trim();
    const action = document.getElementById('firearmAction').value.trim();
    const caliber = document.getElementById('firearmCaliber').value.trim();


    if (type && action && caliber) {
        const response = await fetch('/catalog', {
            method: 'GET',
            body: JSON.stringify({
                TYPE: type,
                ACTION: action,
                CALIBERGAUGE: caliber,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
    } 
    if (response.ok) {

    } else {
        alert(response.statusText);
    }
};

document.querySelector('.catalog-search-form').addEventListener('submit', catalogSearch);