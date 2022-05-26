# Comandos básicos Git e Github

## Sumário

<!--ts-->

- [Guia Rápido](#guia-rápido)
  - [Versionando os arquivos localmente](#versionando-com-o-git)
  - [Subindo para o Github](#subindo-o-repositório-local-para-o-github)
  - [Trazendo um repositório da nuvem](#trazendo-um-repositório-da-nuvem)
  - [Sincronizando um repositório local com o da nuvem](#sincronizando-um-repositório-local-com-o-da-nuvem)
  - [Trabalhando com branches](#trabalhando-com-branches)
  - [Para juntar os códigos das branches](#para-juntar-os-códigos-das-branches)
- [Conceitos](#conceitos)
  - [Versionamento com o Git](#versionamento-com-o-git)
  - [Subindo o repositório local para a nuvem](#subindo-para-o-github)
  - [Branches e Merge](#branches-e-merge)
- [Principais Comandos do Git](#-principais-comandos-do-git-)
<!--te-->

# Guia Rápido

## Versionando com o Git

1. Para iniciar o versionamento Git em um projeto:

   `git init`

2. Adicionar os arquivos para o commit:

   `git add <nome do arquivo>` ou `git add .`

3. Salvar as alterações criando o commit:

   `git commit -m "Descrição do commit"`

## Subindo o repositório local para o Github

1. Primeiro temos que vincular um repositório remoto

   `git remote add <apelido do repositório> <link do repositório>`

   Exemplo: `git remote add origin https://github.com/adosilva/referencia-git`

2. Com o repositório vinculado, podemos subir os commits para a nuvem

   `git push <apelido do repositorio remoto> <branch atual>`

   Exemplo: `git push origin develop`

## Trazendo um repositório da nuvem

Se você não possui o repositório na sua máquina, para trazer um repositório do Github, execute:

`git clone <link do repositório>`

Exemplo: `git clone https://github.com/adosilva/referencia-git`

## Sincronizando um repositório local com o da nuvem

Se você já possui o repositório na sua máquina e na nuvem, e quer trazer as alterações que foram feitas no repositório remoto, execute:

`git pull <nome do repositório> <nome da branch>`

Exemplo: `git pull origin main`

## Trabalhando com branches

Para criar uma nova branch:

`git branch <nome da nova branch>`

Exemplo: `git branch develop`

Listar as branches existentes, a branch que estiver marcada é a branch atual

`git branch -a`

Para mudar de branch:

`git checkout <nome da branch de destino>`

Exemplo: `git checkout develop`

## Para juntar os códigos das branches

Supondo que estamos na branch "pagina-login", e queremos adicionar o código dessa branch na branch "develop"

1. Precisamos mudar para a branch onde ficarão as alterações (Nesse caso "develop"):

`git checkout develop`

2. Agora trazemos os commits da branch "pagina-login" para a branch atual (develop):

`git merge <branch de onde queremos trazer o código>`

Nesse caso: `git merge pagina-login`

# Conceitos

## Versionamento com o Git

Para criar iniciar o versionamento em um projeto utilizando o Git, dentro da pasta do projeto execute o comando:

`git init`

Para adicionar os arquivos para salvar o commit, é necessário adiciona-los a fila, para isso execute o comando:

`git add <nome do arquivo>`

Ou se quiser adicionar todos os arquivos modificados à lista, execute:

`git add .`

Para salvar as alterações feitas, depois de adicionar os arquivos a fila, é necessário fazer o commit, para isso execute:

`git commit -m "Descrição do commit"`

## Subindo para o Github

Podemos sincronizar um projeto local do Git com um repositório remoto no Github, para fazer isso precisamos vincular o projeto local com esse repositório na nuvem.

Para isso executamos:

`git remote add <apelido do repositorio remoto> <link do repositório>`

Por exemplo:

`git remote add origin https://github.com/user/referencia-git`

Esse comando vincula um repositório remoto (< link do repositório >), utilizando um "apelido" (< apelido do repositório>).

Depois de vincular o repositório remoto, já podemos subir os commits para ele, para fazer isso usamos o comando:

`git push <apelido do repositorio remoto> <branch atual>`

Por exemplo:

`git push origin main`

Esse comando sobe os commits feitos na branch (< branch atual>) para o repositorio remoto (< apelido do repositorio remoto>)

Com esses passos, o repositório no github já vai conter os commits realizados.

Caso queiramos trazer uma cópia do repositório do github, para a nossa máquina, teremos que clonar o repositório, para isso execute o comando:

`git clone <link do repositorio>`

Por exemplo:

`git clone https://github.com/user/referencia-git`

Esse comando vai trazer uma cópia do repositório, inclusive já pronta para os futuros commits e pushes.

Agora para trazer as mudanças que estão no repositório remoto, e ainda não estão no repositório local, precisar fazer o "pull" desses commits. Para isso executamos:

`git pull <nome do repositorio> <nome da branch>`

Por exemplo:

`git pull origin main`

Se o repositório local já estiver na branch que deseja trazer do repositório remoto podemos omitir o nome do repositorio e o nome da branch, ficando simplesmente:

`git pull`

## Branches e Merge

#### O que são branches?

Branches são ramificações do código principal, onde conseguimos trabalhar em separado, geralmente criamos uma branch para desenvolver uma funcionalidade e ao mesmo tempo não alterar o código principal.

É uma prática muito utilizada entre os desenvolvedores, principalmente para termos um ambiente de homologação, de teste, e não colocarmos o código novo direto em produção, evitando que códigos não revisados sejam incrementados ao código principal.

#### Como trabalhar com as branches?

Quando criamos um repositório, por padrão, ele possui uma única branch, que é a branch principal, geralmente tem o nome `main`.

Para criarmos uma branch de homologação, podemos seguir os seguintes passos:

1.  ##### Criando a branch de homologação
    Para criar uma branch de homologação chamada develop, executamos:

`git branch <nome da branch>`

Nesse caso:

`git branch develop`

2.  ##### Para utilizarmos a branch "develop"
    Para utilizarmos essa branch criada temos que sair da branch "main" e ir para a "develop", para isso, executamos:

`git checkout <branch de destino>`

Nesse caso:

`git checkout develop`

Depois de feitos os commits nessa branch, para subirmos ela para o repositório no Github, executamos:

`git push origin develop`

#### Juntando as branches

Quando queremos juntar o conteúdo das branches, temos que fazer o `merge`.

Por exemplo, depois de uma revisão e sabendo que o código está correto podemos levar o código da branch de homologação (`develop`), para a branch principal (`main`), para isso...

1.  ##### Primeiro mudamos para a branch principal

    `git checkout main`

2.  ##### E juntamos o código da "develop" com a "main"

    `git merge develop`

## 👑 Principais comandos do GIT 👑

### Defini o nome de usuário

```bash
git config --global user.name “seu nome”
```

### Defini o email do usuário

```bash
git config --global user.email “seu email”
```

### Inicializa o repositório

```bash
git init
```

### Verifica se houve alterações / estado dos arquivos

```bash
git status
```

### Coloca o arquivo em Staging

```bash
git add NomeDoArquivo.txt
```

### Realiza o Commit

```bash
git commit -m "meu commit aqui"
```

### Informar a pasta remota (Via HTTPS):

(lembre-se de trocar o usuário no comando)

```bash
git remote add origin https://github.com/adosilva/senai-versoes-colaboracoes.git
```

### Informar a pasta remota (Via SSH):

(lembre-se de trocar o usuário no comando)

```bash
git remote add origin git@github.com:adosilva/senai-versoes-colaboracoes.git
```

### Visualizar o repositório remoto:

```bash
git remote –v
```

### Alterar o nome da branch principal de Master para Main (isso é uma boa prática atualmente recomendada)

```bash
git branch -M "main"
```

### Realiza o envio dos commits para o branch master

```bash
git push origin master
```

### Baixar a alteração feita no repositório remoto:

```bash
git pull
```

### Cria uma tag

```bash
git tag -a <nome da tag> -m <comentário>
```

### Realiza o envio das Tags para o repositório remoto

```bash
git push origin --tags
```

### Muda para a branch Master

```bash
git checkout master
```

### Cria uma nova branch

```bash
git checkout -b nome-branch
```

### Realiza o envio dos commits para a nova branch

```bash
git push origin nome-branch
```

### Faz a mesclagem com outra branch

```bash
git merge origin nome-branch
```

By Abimael Silva
