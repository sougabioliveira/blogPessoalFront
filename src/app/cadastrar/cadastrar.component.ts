import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: Usuario = new Usuario()
  confirmarSenha: string 
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmaSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.type = this.tipoUsuario
    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão diferentes')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp:Usuario) => {
        this.user = resp
        alert('Usuário cadastrado com sucesso')
      })
    }
  }
}
