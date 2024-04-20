const contactLoad = function () {
    const content = document.querySelector('#content');
    content.textContent = '';
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Info';
    const box = document.createElement('div');
    box.classList.add('box');
    const phoneNumber = document.createElement('h2');
    phoneNumber.textContent = '(613) 226-7604';
    const email = document.createElement('h2');
    email.textContent = 'mcfonalds@email.com';
    const address = document.createElement('h2');
    address.textContent = '261 Centrepointe Dr';
    const mission = document.createElement('h1');
    mission.textContent = 'Misison';
    const description = document.createElement('h3');
    description.textContent = 'Our goal is to provide scrumptious and affordable food for all those in need!';
    content.appendChild(headline);
    box.appendChild(phoneNumber);
    box.appendChild(email);
    box.appendChild(address);
    content.appendChild(box);
    content.appendChild(mission);
    content.appendChild(description);
}

export default contactLoad;