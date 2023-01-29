import {pool} from "../db";

export const getDados = (_, res) => {
    const q = "SELECT * FROM fluxocaixapessoal";
    pool.query(q, (err, data) => {
        if (err) return res.status(500).json({ error: "Erro ao recuperar dados do banco de dados" });
        return res.status(200).json(data);
    });
};

export const addDado = (req, res) => {
    const data = req.body.data;
    const descricao = req.body.descricao;
    const valor = req.body.valor;
    const parcela = req.body.parcela;
    const entrada = req.body.entrada;
    const quitado = req.body.quitado;
    const observacao = req.body.observacao;

    if (!data || !descricao || !valor || typeof parcela === 'undefined' || typeof entrada === 'undefined' || typeof quitado === 'undefined') {
        return res.status(400).json({ error: "Dados de entrada inválidos ou incompletos" });
    }

    const q = "INSERT INTO fluxocaixapessoal(data, descricao, valor, parcela, entrada, quitado, observacao) VALUES ?";
    const values = [[
        data,
        descricao,
        valor,
        parcela,
        entrada, 
        quitado, 
        observacao || null, 
    ]];
    pool.query(q, [values], (err) => {
        if(err) return res.status(500).json({ error: "Erro ao inserir dado no banco de dados" });
        return res.status(200).json({ message: "Dado criado com sucesso!" });
    });
};

export const updateDado = (req, res) => {
    const id = req.body.id;
    const data = req.body.data;
    const descricao = req.body.descricao;
    const valor = req.body.valor;
    const parcela = req.body.parcela;
    const entrada = req.body.entrada;
    const quitado = req.body.quitado;
    const observacao = req.body.observacao;

    if (!id || !data || !descricao || !valor || typeof parcela === 'undefined' || typeof entrada === 'undefined' || typeof quitado === 'undefined') {
        return res.status(400).json({ error: "Dados de entrada inválidos ou incompletos" });
    }

    const q = "UPDATE fluxocaixapessoal SET data = ?, descricao = ?, valor = ?, parcela = ?, entrada = ?, quitado = ?, observacao = ? WHERE id = ?";
    const values = [data, descricao, valor, parcela, entrada, quitado, observacao];
    pool.query(q, [...values, id], (err) => {
    if (err) return res.status(500).json({ error: "Erro ao atualizar dados no banco de dados" });
    return res.status(200).json({ success: "Dados atualizados com sucesso" });
    });
    };
    
    export const deleteDado = (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "ID inválido ou não informado" })
    const q = "DELETE FROM fluxocaixapessoal WHERE `id` = ?";
pool.query(q, [id], (err) => {
    if (err) return res.status(500).json({ error: "Erro ao deletar dados no banco de dados" });
    return res.status(200).json({ success: "Dados deletados com sucesso" });
})
    }