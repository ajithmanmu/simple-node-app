# Crowd Trends - API - Setup instructions

#### Node version: `8 or above`

#### Configuring the project
`npm install`

#### Local development
`npm run dev`

Server listens to port 3000 (http://localhost:3000/crowdtrends).

## Endpoints:

##### POST /crowdtrends

Accepts timestamp, crowdcount and spotid (optional):

```
{
	"timestamp":"1513126061000",
	"crowdcount":12
}
```

##### GET /crowdtrends

Accepts -  startdate and  enddate

Returns an array of objects sorted by timestamp in ascending order.

`Fields`: timestamp,spotid,crowdcount,updatedAt,rating,createdAt,minHeight,maxHeight

Sample Request:

```http://localhost:3000/crowdtrends?startdate=2017-12-13&enddate=2017-12-14```

Response:
```
[
    {
        "timestamp": "2017-12-13T00:47:41.000Z",
        "spotid": "5842041f4e65fad6a7708890",
        "crowdcount": 4,
        "updatedAt": "2017-12-12T23:20:31.073Z",
        "rating": "POOR_TO_FAIR",
        "createdAt": "2017-12-12T23:20:31.073Z",
        "minHeight": 4,
        "maxHeight": 6
    },
    {
        "timestamp": "2017-12-13T01:47:41.000Z",
        "spotid": "5842041f4e65fad6a7708890",
        "crowdcount": 12,
        "updatedAt": "2017-12-12T23:20:31.073Z",
        "rating": "POOR_TO_FAIR",
        "createdAt": "2017-12-12T23:20:31.073Z",
        "minHeight": 4,
        "maxHeight": 6
    },
    {
        "timestamp": "2017-12-13T02:47:41.000Z",
        "spotid": "5842041f4e65fad6a7708890",
        "crowdcount": 10,
        "updatedAt": "2017-12-12T23:20:31.073Z",
        "rating": "POOR_TO_FAIR",
        "createdAt": "2017-12-12T23:20:31.073Z",
        "minHeight": 4,
        "maxHeight": 6
    }
]

```

#### Mongo

The crowdcounts are stored in ```crowdtrends``` collection in Staging ```HackathonDB``` on an hourly basis. 


