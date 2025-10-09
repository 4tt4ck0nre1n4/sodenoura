"use strict";

import flatpickr from 'flatpickr/dist/flatpickr.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.13/plugins/confirmDate/confirmDate.min.js';

// const flatpickr = require('flatpickr');

let minDate = new Date();
minDate = minDate.setDate(minDate.getDate() + 1);
let maxDate = new Date();
// maxDate = maxDate.setMonth(maxDate.getMonth() + 1);
maxDate = maxDate.setDate(maxDate.getDate() + 3);

const config = {
  enableTime: true,
  mode: "range",
  altInput: true,
  altFormat: "F j H:i, Y",
  dateFormat: "Y-m-d-H:i",
  time_24hr: true,
  minTime: "09:00",
  maxTime: "17:00",
  defaultMinute: 0,
  minDate: minDate,
  maxDate: maxDate,
  minuteIncrement: 30,
  defaultSeconds: [],
  plugins: [new confirmDatePlugin({})],
  // local: "ja",
};

flatpickr(".flatpickr", config);
