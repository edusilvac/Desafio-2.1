import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true }); // Permite terminar o programa com CTRL-C

//let nome = prompt('Eduardo Carvalho'); 

import { DateTime } from 'luxon';
import fs from 'fs';

/*
// Declarar Classes de Nome, CPF e Data de Nascimento;

 function validarDadosCliente(cliente) {
  const erros = []; 

  if (!cliente.nome) {
    erros.push({ campo: 'nome', mensagem: 'Campo obrigatório ausente.' });
  } else if (cliente.nome.length < 5 || cliente.nome.length > 60) {
    erros.push({ campo: 'nome', mensagem: 'O campo "nome" deve ter entre 5 e 60 caracteres.' });
  }

  // Validação do campo "cpf"
  if (!cliente.cpf || !validarCPF(cliente.cpf)) {
    erros.push({ campo: 'cpf', mensagem: 'CPF inválido.' });
  }

  // Validação do campo "dt_nascimento"
  if (!cliente.dt_nascimento || !validarDataNascimento(cliente.dt_nascimento)) {
    erros.push({ campo: 'dt_nascimento', mensagem: 'Data de nascimento inválida.' });
  }
  
  // Validação do campo "renda_mensal"
  if (cliente.renda_mensal !== undefined && !validarRendaMensal(cliente.renda_mensal)) {
    erros.push({ campo: 'renda_mensal', mensagem: 'Renda mensal inválida.' });
  }

  // Validação do campo "estado_civil"
  if (cliente.estado_civil !== undefined && !validarEstadoCivil(cliente.estado_civil)) {
    erros.push({ campo: 'estado_civil', mensagem: 'Estado civil inválido.' });
  }

  return erros;
}

function validarCPF(cpf) {
  return cpf.length === 11;
} 

function validarDataNascimento(dt_nascimento) {
  // Verifica a formatação da data (DDMMAAAA)
  if (!/^\d{8}$/.test(dt_nascimento)) {
    return false;
  }


  // Obtém a data atual
  const dataAtual = DateTime.now();

  // Obtém a data de nascimento a partir da string e formata como DateTime do Luxon
  const dataNascimento = DateTime.fromFormat(dt_nascimento, 'ddMMyyyy');

  // Calcula a diferença de anos entre a data de nascimento e a data atual
  const diferencaAnos = dataAtual.diff(dataNascimento, 'years').years;

  // Verifica se a diferença de anos é maior ou igual a 18
  return diferencaAnos >= 18;
}

function validarRendaMensal(renda_mensal) {
  // Verifica se a renda mensal é um número maior ou igual a zero
  const rendaNumber = parseFloat(renda_mensal.replace(',', '.'));
  return !isNaN(rendaNumber) && rendaNumber >= 0;
}


function validarEstadoCivil(estado_civil) {
  // Verifica se o estado civil é "C", "S", "V" ou "D" (maiúsculo ou minúsculo)
  const estadosValidos = ['C', 'S', 'V', 'D'];
  return estadosValidos.includes(estado_civil.toUpperCase());
}

// Obtém o caminho do arquivo de entrada a partir dos argumentos da linha de comando
const filePath = process.argv[2];

// Verifica se foi fornecido o caminho do arquivo
if (!filePath) {
  console.error('Caminho do arquivo de entrada não fornecido.');
  process.exit(1); // Encerra o programa com código de erro
}

// Lê o conteúdo do arquivo JSON
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo de entrada:', err);
    process.exit(1); // Encerra o programa com código de erro
  }
// Verificar se o arquivo não está vazio
if (!data.trim()) {
  console.error('O arquivo de entrada está vazio.');
  process.exit(1); // Encerra o programa com código de erro
}

// Analisa o conteúdo do arquivo como JSON
let jsonData;
try {
  jsonData = JSON.parse(data);
} catch (error) {
  console.error('Erro ao analisar o conteúdo do arquivo JSON:', error);
  process.exit(1); // Encerra o programa com código de erro
}
  // Validação dos dados
  const errosClientes = [];
  for (const cliente of jsonData) {
    const erros = validarDadosCliente(cliente);
    if (erros.length > 0) {
      errosClientes.push({ dados: cliente, erros });
    }
  }

// Geração do arquivo de erros, se houverem erros
if (errosClientes.length > 0) {
  // Gera o arquivo com o array contendo os erros de validação
  const timestamp = DateTime.now().toFormat('ddMMyyyy-HHmmss');
  const nomeArquivo = `erros-${timestamp}.json`;
  const conteudoArquivo = JSON.stringify(errosClientes, null, 2);

  fs.writeFile(nomeArquivo, conteudoArquivo, (err) => {
    if (err) {
      console.error('Erro ao gerar o arquivo de erros:', err);
    } else {
      console.log(`Arquivo de erros "${nomeArquivo}" gerado com sucesso.`);
    }
  });
} else {
  // Gera um arquivo array vazio, pois não há erros de validação
  const timestamp = DateTime.now().toFormat('ddMMyyyy-HHmmss');
  const nomeArquivo = `erros-${timestamp}.json`;
  const conteudoArquivo = JSON.stringify([], null, 2);

  fs.writeFile(nomeArquivo, conteudoArquivo, (err) => {
    if (err) {
      console.error('Erro ao gerar o arquivo de não erros:', err);
    } else {
      console.log(`Arquivo onde não há erros "${nomeArquivo}" gerado com sucesso.`);
    }
  });
}
}); */

