import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertTrue;

class GimnasioTest {
    @Test
    void testCombate() {
        Entrenador ash = new Entrenador("Ash");
        Entrenador gary = new Entrenador("Gary");

        ash.capturarPokemon(new Pokemon("Pikachu", 25, false, "Male", "Jolly", Arrays.asList("Electric")));
        ash.capturarPokemon(new Pokemon("Charizard", 36, false, "Male", "Brave", Arrays.asList("Fire", "Flying")));

        gary.capturarPokemon(new Pokemon("Eevee", 20, false, "Male", "Naive", Arrays.asList("Normal")));
        gary.capturarPokemon(new Pokemon("Gyarados", 30, false, "Male", "Impish", Arrays.asList("Water", "Flying")));

        Gimnasio gimnasio = new Gimnasio("Gimnasio de Ciudad Verde");
        gimnasio.combatir(ash, gary);

        assertTrue(ash.getPokemons().size() > 0);
        assertTrue(gary.getPokemons().size() > 0);
    }
}
