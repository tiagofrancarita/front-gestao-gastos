import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

 constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Se o login for bem-sucedido, redirecione para outra página
        if (response.token) {
          this.router.navigate(['/home']);
        } else {
          // Caso contrário, exiba uma mensagem de erro
          console.log('Login falhou. Por favor, tente novamente.');
        }
      },
      (error) => {
        // Lógica para lidar com erros de autenticação
        console.error('Erro ao tentar fazer login:', error);
      }
    );
  }
}