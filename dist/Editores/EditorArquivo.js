"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorArquivo = void 0;
class EditorArquivo {
    gerenciarArquivo() {
        const arquivo = this.criarArquivo();
        arquivo.abrir();
        arquivo.salvar();
    }
}
exports.EditorArquivo = EditorArquivo;