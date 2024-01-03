//Fetch and display Images from API using JavaScript

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

const accessKey = "vPOaTcZxlkhKH99jH_NZdb0JxGTkhLUMZHAiKkPxo-o";
let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  //create of a new array where we show the results of the search word
  results.map((result) =>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";

    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
  })
  showMoreBtn.style.display ="block";

}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", ()=> {
    page++;
    searchImages();
})
