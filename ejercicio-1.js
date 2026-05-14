const obtenerPosts = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const datos = await respuesta.json();
        const primerosCinco = datos.slice(0, 5);
        console.log(primerosCinco);
    } catch (error) {
        console.error("Error al obtener posts:", error);
    }
};

obtenerPosts();