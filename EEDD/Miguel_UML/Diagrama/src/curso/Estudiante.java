package curso;

public class Estudiante {

	private String nombre;
	private String apellidos;
	private String codigo;
	private int num_semestre;
	private float nota_final;
	
	public Estudiante(String nombre, String apellidos, String codigo, int num_semestre, float nota_final) {
		super();
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.codigo = codigo;
		this.num_semestre = num_semestre;
		this.nota_final = nota_final;
	}
	
	public String getNombre() {
		return nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public String getCodigo() {
		return codigo;
	}

	public int getNum_semestre() {
		return num_semestre;
	}	

	public float getNota_final() {
		return nota_final;
	}

	@Override
	public String toString() {
		return "Estudiante [nombre=" + nombre + ", apellidos=" + apellidos + ", codigo=" + codigo + ", num_semestre="
				+ num_semestre + ", nota_final=" + nota_final + "]";
	}
		
}
 
