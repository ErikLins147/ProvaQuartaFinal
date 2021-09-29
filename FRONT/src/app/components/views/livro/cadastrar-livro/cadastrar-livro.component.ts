import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Livro } from "src/app/models/livro";
import { LivroService } from "src/app/services/livro.service";

@Component({
    selector: "app-cadastrar-livro",
    templateUrl: "./cadastrar-livro.component.html",
    styleUrls: ["./cadastrar-livro.component.css"],
})
export class CadastrarLivroComponent implements OnInit {
    nome!: string;
    autor!: string;
    genero!: string;
    quantidade!: number;

    constructor(private service: LivroService, private router: Router) {}

    ngOnInit(): void {}

    cadastrarLi(): void {
        let livro: Livro = {
            nome: this.nome,
            autor: this.autor,
            genero: this.genero,
            quantidade: this.quantidade,
        };
        this.service.create(livro).subscribe((livro) => {
            console.log(livro);
            this.router.navigate(["livro/listar"]);
        });
    }
}
