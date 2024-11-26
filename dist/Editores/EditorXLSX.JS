"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorXLSX = void 0;
const ArquivoXLSX_1 = require("../Arquivos/ArquivoXLSX");
const EditorArquivo_1 = require("./EditorArquivo");
class EditorXLSX extends EditorArquivo_1.EditorArquivo {
    criarArquivo() {
        return new ArquivoXLSX_1.ArquivoXLSX();
    }
}
exports.EditorXLSX = EditorXLSX;