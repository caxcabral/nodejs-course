import fsBase from 'fs';
const fs = fsBase.promises;
import path from 'path';

const my_path = path.join(__dirname, 'callback-example.txt');


const execute = async () => {
    await fs.writeFile(my_path, 'writing stuff to files using callbacks 2');
    const data = await fs.readFile(my_path, 'utf-8');
    console.log(data);
    await fs.unlink(my_path);
}

execute();

// fs.readFile(my_path, 'utf-8')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
    