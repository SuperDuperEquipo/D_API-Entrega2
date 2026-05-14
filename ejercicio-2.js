const obtenerPostConAutor = async (postId) => {
    try {
        const respuestaPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await respuestaPost.json();
        const respuestaUsuario = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const usuario = await respuestaUsuario.json();
        const resultado = {
            titulo: post.title,
            cuerpo: post.body,
            autor: usuario.name
        };
        console.log(resultado);
    } catch (error) {
        console.error("Error:", error);
    }
};

obtenerPostConAutor(2);