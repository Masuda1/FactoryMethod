"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EditorPDF_1 = require("./Editores/EditorPDF");
const EditorDOCX_1 = require("./Editores/EditorDOCX");
const EditorXLSX_1 = require("./Editores/EditorXLSX");
const EditorTXT_1 = require("./Editores/EditorTXT");
function testeFactoryMethod() {
    const editores = [
        new EditorPDF_1.EditorPDF(),
        new EditorDOCX_1.EditorDOCX(),
        new EditorXLSX_1.EditorXLSX(),
        new EditorTXT_1.EditorTXT()
    ];
    editores.forEach(editor => {
        console.log(`\nGerenciando arquivo com ${editor.constructor.name}:`);
        editor.gerenciarArquivo();
    });
}
testeFactoryMethod();