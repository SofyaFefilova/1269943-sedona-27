var link = document.querySelector(".button");
var searchForm = document.querySelector(".search-form");
var dateEntry = searchForm.querySelector("#date-of-entry");
var form = document.querySelector("form");
var dateDeparture = searchForm.querySelector("#date-of-departure");
var children = searchForm.querySelector("#children");
var adults = searchForm.querySelector("#adults");
link.addEventListener("click", function(event) {
    event.preventDefault();
    if (searchForm.classList.contains("search-visible")) {
        searchForm.classList.add("search-invisible");
        searchForm.classList.remove("search-visible");
        searchForm.classList.remove("search-form-error");
    } else {
        searchForm.classList.add("search-visible");
        searchForm.classList.remove("search-invisible");
    };
    dateEntry.focus();
});
form.addEventListener("submit", function(event) {
    if (!dateEntry.value || !dateDeparture.value || !children.value || !adults.value) {
        event.preventDefault();
        searchForm.classList.remove("search-form-error");
        searchForm.offsetWidth = searchForm.offsetWidth;
        searchForm.classList.add("search-form-error");
    }
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (searchForm.classList.contains("search-visible")) {
            searchForm.classList.remove("search-visible");
            searchForm.classList.add("search-invisible");
            searchForm.classList.remove("search-form-error");
        }
    }
});
