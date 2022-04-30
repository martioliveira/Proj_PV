import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';

@Component({
  selector: 'app-pag-conta-list',
  templateUrl: './pag-conta-list.component.html',
  styleUrls: ['./pag-conta-list.component.css']
})
export class PagContaListComponent implements OnInit {

  public contas: Conta[] = [];
  isAdmin = false;

  constructor(private service: ContaService, private userService: AuthorizeService) { }

  ngOnInit(): void {
    this.getContas();
    this.getIsAdmin();
  }

  getIsAdmin(): void {
    this.userService.isAdmin().subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  getContas(): void {
    this.service.getContas().subscribe((contas: Conta[]) => this.contas = contas);
  }

  onDeleteTransacao(id: string) {
    if (confirm("Apagar a conta?")) {
      this.service.deleteConta(id)
        .subscribe(res => {
          this.getContas();
        });
    }
  }

}
