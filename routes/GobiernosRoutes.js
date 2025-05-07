const express = require('express');
const router = express.Router();
const Gobierno = require('../models/GobiernosModel');

// Obtener todos los gobiernos
router.get('/obtenerTodos', async(req,res)=> {
    try{
        const gobiernos = await Gobierno.find();
        res.json(gobiernos)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
});

// Agregar un nuevo gobierno
router.post("/agregarGobierno", async(req,res) =>{
try{
     const gobierno = new Gobierno(req.body);
     await gobierno.save();
     res.status(201).json(gobierno)
}
catch (err) {
    res.status(400).json({message:err.message});
}
});

// Eliminar un gobierno
router.delete('/eliminarGobierno/:id', async(req,res)=>{
    try{
        const gobierno = await Gobierno.findByIdAndDelete(req.params.id);
        if(!gobierno){
            return res.status(404).json({message: 'Gobierno no encontrado'});
        }
        res.json({message: 'Gobierno eliminado'});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Actualizar un gobierno
router.put('/putGobierno/:id', async(req,res)=>{
    try{
        const gobierno = await Gobierno.findByIdAndUpdate(req.params.id , req.body, {new: true});
        if(!gobierno) return res.status(404).json({message: 'Gobierno no encontrado'});
        res.json(gobierno);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }  
});  

// Obtner un pais por su tipo de gobierno
router.get('/obtenerTipoGobierno/:TipoGobierno', async(req,res)=>{
    try{
        const gobierno = await Gobierno.find({tipoGobierno: req.params.TipoGobierno});
        if(!gobierno) return res.status(404).json({message: 'Gobierno no encontrado'});
        res.json(gobierno);
    }       
    catch(err){
        res.status(500).json({message: err.message});
    }
}
);

// Obtener un pais por jefe Gobierno y partido Politico
router.get('/obtenerJefeGobiernoYPartodo/:jefeGobierno/:partidoPolitico', async(req,res)=>{
    try{
        const gobierno = await Gobierno.findOne({jefeGobierno: req.params.jefeGobierno, partidoPolitico: req.params.partidoPolitico});
        if(!gobierno) return res.status(404).json({message: 'Gobierno no encontrado'});
        res.json(gobierno);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }  
}   
);  

module.exports = router;