import { ArquivoTXT } from "../Arquivos/ArquivoTXT";
import { EditorArquivo } from "./EditorArquivo";

export class EditorTXT extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoTXT();
    }
}