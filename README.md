# Weather App

**DESCRIÇÃO**: Neste Labs o objetivo é evoluir mais ainda seus conhecimentos em Angular e desenvolvimento Web criando na prática um aplicativo de previsão do tempo utilizando Angular como tecnologia front-end cosumindo uma API externa, seu desafio será replicar esse essa aplicação utilizando angular e consumindo essa api de terceiros.

## Anotações

Para gerar o arquivo `tslint.json` instale o [TSLint command-line interface](https://palantir.github.io/tslint/usage/cli/) localmente ou globalmente. **Local** (no diretorio do seu projeto):
```bash
npm install tslint typescript --save-dev
# or
yarn add tslint typescript --dev
```
**Global** (Em todo sistema operacional):
```bash
npm install tslint typescript -g
# or
yarn global add tslint typescript
```
Depois de instalado use o comando `tslint --init` na raiz do projeto que o arquivo `json` irá ser gerado. 

Altere  também o arquivo `tsconfig.json` para que seja possivel, por exemplo, desenvolver um modelo-entidade sem precisar declarar um construtor:
```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "module": "esnext",
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "lib": [
      "es2018",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true
  }
}
```

As dependencias que usaremos serão: 
```bash
# Bootstrap
npm i bootstrap 

# Js Search
npm i js-search

# Ts node
npm i --save-dev ts-node

# Protractor
npm i --save-dev protractor

# Eu optei por não instalar o tslint no meu projeto já que eu estou com ele instalado globalmente, mas por vias das duvidas
npm i --save-dev tslint
```

Para subir a nossa aplicação para o github pages, usaremos os comandos:
```bash
npm i -g angular-cli-ghpages

ng build --prod --base-href="/weather-app/"

angular-cli-ghpages --dir=dist/weather-app
```

### Variaveis de Ambiente

Em Angular é diferente de ReactJs para usar o `process.env.VARIAVEL_DE_AMBIENTE`. As soluções para usar o arquivo `.env` são estas:

- [How to add .env and use process.env to your typescript project](https://dev.to/francis04j/how-to-add-env-and-use-process-env-to-your-typescript-project-3d6b).
- [Module not found: Error: Can't resolve 'fs' in node_modules\dotenv\lib'](https://stackoverflow.com/questions/59911706/module-not-found-error-cant-resolve-fs-in-node-modules-dotenv-lib).
- [Angular 6 - process is not defined when trying to serve application](https://stackoverflow.com/questions/50313745/angular-6-process-is-not-defined-when-trying-to-serve-application).

### Bootstrap não estava funcionando

Solução:

- [why is my Angular app not recognizing bootstrap styles?](https://stackoverflow.com/questions/56507786/why-is-my-angular-app-not-recognizing-bootstrap-styles).
