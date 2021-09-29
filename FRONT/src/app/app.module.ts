import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarLivroComponent } from './components/views/livro/cadastrar-livro/cadastrar-livro.component';
import { ListarLivroComponent } from './components/views/livro/listar-livro/listar-livro.component';


@NgModule({
    declarations: [
        AppComponent,

        CadastrarLivroComponent,
        ListarLivroComponent,

    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
