import java.util.List;

class Gimnasio extends EntidadConNombre {
    public Gimnasio(String name) {
        super(name);
    }

    public void combatir(Entrenador entrenador1, Entrenador entrenador2) {
        System.out.println(entrenador1.getName() + " y " + entrenador2.getName() + " están combatiendo!");

        List<Pokemon> team1 = entrenador1.getPokemons();
        List<Pokemon> team2 = entrenador2.getPokemons();

        int victorias1 = 0;
        int victorias2 = 0;

        for (int i = 0; i < 5; i++) {
            if (i >= team1.size() || i >= team2.size()) break;
            Pokemon p1 = team1.get(i);
            Pokemon p2 = team2.get(i);

            System.out.println("Batalla " + (i+1) + ": " + p1.getName() + " vs " + p2.getName());

            if (p1.getLevel() > p2.getLevel()) {
                System.out.println(p1.getName() + " gana la batalla!");
                victorias1++;
            } else {
                System.out.println(p2.getName() + " gana la batalla!");
                victorias2++;
            }
        }

        if (victorias1 > victorias2) {
            System.out.println(entrenador1.getName() + " gana la batalla!");
        } else {
            System.out.println(entrenador2.getName() + " gana la batalla!");
        }
    }
}