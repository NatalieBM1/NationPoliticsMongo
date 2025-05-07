const express = require('express');
const router = express.Router();
const Pais = require('../models/PaisesModel');

// Obtener todos los paises
router.get('/obtenerTodos', async(req,res)=> {
    try{
        const paises = await Pais.find();
        res.json(paises)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
});

// Agregar un nuevo pais
router.post("/agregarPais", async(req,res) =>{
try{
     const pais = new Pais(req.body);
     await pais.save();
     res.status(201).json(pais)
}
catch (err) {
    res.status(400).json({message:err.message});
}
});

// Eliminar un pais
router.delete('/eliminarPais/:id', async(req,res)=>{
    try{
        const pais = await Pais.findByIdAndDelete(req.params.id);
        if(!pais){
            return res.status(404).json({message: 'País no encontrado'});
        }
        res.json({message: 'País eliminado'});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Actualizar un pais
router.put('/putPais/:id', async(req,res)=>{
    try{
        const pais = await Pais.findByIdAndUpdate(req.params.id , req.body, {new: true});
        if(!pais) return res.status(404).json({message: 'País no encontrado'});
        res.json(pais);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }  
});  

// Obtner un pais por su continente
router.get('/obtenerPorContinente/:continente', async(req,res)=>{
    try{
        const paises = await Pais.find({continente: req.params.continente});
        if(paises.length === 0) return res.status(404).json({message: 'No se encontraron países en este continente'});
        res.json(paises);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }  
}   
);

// Obtener un pais por nombre y capital
router.get('/obtenerPorNombreYCapital/:nombre/:capital', async(req,res)=>{
    try{
        const pais = await Pais.findOne({nombre: req.params.nombre, capital: req.params.capital});
        if(!pais) return res.status(404).json({message: 'País no encontrado'});
        res.json(pais);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }  
}   
);  

module.exports = router;