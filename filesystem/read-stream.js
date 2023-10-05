// https://www.dicoding.com/academies/261/tutorials/14647?from=14642

const fs = require("fs");

// const lokasi = path.resolve(__dirname, 'notes.txt'); // atau bisa manual : 'filesystem/notes.txt'

const readableStream = fs.createReadStream("filesystem/notes.txt", {
  highWaterMark: 10,
});

readableStream.on("readable", async () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
    console.log("Ada error ketika readable = ", error);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
