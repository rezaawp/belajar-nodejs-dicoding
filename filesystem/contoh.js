// src : https://www.dicoding.com/academies/261/tutorials/14642?from=14227

const fs = require('fs');
const path = require('path')

const lokasi = path.resolve(__dirname, 'notes.txt'); // atau bisa manual : 'filesystem/notes.txt'

const data = fs.readFileSync(lokasi, 'UTF-8'); // menggunakan cara sync

fs.readFile(lokasi, 'UTF-8', (err, result) => {
    if (err) {
        console.log('err = ', err)
    }

    console.log("menggunakan async = ", result)
})

console.log("Menggunakan sync = " , data);