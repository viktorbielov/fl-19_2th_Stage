const API_URL = 'https://jsonplaceholder.typicode.com/users';
const jsLoadButton = document.querySelector('.load-by-js');
const fetchLoadButton = document.querySelector('.load-by-fetch');
const jsOutput = document.querySelector('.js-output');
const fetchOutput = document.querySelector('.fetch-output');


function sendUsingXHR(method,url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.onloadstart = () => {
            jsOutput.innerText = '...Loading';
        };
        xhr.onload = () => {
            jsOutput.innerText = '';
            // eslint-disable-next-line no-magic-numbers
            if(xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };
        xhr.onerror = () => {
            reject(xhr.response);
        };
        xhr.send();
    });
}

function sendUsingFetch(method,url) {
    return fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            return response.json()
                .then(error => {
                    const e = new Error('An error has occured');
                    e.data = error;
                    throw e;
                });
        });
}

function putElement(url, headers, body, user__title, input__block, user__container, value, previous) {
    fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    })
        .then(response => {
            if(response.ok) {
                user__title.innerText = value;
                input__block.classList.add('hidden');
                user__container.removeChild(input__block);
                return response.json()
                    .then(() => alert(`Name has been changed from ${previous} to ${user__title.innerText}`));
            }
            return response.json()
                .then(error => {
                    const e = new Error('An error has occured');
                    e.data = error;
                    alert(e);
                });
        })
}

function deleteElement(url, id, user__container) {
    fetch(url, {method: 'DELETE'})
        .then(response => {
            if(response.ok) {
                const currentUser = document.querySelector(`[data-id='${id}']`);
                user__container.remove(currentUser);
                return response.json()
                    .then(() => alert(`User with id – ${id} was deleted`));
            } 
            return response.json()
                .then(error => {
                    const e = new Error('An error has occured');
                    e.data = error;
                    alert(e);
                });
        })
}

jsLoadButton.addEventListener('click', () => {
    sendUsingXHR('GET', API_URL)
        .then(data => {
            data.forEach(item => {
                const user__container = document.createElement('div');
                user__container.classList.add('user__container');
                user__container.innerText = item.name;
                jsOutput.append(user__container);
            });
        })
        .catch(error => console.log(error));
}, {once: true});

fetchLoadButton.addEventListener('click',() => {
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading');
    loadingDiv.innerText = '...Loading';
    fetchOutput.append(loadingDiv);
    sendUsingFetch('GET', API_URL)
        .then(data => {
            fetchOutput.removeChild(loadingDiv);
            data.forEach(user => {
                const user__container = document.createElement('div');
                const user__title = document.createElement('div');
                const user__buttons = document.createElement('div');
                const edit_button = document.createElement('button');
                const delete_button = document.createElement('button');
                delete_button.innerText = 'Delete';
                edit_button.innerText = 'Edit';
                user__container.setAttribute('data-id', user.id);
                edit_button.classList.add('edit_button');
                delete_button.classList.add('delete_button');
                user__container.classList.add('user__container');
                user__buttons.classList.add('user__buttons');
                user__title.innerText = user.name;
                user__buttons.append(edit_button,delete_button);
                user__container.append(user__title, user__buttons);
                let isAdded = false;
                edit_button.addEventListener('click', () => {
                    if(!isAdded) {
                        isAdded = true;
                        const input__element = document.createElement('input');
                        const input__block = document.createElement('div');
                        const save__btn = document.createElement('button');
                        save__btn.innerText = 'Save';
                        input__block.append(input__element, save__btn);
                        input__block.classList.add('input__block');
                        user__container.append(input__block);
                        save__btn.addEventListener('click', () => {
                            if(input__element.value) {
                                const headers = {
                                    'Content-Type': 'application/json'
                                }
                                const body = {
                                    name: input__element.value
                                };
                                const previous = user__title.innerText;
                                const value = input__element.value;
                                save__btn.innerText = 'Loading...';
                                putElement(`${API_URL}/${user.id}`,headers,body,
                                user__title,input__block,user__container,value,previous);
                                isAdded = false;
                            }
                        });
                    }
                });
                delete_button.addEventListener('click', (e) => {
                    e.target.innerText = 'Loading...';
                    deleteElement(`${API_URL}/${user.id}`,user.id,user__container);
                });
                fetchOutput.append(user__container);
            });
        });
},{once:true});