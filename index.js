const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  
const PaisesRoutes = require('./routes/PaisesRoutes');
const GobiernoRoutes = require('./routes/GobiernosRoutes');
const LideresPoliticosRoutes = require('./routes/LideresPoliticosRoutes');
const morgan = require('morgan');

const app = express();

// Conexion a mongo db 
mongoose.connect('mongodb+srv://admin:admin@pdb.rpwsgda.mongodb.net/NationPolitics')
    .then(() => console.log('Conectado a Mi base de datos Mongo Db'))
    .catch(err => console.error("Error al conectar a mi DB", err));


app.use(cors());

app.use(bodyParser.json());
app.use('/paises',PaisesRoutes);
app.use('/gobiernos', GobiernoRoutes);
app.use('/lideres', LideresPoliticosRoutes);
app.use(morgan('dev'));

app.listen(3005, () => {
    console.log("Server ON - Port 3005");
});
