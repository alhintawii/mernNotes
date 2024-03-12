import  express  from "express";
import dotenv  from "dotenv";

dotenv.config({ 
    path: './config/config.env' 
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(3008, () => {
    console.log('app running on port 3008')
});     
