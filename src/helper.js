export function calculateExperience() {
  let years = 0;
  let months = 0;
  const startDate = new Date("2021-10-30");
  const currentDate = new Date();
  const diff = Math.floor(currentDate.getTime() - startDate.getTime());
  const day = 1000 * 60 * 60 * 24;
  let month = diff / day / 30;
  while (month > 12) {
    years++;
    month = month - 12;
    if (month < 12) {
      months = Math.floor(month);
    }
  }
  return years + " years and " + months + " months";
}
