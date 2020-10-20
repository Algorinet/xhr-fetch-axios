const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
var postUrl = 'https://reqres.in/api/register';

const getData = () => {
    axios.get('https://reqres.in/api/users').then(response => {
        console.log(response);
    });
};
    

const sendData = () => {
    axios.post(postUrl, {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    },
    {
        headers: {
            'X-IBM-Client-Id':'a3d546e1-4e25-4d7b-bce5-8d760010f453' 
        }
    }).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err, err.response);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);