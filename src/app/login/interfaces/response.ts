export interface Response {
    user:  User;
    token: string;
    ok:    boolean;
    msg?:  string;
}

export interface User {
    id_user_U?:     number;
    name:           string;
    last_name:      string;
    date_of_birth:  Date;
    email:          string;
    password?:      string;
    createdAt?:     Date;
    updatedAt?:     Date;
    msg?:           string
}


export interface infoCuidador {
    id:              number;
    Nombre:          string;
    Apellidos:       string;
    idimgperfil:     number;
    ImagenNombre:    string;
    imagenContenido: ImagenContenido;
    ImagenTipo:      string;
    deleted_at:      null;
}

export interface ImagenContenido {
    type: string;
    data: number[];
}
