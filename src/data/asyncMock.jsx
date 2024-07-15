export const productos = [
  {
    id: 1,
    nombre: "playera caballero NIKE",
    precio: 900,
    cateroria: "playeras",
    stock: 5,
    descripcion: "lorem",
    img: "../../src/assets/img/nike/nike_playera_hombre.webp",
  },
  {
    id: 2,
    nombre: "Pants dama",
    precio: 1000,
    cateroria: "pants",
    stock: 5,
    descripcion: "lorem",
    img: "https://static.nike.com/a/images/t_default/057d97ca-ba94-4748-a3bf-02f8c307f1d2/pants-de-tiro-ultraalto-dri-fit-one-LDx5j8.png",
  },
  {
    id: 3,
    nombre: "Tenis caballero",
    precio: 800,
    cateroria: "tenis",
    stock: 5,
    descripcion: "lorem",
    img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/5b8646e8-beff-4c01-a256-911c92342f74.026721d2cd76ff7ae92c607c5a878505.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  },
  {
    id: 4,
    nombre: "Playeras niños",
    precio: 600,
    cateroria: "playeras",
    stock: 5,
    descripcion: "lorem",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-LUu595gb_Pk0zmExZ44imR8hMAn_XD5Tw&s",
  },
  {
    id: 5,
    nombre: "pants caballeros",
    precio: 1100,
    cateroria: "pants",
    stock: 5,
    descripcion: "lorem",
    img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/2712ac0d-cb46-4eb8-aa20-0279eb6e9ab2.ca9f2fc7e61e63377a3384a3184722e8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (categoria) => {
  return new Promise((resolve) => {
    const productosFiltrados = productos.filter(
      (prod) => prod.cateroria === categoria
    );

    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));

    setTimeout(() => {
      resolve(productoFiltrado);
    }, 2000);
  });
};
