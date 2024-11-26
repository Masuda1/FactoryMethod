# Factory Method Files

## Descrição

Este projeto apresenta uma implementação prática do padrão de projeto **Factory Method** em **TypeScript**. Ele simula um sistema de gerenciamento de arquivos que suporta múltiplos formatos, como **PDF**, **DOCX**, **XLSX** e **TXT**, permitindo abertura e salvamento de arquivos de forma personalizada para cada tipo.

---

## Estrutura do Projeto

A organização das pastas e arquivos do projeto é a seguinte:

```
factory-method-files
├── src
│   ├── arquivos
│   │   ├── Arquivo.ts         # Interface genérica para os tipos de arquivos
│   │   ├── ArquivoPDF.ts      # Implementação para arquivos PDF
│   │   ├── ArquivoDOCX.ts     # Implementação para arquivos DOCX
│   │   ├── ArquivoXLSX.ts     # Implementação para arquivos XLSX
│   │   └── ArquivoTXT.ts      # Implementação para arquivos TXT
│   ├── editores
│   │   ├── EditorArquivo.ts   # Criador abstrato para gerenciar arquivos
│   │   ├── EditorPDF.ts       # Criador concreto para arquivos PDF
│   │   ├── EditorDOCX.ts      # Criador concreto para arquivos DOCX
│   │   ├── EditorXLSX.ts      # Criador concreto para arquivos XLSX
│   │   └── EditorTXT.ts       # Criador concreto para arquivos TXT
│   └── index.ts               # Ponto de entrada principal
├── dist                       # Arquivos JavaScript compilados
├── node_modules               # Dependências instaladas via npm
├── package.json               # Configurações do projeto e dependências
├── tsconfig.json              # Configurações do TypeScript
└── README.md                  # Documentação do projeto
```

---

## Configuração do Ambiente

### Pré-requisitos

- **Node.js** (versão 18 ou superior).
- **TypeScript** (pode ser instalado globalmente ou via dependências do projeto).
- Editor de código ou IDE, como **Visual Studio Code**.

---

## Guia de Configuração

1. **Instalar as dependências**:
   ```bash
   npm install
   ```

2. **Compilar o código TypeScript**:
   ```bash
   npx tsc
   ```

3. **Executar o programa**:
   ```bash
   node dist/index.js
   ```

---

## Funcionamento do Programa

Ao executar `node dist/index.js`, o programa exibirá no console uma simulação do gerenciamento de diferentes tipos de arquivos. Exemplo de saída esperada:

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

## Extensão e Personalização

É possível adicionar suporte a novos tipos de arquivos seguindo estes passos:

1. **Criação do tipo de arquivo**:
   - Adicione uma nova classe em `src/arquivos` que implemente a interface `Arquivo`.

2. **Criação do editor**:
   - Adicione um criador concreto em `src/editores`, estendendo a classe abstrata `EditorArquivo` para gerenciar o novo tipo de arquivo.

3. **Teste do novo editor**:
   - Modifique `index.ts` para incluir o novo tipo de arquivo e editor.

---

## Scripts Disponíveis

- **Compilar o TypeScript**:
  ```bash
  npm run build
  ```

- **Executar o programa**:
  ```bash
  npm start
  ```

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript.
- **TypeScript**: Linguagem de programação utilizada no projeto.
- **Padrão de Projeto Factory Method**: Base estrutural para o gerenciamento de arquivos.

---

## Contribuições

Contribuições são bem-vindas! Caso tenha sugestões ou melhorias, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

---

Este README agora segue uma estrutura mais detalhada e refinada, mantendo todas as informações essenciais organizadas de forma lógica e clara.
