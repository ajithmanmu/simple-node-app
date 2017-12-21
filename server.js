const express = require('express');
const bodyParser= require('body-parser');
const {merge, orderBy} = require('lodash');
const path = require('path');
const {mongoose} = require('./db/mongoose');
const {CrowdTrend} = require('./model/CrowdTrend');
const {SpotReports} = require('./model/SpotReport');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/crowdtrends', (req, res) => {
    const spotid = req.body.spotid || '5842041f4e65fad6a7708890'; //For Pipieline
    const crowdtrend = new CrowdTrend({
        crowdcount: req.body.crowdcount,
        timestamp:req.body.timestamp,
        spotid
      });
      crowdtrend.save().then((doc)=>{
        res.send(crowdtrend);
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/crowdtrends', async (req, res) => {
    const spotid = req.query.spotid || '5842041f4e65fad6a7708890'; //For Pipieline

    if(!(req.query.startdate && req.query.enddate)){
        res.status(400).send('You need to specify the Start and End dates');
    }
    const response=[];
    const crowdtrends = await CrowdTrend.find({ spotid, "timestamp": {"$gte": req.query.startdate, "$lt": req.query.enddate} },{'_id':0,'__v':0});
    let data;
    for(let trend of crowdtrends){
        data = await SpotReports.findOne({"spot":spotid, "createdAt": {"$lte": trend.timestamp}}, {'createdAt':1, 'updatedAt':1, 'minHeight':1, 'maxHeight':1, 'rating':1,'_id':0}).sort({createdAt:-1});
        response.push(merge(data,trend));
    }
    res.send(orderBy(response, ['timestamp'],['asc']));
});

app.listen(3000, () => {
    console.log('App listening on 3000');
});