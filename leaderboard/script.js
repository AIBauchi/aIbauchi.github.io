/*

Original design: https://dribbble.com/shots/2342688-Leaderboard-Day-019-dailyui

Trophy SVG: https://www.flaticon.com/free-icon/trophy_263056

*/

var arr = [ 
    { 'name': 'Neo', 'score': 5 },
    { 'name': 'Stanley', 'score': 9 },
    { 'name': 'Mela', 'score': 1 },
    { 'name': 'Johnson', 'score': 4 },
]
const ll = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var sor = arr.sort(function(a,b) {
    return b.score - a.score
});

for (var i in arr) {
	document.getElementById('results').innerHTML +=`<article class="leaderboard__profile">
      <img src="https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?b=1&s=170667a&w=0&k=20&c=DA0U801QrcB0wZP0ijwYpymeB34fyFjYWebZqalaStI= " alt=" " class="leaderboard__picture">
      <span class="leaderboard__name">`+ arr[i]['name'] +`</span>
      <span class="leaderboard__value">`+ arr[i]['score'] +`<span>`+ ll[i] +`</span></span>
    </article>`
}

// console.log(sor)