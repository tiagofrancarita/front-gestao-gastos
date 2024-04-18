import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosServiceService } from '../usuarios-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../auth.service';
import { DatePipe } from '@angular/common'; // Importe o DatePipe



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'] // Use styleUrls em vez de styleUrl
})
export class CadastroUsuarioComponent implements OnInit {

  usuarios!: any[]; // Declaração da propriedade 'usuarios' para armazenar os dados recebidos do backend
  userForm!: FormGroup;
  displayedColumns: string[] = ['id', 'login', 'nome', 'email', 'senha','role','dataCadastro','dataDesbloqueio','dataBloqueio','dataExpiracaoSenha','dataInativacao']; 
  dataSource = new MatTableDataSource<any>(); // Certifique-se de que o tipo corresponda aos dados retornados do backend
  token: string = ''; // Adicione uma variável para armazenar o token de autenticação
  currentDateFormatted: string = ''; // Variável para armazenar a data atual formatada



  constructor(
                private authService: AuthService,
                private formBuilder: FormBuilder, 
                private userService: UsuariosServiceService,
                private datePipe: DatePipe
              ) { }


  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [''],
      login: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmaSenha: ['', Validators.required],
      role: ['', Validators.required],
      dataCadastro: ['', Validators.required],
      dataDesbloqueio: [''],
      dataBloqueio: [''],
      dataExpiracaoSenha: [''],
      dataInativacao: [''],
      dataReativacao: [''] // Corrigido o nome da propriedade
    }, { validator: this.passwordMatchValidator });

      // Obtenha a data atual formatada
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss.SSS');

    this.userForm.patchValue({
      dataCadastro: formattedDate
    });

    this.fetchUsuarios(); // Chama a função para buscar usuários do backend
  }

  submitForm() {
    if (this.userForm.valid) {
      // Remover o sufixo "Z" da data de cadastro, se existir
      let dataCadastro = this.userForm.get('dataCadastro')?.value;
      if (dataCadastro && typeof dataCadastro === 'string' && dataCadastro.endsWith('Z')) {
        dataCadastro = dataCadastro.slice(0, -1);
        this.userForm.get('dataCadastro')?.setValue(dataCadastro);
      }

      const novoUsuario = this.userForm.value;

      // Obtém o token de autenticação do serviço AuthService
      const token = this.authService.getToken();

      // Verifica se o token está presente
      if (token) {
        // Envie os dados para o backend para salvar no banco
        this.userService.cadastrarUsuario(novoUsuario, token).subscribe(
          (response) => {
            console.log('Usuário cadastrado com sucesso:', response);
            // Atualize a lista de usuários após o cadastro bem-sucedido, se necessário
            this.fetchUsuarios();
          },
          (error) => {
            console.error('Erro ao cadastrar usuário:', error);
          }
        );
      } else {
        console.error('Token de autenticação não encontrado.');
      }
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