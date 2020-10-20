const getBtn = document.getElementById('get-btn');
const sendBtn = document.getElementById('send-btn');
const getBtnPromise = document.getElementById('get-btnPromise');
const postBtnPromise = document.getElementById('post-btnPromise');
var postUrl = 'https://httpbin.org/post'


// GET simple
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://httpbin.org/get'); 
    
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
        email:"alberto.gonzalez@cloudappi.net",
        password: "albertito"
    };
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://httpbin.org/post', true); 
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
    getHttpRequest('GET', 'https://httpbin.org/json')
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
        email: "alberto.gonzalez@cloudappi.net",
        password: "albertito"
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