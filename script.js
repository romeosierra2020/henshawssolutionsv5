import tags from "./solutionsData/tags.js";
import tasks from "./solutionsData/tasks.js";

const appContainer = document.querySelector("#app-container");

const createTagItems = (tags) => {
    let htmlTagItems = `<div class="category-container">`;
    tags.forEach((tag) => {
        htmlTagItems += `
            <div class="category-card">
                <div class="category-heading">
                    <h3>${tag.tagCategory}</h3>
                    <div class="arrow">
                        <span class="toggle-category-left"></span>
                        <span class="toggle-category-right"></span>
                    </div>
                </div>
                <ul>
        `;
        tag.tags.forEach((item) => {
            htmlTagItems += `
                <li class="category-item">
                    <p>${item.tagLabel}</p>
                    <div class="selected">
                        <span class=""></span>
                        <span class=""></span>
                    </div>
                </li>
            `;
        });
        htmlTagItems += `
                    </ul>
                </div>

        `;
    });
    htmlTagItems += `</div>`
    return htmlTagItems;
}

let htmlTagContainer = createTagItems(tags);
appContainer.innerHTML = htmlTagContainer;

appContainer.addEventListener("click", (event) => {
    event.path[
        event.path.length - 8
    ].childNodes[1].childNodes[1].classList.toggle(
        "toggle-category-left-active"
    );
    event.path[
        event.path.length - 8
    ].childNodes[1].childNodes[3].classList.toggle(
        "toggle-category-right-active"
    );
    event.path[event.path.length - 7].childNodes[3].classList.toggle('collapsed')
    for(let i = 1; i < event.path[event.path.length - 7].childNodes[3].childNodes.length; i += 2) {
        event.path[event.path.length - 7].childNodes[3].childNodes[i].classList.toggle('hidden');
    }

});
