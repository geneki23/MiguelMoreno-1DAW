import java.util.List;

class Pokemon extends EntidadConNombre implements Combatible {
    private int level;
    private boolean shiny;
    private String gender;
    private String nature;
    private List<String> types;

    public Pokemon(String name, int level, boolean shiny, String gender, String nature, List<String> types) {
        super(name);
        this.level = level;
        this.shiny = shiny;
        this.gender = gender;
        this.nature = nature;
        this.types = types;
    }

    public void atacar(Pokemon objetivo) {
        System.out.println(name + " ataca a " + objetivo.getName() + "!");
    }

    public void evolucionar() {
        System.out.println(name + " está evolucionando!");
    }

    public int getLevel() {
        return level;
    }
}
