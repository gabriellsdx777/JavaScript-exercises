  class ContaBancaria {

    constructor(saldoInicial) {
        this.saldo = saldoInicial || 0;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    extrato() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }

}

const minhaconta = new ContaBancaria(1000);
minhaconta.depositar(500);
minhaconta.sacar(200);
minhaconta.extrato();