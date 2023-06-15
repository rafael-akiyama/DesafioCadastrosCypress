# DesafioCadastrosCypress

DESAFIO

Desenvolver a execução de um cenário de teste end-to-end de forma automatizada.

Contexto: Com o objetivo de garantir que o fluxo de cadastro de usuário esteja sendo executado com
sucesso, deve-se realizar 0 cadastro e as confirmações necessárias para garantia de qualidade via
front-end.

A automação deve ser desenvolvida utilizando boas práticas de desenvolvimento, manutenibilidade e
reuso. Não deve ser utilizado cucumber. O repositório deve ser configurado do zero.

Cenário: Cadastrar usuário com o preenchimento de todos os campos.

Operações; Aesop Brasil e Natura Brasil,

Massa de dados:

*Gerar dados aleatórios para o cadastro do usuário (permitido uso de bibliotecas via npm).
Urls: Aesop Brasil: www.aesop.com.br I Natura Brasil: www.natura.com.br.

Para rodar o projeto:

Baixar e instalar:
Cypress
Allure

Para rodar, utilizar os comandos:
npm run cy:run

Para criar report:
npm run allure:generate

Para visualizar o report:
npm run allure:open

OBS: Por mais que tenham campos com o mesmo id ou name, por se tratarem de sites diferentes, peguei o elemento e fiz o mapeamento com nomes diferentes, por questões que um site pode alterar e o outro não, por isso não achei prudente utilizar o mesmo elemento de sites diferentes.

E alguns elementos fiz a busca por xpath pois com a ferramenta do cypress percebi que estava alterando o nome, e com isso poderia quebrar o teste