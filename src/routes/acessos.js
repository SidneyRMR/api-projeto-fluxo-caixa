import express from "express";

import { getDados, addDado, updateDado, deleteDado } from "../controllers/dados_principais";


const router = express.Router()
// gerencia a rota em que será carregado os valores consultados do pool

router.get("/status", (req, res) => {res.send('Running API...')})

router.get("/dados-caixa", getDados)
router.post("/dados-caixa", addDado)
router.put("/dados-caixa/:id_usuario", updateDado)
router.delete("/dados-caixa/:id_usuario", deleteDado)

export default router