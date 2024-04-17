import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosServiceService } from '../usuarios-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'] // Use styleUrls em vez de styleUrl
})
export class CadastroUsuarioComponent implements OnInit {

  usuarios!: any[]; // Declaração da propriedade 'usuarios'

  userForm!: FormGroup;
  displayedColumns: string[] = ['id', 'login', 'nome', 'email', 'senha','confirmaSenha','status','perfil','dataCadastro','dataDesbloqueio','dataExpiracaoSenha','dataInativacao','dataReativacao']; 
  dataSource = new MatTableDataSource<any>(); // Certifique-se de que o tipo corresponda aos dados retornados do backend
  token: string = ''; // Adicione uma variável para armazenar o token de autenticação


  constructor(private authService: AuthService, private formBuilder: FormBuilder, private userService: UsuariosServiceService) { }


  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      login: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmaSenha: ['', Validators.required],
      status: ['', Validators.required],
      perfil: ['', Validators.required],
      dataCadastro: ['', Validators.required],
      dataDesbloqueio: [''],
      dataExpiracaoSenha: ['', Validators.required],
      dataInativacao: [''],
      dataReativacao: [''] // Corrigido o nome da propriedade
    }, { validator: this.passwordMatchValidator });

    this.fetchUsuarios(); // Chama a função para buscar usuários do backend
  }

  submitForm() {
    if (this.userForm.valid) {
      // Faça login e, em seguida, busque usuários
      this.userService.login('seuUsuario', 'suaSenha').subscribe(
        (data) => {
          this.token = data.token; // Supondo que o token seja retornado na resposta
          this.fetchUsuarios();
        },
        (error) => {
          console.error('Erro ao fazer login:', error);
        }
      );
    } else {
      // Exiba uma mensagem de erro ou trate de outra forma
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('senha');
    const confirmPasswordControl = formGroup.get('confirmaSenha');

    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
      return password === confirmPassword ? null : { passwordMismatch: true };
    } else {
      return null;
    }
  }

  fetchUsuarios(): void {
    const token = this.authService.getToken();
    if (token) {
      this.userService.getUsuarios(token).subscribe(
        (data) => {
          console.log('Usuários recebidos:', data);
          // Lógica para manipular os usuários recebidos do servidor
          this.usuarios = data; // Atribuir os dados recebidos à variável 'usuarios'
        },
        (error) => {
          console.error('Erro ao buscar usuários:', error);
        }
      );
    } else {
      console.error('Token de autenticação não encontrado.');
    }
  }
}