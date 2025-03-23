package tienda;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Tienda tienda = new Tienda("Tienda Digital", "Ana López", 789012, 4);
        Computador computador1 = new Computador("Dell", 32, "Intel i7", "Windows", 1200000);
        Computador computador2 = new Computador("HP", 16, "Intel i5", "Windows", 900000);
        Computador computador3 = new Computador("Lenovo", 8, "AMD Ryzen 5", "Linux", 700000);

        tienda.añadir(computador1);
        tienda.añadir(computador2);
        tienda.añadir(computador3);

        Scanner sc = new Scanner(System.in);
        System.out.print("Ingrese la marca del computador a buscar: ");
        String marca = sc.next();
        System.out.println("El computador a buscar: " + marca + " se encuentra en la posicion " + tienda.buscar(marca));
        tienda.imprimir();
        sc.close();
    }
}
