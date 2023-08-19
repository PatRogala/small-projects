import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import MicroModal from 'micromodal';
import timezones from 'timezones-list';

// Dayjs for time and date display
dayjs.extend(utc);
dayjs.extend(timezone);
let tz = dayjs.tz.guess();

// Populate the select element with the time zones
const select = document.getElementById("timezone-input");
timezones.forEach((timezone) => {
  const option = document.createElement("option");
  option.value = timezone.tzCode;
  option.text = timezone.name;
  option.selected = timezone.tzCode === tz;
  select.appendChild(option);
});

setInterval(() => {
  const current = dayjs().tz(tz);

  document.getElementById("time").innerText = current.format("HH:mm:ss");
  document.getElementById("date").innerText = current.format("dddd, D MMMM, YYYY");
  document.getElementById("timezone").innerText = tz.replace("/", " / ");
}, 1000);

// Micromodal for modal display (changing the time zone)
MicroModal.init();

document.getElementById("timezone-submit").addEventListener("click", (event) => {
  event.preventDefault();

  const timezone = document.getElementById("timezone-input").value;
  tz = timezone;

  MicroModal.close("modal-timezone");
});