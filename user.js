document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('incident-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Extract form values
        var location = document.getElementById('location').value;
        var incidentType = document.getElementById('incident-type').value;
        var details = document.getElementById('details').value;
        var proof = document.getElementById('proof').value; // Adjust for actual handling of file upload

        // Perform further actions (e.g., send data to a server)
        console.log('Location:', location);
        console.log('Incident Type:', incidentType);
        console.log('Details:', details);
        console.log('Proof:', proof);
        // You can add logic here to handle the reported incident.
    });
});
