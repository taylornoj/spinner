spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let start = 100;

for (let i in spinner) {
  if (i < spinner.length - 1) {
    setTimeout(() => {
      process.stdout.write(spinner[i]);
    }, start);
  } else {
    setTimeout(() => {
      console.log(spinner[i]);
    }, start);
  } start += 200;
};
