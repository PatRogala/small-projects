import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(timezone);

setInterval(() => {
  const current = dayjs();

  document.getElementById("time").innerText = current.format("HH:mm:ss");
  document.getElementById("date").innerText = current.format("dddd, D MMMM, YYYY");
  document.getElementById("timezone").innerText = dayjs.tz.guess().replace("/", " / ")
}, 1000);