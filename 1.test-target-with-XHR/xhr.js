const getBtn = document.getElementById('get-btn');
const sendBtn = document.getElementById('send-btn');
const getBtnPromise = document.getElementById('get-btnPromise');
const postBtnPromise = document.getElementById('post-btnPromise');
var postUrl = 'https://reqres.in/api/register'


// GET simple
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users'); 
    
    xhr.responseType = 'json';
    
    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
    }
    
    xhr.send();
};

// POST simple
const sendData = () => {
    const params = {
        email: "eve.holt@reqres.in",
        password: 'pistol'
    };
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/register', true); 
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(params))
    xhr.onload = () => {
        console.log(xhr.responseText)
    }
};  
    
// GET con PROMISE
const getHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url); 
        
        xhr.responseType = 'json';
        
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.onerror = () => {
            reject("Something went wrong");
        }
        xhr.send();
    });  
    return promise;
};

const getDataPromise = () => {
    getHttpRequest('GET', 'https://reqres.in/api/users')
    .then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
};

// POST con PROMISE
const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url); 
        
        xhr.responseType = 'json';
        
        if(data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }   
        
        xhr.onload = () => {
            resolve(xhr.response);
        }
        xhr.onerror = () => {
            reject("Something went wrong");
        }
        xhr.send(JSON.stringify(data));
    });  
    return promise;
};

const sendDataPromise = () => {
    sendHttpRequest('POST', postUrl, {
        email: "eve.holt@reqres.in",
        password: 'pistol'
    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
};

getBtn.addEventListener('click', getData);
sendBtn.addEventListener('click', sendData);
getBtnPromise.addEventListener('click', getDataPromise);
postBtnPromise.addEventListener('click', sendDataPromise);