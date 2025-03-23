import java.util.ArrayList;
import java.util.List;

class Entrenador extends EntidadConNombre {
    private List<Pokemon> pokemons;
    private List<String> medallas;

    public Entrenador(String name) {
        super(name);
        this.pokemons = new ArrayList<>();
        this.medallas = new ArrayList<>();
    }

    public void capturarPokemon(Pokemon pokemon) {
        if (pokemons.size() < 5) {
            pokemons.add(pokemon);
            System.out.println(name + " ha capturado a " + pokemon.getName() + "!");
        } else {
            System.out.println(name + " ya tiene 5 Pokémon y no puede capturar más.");
        }
    }

    public void recibirMedalla(String medalla) {
        medallas.add(medalla);
        System.out.println(name + " ha recibido la medalla " + medalla + "!");
    }

    public List<Pokemon> getPokemons() {
        return pokemons;
    }

    public List<String> getMedallas() {
        return medallas;
    }
}
