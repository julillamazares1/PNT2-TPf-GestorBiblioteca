export async function deleteLibro(id) {
    try {
      const res = await fetch(`https://66567c019f970b3b36c58d0f/libros/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      });
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error al eliminar el libro');
      }
    } catch (error) {
      console.error('Error eliminando libro:', error);
    }
}