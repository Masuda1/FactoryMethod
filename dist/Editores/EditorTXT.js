"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorTXT = void 0;
const ArquivoTXT_1 = require("../Arquivos/ArquivoTXT");
const EditorArquivo_1 = require("./EditorArquivo");
class EditorTXT extends EditorArquivo_1.EditorArquivo {
    criarArquivo() {
        return new ArquivoTXT_1.ArquivoTXT();
    }
}
exports.EditorTXT = EditorTXT;