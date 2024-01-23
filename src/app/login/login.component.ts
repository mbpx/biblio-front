import { Component } from '@angular/core';
import { PrimengCommonModule } from '../primeng-common.module';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ PrimengCommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  usuario: string = '';
  password: string = '';

  login() {
    this.authenticationService.login(this.usuario, this.password).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.error(error);
      }
    });
  }


}
