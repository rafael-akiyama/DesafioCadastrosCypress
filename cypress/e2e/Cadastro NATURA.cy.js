/// <reference types="cypress" />

import Pages from '../support/Pages/metodos';

describe('Cadastro Natura', () => {
   it.only('Realizar Cadastro no site Natura', () => {
      Pages.acessarPagNatura();
      Pages.criarCadastroNatura();
   })

});