const axios = require('axios').default;
var intervalId;

exports.callRestAPI = function () {
    intervalId = setInterval(callBack, 2000);
};

var i = 0;

function callBack() {
    console.log('Called at: ' + new Date().toDateString());

    axios.post('http://localhost:3001/feast/api',
        {
            'source': 'rajpura',
            'destination': 'whitefield',
            'token': i,
            'timestamp': new Date()
        })
        .then(function (response) {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error)
        });

    i++;
    if (i >= 10) {
        console.log('closing Interval');
        intervalId.close();
    }
}