class Cliente {
  constructor(nome, cpf, dt_nascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.dt_nascimento = dt_nascimento;
  }

  validarDadosCliente() {
    const erros = [];

    if (!this.nome) {
      erros.push({ campo: 'nome', mensagem: 'Campo obrigatório ausente.' });
    } else if (this.nome.length < 5 || this.nome.length > 60) {
      erros.push({ campo: 'nome', mensagem: 'O campo "nome" deve ter entre 5 e 60 caracteres.' });
    }

    // Implemente a validação correta do CPF
    if (this.cpf.length !== 11) {
      erros.push({ campo: 'cpf', mensagem: 'CPF inválido.' });
    }

    // Verifica a formatação da data (DDMMAAAA)
    if (!/^\d{8}$/.test(this.dt_nascimento)) {
      erros.push({ campo: 'dt_nascimento', mensagem: 'Data de nascimento inválida.' });
    } else {
      // Obtém a data atual
      const dataAtual = DateTime.now();

      // Obtém a data de nascimento a partir da string e formata como DateTime do Luxon
      const dataNascimento = DateTime.fromFormat(this.dt_nascimento, 'ddMMyyyy');

      // Calcula a diferença de anos entre a data de nascimento e a data atual
      const diferencaAnos = dataAtual.diff(dataNascimento, 'years').years;

      // Verifica se a diferença de anos é maior ou igual a 18
      if (diferencaAnos < 18) {
        erros.push({ campo: 'dt_nascimento', mensagem: 'O cliente deve ter pelo menos 18 anos.' });
      }
    }

    return erros;
  }
}

// Obtém o caminho do arquivo de entrada a partir dos argumentos da linha de comando
const filePath = process.argv[2];

// Verifica se foi fornecido o caminho do arquivo
if (!filePath) {
  console.error('Caminho do arquivo de entrada não fornecido.');
  process.exit(1); // Encerra o programa com código de erro
}

// Lê o conteúdo do arquivo JSON
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo de entrada:', err);
    process.exit(1); // Encerra o programa com código de erro
  }
  
  // Verificar se o arquivo não está vazio
  if (!data.trim()) {
    console.error('O arquivo de entrada está vazio.');
    process.exit(1); // Encerra o programa com código de erro
  }

  // Analisa o conteúdo do arquivo como JSON
  let jsonData;
  try {
    jsonData = JSON.parse(data);
  } catch (error) {
    console.error('Erro ao analisar o conteúdo do arquivo JSON:', error);
    process.exit(1); // Encerra o programa com código de erro
  }

  // Validação dos dados
  const errosClientes = [];
  for (const cliente of jsonData) {
    const { nome, cpf, dt_nascimento } = cliente;
    const clienteObj = new Cliente(nome, cpf, dt_nascimento);
    const erros = clienteObj.validarDadosCliente();
    if (erros.length > 0) {
      errosClientes.push({ dados: cliente, erros });
    }
  }

  // Geração do arquivo de erros, se houverem erros
  if (errosClientes.length > 0) {
    // Gera o arquivo com o array contendo os erros de validação
    const timestamp = DateTime.now().toFormat('ddMMyyyy-HHmmss');
    const nomeArquivo = `erros-${timestamp}.json`;
    const conteudoArquivo = JSON.stringify(errosClientes, null, 2);

    fs.writeFile(nomeArquivo, conteudoArquivo, (err) => {
      if (err) {
        console.error('Erro ao gerar o arquivo de erros:', err);
      } else {
        console.log(`Arquivo de erros "${nomeArquivo}" gerado com sucesso.`);
      }
    });
  } else {
    // Gera um arquivo array vazio, pois não há erros de validação
    const timestamp = DateTime.now().toFormat('ddMMyyyy-HHmmss');
    const nomeArquivo = `erros-${timestamp}.json`;
    const conteudoArquivo = JSON.stringify([], null, 2);

    fs.writeFile(nomeArquivo, conteudoArquivo, (err) => {
      if (err) {
        console.error('Erro ao gerar o arquivo de não erros:', err);
      } else {
        console.log(`Arquivo onde não há erros "${nomeArquivo}" gerado com sucesso.`);
      }
    });
  }
});

