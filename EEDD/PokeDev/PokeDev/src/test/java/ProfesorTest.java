

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ProfesorTest {
    @Test
    void testEntregarInicial() {
        Profesor oak = new Profesor("Profesor Oak");
        Entrenador red = new Entrenador("Red");
        Pokemon charmander = new Pokemon("Charmander", 5, false, "Male", "Brave", Arrays.asList("Fire"));

        oak.entregarInicial(red, charmander);
        assertEquals(1, red.getPokemons().size());
        assertEquals("Charmander", red.getPokemons().get(0).getName());
    }
}
