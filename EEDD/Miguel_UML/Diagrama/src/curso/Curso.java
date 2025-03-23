package curso;
import java.util.*;

public class Curso {
	private ArrayList<Estudiante> estudiantes = new ArrayList<>();

    public void aniadir() {
        Scanner leer = new Scanner(System.in);
        
        System.out.print("Ingrese el codigo del estudiante: ");
        String codigo = leer.nextLine();

        if (verificarEstudiante(codigo)) {
            System.out.println("Error: El codigo ya existe.");
            return;
        }

        System.out.print("Ingrese el nombre del estudiante: ");
        String nombre = leer.nextLine();

        System.out.print("Ingrese los apellidos del estudiante: ");
        String apellidos = leer.nextLine();

        System.out.print("Ingrese el semestre: ");
        int semestre = leer.nextInt();

        System.out.print("Ingrese la nota final: ");
        float notaFinal = leer.nextFloat();

        Estudiante estudiante = new Estudiante(nombre, apellidos, codigo, semestre, notaFinal);
        estudiantes.add(estudiante);
        System.out.println("Estudiante añadido correctamente.");
    }

    public void buscar() {
        Scanner leer = new Scanner(System.in);
        System.out.print("Ingrese el codigo del estudiante a buscar: ");
        String codigo = leer.nextLine();

        for (Estudiante e : estudiantes) {
            if (e.getCodigo().equals(codigo)) {
                System.out.println("Estudiante encontrado: " + e);
                return;
            }
        }
        System.out.println("Estudiante no encontrado.");
    }

    public void eliminar() {
        Scanner leer = new Scanner(System.in);
        System.out.print("Ingrese el codigo del estudiante a eliminar: ");
        String codigo = leer.nextLine();

        for (Estudiante e : estudiantes) {
            if (e.getCodigo().equals(codigo)) {
                System.out.println("Estudiante encontrado: " + e);
                System.out.print("¿Desea eliminarlo? (S/N): ");
                String confirmacion = leer.nextLine();

                if (confirmacion.equalsIgnoreCase("S")) {
                    estudiantes.remove(e);
                    System.out.println("Estudiante eliminado correctamente.");
                } else {
                    System.out.println("Eliminacion cancelada.");
                }
                return;
            }
        }
        System.out.println("Estudiante no encontrado.");
    }

    public void calcularPromedio() {
        if (estudiantes.isEmpty()) {
            System.out.println("No hay estudiantes en este curso.");
            return;
        }

        double suma = 0;
        for (Estudiante e : estudiantes) {
            suma += e.getNota_final();
        }

        double promedio = suma / estudiantes.size();
        System.out.println("El promedio del curso es: " + promedio);
    }

    public void cantidadAprobados() {
        if (estudiantes.isEmpty()) {
            System.out.println("No hay estudiantes en este curso.");
            return;
        }

        int aprobados = 0;
        for (Estudiante e : estudiantes) {
            if (e.getNota_final() >= 3.0) {
                aprobados++;
            }
        }

        double porcentaje = (double) aprobados / estudiantes.size() * 100;
        System.out.println("Numero de estudiantes aprobados: " + aprobados);
        System.out.println("Porcentaje de aprobados: " + porcentaje + "%");
    }

    public boolean verificarEstudiante(String codigo) {
        for (Estudiante e : estudiantes) {
            if (e.getCodigo().equals(codigo)) {
                return true;
            }
        }
        return false;
    }
}