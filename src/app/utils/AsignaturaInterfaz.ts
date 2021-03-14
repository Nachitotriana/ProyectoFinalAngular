export interface AsignaturaInterzaz {
    nombre: string,
    profesor: string,
    conocimientos: { nombre: string, imagen: string }[],
    ciclo: string,
    curso: number
}