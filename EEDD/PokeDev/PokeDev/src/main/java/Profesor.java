class Profesor extends EntidadConNombre {
    public Profesor(String name) {
        super(name);
    }

    public void entregarInicial(Entrenador entrenador, Pokemon pokemon) {
        entrenador.capturarPokemon(pokemon);
        System.out.println(name + " le ha entregado un " + pokemon.getName() + " a " + entrenador.getName() + "!");
    }
}