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



