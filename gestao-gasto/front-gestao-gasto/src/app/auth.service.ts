import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;


  private loginUrl = 'http://localhost:8080/v1/auth/logar'; // Substitua pela URL do seu endpoint de login no backend

  constructor(private http: HttpClient) { }

  login(login: string, senha: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { login, senha };
    return this.http.post<any>(this.loginUrl, body, { headers });
    this.isAuthenticated = true;
  }

  logout(): void {
    // Limpe o token de autenticação ou qualquer outra informação de sessão
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
