import { Estado } from './estado.model';
import { Endereco } from './endereco.model';
import { Usuario } from './usuario.model';

export interface UsuarioFull {
  usuario: Usuario[];
  endereco: Endereco[];
  estados: Estado[];
}
