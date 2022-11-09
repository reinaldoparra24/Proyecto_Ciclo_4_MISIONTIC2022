import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: 'hola',
      isAdmin: true,
    },
    {
      name: 'Esteban P',
      email: 'esteban@gmail.com',
      password: "mama",//bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Mister',
      email: 'Mr@gmail.com',
      password: "mister",
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nevecón inverter No Frost Samsung RT44A6320 gris con freezer 439L 120V',
      slug: 'Nevecón inverter No Frost Samsung RT44A6320 gris con freezer 439L 120V',
      category: 'Neveras',
      image: '/images/Nevera1.png', // 679px × 829px
      price: 2539900,
      countInStock: 10,
      brand: 'SAMSUNG',
      rating: 5,
      numReviews: 9,
      description: 'Nevera de alta calidad, Dimensiones: 700 mm de ancho, 1700 mm de alto y 742 mm de profundidad',
    },
    {
      // _id: '2',
      name: 'Nevecón LG InstaView Craft Ice Side by Side 637 Litros LS66SXSC Gris',
      slug: 'Nevecón LG InstaView Craft Ice Side by Side 637 Litros LS66SXSC Gris',
      category: 'Neveras',
      image: '/images/Nevera2.png', // 679px × 829px
      price: 7819900,
      countInStock: 0,
      brand: 'LG',
      rating: 5,
      numReviews: 12,
      description: 'Nevera de alta calidad, InstaView (Toca dos Veces y mira hacia el interior)',
    },
    {
      // _id: '3',
      name: 'Estufa de Piso LG 6 Puestos Gas Natural, tecnologia Easy Clean RSG314S Negro',
      slug: 'Estufa de Piso LG 6 Puestos Gas Natural, tecnologia Easy Clean RSG314S Negro',
      category: 'Estufas',
      image: '/images/Estufa1.png', // 679px × 829px
      price: 2519900,
      countInStock: 12,
      brand: 'LG',
      rating: 5,
      numReviews: 8,
      description: 'Estufa LG Premium color Black, tecnologia Easy Clean, con 6 quemadores de gran potencia',
    },
    {
      // _id: '4',
      name: 'Estufa de Piso WHIRLPOOL 6 Puestos Gas Natural LWFR3320D Gris',
      slug: 'Estufa de Piso WHIRLPOOL 6 Puestos Gas Natural LWFR3320D Gris',
      category: 'Estufas',
      image: '/images/Estufa2.png', // 679px × 829px
      price: 1899900,
      countInStock: 6,
      brand: 'WHIRLPOOL',
      rating: 5,
      numReviews: 15,
      description: 'Estufa de Piso WHIRLPOOL LWFR3320D color gris con capelo de cristal templado y cubierta de acero inxidable',
    },
    {
      // _id: '5',
      name: 'TV SAMSUNG 65" Pulgadas 165.1 cm QN65Q65BA 4K-UHD QLED Plano Smart TV',
      slug: 'TV SAMSUNG 65" Pulgadas 165.1 cm QN65Q65BA 4K-UHD QLED Plano Smart TV',
      category: 'Televisores',
      image: '/images/TV1.png', // 679px × 829px
      price: 2999900,
      countInStock: 10,
      brand: 'SAMSUNG',
      rating: 5,
      numReviews: 7,
      description: 'TV 65Q65BA, con Dual LED y tecnología de retroiluminación',
    },
    {
      // _id: '6',
      name: 'TV LG 86" Pulgadas 217 cm 86NANO75SQA 4K-UHD NanoCell Plano Smart TV',
      slug: 'TV LG 86" Pulgadas 217 cm 86NANO75SQA 4K-UHD NanoCell Plano Smart TV',
      category: 'Televisores',
      image: '/images/TV2.png', // 679px × 829px
      price: 6799900,
      countInStock: 0,
      brand: 'LG',
      rating: 5,
      numReviews: 9,
      description: 'Procesador IA potencia tus contenidos, experiencia más real, con Magic remote, accede con tu voz a tu contenido y mucho más',
    },
    {
      // _id: '7',
      name: 'Lavadora/Secadora LG Carga Frontal 16KG WD16WG2S6 AI Blanco',
      slug: 'Lavadora/Secadora LG Carga Frontal 16KG WD16WG2S6 AI Blanco',
      category: 'Lavadoras',
      image: '/images/Lavadora1.png', // 679px × 829px
      price: 3535900,
      countInStock: 5,
      brand: 'LG',
      rating: 5,
      numReviews: 2,
      description: 'Lava-Secadora LG AI DD™ es la primera lavadora en Colombia con Inteligencia Artificial ¡Tu mejor aliado para el lavado!',
    },
    {
      // _id: '8',
      name: 'Torre de lavado y secado LG Washtower 22KG WK22BS6 Negro',
      slug: 'Torre de lavado y secado LG Washtower 22KG WK22BS6 Negro',
      category: 'Lavadoras',
      image: '/images/Lavadora2.png', // 679px × 829px
      price: 10399900,
      countInStock: 0,
      brand: 'LG',
      rating: 5,
      numReviews: 12,
      description: 'Lavadora & Secadora en un solo cuerpo, una solución completa con diseño Premium y minimalista que son todo conveniencia y optimización del espacio',
    },
  ],
};
export default data;
