export async function getLibros() {
    try {
      const res = await fetch('https://66567c019f970b3b36c58d0f/libros', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error al obtener los libros');
      }
    } catch (error) {
      console.error('Error obteniendo libros:', error);
    }
}
