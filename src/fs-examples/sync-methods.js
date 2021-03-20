import fs from 'fs';
import path from 'path';

// const data  = fs.readFileSync(path.join(__dirname, '/example.txt'), 'utf8');
// console.log(data);

//Writting to files
// fs.writeFileSync(path.join(__dirname, 'new-file.txt'), 'writing stuff to files');
// fs.writeFileSync(path.join(__dirname, 'new-file.txt'), '\n\n :)');

//Appending
// fs.appendFileSync(path.join(__dirname, 'new-file.txt'), '\n writing stuff to files2');
// fs.appendFileSync(path.join(__dirname, 'new-file.txt'), '\n\n :)');

// Writting jsons
//fs.appendFileSync(path.join(__dirname, 'my-json-file.json'), JSON.stringify({message: "Writing stuff to json files"}));


//Deleting files
// fs.unlinkSync(path.join(__dirname, 'new-file.txt'));


//making and removing dirs
// fs.mkdirSync(path.join(__dirname, 'my-directory'));
// fs.rmdirSync(path.join(__dirname, 'my-directory'));

//making dirs recursively
//fs.mkdirSync(path.join(__dirname, 'my-directory', 'my-subdirectory'), {recursive: true});

//check if directory exists
// const example_exists = fs.existsSync(path.join(__dirname, 'example.txt'));
// console.log(example_exists);

// ls
// const content = fs.readdirSync(__dirname);
// console.log(content);

// get file status
// const status = fs.lstatSync(path.join(__dirname), 'example.txt');
// console.log(status);
// console.log(status.isFile());
// console.log(status.isDirectory());


