const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;
const postRouter = require('./routes/Posts');

const db=require('./models');

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`running express on port = ${port}`);
    });
})

app.use("/posts",postRouter)

