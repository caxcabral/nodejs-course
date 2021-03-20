
import fs from 'fs';

import path from 'path';



const my_path = path.join(__dirname, 'callback-example.txt');

fs.writeFile(my_path, 'writing stuff to files using callbacks', (err, data) => {
    fs.readFile(my_path, 'utf8', (err, data) => {
        if (err) console.log(err);
        console.log(data);
        fs.unlink(my_path);
    })
})