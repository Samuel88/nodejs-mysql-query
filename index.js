const express = require('express');
const app = express();
const port = 3000;

const routerBlog = require('./routers/blog');

app.use('/blog', routerBlog);

app.listen(port, () => {
    console.log(`Server starting at ${port}`);
});