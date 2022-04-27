import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { ContaListComponent } from './conta/conta-list/conta-list.component';
import { ContaCreateComponent } from './conta/conta-create/conta-create.component';
import { TransacoesListComponent } from './transacoes/transacoes-list/transacoes-list.component';
import { TransacoesCreateComponent } from './transacoes/transacoes-create/transacoes-create.component';
import { TipoContaListComponent } from './tipo-conta/tipo-conta-list/tipo-conta-list.component';
import { TransacoesDetailsComponent } from './transacoes/transacoes-details/transacoes-details.component';
import { TransacoesEditComponent } from './transacoes/transacoes-edit/transacoes-edit.component';
import { ContaDetailsComponent } from './conta/conta-details/conta-details.component';
import { ContaEditComponent } from './conta/conta-edit/conta-edit.component';
import { ExportPageComponent } from './export/export-page/export-page.component';
import { PieChartComponent } from './graphs/pie-chart/pie-chart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineChartComponent } from './graphs/line-chart/line-chart.component';
import { OrcamentoListComponent } from './orcamento/orcamento-list/orcamento-list.component';
import { OrcamentoDetailsComponent } from './orcamento/orcamento-details/orcamento-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TipoContaEditComponent } from './tipo-conta/tipo-conta-edit/tipo-conta-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TipoContaCreateComponent } from './tipo-conta/tipo-conta-create/tipo-conta-create.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ObjetivosListComponent } from './objetivos/objetivos-list/objetivos-list.component';
import { ObjetivosCreateComponent } from './objetivos/objetivos-create/objetivos-create.component';
import { PagTransacoesListComponent } from './pagTransacoes/pag-transacoes-list/pag-transacoes-list.component';
import { PagContaListComponent } from './pagConta/pag-conta-list/pag-conta-list.component';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';
import { CategoriaDetailsComponent } from './categorias/categoria-details/categoria-details.component';
import { CategoriaEditComponent } from './categorias/categoria-edit/categoria-edit.component';
import { CategoriaCreateComponent } from './categorias/categoria-create/categoria-create.component';
import { OrcamentoCreateComponent } from './orcamento/orcamento-create/orcamento-create.component';
import { OrcamentoEditComponent } from './orcamento/orcamento-edit/orcamento-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ContaListComponent,
    ContaCreateComponent,
    TransacoesListComponent,
    TransacoesCreateComponent,
    TipoContaListComponent,
    TransacoesDetailsComponent,
    TransacoesEditComponent,
    ContaDetailsComponent,
    ContaEditComponent,
    ExportPageComponent,
    PieChartComponent,
    LineChartComponent,
    OrcamentoListComponent,
    OrcamentoDetailsComponent,
    TipoContaEditComponent,
    TipoContaCreateComponent,
    PagTransacoesListComponent,
    PagContaListComponent,
    CategoriaListComponent,
    CategoriaDetailsComponent,
    CategoriaEditComponent,
    CategoriaCreateComponent,
    ObjetivosListComponent,
    ObjetivosCreateComponent,
    PagTransacoesListComponent,
    OrcamentoCreateComponent,
    OrcamentoEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'conta-create', component: ContaCreateComponent },
      { path: 'transacoes-create', component: TransacoesCreateComponent },
      { path: 'transacoes-details/:id', component: TransacoesDetailsComponent },
      { path: 'transacoes-edit/:id', component: TransacoesEditComponent },
      { path: 'conta-details/:id', component: ContaDetailsComponent },
      { path: 'conta-edit/:id', component: ContaEditComponent },
      { path: 'tipo-conta', component: TipoContaListComponent },
      { path: 'export-page', component: ExportPageComponent },
      { path: 'orcamento-list', component: OrcamentoListComponent },
      { path: 'orcamento-create', component: OrcamentoCreateComponent },
      { path: 'orcamento-edit/:id', component: OrcamentoEditComponent },
      { path: 'orcamento-details/:id', component: OrcamentoDetailsComponent },
      { path: 'tipo-conta-edit/:id', component: TipoContaEditComponent },
      { path: 'tipo-conta-create', component: TipoContaCreateComponent },
      { path: 'objetivos-list', component: ObjetivosListComponent },
      { path: 'objetivos-create', component: ObjetivosCreateComponent },
      { path: 'pag-transacoes', component: PagTransacoesListComponent },
      { path: 'pag-contas', component: PagContaListComponent },
      { path: 'categoria-list', component: CategoriaListComponent },
      { path: 'categoria-details/:id', component: CategoriaDetailsComponent },
      { path: 'categoria-edit/:id', component: CategoriaEditComponent },
      { path: 'categoria-create', component: CategoriaCreateComponent },


    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatProgressBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
