(function () {
    // Kiểm tra có faker chưa
    if (typeof faker !== 'undefined') {
        const name = faker.name.findName();
        const email = faker.internet.email();
        const phone = faker.phone.phoneNumber();
        const prefecture_text = faker.address.state();
        
        $('#name').val(name);
        $('#prefecture_text').val(prefecture_text);
    } else {
        console.error('Faker chưa load');
    }
})();