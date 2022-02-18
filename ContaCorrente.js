import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numContas++;
  }
}
