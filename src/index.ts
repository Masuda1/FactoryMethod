import { EditorPDF } from "./Editores/EditorPDF";
import { EditorDOCX } from "./Editores/EditorDOCX";
import { EditorXLSX } from "./Editores/EditorXLSX";
import { EditorTXT } from "./Editores/EditorTXT";
import { EditorArquivo } from "./Editores/EditorArquivo";

function testeFactoryMethod(): void {
    const editores: EditorArquivo[] = [
        new EditorPDF(),
        new EditorDOCX(),
        new EditorXLSX(),
        new EditorTXT()
    ];

    editores.forEach(editor => {
        console.log(`\nGerenciando arquivo com ${editor.constructor.name}:`);
        editor.gerenciarArquivo();
    });
}

testeFactoryMethod();