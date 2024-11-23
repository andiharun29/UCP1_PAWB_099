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
 
router.put('/:id', (req, res) => { 
    const pupukIndex = pupuk.findIndex(t => t.id === parseInt(req.params.id)); 
    if (!pupukIndex === -1) 
        return res.status(404).json({ message: 'Tugas tidak ditemukan' }); 
 
    pupuk[pupukIndex] = { 
        ...pupuk[pupukIndex], 
        namapupuk: req.body.namapupuk || pupuk[pupukIndex].namapupuk, 
        jenis: req.body.jenis || pupuk[pupukIndex].jenis, 
        kandungan: req.body.kandungan || pupuk[pupukIndex].kandungan, 
    }; 
 
    res.status(200).json({ 
        message: `Tugas dengan ID '${req.params.id}' telah diperbarui`, 
        updatepupuk: pupuk[pupukIndex], 
    }); 
}); 
 
