import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalaraio.js";

const cliente1 = new Cliente("Cristian", 92976905053);
const cc = new ContaCorrente(cliente1, 1001);
cc.depositar(500);
cc.sacar(50);

const cp = new ContaPoupanca(50, cliente1, 1001);
cp.depositar(500);

const cs = new ContaSalario(cliente1);
cs.depositar(100);
cs.sacar(30);

console.log(cliente1, cc, cp, cs);
