//import { Component, OnInit } from '@angular/core';
//import { FormBuilder, Form, FormGroup, FormControl, Validators } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';

//@Component({
//  selector: 'app-career',
//  templateUrl: './career.component.html',
//  styleUrls: ['./career.component.css']
//})
//export class CareerComponent implements OnInit {
//  form: FormGroup;
//  name: FormControl = new FormControl("", [Validators.required]);
//  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
//  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
//  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
//  submitted: boolean = false; // show and hide the success message
//  isLoading: boolean = false; // disable the submit button if we're loading
//  responseMessage: string | undefined; // the response message to show to the user
//  constructor(private formBuilder: FormBuilder, private http: HttpClient, private fb: FormBuilder,) {
//    this.form = this.formBuilder.group({
//      name: this.name,
//      email: this.email,
//      message: this.message,
//      honeypot: this.honeypot
//    });
//  }
//  ngOnInit(): void {
//  }

//  createForm() {
//    this.form = this.fb.group({
//      name: ['', Validators.required],
//      email: ['', Validators.required],
//      message: ['', Validators.required],
//    });
//  }

//  onSubmit() {
//    if (this.form.status == "VALID" && this.honeypot.value == "") {
//      this.form.disable(); // disable the form if it's valid to disable multiple submissions
//      var formData: any = new FormData();
//      formData.append("name", this.form.get("name"));
//      formData.append("email", this.form.get("email"));
//      formData.append("message", this.form.get("message"));
//      this.isLoading = true; // sending the post request async so it's in progress
//      this.submitted = false; // hide the response message on multiple submits
//      this.http.post("YOUR GOOGLE WEB APP URL HERE", formData).subscribe(
//        (response) => {
//          // choose the response message
//          if (response== "success") {
//            this.responseMessage = "Thanks for the message! I'll get back to you soon!";
//          } else {
//            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
//          }
//          this.form.enable(); // re enable the form after a success
//          this.submitted = true; // show the response message
//          this.isLoading = false; // re enable the submit button
//          console.log(response);
//        },
//        (error) => {
//          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
//          this.form.enable(); // re enable the form after a success
//          this.submitted = true; // show the response message
//          this.isLoading = false; // re enable the submit button
//          console.log(error);
//        }
//      );
//    }
//  }
//}
import { CareerService } from '../career.service' ;
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any> | undefined;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private careerService: CareerService) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
    });
  }

  onSubmit() {
    this.careerService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
