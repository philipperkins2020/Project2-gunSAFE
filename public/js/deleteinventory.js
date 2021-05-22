const deleteProcess = async  (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/personal/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ personal_id: id }),
        headers: { 'Content-Type': 'application/json' }
      });
    
    if (response.ok) {
        document.location.replace('/modinventory');
        // document.location.href="/dashboard";
        // Error message
        } else {
        alert(response.statusText);
        }

  }
  
  document.getElementById('deleteForm').addEventListener('click', deleteProcess);