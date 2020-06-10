module.exports = async (page) => {
    page.evaluate(() => {
        document.querySelector('#edit-field-full-name-0-value').value = 'Ambuj Gupta';
        document.querySelector('.form-email').value = 'ambuj.gupta@qed42.com';
        document.querySelector('#edit-field-tell-us-about-your-project-0-value').value = 'A great Digital strategy requires Design thinking as the core guiding principle for its execution. Great Design improves conversions, brand perception, satisfaction and trust among users.';
        document.querySelector('#edit-submit').click();
    });
}