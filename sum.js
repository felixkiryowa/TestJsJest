const axios = require('axios');

const functions = {
    sum :  function sum(a, b) {
        return a + b ;
    },
    isNull:() => null,
    isUndefined: () => undefined,
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstname:'Francis',
            lastname:'Kiryowa'
        }

        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(error => console.log(error))
    
}


module.exports = functions;