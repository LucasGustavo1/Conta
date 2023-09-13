// Defina a interface OperacoesBancarias
export interface OperacoesBancarias {
    sacar(valorSaque: number): void;
    depositar(valorDeposito: number): void;
    consultarSaldo(): number;
}

// Defina a classe RenamedContaBancaria
export class RenamedContaBancaria implements OperacoesBancarias {
    private _numeroConta: string;
    private _titular: string;
    private _saldo: number;

    constructor(numeroConta: string, titular: string, saldo: number) {
        this._numeroConta = numeroConta;
        this._titular = titular;
        this._saldo = saldo;
    }

    get numeroConta(): string {
        return this._numeroConta;
    }

    set numeroConta(numeroConta: string) {
        this._numeroConta = numeroConta;
    }

    get saldo(): number {
        return this._saldo;
    }

    set saldo(saldo: number) {
        this._saldo = saldo;
    }

    get titular(): string {
        return this._titular;
    }

    set titular(titular: string) {
        this._titular = titular;
    }

    consultarSaldo(): number {
        return this._saldo;
    }

    sacar(valorSaque: number): void {
        if (isNaN(valorSaque)) {
            console.log("Valor inválido!");
        } else if (valorSaque > this._saldo) {
            console.log("Saldo insuficiente!");
        } else {
            this._saldo -= valorSaque;
            console.log(`Seu saldo agora é de: ${this._saldo}`);
        }
    }

    depositar(valorDeposito: number): void {
        if (isNaN(valorDeposito) || valorDeposito <= 0) {
            console.log("Valor inválido!!");
        } else {
            this._saldo += valorDeposito;
            console.log(`Seu saldo agora é de: ${this._saldo}`);
        }
    }
}

// Defina a classe RenamedContaPoupanca
export class RenamedContaPoupanca extends RenamedContaBancaria {
    private juros: number;

    constructor(numeroConta: string, titular: string, saldo: number, juros: number) {
        super(numeroConta, titular, saldo);
        this.juros = juros;
    }

    consultarSaldo(): number {
        const saldoComJuros = this.saldo + this.saldo * this.juros;
        return saldoComJuros;
    }
}

// Defina a classe RenamedBanco
export class RenamedBanco {
    private contas: RenamedContaBancaria[] = [];

    adicionarContas(conta: RenamedContaBancaria): void {
        this.contas.push(conta);
    }

    listarContas(): void {
        console.log("Lista de contas: ");
        this.contas.forEach((conta, index) => {
            console.log(`Conta ${index + 1}:`);
            console.log(`Número da Conta: ${conta.numeroConta}`);
            console.log(`Titular: ${conta.titular}`);
            console.log(`Saldo: R$${conta.consultarSaldo()}`);
        });
    }
}
