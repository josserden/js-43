fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
