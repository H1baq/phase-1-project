//wait untill the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded',() =>{

    //container where the services willl be displayed
    const servicescontainer= document.getElementById('service-container');

    //Fetch services from the db.json
    fetch('http://localhost:3000/services')
    .then(response =>response.json()) //converts the response to JSON
    .then(data => {
        console.log('Data collected:',data);

        //Loop through each service in the data
        data.forEach(service => {

            //creation of cards 
            const serviceCard = document.createElement('div');
            serviceCard.className = 'Cards';

            //Heding element for the service 
            const serviceName = document.createElement('h3');
            serviceName.textContent = service.name;

            //Create a paragraph for the service description
            const serviceDescription = document.createElement('p');
            serviceDescription.textContent =service.description;

            //create an image element for the image
            const serviceImage=document.createElement('img');
            serviceImage.src =service.image || 'https://via.placeholder.com/150';
            serviceImage.alt=service.name;

            //Create an icon element 
            const serviceIcon = document.createElement('i');
                serviceIcon.className = 'fas fa-book'; 
            

            //Append elements to the service card
            serviceImage.alt=service.name;
            serviceCard.appendChild(serviceName);
            serviceCard.appendChild(serviceDescription);
            serviceCard.appendChild(serviceImage);
            serviceCard.appendChild(serviceIcon);

            //append the service card to the services container
            servicescontainer.appendChild(serviceCard);
    

        });
    })
    .catch(error => console.error("Fetching services unsuccsseful:", error));

    //adds a smooth scrolling when explore is clicked
    document.getElementById('explore-btn').addEventListener('click', () => {
        document.querySelector('.services').scrollIntoView({ behavior: 'smooth'});
    })
    

});

    const serviceDropdown = document.getElementById('service');
    const bookingForm = document.getElementById('booking-form');
    const bookingMessage = document.getElementById('booking-message');

    // Fetch services and populate the dropdown
    fetch('http://localhost:3000/services')
        .then(response => response.json())
        .then(services => {
            services.forEach(service => {
                const option = document.createElement('option');
                option.value = service.name;
                option.textContent = service.name;
                serviceDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching services:', error));

    // Handle booking form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const selectedService = serviceDropdown.value;

        const newBooking = {
            name: name,
            email: email,
            service: selectedService
        };

        // Send booking data to db.json
        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(response => response.json())
        .then(data => {
            bookingMessage.innerHTML = `<p style="color: green;">Booking Successful! Thank you, ${name}.</p>`;
            bookingForm.reset();
        })
        .catch(error => {
            bookingMessage.innerHTML = `<p style="color: red;">Booking Failed. Try Again!</p>`;
            console.error('Error saving booking:', error);
        });
       
    






