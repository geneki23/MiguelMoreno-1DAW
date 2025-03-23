import java.util.ArrayList;
import java.util.List;

class Region {
    private String name;
    private List<Gimnasio> gimnasios;
    private List<Pokemon> pokemonsSalvajes;

    public Region(String name) {
        this.name = name;
        this.gimnasios = new ArrayList<>();
        this.pokemonsSalvajes = new ArrayList<>();
    }

    public void agregarGimnasio(Gimnasio gimnasio) {
        gimnasios.add(gimnasio);
    }

    public void agregarPokemonSalvaje(Pokemon pokemon) {
        pokemonsSalvajes.add(pokemon);
    }
}