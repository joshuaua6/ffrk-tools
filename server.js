var Refresh = require('./refresh.js');

var CronJob = require('cron').CronJob;
var job = new CronJob({
    //cronTime: '0 3 * * * *',
    cronTime: '*/15 * * * * *',
    onTick: function() {
        Refresh();
    },
    start: false,
    timeZone: 'Europe/Paris'
});
job.start();