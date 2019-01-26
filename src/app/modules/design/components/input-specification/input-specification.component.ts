import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BUTTONS} from "../../../../../constants/Buttons";
import {LABELS} from "../../../../../constants/Labels";
import {FormGroup} from "@angular/forms";
import {InputSpecificationService} from "../../services/input-specification/input-specification.service";
import {Subscription} from "rxjs/index";
import {TRANSFORMER} from "../../../../../constants/Transformer";

@Component({
  selector: 'app-input-specification',
  templateUrl: './input-specification.component.html',
  styleUrls: ['./input-specification.component.scss']
})
export class InputSpecificationComponent implements OnInit {
  closeResult: string;
  buttons = BUTTONS;
  labels = LABELS;
  transformerType = TRANSFORMER.TYPE;
  tranformerTypeFormSubscription:Subscription;
  tranformerTypeForm: FormGroup;
  formValue;

  constructor(
    private modalService: NgbModal,
    private inputSpecificationService: InputSpecificationService,
  ) {}

  ngOnInit() {
    // this.subscriptions.push(
    this.tranformerTypeFormSubscription = this.inputSpecificationService.$tranformerTypeForm.subscribe(
        (tranformerTypeForm) => {
          this.tranformerTypeForm = tranformerTypeForm
        }
      )
    // );

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.inputSpecificationService.resetTranformerTypeForm();
    this.onNext();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onNext(){

    console.log(this.tranformerTypeForm);
  }

}
