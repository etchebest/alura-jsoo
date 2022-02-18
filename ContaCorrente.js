import Cliente from "./Cliente.js";

export class ContaCorrente {
  static numContas = 0;
  
  constructor(cliente, agencia) {
    this._cliente = cliente;
    this.agencia = agencia;
    this._saldo = 0;
    ContaCorrente.numContas ++;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }
  sacar(valor) {
    const taxa = 1.1 * valor;
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
