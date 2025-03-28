document.addEventListener('DOMContentLoaded',() =>{
    const servicescontainer= document.getElementById('service-container');
    fetch('http://localhost:3000/services')
    .then(response =>response.json())
    .then(data => {
        console.log('Data collected:',data);
        data.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'Cards';

            const serviceName = document.createElement('h3');
            serviceName.textContent = service.name;

            const serviceDescription = document.createElement('p');
            serviceDescription.textContent =service.description;

            const serviceImage=document.createElement('img');
            serviceImage.src =service.image || 'https://via.placeholder.com/150';
            serviceImage.alt=service.name;

            const serviceIcon = document.createElement('i');
                serviceIcon.className = 'fas fa-book'; 
            

            
            serviceImage.alt=service.name;
            serviceCard.appendChild(serviceName);
            serviceCard.appendChild(serviceDescription);
            serviceCard.appendChild(serviceImage);
            serviceCard.appendChild(serviceIcon);
            servicescontainer.appendChild(serviceCard);
    

        });
    })
    .catch(error => console.error("Fetching services unsuccsseful:", error));

    
    document.getElementById('explore-btn').addEventListener('click', () => {
        document.querySelector('.services').scrollIntoView({ behavior: 'smooth'});
    })

});



