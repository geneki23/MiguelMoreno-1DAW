import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

class EntrenadorTest {
    @Test
    void testCapturarPokemon() {
        Entrenador ash = new Entrenador("Ash");
        Pokemon bulbasaur = new Pokemon("Bulbasaur", 10, false, "Male", "Bold", Arrays.asList("Grass", "Poison"));

        ash.capturarPokemon(bulbasaur);
        assertEquals(1, ash.getPokemons().size());
        assertEquals("Bulbasaur", ash.getPokemons().get(0).getName());
    }

    @Test
    void testRecibirMedalla() {
        Entrenador misty = new Entrenador("Misty");
        misty.recibirMedalla("Medalla Cascada");

        assertEquals(1, misty.getMedallas().size()); // ✅ Verificamos la cantidad de medallas
    }
}
