import { ArquivoXLSX } from "../Arquivos/ArquivoXLSX";
import { EditorArquivo } from "./EditorArquivo";

export class EditorXLSX extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoXLSX();
    }
}