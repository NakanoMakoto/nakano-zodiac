import "bootstrap";
import "../css/style.css";

const moment = require('moment');
require("moment-range");

document.getElementById('button').onclick = function() {
    const y = document.getElementById("year").value;
    const m = document.getElementById("month").value;
    const d = document.getElementById("day").value;

    const date = new Date(y, m - 1, d);//月は「０」を起点とするので−１をする
    moment('date').daysInMonth(); 
    console.log(date);
}



