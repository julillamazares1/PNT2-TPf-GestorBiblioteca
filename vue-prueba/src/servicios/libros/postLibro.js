export async function postLibro(libro) {
    try {
      const res = await fetch('https://66567c019f970b3b36c58d0f/libros', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        //Aca mandamos el libro por parametro en el body de la paeticion como json
        body: JSON.stringify(libro),
      });
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error al agregar el libro');
      }
    } catch (error) {
      console.error('Error agregando libro:', error);
    }
}