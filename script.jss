document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

function fetchData() {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = 'Loading...';

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            dataDiv.innerHTML = `Error: ${error.message}`;
        });
}

function displayData(posts) {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = ''; // Clear previous data

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        dataDiv.appendChild(postElement);
    });
}
