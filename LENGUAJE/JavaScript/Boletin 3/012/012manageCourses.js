"use strict"

class Course {
    constructor(name) {
      this.name = name;
      this.students = new Set();
    }
  
    // 1. Añadir estudiantes al curso
    addStudent(student) {
      this.students.add(student);
    }
  
    // 2. Eliminar estudiantes del curso
    removeStudent(student) {
      this.students.delete(student);
    }
  
    // 3. Unir estudiantes de dos cursos (devuelve un nuevo Set)
    union(otherCourse) {
      const unionSet = new Set(this.students);
      for (const s of otherCourse.students) {
        unionSet.add(s);
      }
      return unionSet;
    }
  
    // 4. Obtener estudiantes comunes entre dos cursos (intersección)
    intersection(otherCourse) {
      const intersectionSet = new Set();
      for (const s of this.students) {
        if (otherCourse.students.has(s)) {
          intersectionSet.add(s);
        }
      }
      return intersectionSet;
    }
  
    // 5. Comprobar si un estudiante está en el curso
    hasStudent(student) {
      return this.students.has(student);
    }
  
    // 6. Vaciar completamente el curso
    clearStudents() {
      this.students.clear();
    }
  }