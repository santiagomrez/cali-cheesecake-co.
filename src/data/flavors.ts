import type { Category, Flavor, Size } from "@/types";

import agraz from "@/assets/sabor-agraz.jpg";
import mora from "@/assets/sabor-mora.jpg";
import fresa from "@/assets/sabor-fresa.jpg";
import maracuya from "@/assets/sabor-maracuya.jpg";
import frutosRojos from "@/assets/sabor-frutos-rojos.jpg";
import lulo from "@/assets/sabor-lulo.jpg";
import chocolate from "@/assets/sabor-chocolate.jpg";

export const sizes: Size[] = [
  {
    id: "porcion-triangular",
    name: "Porción triangular",
    price: 13000,
    detail: "Una porción, una salsa",
    needsLeadTime: false,
  },
  {
    id: "porcion-circular",
    name: "Porción circular",
    price: 18000,
    detail: "Porción alta e individual, una salsa",
    needsLeadTime: false,
  },
  {
    id: "personal-corazon",
    name: "Personal en forma de corazón",
    price: 25000,
    detail: "Para una o dos personas · se pide con un día de anticipación",
    needsLeadTime: true,
  },
  {
    id: "mediano",
    name: "Mediano",
    price: 60000,
    detail: "Hasta 2 salsas",
    needsLeadTime: false,
  },
  {
    id: "grande",
    name: "Grande",
    price: 80000,
    detail: "10 a 12 porciones · hasta 4 salsas",
    needsLeadTime: false,
  },
  {
    id: "corazon-grande",
    name: "Grande en forma de corazón",
    price: 80000,
    detail: "Se pide con un día de anticipación",
    needsLeadTime: true,
  },
];

export const sizeById = (id: string): Size | undefined => sizes.find((s) => s.id === id);

export const minPrice = (flavor: Flavor): number =>
  Math.min(...flavor.sizeIds.map((id) => sizeById(id)?.price ?? Infinity));

export const categories: Category[] = [
  { id: "todos", name: "Todos" },
  { id: "frutales", name: "Frutales" },
  { id: "chocolate", name: "Chocolate" },
];

const allSizeIds = sizes.map((s) => s.id);

export const flavors: Flavor[] = [
  {
    id: "agraz",
    name: "Agraz",
    category: "frutales",
    descriptor: "Ácido y profundo, salsa morada espesa",
    description:
      "El agraz llega del altiplano y es el más ácido de la carta. La salsa queda espesa y oscura, y corta la grasa del queso. Es el que piden quienes dicen que los postres les empalagan.",
    image: agraz,
    alt: "Porción de cheesecake con salsa de agraz sobre plato de cerámica crema",
    sizeIds: allSizeIds,
  },
  {
    id: "mora",
    name: "Mora",
    category: "frutales",
    descriptor: "Mora de Castilla cocida en casa, con pepa",
    description:
      "Cocinamos la mora hasta que la salsa se agarra a la cuchara, sin colar: quedan pedazos de fruta encima. El clásico de la casa y el que más se va los domingos.",
    image: mora,
    alt: "Porción de cheesecake con salsa de mora y moras enteras encima",
    sizeIds: allSizeIds,
  },
  {
    id: "fresa",
    name: "Fresa",
    category: "frutales",
    descriptor: "Dulce y suave, con fresa fresca en láminas",
    description:
      "La entrada más fácil de la carta: salsa dulce sin acidez fuerte y fresa fresca cortada encima. El que siempre funciona con niños y con mesas grandes.",
    image: fresa,
    alt: "Porción de cheesecake con salsa de fresa y fresas frescas",
    sizeIds: allSizeIds,
  },
  {
    id: "maracuya",
    name: "Maracuyá",
    category: "frutales",
    descriptor: "Ácido cítrico con pepitas crocantes",
    description:
      "Salsa de maracuyá con las pepitas adentro, para que cada bocado tenga algo que cruja. Es el contraste más marcado que tenemos frente al queso.",
    image: maracuya,
    alt: "Porción de cheesecake con salsa de maracuyá y semillas",
    sizeIds: allSizeIds,
  },
  {
    id: "frutos-rojos",
    name: "Frutos rojos",
    category: "frutales",
    descriptor: "Mezcla de mora, fresa y agraz con fruta entera",
    description:
      "Tres frutas en la misma salsa y fruta entera encima. Es el que mejor se ve en la mesa, así que suele ser el de los cumpleaños.",
    image: frutosRojos,
    alt: "Porción de cheesecake con salsa y fruta de frutos rojos",
    sizeIds: allSizeIds,
  },
  {
    id: "lulo",
    name: "Lulo",
    category: "frutales",
    descriptor: "Muy ácido, salsa clara, sabor de acá",
    description:
      "El más caleño de la carta y el más ácido después del agraz. Salsa clara, aroma verde, sabor que la gente reconoce apenas lo prueba.",
    image: lulo,
    alt: "Porción de cheesecake con salsa de lulo",
    sizeIds: allSizeIds,
  },
  {
    id: "chocolate",
    name: "Chocolate",
    category: "chocolate",
    descriptor: "Ganache oscuro sobre base de galleta de cacao",
    description:
      "Ganache de chocolate amargo servido encima y base de galleta de cacao abajo. No lleva fruta: es el único de la carta que juega solo con el queso.",
    image: chocolate,
    alt: "Porción de cheesecake con ganache de chocolate y base de galleta de cacao",
    sizeIds: allSizeIds,
  },
];
