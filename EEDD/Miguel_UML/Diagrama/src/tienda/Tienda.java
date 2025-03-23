package tienda;

class Tienda {
    private String nombre;
    private String propietario;
    private int identificadorTributario;
    private Computador[] computadores;
    private static int numeroComputadores;

    public Tienda(String nombre, String propietario, int identificadorTributario, int tamaño) {
        if (tamaño < 1) {
            System.out.println("Cantidad de computadores insuficientes.");
        } else {
            this.nombre = nombre;
            this.propietario = propietario;
            this.identificadorTributario = identificadorTributario;
            this.computadores = new Computador[tamaño];
            numeroComputadores = 0;
        }
    }

    public boolean tiendaLlena() {
        return numeroComputadores == computadores.length;
    }

    public boolean tiendaVacia() {
        return numeroComputadores == 0;
    }

    public void añadir(Computador computador) {
        if (tiendaLlena()) {
            System.out.println("La tienda esta llena. No se puede añadir elemento.");
        } else {
            computadores[numeroComputadores] = computador;
            numeroComputadores++;
        }
    }

    public boolean eliminar(String marcaComputador) {
        int pos = buscar(marcaComputador);
        if (pos < 0) {
            return false;
        }
        for (int i = pos; i < numeroComputadores - 1; i++) {
            computadores[i] = computadores[i + 1];
        }
        numeroComputadores--;
        return true;
    }

    public int buscar(String marcaComputador) {
        for (int i = 0; i < numeroComputadores; i++) {
            if (computadores[i].getMarca().equals(marcaComputador)) {
                return i;
            }
        }
        return -1;
    }

    public void imprimir() {
        for (int i = 0; i < numeroComputadores; i++) {
            System.out.println("Computador " + i);
            System.out.println("Marca = " + computadores[i].getMarca());
            System.out.println("Cantidad de memoria = " + computadores[i].getCantidadMemoria());
            System.out.println("Caracteristicas del procesador = " + computadores[i].getCaracteristicasProcesador());
            System.out.println("Sistema operativo = " + computadores[i].getSistemaOperativo());
            System.out.println("Precio = " + computadores[i].getPrecio());
        }
    }
}
