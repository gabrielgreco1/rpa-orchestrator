import readData from "../../database/read.js";

export default async function getStatus(automacao){
    const query = `SELECT status FROM LummaExecucoes WHERE automacao = '${automacao}' ORDER BY id DESC LIMIT 1`
    const res = await readData(query)
    return res[0].status
}