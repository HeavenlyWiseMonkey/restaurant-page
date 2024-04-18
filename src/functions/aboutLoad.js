const aboutLoad = function () {
    const content = document.querySelector('#content');
    content.textContent = '';
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Info';
    const phoneNumber = document.createElement('h2');
    phoneNumber.textContent = '(613) 226-7604';
    const email = document.createElement('h2');
    email.textContent = 'mcfonalds@email.com';
    const address = document.createElement('h2');
    address.textContent = '261 Centrepointe Dr';
    content.appendChild(headline);
    content.appendChild(phoneNumber);
    content.appendChild(email);
    content.appendChild(address);
}

export default aboutLoad;