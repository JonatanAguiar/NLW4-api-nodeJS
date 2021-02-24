import express from 'express';

const app = express();

app.get("/users", (request, response) => {
    return response.json({message: "Helo World"});
});

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso!"});
});

app.listen(3333, () => console.log("Server rodando"));