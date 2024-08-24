/*yULmHsqMRLgC3efh9hpvQX7nnPnKAIywNh3HeCHZ2Bk*/
//var ApiUrl =
// "https://api.unsplash.com/search/photos?page=1&query=bird&client_id=yULmHsqMRLgC3efh9hpvQX7nnPnKAIywNh3HeCHZ2Bk";

var searchField = document.querySelector("input");
var btn = document.querySelector("button");
var imageShow = document.querySelector(".Image");
var moreBtn = document.querySelector(".btn");

var page = 1;
btn.addEventListener("click", (e) => {
  e.preventDefault();
  page = 1;
  var searchValue = searchField.value;
  getApi(searchValue, page);
  moreBtn.style.display = "block";
});
moreBtn.addEventListener("click", () => {
  page++;
  var searchValue = searchField.value;
  getApi(searchValue, page);
});
async function getApi(value, page) {
  var data = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=yULmHsqMRLgC3efh9hpvQX7nnPnKAIywNh3HeCHZ2Bk&per_page=12`
  );
  if (page == 1) {
    imageShow.innerHTML = "";
  }
  var data = await data.json();
  data = data.results;
  data.map((result) => {
    var img = document.createElement("img");
    var imgLink = document.createElement("a");
    img.classList.add("imgStyle");
    imgLink.href = result.links.html;
    imgLink.appendChild(img);
    img.src = result.urls.small;
    imageShow.appendChild(imgLink);
  });
}
