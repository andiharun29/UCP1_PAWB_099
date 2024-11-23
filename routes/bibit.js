import express, { Router } from "express"; 
const router = express.Router(); 
const bibit = [ 
    { 
        id: "1", 
        namabibit: "cabai", 
        jenis: "sayuran", 
        kadaluarsa: 2025, 
    }, 
    { 
        id: "2", 
        namabibit: "selada", 
        jenis: "sayuran", 
        kadaluarsa: 2022, 
    }, 
]; 
router.get("/", (req, res) => { 
    res.send(bibit); 
}); 
 
router.post('/', (req, res) => { 
    const newBibit = { 
        id: bibit.length + 1, 
        namabibit: req.body.namabibit, 
        jenis: req.body.jenis, 
        kadaluarsa: req.body.kadaluarsa
    }; 
    bibit.push(newBibit); 
    res.status(201).json(newBibit); 
}); 
 
