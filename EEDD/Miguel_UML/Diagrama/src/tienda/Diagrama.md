```mermaid
classDiagram
    class Estudiante {
        - "String nombre"
        - "String apellidos"
        - "String codigo"
        - "int num_semestre"
        - "double nota_final"
        + "Estudiante(String, String, String, int, double)"
        + "getNombre() String"
        + "getApellidos() String"
        + "getCodigo() String"
        + "getNum_semestre() int"
        + "getNota_final() double"
        + "toString() String"
    }

    class Curso {
        - "ArrayList~Estudiante~ estudiantes"
        + "aniadir() void"
        + "buscar() void"
        + "eliminar() void"
        + "calcularPromedio() double"
        + "cantidadAprobados() void"
        + "verificarEstudiante(String codigo) boolean"
    }

    class MainCurso {
        + "main(String[] args) void"
    }

    Curso --> Estudiante
    MainCurso --> Curso
    ```