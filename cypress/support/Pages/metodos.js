import faker from 'faker-br';
import Faker from 'faker-br/lib';

const el = require('./elements').ELEMENTS;

let email = faker.internet.email()
let cpf = faker.br.cpf()

class Pages {

    acessarPagAesop() {
        cy.visit(Cypress.env('urlAesop'));
        cy.get(el.aceitarCookiesAesop).click();
        cy.xpath(el.validacaoPagInicialAesop).should('be.visible');
        cy.screenshot();
    }

    criarCadastroAesop() {
        cy.get(el.botaoCadastrarAesop).click();
        cy.xpath(el.campoPrimeiroNomeAesop).type(Cypress.env('primeiroNome'));
        cy.xpath(el.campoSobrenomeAesop).type(Cypress.env('sobrenome'));        
        cy.xpath(el.campoEmailAesop).type(email);
        cy.xpath(el.campoSenhaAesop).type(Cypress.env('senha'));
        cy.xpath(el.campoConfirmaSenhaAesop).type(Cypress.env('senha'));
        cy.xpath(el.camposCpfAesop).type(cpf);
        cy.xpath(el.botaoGeneroAesop).click();
        cy.xpath(el.campoDataNascimentoAesop).type(Cypress.env('nascimento'))
        cy.xpath(el.campoTelefoneAesop).type(Cypress.env('telefone'));
        cy.xpath(el.checkReceberNovidadesAesop).click();
        cy.xpath(el.checkDisponibilizarInfoAesop).click();
        cy.xpath(el.checkTermosAesop).click();
        cy.xpath(el.botaoCriarContaAesop).click();
        cy.screenshot();
        cy.get(el.validacaoCriacaoCadastroAesop).should('have.text', "Rafael");
        cy.screenshot();
    }

    acessarPagNatura() {
        cy.visit(Cypress.env('urlNatura'));
        cy.get(el.aceitarCookiesNatura).click();
        cy.xpath(el.validacaoPagInicialNatura).should('be.visible');
        cy.screenshot();
    }

    criarCadastroNatura() {
        cy.get(el.botaoParaCadastrarNatura).click();
        cy.get(el.botaoCriarContaNatura).click();
        cy.xpath(el.campoPrimeiroNomeNatura).type(Cypress.env('primeiroNome'));
        cy.xpath(el.campoSobrenomeNatura).type(Cypress.env('sobrenome'));
        cy.xpath(el.campoEmailNatura).type(email);
        cy.xpath(el.campoSenhaNatura).type(Cypress.env('senha'));
        cy.xpath(el.campoConfirmaSenhaNatura).type(Cypress.env('senha'));
        cy.xpath(el.camposCpfNatura).type(cpf);
        cy.xpath(el.campoDataNascimentoNatura).type(Cypress.env('nascimento'))
        cy.xpath(el.botaoGeneroNatura).click();
        cy.xpath(el.campoCelularNatura).type(Cypress.env('telefone'));
        cy.xpath(el.checkNovidadesWpNatura).click();
        cy.xpath(el.campoWhatsNatura).type(Cypress.env('telefone'));
        cy.xpath(el.checkTermosNatura).click();
        cy.xpath(el.botaoConfirmarContaNatura).click();
        cy.screenshot();
        cy.get(el.validacaoCriacaoCadastroNatura).should('have.text', "Minha conta");
        cy.screenshot();
    }

    
}

export default new Pages();
