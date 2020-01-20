import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordmatching, usermatching, passwordValidator } from './customvalidators';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  hide = true;
  hiide = true;
  contactForm: FormGroup;
  score: number= 0;
  meterValue = 0;
  passwordStatus = " ";
  
  constructor(public fb: FormBuilder) {
    this.contactForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), usermatching]],
      email: ['',[Validators.required, Validators.email]],    
      pword: ['',[Validators.required, Validators.minLength(8), passwordValidator ]],
      pwordchk: ['', [Validators.required, passwordmatching]],
      date: ['', [Validators.required]]
    })

    this.contactForm.controls.pword.valueChanges.subscribe((response) => {
      if (response.match('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')) {
        this.meterValue = 100;
        this.passwordStatus = 'strong';
      }

      else if (response.match('.{6,}')) {        
        this.meterValue = 50;
        this.passwordStatus = 'moderate';
      }

      else if (response.match('.{3,}')) {
        this.meterValue = 20;
        this.passwordStatus = 'weak';
      }

      else {
        this.meterValue = 0;
        this.passwordStatus = 'weak';
      }
    }
    );

  }
  ngOnInit() {
  }

  getUserErrorMessage() {
    return this.contactForm.controls['username'].hasError('required') ? 'Username is required' :
        this.contactForm.controls['username'].hasError('minlength') ? 'Username must have at least 3 characters' :
        this.contactForm.controls['username'].hasError('maxlength') ? 'Username cannot have more than 10 characters' : 
        this.contactForm.controls['username'].hasError('userNameNotAvailable') ? 'Sorry, this username is unavailable!' :       
        '';
  }

  getEmailErrorMessage() {
    return this.contactForm.controls['email'].hasError('required') ? 'Email Id is required' :
           this.contactForm.controls['email'].hasError('email') ? 'Enter a valid email' :
           '';
}

getPwordErrorMessage() {
  return this.contactForm.controls['pword'].hasError('required') ? 'Password is required' :
         this.contactForm.controls['pword'].hasError('minlength') ? 'Password should be at least 8 characters long' :
         this.contactForm.controls['pword'].hasError('passwordDoesNotHaveDigit') ? 'Password must contain at least one digit' :
         this.contactForm.controls['pword'].hasError('passwordDoesNotHaveLowercase') ? 'Password must contain at least one lowercase character' :
         this.contactForm.controls['pword'].hasError('passwordDoesNotHaveUppercase') ? 'Password must contain at least one uppercase character' :
         this.contactForm.controls['pword'].hasError('passwordDoesNotHaveSpecial') ? 'Password must contain at least one special character' :
         '';
}

getPwordchkErrorMessage() {
  return this.contactForm.controls['pwordchk'].hasError('required') ? 'You need to confirm the password' :
         this.contactForm.controls['pwordchk'].hasError('passwordNotMatched') ? 'passwords do not match':
         '';
}

getDateErrorMessage() {
  return this.contactForm.controls['date'].hasError('required') ? 'Date of Birth is required' :
         /*code for age checking */
         '';
}

onSubmit(form) {
  console.log(form.value);
}
}





/*strength(password, element){

  var wide = [{'width':'0%'}, {'width':'20%'}, {'width':'40%'}, {'width':'60%'}, {'width':'80%'}, {'width':'100%'}];
  var currentClass = ['', 'progress-bar-danger', 'progress-bar-danger', 'progress-bar-warning', 'progress-bar-success', 'progress-bar-success'];
  

  if(password.length > 6){
    this.score++;
}

if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))){
    this.score++;
}

if(password.match(/\d+/)){
    this.score++;
}

if(password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)){
    this.score++;
}

if (password.length > 10){
    this.score++;
}

element.removeClass( currentClass[score-1] ).addClass( currentClass[score] ).css( wide[score] );
}*/
