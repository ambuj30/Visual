module.exports = async (page) => {
    page.evaluate(() => {

        //Change title
        document.querySelectorAll(".view-content .title").forEach(function (title) {
            title.innerHTML = "This is Test Blog for BackstopJS";
        });

        //Change description
        document.querySelectorAll(".view-content .body").forEach(function (body) {
            body.innerHTML = "It is always a challenging part to decide which type of testing is to be done at the end of a sprint or at the end of a project. Let's understand the right way to apply smoke, sanity, and regression testing techniques.";
        });

        //Change Image
        document.querySelectorAll(".feature-image img").forEach(function (image) {
            image.setAttribute('src', '/sites/default/files/styles/600x400/public/2020-06/Implementing%20Smoke%2C%20Sanity%2C%20and%20Regression%20in%20the%20right%20way.png?itok=1WLfIvDs');
        });

        //tags
        document.querySelectorAll(".tags").forEach(function (tag) {
            tag.innerHTML = "TestTags"
        })
        //Categories
        document.querySelectorAll(".type").forEach(function (category) {
            category.innerHTML = "Test Category"
        })
    });
}