import {pool} from "../db"

export const getDados = (_, res) => {
    const q = "SELECT * FROM fluxocaixapessoal"
    pool.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}


export const addDado = (req, res) => {
    const q = "INSERT INTO fluxocaixapessoal(data, descricao, parcela, tipo, observacao) VALUES ?"

    const values = [[
        req.body.data,
        req.body.descricao,
        req.body.parcela,
        req.body.tipo, 
        req.body.observacao, 
    ]]

    pool.query(q, [values], (err) => {
        if(err) return res.json(err)
        return res.status(200).json('Dado criado com sucesso!')
    })

}
export const updateDado = (req, res) => {
    const q = "UPDATE fluxocaixapessoal SET id = ?, data = ?, descricao = ?, parcela = ?, tipo = ?, observacao = ? WHERE id = ?"

    const values = [
        req.body.id,
        req.body.data,
        req.body.descricao,
        req.body.parcela,
        req.body.tipo,
        req.body.observacao,
    ]

    pool.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Dados atualizados com sucesso!')
    })
}

// Deletar usuario funcionando!
export const deleteDado = (req, res) => {
    const q = "DELETE FROM fluxocaixapessoal WHERE `id_usuario` = ?"

    pool.query(q, [req.params.id_usuario], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Usuário deletado com sucesso!')
    })

}