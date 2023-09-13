import { RenamedContaBancaria, RenamedContaPoupanca, RenamedBanco } from "./Conta";

const myBank = new RenamedBanco();
const account1 = new RenamedContaBancaria("53674", "Alice", 1500);
const savingsAccount = new RenamedContaPoupanca("73649", "Bob", 2000, 0.2);

myBank.adicionarContas(account1);
myBank.adicionarContas(savingsAccount);

const handleSavingsAccount = () => {
    const choice = Number(prompt("[1] Saque - [2] Depósito - [3] Consultar saldo: "));
    if (choice === 1) {
        const withdrawAmount = Number(prompt("Digite o valor que deseja sacar: "));
        savingsAccount.sacar(withdrawAmount);
    }
    else if (choice === 2) {
        const depositAmount = Number(prompt("Digite o valor que deseja depositar: "));
        savingsAccount.depositar(depositAmount);
    }
    else if (choice === 3) {
        console.log(`Seu saldo na conta poupança é R$${savingsAccount.consultarSaldo()}`);
    }
    else {
        console.log("Opção Inválida!!");
    }
}

const handleNormalAccount = () => {
    const choice = Number(prompt("[1] Saque - [2] Depósito - [3] Consultar saldo: "));
    if (choice === 1) {
        const withdrawAmount = Number(prompt("Digite o valor que deseja sacar: "));
        account1.sacar(withdrawAmount);
    }
    else if (choice === 2) {
        const depositAmount = Number(prompt("Digite o valor que deseja depositar: "));
        account1.depositar(depositAmount);
    }
    else if (choice === 3) {
        console.log(`Seu saldo na conta normal é R$${account1.consultarSaldo()}`);
    }
    else {
        console.log("Opção Inválida!!");
    }
}

console.log("\nQual conta você deseja acessar?");
console.log("-------------------------------------------------------------");
const option = Number(prompt("[1] Conta normal - [2] Conta poupança - [3] Listar todas as contas: "));
console.log("-------------------------------------------------------------");
if (option === 1) {
    handleNormalAccount();
}
else if (option === 2) {
    handleSavingsAccount();
}
else if (option === 3) {
    myBank.listarContas();
}
else {
    console.log("Opção inválida!!!");
}
console.log("-------------------------------------------------------------");
