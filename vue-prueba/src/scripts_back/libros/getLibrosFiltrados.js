import { getLibros } from './getLibros';

export async function getLibrosFiltrados(limit) {
  try {
    const libros = await getLibros();
    return libros.slice(0, limit);
  } catch (error) {
    console.error('Error filtrando libros:', error);
  }
}