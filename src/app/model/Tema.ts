import { Postagem } from "./Postagem";

export class Tema{
    public id: number;
    public descricao: string;
    public postagem: Postagem[] //como há um array de postagem, tem que ter o [] 
    
}