$(".locaties").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 642,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


// var nav = document.querySelector('nav');
// var heroSection = document.getElementById('hero');

// window.addEventListener('scroll', function() {
//   var scrollY = window.scrollY;

//   if (scrollY > heroSection.clientHeight) {
//     // Scrolling down, make navbar sticky
//     nav.style.position = 'fixed';
//     nav.style.backgroundColor = 'white';
//   } else {
//     // Scrolling to the top or in the hero section, make navbar transparent
//     nav.style.position = 'sticky';
//     nav.style.backgroundColor = 'transparent';
//   }
// });


// var searchInput = document.getElementById('search');
//   var suggestionsContainer = document.getElementById('suggestions');
//   var apiUrl = 'https://www.goticketshop.nl/api/search/?q=';

//   function fetchSuggestions(query) {
//     fetch(apiUrl + query)
//       .then(response => response.json())
//       .then(data => displaySuggestions(data))
//       .catch(error => console.error('Error:', error));
//   }

//   function displaySuggestions(suggestions) {
//     suggestionsContainer.innerHTML = '';

//     if (suggestions.length === 0) {
//       suggestionsContainer.style.display = 'none';
//       return;
//     }

//     suggestions.forEach(suggestion => {
//       var suggestionItem = document.createElement('div');
//       suggestionItem.className = 'suggestion-item';
//       suggestionItem.textContent = suggestion;
//       suggestionItem.addEventListener('click', function() {
//         searchInput.value = suggestion;
//         suggestionsContainer.style.display = 'none';
//       });

//       suggestionsContainer.appendChild(suggestionItem);
//     });

//     suggestionsContainer.style.display = 'block';
//   }

//   searchInput.addEventListener('input', function() {
//     var query = searchInput.value.trim();

//     if (!query) {
//       // If the query is empty, hide suggestions
//       suggestionsContainer.style.display = 'none';
//     } else if (query.length >= 3) {
//       // If the query has at least 3 characters, fetch and display suggestions
//       fetchSuggestions(query);
//     } else {
//       suggestionsContainer.style.display = 'none';
//     }
//   });

var suggestionsContainer = document.getElementById('suggestions');
//   // Close suggestions when clicking outside the suggestions box
 




var searchInput = document.getElementById('search');
var suggestionsContainer = document.getElementById('suggestions');

searchInput.onkeyup = function(){
    let result = [];
    let input = searchInput.value;

    const url = `https://www.goticketshop.nl/api/search/?q=${input}`;

    fetch(url).then((response) => response.json())
    .then((data) => {
    
      console.log(data);

      const suggestions = document.getElementById('suggestions');

      // if(input == null){
      //   suggestions.style.height = '0px'
      // }

      // suggestions.style.height = '300px'



      suggestions.innerHTML = ''

      
     
   

     data.events.map((val) => {
      const raw = `
      <ul class="border-t-2 py-[15px] px-5">
      <li class="py-2 px-2 border-r-2 bg-white hover:bg-[#e9f3ff]"> Events : ${val.name}</li>
      </ul>
      `
      suggestions.innerHTML += raw
     });

     data.artists.map((val) => {
      const raw = `
      <ul class="border-t-2 py-[15px] px-5">
      <li class="py-2 px-2 border-r-2 bg-white hover:bg-[#e9f3ff]">Artists : ${val.name}</li>
      </ul>
      `
      suggestions.innerHTML += raw
     });

     
     data.cities.map((val) => {
      const raw = `
      <ul class="border-t-2 py-[15px] px-5">
      <li class="py-2 px-2 border-r-2 bg-white hover:bg-[#e9f3ff]">Cities : ${val.name} </li>
      </ul>
      `
      suggestions.innerHTML += raw
     });

     
     data.locations.map((val) => {
      const raw = `
      <ul class="border-t-2 py-[15px] px-5">
      <li class="py-2 px-2 border-r-2 bg-white hover:bg-[#e9f3ff]">Locations : ${val.name}</li>
      </ul>
      `
      suggestions.innerHTML += raw
     });


      // console.log(data);
      // console.log(data.artists);
      // console.log(data.cities);
      // console.log(data.events);
      // console.log(data.locations);

    }).catch((error) => {
      console.log(error);
    })



}


async function Newsletter() {

  try {
    

    const email = document.getElementById('email').value;

    const url = 'https://www.testapi.com/newsletter';

    fetch(url, {
      method:'POST',
      body:email
    }).then((res) => res.json())
    .then((data) => {
      console.log(data);
    }).catch((err) => console.log(err))

  } catch (error) {
    console.log(error);
  }

}


var navbar = document.getElementById('navbar');
var searchContainer = document.querySelector('.search-container');
var isFrontPage = false; // Set to false if you want the effect on all pages

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

  if ($(window).scrollTop() > 30) {
    navbar.classList.add('sticky');
    searchContainer.style.display = 'block';
  } else {
    navbar.classList.remove('sticky');
    searchContainer.style.display = 'none';
  }
});