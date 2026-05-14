const BASE_URL = "https://jsonplaceholder.typicode.com";

async function obtenerPerfilCompleto(userId) {
  const urls = {
    usuario: `${BASE_URL}/users/${userId}`,
    posts: `${BASE_URL}/posts?userId=${userId}`,
    albums: `${BASE_URL}/albums?userId=${userId}`,
  };

  const peticiones = Object.entries(urls).map(([recurso, url]) =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error(recurso);
      return res.json();
    }).catch(() => {
      throw new Error(recurso);
    })
  );

  try {
    const [usuario, posts, albums] = await Promise.all(peticiones);

    const perfil = {
      usuario: {
        id: usuario.id,
        nombre: usuario.name,
        email: usuario.email,
        telefono: usuario.phone,
        empresa: usuario.company.name,
      },
      totalPosts: posts.length,
      titulos_albums: albums.map((album) => album.title),
    };

    console.log("Perfil completo obtenido:");
    console.log(JSON.stringify(perfil, null, 2));
  } catch (error) {
    console.error(`Error: no se pudo obtener el recurso "${error.message}"`);
  }
}

obtenerPerfilCompleto(1);
