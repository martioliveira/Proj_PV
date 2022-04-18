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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './graphs/line-chart/line-chart.component';

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
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
