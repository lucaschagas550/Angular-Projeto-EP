import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import localePt from '@angular/common/locales/pt';
import { DetalheProdutoComponent } from './produtos/detalhe-produto/detalhe-produto.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutosComponent,
    DetalheProdutoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutoService,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
