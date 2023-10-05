// https://www.dicoding.com/academies/261/tutorials/14652?from=14647

const fs = require("fs");

const writableStream = fs.createWriteStream("filesystem/output.txt");

writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.end();
