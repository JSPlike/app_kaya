# app_kaya
# Backend part 


## RESTapi:

### -main:

GET /api/concent1
this is creating random users

GET /api/concent2
this is creating users after count user’s number

GET /api/reject
this will send ‘goodbye’ message 

### -input:

GET /api/getInput/:type

//send data to database
POST /api/addInput/:type

### -survey:

//send jsonfile to frontend

GET /api/requestSurvey/control
GET /api/requestSurvey/experiment


//common
POST /api/addSurvey/common
//typeA
POST /api/addSurvey/control
//typeB
POST /api/addSurvey/experiment
//final
POST /api/addSurvey/final

using:

node.js
base javascript
express framwork

mongoose
mongo database framwork

heroku hosting server
hosting server




### dependencies:
```
	"body-parser": "~1.18.2",
	 "cookie-parser": "~1.4.3",
	 "cors": "^2.8.5",
	 "debug": "~2.6.9",
	 "express": "^4.17.1",
	 "jade": "~1.11.0",
	 "mongoose": "^5.7.7",
	 "morgan": "^1.9.1",
	 "nodemon": “^1.19.4”
	"serve-favicon": "~2.4.5"
```

Creating Random User Code:
							
### Counting usertype:
```
	const abCount = await Usercode.countDocuments({UserType: 'AB'})
			  .catch(err => { throw err });

	  const baCount = await Usercode.countDocuments({UserType: 'BA'})
			  .catch(err => { throw err });

	  console.log("AB Count:", abCount);
	  console.log("BA Count:", baCount);

	  const type = abCount <= baCount ? 'AB' : 'BA';
```

### Getting User IP:

const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

### Getting User device:

```
	//checking Device
	var useragent = require(‘express-useragent’);

	var device;
	if(req.useragent.isMobile) device = 'Mobile';
	else device = 'Desktop'
```
### Starting:

Start automatically when you send a request to that url

- RESTful API

### Database schema(mongoose)

user(user_code)
UserCode // random access code
UserType // AB first or BA first
IPaddress // client IP address
Enviroment // detect Mobile or Desktop

```
	input(input_code)
	CheckCode: {type: String, ref: 'user_code'}, //usercode
	OPKTest: Number,
	Flow: Number,
	Sex: String,
	Temperature: Number,
	Cervical_mucus: String,
	Symptoms: String,
	Moods: String,
	Click_Time: { type: Date, default: Date.now  } //clicktime
	survey(survey_code)

	CheckCode: {type: String, ref: 'user_code'}, //usercode
	Answer: {    //the data will be save with JSON form
	  type: String
	},
	Click_Time: { type: Date, default: Date.now  } //clicktime
```

### Reference:

-mongoose
https://mongoosejs.com/docs/guide.html

