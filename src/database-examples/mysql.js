import mysql from 'mysql';
import fs from 'fs';
import path from 'path';

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'node-course-schema',
    user: 'node-course-user',
    password: 'node-course-user',
});
connection.connect();

const myPath = path.join(__dirname, 'new-products.txt');

fs.readFile(myPath, 'utf8', (err, contents) => {
    if (err) console.log(err);
    const productStrings = contents.split('\n');
    const products = contents.split('\n').map((string, i) => ({
        id: i,
        name: string.split(',')[0],
        price: Number(string.split(',')[1]),
    }));

    const productsInArray = products.map(product => [
        product.id,
        product.name,
        product.price,
    ]);

    console.log(products);
    const productsQueryString = products.map(
        product => `('${product.id}', '${product.name}', ${product.price})`
    ).join(',');

    // Prone to sql injection
    // const productsQuery = `INSERT INTO products (id, name, price)
    // VALUES ${productsQueryString}`;



    connection.query(
    'INSERT INTO products (id, name, price) VALUES ?', 
    [productsInArray], 
    (err, products) => {
        if (err) console.log(err);
        console.log('Done inserting products.'); 
    });

    connection.end(); 
});
