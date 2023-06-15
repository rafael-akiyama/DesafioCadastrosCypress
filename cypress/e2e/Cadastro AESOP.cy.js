/// <reference types="cypress" />


import Pages from '../support/Pages/metodos';

describe('Cadastro AESOP', () => {
   it.only('Realizar Cadastro no site Aesop', () => {
      Pages.acessarPagAesop();
      Pages.criarCadastroAesop();
   })

});