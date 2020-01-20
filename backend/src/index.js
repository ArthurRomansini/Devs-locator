const express = require ('express');
const mongoose= require ('mongoose');
const cors = require  ('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://ArthurRomansini:12345@cluster0-t5w9x.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(1010);