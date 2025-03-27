import express from 'express'
import pg from 'pg'
import cors from 'cors'


const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Allow only your frontend
    methods: ['GET', 'POST'], // Allow only certain HTTP methods
  }));

  app.use(express.json());

const moviesList = new pg.Pool({
    user: 'myuser',
    host: 'localhost',
    database: 'movies_db',
    password: 'mypassword',
    port: 5432,

});

app.get('/', async (req, res) => {
    console.log('GET / route hit');
   res.send('you tried');
});

app.get('/movies', async (req, res) => {
    try {
        const result = await moviesList.query('SELECT * FROM movies');
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "No movies found" });

        }
        res.json(result.rows);
    }
    catch (err) {
        console.error('Error fetching movies:', err.message);
        res.status(500).send(err.message);  
    }
    
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
