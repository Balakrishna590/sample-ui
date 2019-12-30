import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CONFIGURATION } from './../../configuration/transalation.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;
  public localeStrings: any;
  constructor(private formBuilder: FormBuilder) {
    this.localeStrings = CONFIGURATION.localeStrings['en_us'];
  }

  ngOnInit() {
    this.initializeLoginFormData();
  }
  private initializeLoginFormData(): any {
    this.loginForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
