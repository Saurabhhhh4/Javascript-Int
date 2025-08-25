//Include the fs module
const fs = require("fs");
function readWriteSync() {
  console.log("------ Starting read write sync ------");
  dataSync = readFileSync("./AFM-source/input.txt");
  writeFileSync("./AFM-destination/output.txt", dataSync);
  console.log("------ Finishing read write sync ------");
}
function readWriteAsync() {
  console.log("------ Starting read write async ------");
  readFileAsync("./AFM-source/input.txt", (dataAsync) => {
    writeFileAsync("./AFM-destination/output.txt", dataAsync, () => {
      console.log("------ Finishing read write async ------");
    });
  });
}
