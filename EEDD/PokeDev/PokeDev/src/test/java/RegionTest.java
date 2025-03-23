import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertNotNull;

class RegionTest {
    @Test
    void testAgregarGimnasio() {
        Region kanto = new Region("Kanto");
        Gimnasio gimnasio = new Gimnasio("Gimnasio Rocavelo");

        kanto.agregarGimnasio(gimnasio);
        assertNotNull(kanto);
    }

    @Test
    void testAgregarPokemonSalvaje() {
        Region johto = new Region("Johto");
        Pokemon pidgey = new Pokemon("Pidgey", 5, false, "Male", "Hardy", Arrays.asList("Normal", "Flying"));

        johto.agregarPokemonSalvaje(pidgey);
        assertNotNull(johto);
    }
}
