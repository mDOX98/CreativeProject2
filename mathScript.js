var tableContent = document.getElementById("tableContent");
var url = "";
var baseurl =
  "https://www.balldontlie.io/api/v1/games?per_page=100&end_date=2019-05-01";

var bigArray = [];
function getData(value) {
  url = baseurl;
  fetch(url)
    .then(function (response) {
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText,
        };
      }
      return response.json();
    })
    .then(function (json) {
      updateOutput(json);
    });
}
function sortFunction(a,b){  
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;  
}; 
function updateOutput(value) {
  bigArray = value;
  console.log(bigArray);
  var arr = bigArray.data;
  arr.sort(sortFunction);
  console.log(arr)
  var temp = '';
  for (let i = 0; i < arr.length; i++) {
    iter = arr[i];
    /*console.log(
      iter.home_team.full_name +
        " v " +
        iter.visitor_team.full_name +
        " || " +
        iter.home_team_score +
        "-" +
        iter.visitor_team_score +
        " " +
        iter.date
    );*/
    /*temp += `<div class="row table-row">`;
    temp += `<div class="col">${iter.date.slice(0,10)}</div>`;
    temp += `<div class="col">${iter.home_team.full_name}</div>`;
    temp += `<div class="col">${iter.visitor_team.full_name}</div>`;
    temp += `<div class="col">${iter.home_team_score}-${iter.visitor_team_score}</div>`;
    temp += `</div>`;*/


    temp += `<div class="card text-center smaller-card">`;
    temp += `<div class="card-body">`;
    temp += `<h5 class="card-title">${iter.home_team.full_name} v ${iter.visitor_team.full_name}</h5>`;
    temp += `<p class="card-text text-muted">${iter.date.slice(5,10) +'-'+ iter.date.slice(0,4)}</p>`;
    
    temp += `</div>`;
    temp += `<div class="card-footer">`;
    temp += `Final Score: ${iter.home_team_score}-${iter.visitor_team_score}`;
    temp += `</div>`;
    temp += `</div>`;



  }

  tableContent.innerHTML = temp;

  
}

getData();
