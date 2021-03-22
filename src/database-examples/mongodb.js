import { MongoClient } from 'mongodb';
import path from 'path';
import fsBase from 'fs';

const fs = fsBase.promises;

const execute = async () => {
    const client = await MongoClient.connect(
        'mongodb://localhost:27017',
        { useUnifiedTopology: true , useNewUrlParser: true},
    );

    const db = client.db('node-coursedb');
    const filePath = path.join(__dirname, 'new-products.txt');
    const newProductsString = await fs.readFile(filePath, 'utf-8');
    
    const productNames = newProductsString.split(', ');
    
    for (let name of productNames) {
        await db.collection('products').insertOne({
            name,
        });
    }
    
    const products = await db.collection('products').find({}).toArray();
    console.log(products);

    client.close();
    console.log('Done importing products!');
}

execute();

