// const clock = document.querySelector('#clock');
  let currentZone = "Asia/Kolkata"; // default

  function showTime(timeZone) {
    const options = {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'long'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    clock.innerHTML = formatter.format(new Date());
  }

  // Update every second
  setInterval(() => showTime(currentZone), 1000);

  // Change when country is selected
  document.getElementById("country").addEventListener("change", function() {
    currentZone = this.value;
    showTime(currentZone);
  });