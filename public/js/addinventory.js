const addInventoryProcess = async (event) => {
    event.preventDefault();

    const manufacturer = document.getElementById("manufacturer").value.trim();
    const model = document.getElementById("model").value.trim();
    const type_id = document.getElementById("type_id").value.trim();
    const serial_number = document.getElementById("serial_number").value.trim();
    const caliber = document.getElementById("caliber").value.trim();
    const barrel_len = document.getElementById("barrel_len").value.trim();
    const action = document.getElementById("action").value.trim();
    const purchase_date = document.getElementById("purchase_date").value.trim();
    const sloc = document.getElementById("sloc").value.trim();
    const cost = document.getElementById("cost").value.trim();
    // const user_id = document.getElementById("user_id").value.trim();
    
    if (manufacturer) {
        const gunData = {
            manufacturer: manufacturer,
            model: model,
            type_id: type_id,
            serial_number: serial_number,
            caliber: caliber,
            barrel_len: barrel_len,               
            action: action,
            purchase_date: purchase_date,
            sloc: sloc,
            cost: cost,
            // user_id: user_id
        }

        console.log(gunData)
        const response = await fetch('/api/personal/', {
            method: "POST",
            body: JSON.stringify(gunData),
            headers: { "Content-Type": "application/json" },
        });
            console.log(response.body)
        if (response.ok) {
            document.location.replace("/mysafe");
        } else {
            alert(response.statusText);
        }
    };
};

document.querySelector(".addinventoryform").addEventListener("submit", addInventoryProcess);
