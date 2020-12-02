
 const endpoint = process.env["cosmosdb_endpoint"]
 const key = process.env["cosmosdb_key"]
 const databaseId = process.env["cosmosdb_databaseId"]
 const containerId = process.env["cosmosdb_containerId"]

const CosmosClient = require("@azure/cosmos").CosmosClient;
const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

const crypto = require("crypto");

module.exports = async function (context, req) {
    context.log('[Inicio] - Func-Add-Transacao');


    //const data = JSON.parse(req.body)

    context.log(req.body)

    const novaTransacao = {
        numeroConta:req.body.numeroConta,
        dataTransacao:new Date().now,
        categoria:req.body.categoria,
        descricao:req.body.descricao,
        documento:crypto.randomBytes(10).toString('hex'),
        valor: req.body.valor
    };

    container.items.create(novaTransacao)

    
    context.res = {
        status: 200, 
        body: "Executado"
    };
}