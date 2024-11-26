import { ArquivoPDF } from "../Arquivos/ArquivoPDF";
import { EditorArquivo } from "./EditorArquivo";

export class EditorPDF extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoPDF();
    }
}