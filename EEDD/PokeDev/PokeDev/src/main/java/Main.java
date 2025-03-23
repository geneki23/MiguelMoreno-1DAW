import java.util.Arrays;


public class Main {

    public static void main(String[] args) {
        // Crear entrenadores
        Entrenador ash = new Entrenador("Ash");
        Entrenador gary = new Entrenador("Gary");

        // Crear Pokémon
        Pokemon pikachu = new Pokemon("Pikachu", 25, false, "Male", "Jolly", Arrays.asList("Electric"));
        Pokemon charizard = new Pokemon("Charizard", 36, false, "Male", "Brave", Arrays.asList("Fire", "Flying"));
        Pokemon blastoise = new Pokemon("Blastoise", 36, false, "Male", "Calm", Arrays.asList("Water"));
        Pokemon venusaur = new Pokemon("Venusaur", 36, false, "Male", "Bold", Arrays.asList("Grass", "Poison"));
        Pokemon jolteon = new Pokemon("Jolteon", 30, false, "Male", "Timid", Arrays.asList("Electric"));

        // Asignar Pokémon a entrenadores
        ash.capturarPokemon(pikachu);
        ash.capturarPokemon(charizard);
        ash.capturarPokemon(blastoise);
        ash.capturarPokemon(venusaur);
        ash.capturarPokemon(jolteon);

        gary.capturarPokemon(new Pokemon("Eevee", 25, false, "Male", "Naive", Arrays.asList("Normal")));
        gary.capturarPokemon(new Pokemon("Arcanine", 36, false, "Male", "Adamant", Arrays.asList("Fire")));
        gary.capturarPokemon(new Pokemon("Gyarados", 36, false, "Male", "Impish", Arrays.asList("Water", "Flying")));
        gary.capturarPokemon(new Pokemon("Alakazam", 36, false, "Male", "Modest", Arrays.asList("Psychic")));
        gary.capturarPokemon(new Pokemon("Rhydon", 30, false, "Male", "Lax", Arrays.asList("Ground", "Rock")));

        // Crear un gimnasio
        Gimnasio gimnasio = new Gimnasio("Gimnasio de Ciudad Plateada");

        // Realizar un combate
        gimnasio.combatir(ash, gary);
    }
}
