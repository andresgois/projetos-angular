import { Endereco } from "../models/endereco.model";
import { Estado } from "../models/estado.model";
import { UsuarioFull } from "../models/usuario-full";
import { Usuario } from "../models/usuario.model";

export class User {// implements UsuarioFull{
  /*usuario!: Usuario;
  endereco!: Endereco;
  estados!: Estado;*/
  nome: string = '';
  profissao: string = '';
  rua: string = '';
  numero: string = '';
  estado: string = '';
  sigla: string = '';

  constructor(){

  }

}
