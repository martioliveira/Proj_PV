import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjetivoService } from '../../models/models-services/objetivo.service';
import { Objetivo } from '../../models/objetivo.model';

@Component({
  selector: 'app-objetivos-details',
  templateUrl: './objetivos-details.component.html',
  styleUrls: ['./objetivos-details.component.css']
})
export class ObjetivosDetailsComponent implements OnInit {
  id: string = "";
  objetivo: Objetivo = new Objetivo();
  objetivoPercentagem: number = 0;  //valorAcumulado / valorAtingir*100
  objetivoQtMensal: number = 0; // (ValorAtingir - ValorAcumulado) / getMonthDifference
  //objetivoSaldo ?


  constructor(private serviceObjetivo: ObjetivoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getObjetivoId(this.id);
  }

  getObjetivoId(id: string) {
    this.serviceObjetivo.getCustomObjetivoId(id).subscribe((objetivo: Objetivo) => {
      this.objetivo = objetivo;
      this.objetivoPercentagem = (objetivo.valorAcumulado / objetivo.valorAtingir) * 100;
      this.objetivoQtMensal = (objetivo.valorAtingir - objetivo.valorAcumulado) / this.getMonthDifference(objetivo.dataInicio, objetivo.dataFim);});
      
  }


getMonthDifference(dataInicio: string, dataFim: string) {

  var numDataFim = new Date(dataFim);
  var numDataInicio = new Date(dataInicio);

  return (
 
    numDataFim.getMonth() -
    numDataInicio.getMonth() +
    (12 * (numDataFim.getFullYear() - numDataInicio.getFullYear())) +1
  );
}


  onSubmit(objetivoForm: NgForm) {
    this.serviceObjetivo.patchObjetivo(this.id , objetivoForm.value).subscribe(res => {
      this.router.navigateByUrl('/');
    },
      error => {
        console.error(error);
      });
  }




}
