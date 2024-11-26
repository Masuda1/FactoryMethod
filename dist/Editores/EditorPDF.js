"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorPDF = void 0;
const ArquivoPDF_1 = require("../Arquivos/ArquivoPDF");
const EditorArquivo_1 = require("./EditorArquivo");
class EditorPDF extends EditorArquivo_1.EditorArquivo {
    criarArquivo() {
        return new ArquivoPDF_1.ArquivoPDF();
    }
}
exports.EditorPDF = EditorPDF;