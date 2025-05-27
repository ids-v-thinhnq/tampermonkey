(function () {
    // Kiểm tra có faker chưa
    if (typeof faker !== 'undefined') {
        // Project name
        const name = faker.company.companyName();
        $('#name').val(name);

        // Remarks
        const remarks = faker.lorem.sentence();
        $('#remarks').val(remarks);

        // Client company (chọn ngẫu nhiên option khác rỗng)
        const $clientSelect = $('#client-company-id-select');
        const clientOptions = $clientSelect.find('option').not('[value=""]');
        const randomClient = clientOptions[Math.floor(Math.random() * clientOptions.length)].value;
        $clientSelect.val(randomClient).trigger('change');

        // Country (chọn Japan hoặc ngẫu nhiên)
        $('#country_code').val('JPN').trigger('change');

        // Nếu có vùng Nhật, chọn ngẫu nhiên prefecture
        const $prefecture = $('#japan-region-select');
        if ($prefecture.length) {
            const prefectureOptions = $prefecture.find('option').not('[value=""]');
            const randomPrefecture = prefectureOptions[Math.floor(Math.random() * prefectureOptions.length)].value;
            $prefecture.val(randomPrefecture).trigger('change');
        }

        // BHR initiative (chọn ngẫu nhiên)
        const $bhr = $('#bhr_initiative_id');
        const bhrOptions = $bhr.find('option').not('[value=""]');
        $bhr.val(bhrOptions[Math.floor(Math.random() * bhrOptions.length)].value);

        // Revenue type (chọn ngẫu nhiên)
        const $revenue = $('#revenue_type_id');
        const revenueOptions = $revenue.find('option').not('[value=""]');
        $revenue.val(revenueOptions[Math.floor(Math.random() * revenueOptions.length)].value);

        // Contract
        $('#contract\\[0\\]\\[no\\]').val('C-' + faker.datatype.number({min:1000, max:9999}));
        $('#contract\\[0\\]\\[note\\]').val(faker.lorem.words(3));

        // Quotation
        $('#quotation\\[0\\]\\[no\\]').val('Q-' + faker.datatype.number({min:1000, max:9999}));
        $('#quotation\\[0\\]\\[total_amount\\]').val(faker.finance.amount(100000, 1000000, 0));
        $('#quotation\\[0\\]\\[note\\]').val(faker.lorem.words(3));

        // Invoice
        $('#invoice\\[0\\]\\[no\\]').val('I-' + faker.datatype.number({min:1000, max:9999}));
        $('#invoice\\[0\\]\\[total_amount\\]').val(faker.finance.amount(100000, 1000000, 0));
        $('#invoice\\[0\\]\\[note\\]').val(faker.lorem.words(3));
    } else {
        console.error('Faker chưa load');
    }
})();