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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TipoContaEditComponent } from './tipo-conta/tipo-conta-edit/tipo-conta-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TipoContaCreateComponent } from './tipo-conta/tipo-conta-create/tipo-conta-create.component';

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
    TipoContaEditComponent,
    TipoContaCreateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'conta-create', component: ContaCreateComponent },
      { path: 'transacoes-create', component: TransacoesCreateComponent },
      { path: 'transacoes-details/:id', component: TransacoesDetailsComponent },
      { path: 'transacoes-edit/:id', component: TransacoesEditComponent },
      { path: 'conta-details/:id', component: ContaDetailsComponent },
      { path: 'conta-edit/:id', component: ContaEditComponent },
      { path: 'tipo-conta', component: TipoContaListComponent },
      { path: 'tipo-conta-edit/:id', component: TipoContaEditComponent },
      { path: 'tipo-conta-create', component: TipoContaCreateComponent },
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
