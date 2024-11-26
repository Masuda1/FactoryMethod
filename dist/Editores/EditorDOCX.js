"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorDOCX = void 0;
const ArquivoDOCX_1 = require("../Arquivos/ArquivoDOCX");
const EditorArquivo_1 = require("./EditorArquivo");
class EditorDOCX extends EditorArquivo_1.EditorArquivo {
    criarArquivo() {
        return new ArquivoDOCX_1.ArquivoDOCX();
    }
}
exports.EditorDOCX = EditorDOCX;