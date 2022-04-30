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
import { ObjetivosDetailsComponent } from './objetivos/objetivos-details/objetivos-details.component';
import { ObjetivosEditComponent } from './objetivos/objetivos-edit/objetivos-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HomePageWithoutLoginComponent } from './home-page-without-login/home-page-without-login.component';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';



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
    OrcamentoEditComponent,
    ObjetivosDetailsComponent,
    ObjetivosEditComponent,
    HomePageWithoutLoginComponent
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
      { path: 'conta-create', component: ContaCreateComponent, canActivate: [AuthorizeGuard, UserGuard] },
      { path: 'transacoes-create', component: TransacoesCreateComponent, canActivate: [AuthorizeGuard] },
      { path: 'transacoes-details/:id', component: TransacoesDetailsComponent, canActivate: [AuthorizeGuard] },
      { path: 'transacoes-edit/:id', component: TransacoesEditComponent, canActivate: [AuthorizeGuard] },
      { path: 'conta-details/:id', component: ContaDetailsComponent, canActivate: [AuthorizeGuard] },
      { path: 'conta-edit/:id', component: ContaEditComponent, canActivate: [AuthorizeGuard] },
      { path: 'tipo-conta', component: TipoContaListComponent, canActivate: [AuthorizeGuard, AdminGuard] },
      { path: 'export-page', component: ExportPageComponent, canActivate: [AuthorizeGuard] },
      { path: 'orcamento-list', component: OrcamentoListComponent, canActivate: [AuthorizeGuard] },
      { path: 'orcamento-create', component: OrcamentoCreateComponent, canActivate: [AuthorizeGuard] },
      { path: 'orcamento-edit/:id', component: OrcamentoEditComponent, canActivate: [AuthorizeGuard] },
      { path: 'orcamento-details/:id', component: OrcamentoDetailsComponent, canActivate: [AuthorizeGuard] },
      { path: 'tipo-conta-edit/:id', component: TipoContaEditComponent, canActivate: [AuthorizeGuard, AdminGuard] },
      { path: 'tipo-conta-create', component: TipoContaCreateComponent, canActivate: [AuthorizeGuard, AdminGuard] },
      { path: 'objetivos-list', component: ObjetivosListComponent, canActivate: [AuthorizeGuard] },
      { path: 'objetivos-create', component: ObjetivosCreateComponent, canActivate: [AuthorizeGuard] },
      { path: 'objetivos-details/:id', component: ObjetivosDetailsComponent, canActivate: [AuthorizeGuard] },
      { path: 'objetivos-edit/:id', component: ObjetivosEditComponent, canActivate: [AuthorizeGuard] },
      { path: 'pag-transacoes', component: PagTransacoesListComponent, canActivate: [AuthorizeGuard] },
      { path: 'pag-contas', component: PagContaListComponent, canActivate: [AuthorizeGuard] },
      { path: 'categoria-list', component: CategoriaListComponent, canActivate: [AuthorizeGuard] },
      { path: 'categoria-details/:id', component: CategoriaDetailsComponent, canActivate: [AuthorizeGuard] },
      { path: 'categoria-edit/:id', component: CategoriaEditComponent, canActivate: [AuthorizeGuard] },
      { path: 'categoria-create', component: CategoriaCreateComponent, canActivate: [AuthorizeGuard] },
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatRippleModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-PT' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
