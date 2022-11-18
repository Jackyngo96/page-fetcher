const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const localPath = process.argv[3];

const fetcher = function (url, localPath) {
  request(url, function (error, response, body) {
    if (error) {
      console.log("failed to load");
      return;
    }
    fs.writeFile(localPath, body, (err) => {
      if (err) {
        console.error("Failed to write to local path ", localPath);
      } else {
        console.log("download succesfull");
      }
    });
  });
};
if (!url || !localPath) {
  console.log("URL & local path is required");
} else {
  fetcher(url, localPath);
}
