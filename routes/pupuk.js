import express, { Router } from "express"; 
const router = express.Router(); 
const pupuk = [ 
    { 
        namapupuk: "cabai", 
        idpupuk: "1", 
        jenis: "sayuran", 
        kandungan: "beta karoten", 
    }, 
    { 
        namapupuk: "selada", 
        idpupuk: "2", 
        jenis: "sayuran", 
        kadaluars: "ke labu", 
    }, 
]; 
router.get("/", (req, res) => { 
    res.send(pupuk); 
}); 
 
router.post('/', (req, res) => { 
    const newpupuk = { 
        idpupuk: pupuk.length + 1, 
        namapupuk: req.body.namapupuk, 
        jenis: req.body.jenis, 
        kandungan: req.body.kandungan
    }; 
    pupuk.push(newpupuk); 
    res.status(201).json(newpupuk); 
}); 
 
