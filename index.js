(function () {
    // Kiểm tra có faker chưa
    if (typeof faker !== 'undefined') {
        const name = faker.name.findName();
        const email = faker.internet.email();
        const phone = faker.phone.phoneNumber();
        const remarks = faker.address.state();
        
        $('#name').val(name);
        $('#remarks').val(remarks);
    } else {
        console.error('Faker chưa load');
    }
})();