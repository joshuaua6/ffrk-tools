var Refresh = require('./refresh.js');

var CronJob = require('cron').CronJob;
var job = new CronJob({
    cronTime: '0 3 * * * *',
    onTick: function() {
        Refresh();
    },
    start: true,
    timeZone: 'Europe/Paris'
});
job.start();