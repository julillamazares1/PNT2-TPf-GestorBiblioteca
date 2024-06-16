export const api = {
    obtenerDatos: async (url) => {
        try {
            const respuesta = await fetch(url);
            if (!respuesta.ok) {
                throw new Error(`Error al obtener datos desde ${url}`);
            }
            return await respuesta.json();
        } catch (error) {
            console.error(`Error en obtenerDatos (${url}):`, error.message);
            throw error;
        }
    },

    agregarDato: async (url, nuevoDato) => {
        try {
            const respuesta = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoDato)
            });
            if (!respuesta.ok) {
                throw new Error(`Error al agregar dato en ${url}`);
            }
            return await respuesta.json();
        } catch (error) {
            console.error(`Error en agregarDato (${url}):`, error.message);
            throw error;
        }
    },

    actualizarDato: async (url, datoActualizado) => {
        try {
            const respuesta = await fetch(`${url}/${datoActualizado.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datoActualizado)
            });
            if (!respuesta.ok) {
                throw new Error(`Error al actualizar dato en ${url}`);
            }
            return await respuesta.json();
        } catch (error) {
            console.error(`Error en actualizarDato (${url}):`, error.message);
            throw error;
        }
    },

    borrarDato: async (url, id) => {
        try {
            const respuesta = await fetch(`${url}/${id}`, { method: 'DELETE' });
            if (!respuesta.ok) {
                throw new Error(`Error al borrar dato en ${url}`);
            }
        } catch (error) {
            console.error(`Error en borrarDato (${url}):`, error.message);
            throw error;
        }
    }
};
