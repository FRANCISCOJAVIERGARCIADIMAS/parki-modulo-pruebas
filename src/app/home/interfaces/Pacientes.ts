export interface Paciente {
    Nombre:          string;
    Apellidos:       string;
    idimgperfil:     number;
    ImagenNombre:    string;
    imagenContenido: ImagenContenido;
    ImagenTipo:      string;
    id:              number;
    deleted_at?:      null;
    idCuidador:      number;
    Recomendaciones: string;
    Notificaciones:  string;
    Alertas:         string;
    Mensajes:        string;
}

export interface ImagenContenido {
    type: string;
    data: number[];
}


// Info de un paciente
export interface InfoGeneral {
    pacientes:       InfoPaciente[];
    recomendaciones: Alerta[];
    notificaciones:  Alerta[];
    alertas:         Alerta[];
    mensajes:        Alerta[];
}

export interface Alerta {
    idProcMensaje: number;
    fecha:         Date;
    estado:        number;
    titulo:        string;
    descripcion:   string;
    categoria:     string;
    prioridad:     string;
    tipo:          string;
    idPaciente:    number;
    idTipoMensaje: number;
}

export interface InfoPaciente {
    Nombre:          string;
    Apellidos:       string;
    idimgperfil:     number;
    ImagenNombre:    string;
    imagenContenido: ImagenContenido;
    ImagenTipo:      string;
    id:              number;

    genero:          string;
    edad:            string;
    tipodsangre:     string;
    celular:         string;
    ocupacion:       string;
    Calle:           string;
    Numero:          number;
    Colonia:         string;
    Ciudad:          string;
    CP:              number;
    Pais:            string;
    estado:          string;
    deleted_at?:      null;
}

export interface ImagenContenido {
    type: string;
    data: number[];
}

