import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numContas++;
  }

  // Sobreescrevendo o metodo de sacar, podendo usar o super ou this.
  sacar(valor) {
    let taxa = 1.1;    
    return super._sacar(valor, taxa);
    // return this._sacar(valor, taxa);
  }
}
