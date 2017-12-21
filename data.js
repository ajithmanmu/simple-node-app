const dmyata = {1:2}
import request from 'request'; // or './module'

// const request = require('request');



request('http://localhost:3000/crowdtrends?startdate=2017-12-13&enddate=2017-12-14', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
    // console.log(body.explanation);
  });