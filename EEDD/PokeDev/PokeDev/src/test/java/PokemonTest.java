import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.Arrays;

class PokemonTest {
    @Test
    void testAtacar() {
        Pokemon pikachu = new Pokemon("Pikachu", 25, false, "Male", "Jolly", Arrays.asList("Electric"));
        Pokemon charmander = new Pokemon("Charmander", 20, false, "Male", "Brave", Arrays.asList("Fire"));

        pikachu.atacar(charmander);
        assertEquals("Pikachu", pikachu.getName());
        assertEquals(25, pikachu.getLevel());
    }

    @Test
    void testEvolucionar() {
        Pokemon squirtle = new Pokemon("Squirtle", 16, false, "Male", "Calm", Arrays.asList("Water"));
        squirtle.evolucionar();
        assertEquals(16, squirtle.getLevel());
    }
}