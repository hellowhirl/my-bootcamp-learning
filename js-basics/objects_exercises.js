const address = {
    street: 246,
    city: 'Homsburg',
    zipCode: 73871
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);