import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Automovil } from 'src/app/models';
import { ModalAddUpdateComponent } from "../modals/modal-add-update/modal-add-update.component";
import { AutosService } from "../services/autos.service";
// import { AUTOMOVILES } from 'src/app/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos!: Automovil[];
  page=1;
  pageSize=10;

  constructor(private autosService: AutosService, private modalService: NgbModal, private router: Router){

  }
  ngOnInit(): void {
    this.fetchData();
  }

  public fetchData(): void{
    this.autosService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true})
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Editar";
    modalRef.result.then(
      (auto)=>{
        this.autosService.updateAuto(auto).subscribe(response=>console.log(response));
      }
    )
  }

  openModalEliminar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true})
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Eliminar";
    modalRef.result.then(
      (auto)=>{
        this.autosService.deleteAuto(auto).subscribe(()=>this.fetchData());
      }
    );
  }
}