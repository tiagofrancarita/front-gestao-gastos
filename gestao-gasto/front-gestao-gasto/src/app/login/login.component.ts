import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

 constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Se o login for bem-sucedido, redirecione para outra página
        if (response.token) {
          this.router.navigate(['/home']);
          this.successMessage = 'Login com sucesso';
          this.openSnackBar(this.successMessage, 'green-snackbar');
        } else {
          // Caso contrário, exiba uma mensagem de erro
          console.log('Login falhou. Por favor, tente novamente.');
          this.errorMessage = 'Falha no login';
          this.openSnackBar(this.errorMessage, 'red-snackbar');

        }
      },
      (error) => {
        // Lógica para lidar com erros de autenticação
        console.error('Erro ao tentar fazer login:', error);
        this.openSnackBar('Falha no login', 'red-snackbar');

      }
    );
  }
    openSnackBar(message: string, panelClass: string) {
      this._snackBar.open(message, '', {
        duration: 3000,
        panelClass: [panelClass]
      });
    }
  }