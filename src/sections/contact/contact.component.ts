import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { EmailService } from '../../shared/services/email.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IContact } from '../../shared/interfaces/IContact';
import { first } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'bw-contact',
  standalone: true,
  imports: [SectionComponent, InputComponent,ButtonComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  constructor(private _emailService: EmailService) {
    this.contactForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      help: new FormControl('',[Validators.required]),
      position: new FormControl('',[Validators.required]) ,  
      enterprise: new FormControl('',[Validators.required])       
    })
  }

  onSubmit(){
    console.log(this.contactForm)
    if (!this.contactForm.valid) return;
    var request = new IContact(this.contactForm.get('email')?.value,this.contactForm.get('phone')?.value,this.contactForm.get('name')?.value,this.contactForm.get('help')?.value,this.contactForm.get('position')?.value,this.contactForm.get('enterprise')?.value)
    this._emailService.SendEmail(request).subscribe({
      next: (value) =>{
        console.log(value)
      },
      error: (error) =>{
        console.log(error)
      }
    });
  }
}
