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

    // momentが実装できているかの確認
    const moment_test = moment();
    const output = moment_test.format('YYYY年MM月DD日 HH:mm:ss dddd');
    // 現在時刻が表示される
    console.log(output);
}



