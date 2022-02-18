import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Cristian", 92976905053);
const ccCristian = new Conta(0, cliente1, 1001);
ccCristian.depositar(500);
ccCristian.sacar(50);

const contaPoupanca = new Conta(50, cliente1, 1001)



console.log(ccCristian,contaPoupanca);
