const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000
const todoRoutes = require('./routes/todos')

app.use(express.json());
app.use(cors());
app.use(todoRoutes)

app.use(express.urlencoded({
    extended: true
}))

app.set("view engine","ejs");

app.set("views","src/views/pages")

app.use('/static',express.static(`${__dirname}/public`))

// app.get("/", (req, res) => {
//     res.send("hello")
// });

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`);
});