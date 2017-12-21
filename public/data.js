

var xhr = new XMLHttpRequest();
xhr.open('GET', "http://localhost:3000/crowdtrends?startdate=2017-12-07&enddate=2017-12-14", true);
xhr.send();
 
xhr.onreadystatechange = processRequest;
 
function processRequest(e) {
  if (xhr.readyState == 4) {
    const input = JSON.parse(xhr.responseText);
    console.log('adasdsa', input);
}
}


// import  request from './require'; // or './module'

// // const request = require('request');



// request('http://localhost:3000/crowdtrends?startdate=2017-12-13&enddate=2017-12-14', { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     console.log(body);
//     // console.log(body.explanation);
//   });