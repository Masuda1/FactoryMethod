import { ArquivoDOCX } from "../Arquivos/ArquivoDOCX";
import { EditorArquivo } from "./EditorArquivo";

export class EditorDOCX extends EditorArquivo {
    criarArquivo(): Arquivo {
        return new ArquivoDOCX();
    }
}