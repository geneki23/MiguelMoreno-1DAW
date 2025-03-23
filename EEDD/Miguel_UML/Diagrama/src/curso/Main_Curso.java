package curso;
import java.util.Scanner;

public class Main_Curso {
    public static void main(String[] args) {
        Curso curso = new Curso();
        Scanner leer = new Scanner(System.in);
        boolean continuar = true;

        while (continuar) {
            try {
                System.out.println("\nMenu de opciones:");
                System.out.println("1. Añadir estudiante");
                System.out.println("2. Buscar estudiante");
                System.out.println("3. Eliminar estudiante");
                System.out.println("4. Calcular promedio del curso");
                System.out.println("5. Cantidad de estudiantes aprobados");
                System.out.println("6. Salir");
                System.out.print("Seleccione una opcion: ");
                
                int opcion = leer.nextInt();
                leer.nextLine(); 
                
                switch (opcion) {
                    case 1:
                        curso.aniadir();
                        break;
                    case 2:
                        curso.buscar();
                        break;
                    case 3:
                        curso.eliminar();
                        break;
                    case 4:
                        curso.calcularPromedio();
                        break;
                    case 5:
                        curso.cantidadAprobados();
                        break;
                    case 6:
                        System.out.println("Saliendo del programa...");
                        continuar = false;
                        break;
                    default:
                        System.out.println("Opcion no valida. Intente de nuevo.");
                }
            } catch (Exception e) {
                System.out.println("Error: Entrada invalida. Asegurate de ingresar un numero valido.");
                leer.nextLine(); 
            }
        }
        leer.close();
    }
}
