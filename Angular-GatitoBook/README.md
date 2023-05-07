# Gatitobook

## Dependências usadas
- npm install --save-dev prettier
- npm install --save-dev tslint-config-prettier
- npm install --save-dev tslint-plugin-prettier
- npm i bootstrap font-awesome

- No arquivo tslint.json, coloque a seguinte configuração no atributo extends:
```
"extends": ["tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"]
```

- *Adicionar os caminhos do bootstrap no **angular.json** para que o angular reconheça as libs*
```
"scripts": [
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./node_modules/font-awesome/css/font-awesome.css"
]
```

## Módulos criados
- ng g m home --routing -d
- ng g m home --routing
- *-d* : simula a criação das pastas
- ng g c home
- ng g c home/login
- ng g m autenticacao
- ng g s autenticacao/autenticacao
- ng g m animais --routing
- ng g c animais/lista-animais
- ng g m componentes/mensagem
- ng g c componentes/mensagem
- ng g c home/novo-usuario
- ng g s home/novo-usuario/novo-usuario
- ng g interface home/novo-usuario/novo-usuario


## Links
- https://github.com/tonsky/FiraCode
- https://prettier.io/

## Formulários
- Para enviar as informações do formulário é preciso criar um método no seu componente e associá-lo ao evento ngSubmit do elemento form da sua página.
```
<form class="form mt-4" (ngSubmit)="cadastro()">
```
- O Angular associa o modelo de dados ao template do formulário utilizando o componente ngModel e, para isso, deve fazer a ligação com o comando **[(ngModel)]="campo"** no template HTML.
- Através do ngModel é possível utilizar referências dos campos para validações no formulário como no seguinte exemplo:
```
<input
    placeholder="Nome"
    [(ngModel)]="nome"
    name="npme"
    #campoNome="ngModel"
/>
```
- É preciso configurar o módulo dessa funcionalidade para importar o módulo FormsModule.
```
@NgModule({
    declarations: [ContactComponent],
    imports: [CommonModule, FormsModule]
})
export class HomeModule {}
```

### Rodar Json-server
- json-server --watch db.json
