import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm:FormGroup;
  private emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  private phonePattern = /^[0-9]{8}$/;
  constructor(private fb:FormBuilder, private spinner:SpinnerService, private contactService:ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  async onSaveData():Promise<void>{
    if (this.contactForm.valid){
      const formValues = this.contactForm.value;
      this.spinner.getSpinner();
      try {
        this.contactService.saveContact(formValues).then((results)=>{
          Swal.fire('Mensaje enviado', `<strong>
          Su mensaje ha sido enviado, <br>
          pronto nos pondremos en contacto
          con usted.</strong>`, 'success');
          this.contactForm.reset();
          this.spinner.stopSpinner();
        }).catch((error)=>{
          console.log(error);
          Swal.fire('Ocurrio un error', `<strong>
          Ocurrio un error al intentar enviar su mensaje <br>
          por favor, intentelo de nuevo.
          </strong>`, 'error');
          this.spinner.stopSpinner();
        });
      } catch (error) {
        console.log(error);
        Swal.fire('Ocurrio un error', `<strong>
        Ocurrio un error al intentar enviar su mensaje <br>
        por favor, intentelo de nuevo.
        </strong>`, 'error');
      }
    }
    else{
      Swal.fire('Campos incorrectos', `<strong>
      Por favor, llene todos los campos de manera correcta.
      </strong>`, 'error');
    }
  }

  isValidData():String{
    if (this.contactForm.valid){
      return 'btn-success';
    }
    else{
      return 'btn-danger';
    }
  }

  validField(fieldName:string):string{
    const validatedField = this.contactForm.get(fieldName);
    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  private initForm():void{
    this.contactForm = this.fb.group({
      // Estructura [valor inicial, validaciones  ]
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
    });
  }

}
