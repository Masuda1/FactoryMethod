Aqui está um **README.md** detalhado e organizado para o seu projeto:

---

# Factory Method Files

## Descrição

Este projeto é uma implementação do padrão de projeto **Factory Method** em TypeScript. Ele simula um sistema de gerenciamento de arquivos que suporta diferentes tipos de arquivos, como **PDF**, **DOCX**, **XLSX** e **TXT**, com abertura e salvamento de arquivos de maneira personalizada para cada tipo.

---

## Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:

```
factory-method-files
├── src
│   ├── arquivos
│   │   ├── Arquivo.ts         # Interface para os tipos de arquivos
│   │   ├── ArquivoPDF.ts      # Implementação específica para arquivos PDF
│   │   ├── ArquivoDOCX.ts     # Implementação específica para arquivos DOCX
│   │   ├── ArquivoXLSX.ts     # Implementação específica para arquivos XLSX
│   │   └── ArquivoTXT.ts      # Implementação específica para arquivos TXT
│   ├── editores
│   │   ├── EditorArquivo.ts   # Criador abstrato para gerenciar arquivos
│   │   ├── EditorPDF.ts       # Criador concreto para arquivos PDF
│   │   ├── EditorDOCX.ts      # Criador concreto para arquivos DOCX
│   │   ├── EditorXLSX.ts      # Criador concreto para arquivos XLSX
│   │   └── EditorTXT.ts       # Criador concreto para arquivos TXT
│   └── index.ts               # Arquivo principal para teste e execução
├── dist                       # Arquivos JavaScript gerados após compilação
├── node_modules               # Dependências do projeto (gerado por npm)
├── package.json               # Configuração do projeto Node.js
├── tsconfig.json              # Configuração do compilador TypeScript
└── README.md                  # Documentação do projeto
```

---

## Configuração do Ambiente

### Pré-requisitos
- **Node.js** (versão 18 ou superior).
- **TypeScript** (instalado globalmente ou via dependências do projeto).
- Editor de texto ou IDE como Visual Studio Code.

---

## Passos para Configuração

1. **Instale as dependências**
   ```bash
   npm install
   ```

2. **Compile o TypeScript**
   ```bash
   npx tsc
   ```

3. **Execute o programa**
   ```bash
   node dist/index.js
   ```

---

## Testando o Programa

Ao rodar o comando `node dist/index.js`, o programa gerenciará diferentes tipos de arquivos (PDF, DOCX, XLSX, TXT) e exibirá a seguinte saída no console:

```
Gerenciando arquivo com EditorPDF:
Abrindo arquivo PDF...
Salvando arquivo PDF...

Gerenciando arquivo com EditorDOCX:
Abrindo arquivo DOCX...
Salvando arquivo DOCX...

Gerenciando arquivo com EditorXLSX:
Abrindo arquivo XLSX...
Salvando arquivo XLSX...

Gerenciando arquivo com EditorTXT:
Abrindo arquivo TXT...
Salvando arquivo TXT...
```

---

## Personalização

Você pode adicionar novos tipos de arquivos seguindo os passos abaixo:

1. **Adicione um novo tipo de arquivo**:
   - Crie uma nova classe no diretório `src/arquivos` que implemente a interface `Arquivo`.

2. **Crie um novo editor**:
   - Adicione um criador concreto no diretório `src/editores` que herde de `EditorArquivo` e retorne a nova implementação do arquivo.

3. **Teste o novo editor**:
   - Adicione a nova classe no arquivo `index.ts` para gerenciá-la.

---

## Scripts Úteis

- **Compilar o TypeScript**:
  ```bash
  npm run build
  ```

- **Executar o programa**:
  ```bash
  npm start
  ```

---

## Tecnologias Usadas

- **Node.js**: Ambiente de execução.
- **TypeScript**: Linguagem usada para implementar o padrão de projeto.
- **Padrão de Projeto Factory Method**: Estrutura principal do projeto.

---