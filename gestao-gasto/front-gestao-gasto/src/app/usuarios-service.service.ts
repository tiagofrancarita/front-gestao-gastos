import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  constructor(private http: HttpClient) { }


    // Método para cadastrar um novo usuário
    cadastrarUsuario(novoUsuario: any, token: string): Observable<any> {
      // Adicione o token ao cabeçalho da requisição
      const headers = { 'Authorization': `Bearer ${token}` };
      // Realize a requisição POST para o backend
      return this.http.post<any>('http://localhost:8080/v1/usuarios/salvarUsuario', novoUsuario, { headers });
      
    }

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post<any>('http://localhost:8080/v1/auth/logar', credentials);
  }

  getUsuarios(token: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>('http://localhost:8080/v1/usuarios/listarUsuarios', { headers });
  }
}