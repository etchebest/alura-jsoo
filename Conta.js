// Classe abstrata, somente pode ser herdada.
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deveria instanciar o objeto do tipo 'Conta', pois é uma classe abstrata"
      );
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
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

  // Metodo abstrato. Garante que todos as filhas sobrescrevam esse método
  sacar(valor) {
    throw new Error("O método 'Sacar' da conta é abstrata ")
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}