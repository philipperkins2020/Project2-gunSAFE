const editProcess = async  (event) => {
    event.preventDefault();

      //Getting information for the edit
    const manufacturer = document.querySelector("#persMan").value.trim();
    const model = document.querySelector("#persMod").value.trim();
    const type_id = document.querySelector("#persTyp").value.trim();
    
    const serial_number = document.querySelector("#persSer").value.trim();
    const caliber = document.querySelector("#persCal").value.trim();
    const barrel_len = document.querySelector("#persBar").value.trim();

    const action = document.querySelector("#persAct").value.trim();
    const purchase_date = document.querySelector("#persPur").value.trim();
    const sloc = document.querySelector("#persSlo").value.trim();
    
    const cost = document.querySelector("#persCos").value.trim();
    // const user_id = document.querySelector("#persUse").value.trim();

    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1
    ];
    
     // use the update route to update the inventory
    const response = await fetch(`/api/personal/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ manufacturer,
                              model,
                              type_id,
                              serial_number,
                              caliber,
                              barrel_len,
                              action,
                              purchase_date,
                              sloc,
                              cost,
                              // user_id,
                              }),
        headers: { 'Content-Type': 'application/json' }
      });
    
    if (response.ok) {
        document.location.replace('/modinventory');
        // document.location.href="/modinventory";
       
        // otherwise, display the error
        } else {
        alert(response.statusText);
        }

  }
  
  document.querySelector(".editInventoryForm").addEventListener('submit', editProcess);
 