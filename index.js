const schedule = require('node-schedule');
const axios = require("axios");

const TOKEN = "e2XUcYYCKLTdiThVnVNhyT"

const notifications = [
    {
        title: "Day",
        text: "Wake up",
        rule: (rule) => {
            rule.hour = 9

            return rule;
        },
    },
    {
        title: "Day",
        text: "Sleep",
        rule: (rule) => {
            rule.hour = 23

            return rule;
        },
    },
    {
        title: "Work",
        text: "Start",
        rule: (rule) => {
            rule.hour = 12

            return rule;
        },
    },
    {
        title: "Work",
        text: "Finish",
        rule: (rule) => {
            rule.hour = 15

            return rule;
        },
    },
    {
        title: "Life",
        text: "Drink water",
        rule: (rule) => {
            rule.hour = [9, 11, 13, 15, 17, 19, 21]

            return rule;
        },
    },
    {
        title: "Life",
        text: "Take a shower",
        rule: (rule) => {
            rule.hour = 9

            return rule;
        },
    },
    {
        title: "Life",
        text: "Take a shower",
        rule: (rule) => {
            rule.hour = 22

            return rule;
        },
    },
    {
        title: "Food",
        text: "Have breakfast",
        rule: (rule) => {
            rule.hour = 10

            return rule;
        },
    },
    {
        title: "Food",
        text: "Have lunch",
        rule: (rule) => {
            rule.hour = 14

            return rule;
        },
    },
    {
        title: "Food",
        text: "Have dinner",
        rule: (rule) => {
            rule.hour = 18

            return rule;
        },
    },
    {
        title: "Food",
        text: "Have a snack",
        rule: (rule) => {
            rule.hour = 21

            return rule;
        },
    },
]

notifications.forEach(notification => {
    const rule = notification.rule(new schedule.RecurrenceRule());
    rule.tz = 'Etc/GMT-5';

    schedule.scheduleJob(rule, function(){
        axios.get(`https://api.day.app/${TOKEN}/${notification.title}/${notification.text}`)
    });
})