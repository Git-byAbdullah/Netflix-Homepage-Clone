const titles = [
  { rank: 1, poster: "https://m.media-amazon.com/images/M/MV5BMmI0ODNhYmEtOWM4My00MmFlLTk4ZmEtYmQ2MmNjODcxNzU2XkEyXkFqcGc@._V1_.jpg" },
  { rank: 2, poster: "https://i.pinimg.com/564x/d6/3b/e9/d63be93c02bb574e7b87816432dba24f.jpg" },
  { rank: 3, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKWLa9QI_o4h_Pa4dOxkk7kDd7e9l4tW2e64qI2DpRdxS2j21AOi45qHa&s=10" },
  { rank: 4, poster: "https://m.media-amazon.com/images/M/MV5BMTMyOTkzMzg4Ml5BMl5BanBnXkFtZTcwNTkxNzQzNg@@._V1_.jpg" },
  { rank: 5, poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/Jaan-E-Mann_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
  { rank: 6, poster: "HAHK Poster.jpg" },
  { rank: 7, poster: "https://m.media-amazon.com/images/M/MV5BMWRiMDY0ZTAtNDJlOS00MjVmLWFkNTktNDk4YzNmNTY4NmIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { rank: 8, poster: "https://i.pinimg.com/736x/d1/4b/bd/d14bbd48ad2586e99adce52c10a07b92.jpg" },
  { rank: 9, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSb_hYHg89yDG-i31PyvjELgSGz98pBTlnNYcZy0JnFLhcjiLcieTGF8&s=10" },
  { rank: 10, poster: "https://m.media-amazon.com/images/M/MV5BMDcwZDJhOGQtNWI5NS00MmI3LWFkYjMtNTY3OGUxMjgwMjZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
];

const track = document.getElementById('track');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

titles.forEach(t => {
  const card = document.createElement('div');
  card.className = 'card';

  const rankClass = t.rank >= 10 ? 'rank-number two-digit' : 'rank-number';

  card.innerHTML = `
    <div class="rank-wrap"><div class="${rankClass}">${t.rank}</div></div>
    <img class="poster" src="${t.poster}" alt="${t.name} poster">
  `;
  track.appendChild(card);
});

function updateArrows() {
  const maxScroll = track.scrollWidth - track.clientWidth;
  const atStart = track.scrollLeft <= 5;
  const atEnd = track.scrollLeft >= maxScroll - 5;

  leftArrow.classList.toggle('is-hidden', atStart);
  leftArrow.classList.toggle('is-active', !atStart);

  rightArrow.classList.toggle('is-hidden', atEnd);
  rightArrow.classList.toggle('is-active', !atEnd);
}

function scrollRow(direction) {
  const amount = track.clientWidth * 0.9;
  track.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

leftArrow.addEventListener('click', () => scrollRow(-1));
rightArrow.addEventListener('click', () => scrollRow(1));

track.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);

updateArrows();

var questions = document.getElementsByClassName("faq-question");
        for (var i = 0; i < questions.length; i++) 
    {
        questions[i].onclick = function () {
        var clickedItem = this.parentElement;
        var alreadyOpen = clickedItem.classList.contains("open");
        // close all items first
        var allItems = document.getElementsByClassName("faq-item");
        for (var j = 0; j < allItems.length; j++) {
        allItems[j].classList.remove("open");
        var icon = allItems[j].getElementsByClassName("faq-icon")[0];
        icon.innerHTML = "+";
        }
        // open the clicked one if it was not already open
        if (alreadyOpen == false) {
        clickedItem.classList.add("open");
        var clickedIcon = this.getElementsByClassName("faq-icon")[0];
        clickedIcon.innerHTML = "×";
        }
        };
    }