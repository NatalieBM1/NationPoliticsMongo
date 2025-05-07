const express = require('express');
const router = express.Router();
const LiderPolitico = require('../models/LideresPoliticosModel');

// Obtener todos los lideres políticos
router.get('/obtenerTodos', async(req,res)=> {
    try{
        const lideresPoliticos = await LiderPolitico.find();
        res.json(lideresPoliticos)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
});

// Agregar un nuevo lider politico
router.post("/agregarLiderPolitico", async(req,res) =>{
try{
     const liderPolitico = new LiderPolitico(req.body);
     await liderPolitico.save();
     res.status(201).json(liderPolitico)
}
catch (err) {
    res.status(400).json({message:err.message});
}
});

// Eliminar un lider políticp
router.delete('/eliminarLiderPolitico/:id', async(req,res)=>{
    try{
        const liderPolitico = await LiderPolitico.findByIdAndDelete(req.params.id);
        if(!liderPolitico){
            return res.status(404).json({message: 'Lider Politico no encontrado'});
        }
        res.json({message: 'Lider Politico eliminado'});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Actualizar un lider Politico
router.put('/putLiderPolitico/:id', async(req,res)=>{
    try{
        const liderPolitico = await LiderPolitico.findByIdAndUpdate(req.params.id , req.body, {new: true});
        if(!liderPolitico) return res.status(404).json({message: 'Lider Politico no encontrado'});
        res.json(liderPolitico);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }  
});  

// Obtner un Lider Politico por su nombre
router.get('/obtenerPorNombre/:nombre', async(req,res)=>{
    try{
        const liderPolitico = await LiderPolitico.find({nombre: req.params.nombre});
        if(liderPolitico.length === 0) return res.status(404).json({message: 'No se encontraron lideres políticos con este nombre'});
        res.json(liderPolitico);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }  
}   
);

// Obtener un Lider Politico por partido politico y educacion
router.get('/obtenerPartidoYEducacion/:partido_politico/:Educacion', async(req,res)=>{
    try{
        const liderPolitico = await LiderPolitico.findOne({partido_politico: req.params.partido_politico, educacion: req.params.educacion});
        if(!liderPolitico) return res.status(404).json({message: 'Lider Político no encontrado'});
        res.json(liderPolitico);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }  
}   
);  

module.exports = router;