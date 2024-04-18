const homeLoad = function() {
    const content = document.querySelector('#content');
    content.textContent = '';
    const headline = document.createElement('h1');
    headline.textContent = 'McFonalds';
    const image = document.createElement('img');
    image.src = 'https://external-preview.redd.it/jvBhm0TowMDDD4hu_K3zFGzXDRJ6PkUJt0m-C6nvITw.jpg?auto=webp&s=5713a524cfe02a9b123ff5183be984a4ecae3a93'
    const description = document.createElement('p');
    description.textContent = 'The best food you can buy for a cheap price!'
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
}

export default homeLoad;