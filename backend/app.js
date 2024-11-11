import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import path from 'path'
const app = express();
app.use(cookieParser())
import db from './db_config/db-config.js'
app.use(express.json())
const __dirname = path.resolve();

// app.use(cors())
app.use(cors({ credentials: true, origin: [''], method: ['post', 'get', 'delete', 'put'] }));
// ROUTERS
import AuthRoutes from './Routes/AuthRoutes.js'
import PostsRoutes from './Routes/PostsRoutes.js'

app.use('/api1/api/auth', AuthRoutes)
app.use('/api1/api/post', PostsRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
})


export default app;