export async function updateLibro(id, libro) {
    try {
      const res = await fetch(`https://66567c019f970b3b36c58d0f/libros/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(libro),
      });
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error al actualizar el libro');
      }
    } catch (error) {
      console.error('Error actualizando libro:', error);
    }
}