const express = require('express');
const { cadastraUsuario, login, listarUsuarios, atualizarUsuario } = require('./controladores/usuarios');
const { verificaDadosLogin, verificaDadosTransacao, verificaToken, verificaDadosCadastro } = require('./intermediarios/verificar')
const { cadastraTransacao, detalhaTransacao, listarTransacao, atualizarTransacao, deletarTransacao, extrato, totalExtrato } = require('./controladores/transacoes')
const { listarCategorias } = require('./Controladores/categorias')

const rotas = express();
rotas.use(express.json())

rotas.post('/usuario', verificaDadosCadastro, cadastraUsuario)
rotas.post('/login', verificaDadosLogin, login)

rotas.use(verificaToken);

rotas.get('/usuario',listarUsuarios)
rotas.get('/categoria',listarCategorias)
rotas.put('/usuario', atualizarUsuario)
rotas.post('/transacao', verificaDadosTransacao, cadastraTransacao)
rotas.get('/transacao',listarTransacao)
rotas.get('/transacao/extrato',extrato)
rotas.get('/transacao/:id', detalhaTransacao)
rotas.put('/transacao/:id',atualizarTransacao)
rotas.delete('/transacao/:id',deletarTransacao)

module.exports = rotas;