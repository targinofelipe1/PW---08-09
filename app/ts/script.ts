const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());


// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
const pessoa = new Pessoa('Felipe', 22, new Date( '10/08/2000'));
const pessoaFisica = new PessoaFisica('Fernando', 36, new Date('12/05/1986'), '48996356985');
const pessoaJuridica = new PessoaJuridica('Luiza', 52, new Date('05/02/1970'), '55896478933155');

console.log(pessoa.nome);
console.log(pessoaFisica.nome);
console.log(pessoaJuridica.nome);
console.log(pessoa.idade);
console.log(pessoaFisica.idade);
console.log(pessoaJuridica.idade);
console.log(pessoa.dataNascimento);
console.log(pessoaFisica.dataNascimento);
console.log(pessoaJuridica.dataNascimento);
console.log(pessoaFisica.cpf);
console.log(pessoaJuridica.cnpj);