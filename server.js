const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [];

app.post("/cadastro", (req, res) => {
  const { usuario, senha } = req.body;

  usuarios.push({ usuario, senha, saldo: 1000 });

  res.json({ msg: "Usuário criado com sucesso" });
});

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (user) {
    res.json({ msg: "Login ok", saldo: user.saldo });
  } else {
    res.status(401).json({ msg: "Erro no login" });
  }
});

app.listen(3000, () => console.log("Servidor rodando"));
