import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CONFIGURATION } from './../../configuration/transalation.config';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  public regForm: FormGroup;
  public submitted = false;
  public localeStrings: any;
  private updatedFormData: Object;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private formBuilder: FormBuilder) {
    this.localeStrings = CONFIGURATION.localeStrings['en_us'];
  }

  ngOnInit() {
    this.initializeRegFormData();
  }

  private initializeRegFormData(): any {
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
      cPassword: ['', [Validators.required]],
      day: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]]
    });
  }

  get regFormCtrls() 
  { 
    return this.regForm.controls; 
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.regForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }
  public registerUser(): any {
    if (this.regForm.valid) {
     
    }
  }
  /* public findInvalidControls() {
    const invalid: any = [];
    const controls = this.regForm['controls'];
    for (let name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  } */
}
