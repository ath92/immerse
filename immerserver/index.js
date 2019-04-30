const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = 3000;

const Parser = require('rss-parser');
const parser = new Parser();
 
app.get('/', async (req, res) => {
    console.log('parsing NOS jeugdjournaal');
    const feed = await parser.parseURL('http://feeds.feedburner.com/jeugdjournaal?format=xml');
    res.end(JSON.stringify(feed));
});

app.listen(port, () => console.log(`Immerserver listening on port ${port}!`));