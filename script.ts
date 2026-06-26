// const clock = document.querySelector('#clock');
const clock: HTMLElement | null = document.querySelector('#clock')
let currentZone: string = "Asia/Kolkata"; // default

  function showTime(timeZone: string): void {
    if(!clock) return;
    const options: Intl.DateTimeFormatOptions = {
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
  const countrySelect: HTMLSelectElement | null = document.getElementById("country") as HTMLSelectElement;
 
  if(countrySelect) {
    countrySelect.addEventListener("change", function(this: HTMLSelectElement) {
      currentZone = this.value;
      showTime(currentZone);
    });
  }