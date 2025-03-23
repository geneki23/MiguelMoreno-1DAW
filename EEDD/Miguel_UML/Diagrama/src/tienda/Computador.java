package tienda;

class Computador {
    private String marca;
    private int cantidadMemoria;
    private String caracteristicasProcesador;
    private String sistemaOperativo;
    private double precio;

    public Computador(String marca, int cantidadMemoria, String caracteristicasProcesador, String sistemaOperativo, double precio) {
        this.marca = marca;
        this.cantidadMemoria = cantidadMemoria;
        this.caracteristicasProcesador = caracteristicasProcesador;
        this.sistemaOperativo = sistemaOperativo;
        this.precio = precio;
    }

    public String getMarca() {
        return marca;
    }

    public int getCantidadMemoria() {
        return cantidadMemoria;
    }

    public String getCaracteristicasProcesador() {
        return caracteristicasProcesador;
    }

    public String getSistemaOperativo() {
        return sistemaOperativo;
    }

    public double getPrecio() {
        return precio;
    }
}