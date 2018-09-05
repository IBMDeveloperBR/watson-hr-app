# watson-hr-app

## Pre-requisitos:
  * Node >= 8
  * [Watson Personality Insights](https://www.ibm.com/watson/services/personality-insights/)
  * [Watson Language Translator](https://www.ibm.com/watson/services/language-translator/)
  
## Tenha sua própria cópia: Deploy na IBM Cloud

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/ibm-code-br/Assistant-and-Discovery-Demo)

**Lembre-se de criar sua IAM Key clicando no botão Create**

Após clicar no botão acima:

* Use o Eclipse Orion Web IDE e Edite o arquivo `.env` com suas credencias do Watson;
* depois disso volte uma página, clique em Delivery Pipeline e logo após no botão Play dentro de BUILD STAGE.

## Rodando Localmente
#### Backend:
  Para instalar o backend basta seguir os passos abaixo:
  
  * Instalar as depedências do backend executando: `npm install`
  * Colocar credenciais do Watson no arquivo `.env`
  * Para executar o backend basta executar: `npm run dev`
  
#### Frontend:
  Para instalar o backend basta seguir os passos abaixo:
  
  * Acessar a pasta `client/`
  * Instalar as depedências do frontend executando: `npm install`
  * Para executar o backend basta executar: `npm start`
  
#### Endpoints

  * `localhost:4200`: endpoint frotend
  * `localhost:8000`: endpoint backend
