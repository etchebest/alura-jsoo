import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Cristian", 92976905053);

const diretor = new Diretor('Cristian', 10000, 92976905053);
diretor.cadastrarSenha("123456");

const gerente = new Gerente('Ricardo', 5000, 12378945666);
gerente.cadastrarSenha("1234");

const logadoDir = SistemaAutenticacao.login(diretor, "123456");
const logadoGer = SistemaAutenticacao.login(gerente, "1234");

console.log(logadoDir, logadoGer);