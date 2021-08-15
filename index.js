import './styles.css';

(() => {
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const todayWidget = document.getElementById('widget_todayis');
  const timeWidget = document.getElementById('widget_hours');

  const currentDate = new Date();
  const monthText = MONTHS[currentDate.getMonth()];
  const dayText = DAYS[currentDate.getDay()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  todayWidget.innerText = `Today is ${dayText}, ${monthText}, ${date} ${year}`;

  setInterval(() => {
    let timeTracker = new Date();
    let hours = timeTracker
      .getHours()
      .toString()
      .padStart(2, '0');
    let minutes = timeTracker
      .getMinutes()
      .toString()
      .padStart(2, '0');
    let seconds = timeTracker
      .getSeconds()
      .toString()
      .padStart(2, '0');

    timeWidget.innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);

  //////////////////////////////////////////////////////////////////////////////////////////
})();
