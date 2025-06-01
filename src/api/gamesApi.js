const games = [
    {
        id: 1,
        name: 'Zanahoria',
        categoria: 'Frutas y verduras',
        precioConDescuento: '2.99 x kg',
        price: 2.99,
        img: "../../public/img/013524b583e0072a7324f9c7fa4f5aa68d786ade.png",
        descripcion: 'La zanahoria es la raíz comestible de la planta Daucus carota, perteneciente a la familia de las apiáceas. De forma cilíndrica y alargada, presenta un color naranja vibrante, aunque existen variedades moradas, blancas y amarillas. Su textura crujiente y sabor ligeramente dulce la hacen ideal para consumo crudo en ensaladas, jugos, guisos o como snack. Destaca por su alto contenido en betacaroteno (precursor de la vitamina A), antioxidantes y fibra, beneficiosos para la salud ocular y cutánea.',
        publisher: "0.6 kg",
        stock: 12
    },
    {
        id: 2,
        name: 'Papaya',
        categoria: 'Frutas y verduras',
        precioConDescuento: '5.99 x kg',
        price: 5.99,
        img: "../../public/img/01c107ed036de327cb02b5d85900ee783aa47c07.png",
        descripcion: 'La papaya es el fruto del árbol Carica papaya, de la familia Caricaceae, originario de Centroamérica. De forma ovalada y piel verde que se torna amarilla al madurar, su pulpa es jugosa, de color naranja intenso, con numerosas semillas negras comestibles. Se consume fresca, en ensaladas o jugos, y es apreciada por su contenido en vitamina C y papaína, una enzima que favorece la digestión de proteínas.',
        publisher: "1 kg",
        stock: 8
    },
    {
        id: 3,
        name: 'Mix de frutos',
        categoria: 'Frutas y verduras', 
        precioConDescuento: '5.69 x un',
        price: 5.69,
        img: "../../public/img/fdfff53b8ee38ceab77aa7b7449b91abce0cd3c2.png",
        descripcion: 'El mix de frutos es una selección de frutas frescas precortadas, como fresas, uvas, melón y kiwi, presentadas en una bandeja lista para consumir. Esta combinación ofrece practicidad para meriendas rápidas, acompañamiento de yogur o postres, proporcionando una variedad de vitaminas, minerales y antioxidantes esenciales para una dieta equilibrada.',
        publisher: "1 kg",
        stock: 15
    },  
    {
        id: 4,
        name: 'Manzana',
        categoria: 'Frutas y verduras',
        precioConDescuento: '3.80 x kg',
        price: 3.80,
        img: "../../public/img/954d27a0111264fb3caa9d662f9f1ac1502d00cd.png",
        descripcion: 'La manzana es el fruto del manzano (Malus domestica), de la familia Rosaceae. Con forma redondeada y piel lisa en tonos rojos, verdes o amarillos, su pulpa es jugosa y firme. Consumida fresca, en postres o jugos, es reconocida por su alto contenido en fibra soluble (pectina) y vitamina C, que contribuyen a la salud digestiva e inmunológica.',
        publisher: '1 kg',
        stock: 10
    },
    {
        id: 5,
        name: 'Naranja',
        categoria: 'Frutas y verduras',
        precioConDescuento: '3.69 x kg', 
        price: 3.69,
        img: "../../public/img/95c20b015c660121c6d938dbdd050055e385ad9a.png",
        descripcion: 'La naranja es el fruto del naranjo (Citrus × sinensis), perteneciente a la familia Rutaceae. De forma esférica y piel rugosa de color naranja, su interior se divide en gajos jugosos y dulces. Es famosa por su uso en jugos naturales y su alto contenido en vitamina C, nutriente clave para fortalecer el sistema inmunológico y combatir el estrés oxidativo.',
        publisher: '1 kg',
        stock: 7
    },
    {
        id: 6,
        name: 'Piña',
        categoria: 'Frutas y verduras',
        precioConDescuento: '2.79 x kg',
        price: 2.79,
        img: "../../public/img/3c3aa7cf7c4693656ca58b61d026cfaaf2a73590.png",
        descripcion: 'La piña (Ananas comosus) es una fruta tropical de la familia Bromeliaceae. De forma ovalada y coronada por hojas espinosas, su piel áspera esconde una pulpa amarilla, jugosa y ligeramente ácida. Rica en bromelina, una enzima digestiva, se consume fresca, en jugos o platos salados, y aporta vitamina C y manganeso.',
        publisher: '1 kg',
        stock: 13
    },
    {
        id: 7,
        name: 'Sandía',
        categoria: 'Frutas y verduras',
        precioConDescuento: '1.99 x kg',
        price: 1.99,
        img: "../../public/img/0dc67fac1b72005efd83e64d8f28de5386ba8a76.png",
        descripcion: 'La sandía, fruto de la planta Citrullus lanatus (familia Cucurbitaceae), es grande y redonda, con piel verde oscura y pulpa roja intensa, jugosa y dulce, que contiene semillas negras o está libre de ellas en variedades modernas. Ideal para hidratación por su 92% de agua, también aporta antioxidantes como el licopeno, beneficioso para la salud cardiovascular.',
        publisher: '1 kg',
        stock: 9
    },
    {
        id: 8,
        name: 'Uvas',
        categoria: 'Frutas y verduras',
        precioConDescuento: '11.99 x kg',
        price: 11.99,
        img: "../../public/img/4345a46bc713ae382b27117b99dd5293bd24e581.png",
        descripcion: 'Las uvas son los frutos de la vid (Vitis vinifera), de la familia Vitaceae. Pequeñas, redondas y agrupadas en racimos, existen variedades negras, rojas y verdes, con o sin semillas. Consumidas frescas, en pasas o como base de vinos, son ricas en resveratrol, un antioxidante vinculado a la salud cardíaca y la longevidad.',
        publisher: '1 kg',
        stock: 6
    },
    {
        id: 9,
        name: 'Pera',
        categoria: 'Frutas y verduras',
        precioConDescuento: '6.49 x kg',
        price: 6.49,
        img: "../../public/img/31c8c84eab895d9e9f98e701464d49279a7dcb9d.png",
        descripcion: 'La pera es el fruto del peral (Pyrus communis), de la familia Rosaceae. Con forma de campana y piel fina en tonos verdes o amarillos, su pulpa es jugosa, dulce y ligeramente granulosa. Destaca por su alto contenido en fibra y vitamina K, nutrientes que apoyan la salud intestinal y la coagulación sanguínea.',
        publisher: '1 kg',  
        stock: 11
    },
    {
        id: 10,
        name: 'Manzana roja',
        categoria: 'Frutas y verduras',
        precioConDescuento: '8.79 x kg',
        price: 8.79,
        img: "../../public/img/75faaca25dee36474600328830a3ad2a0da4aa9b.png",
        descripcion: 'La manzana roja, variedad del manzano (Malus domestica), se distingue por su piel brillante de tonos carmesí y pulpa crujiente y dulce. Popular en postres horneados o como snack, es rica en antioxidantes como la quercetina, que combate la inflamación, y fibra dietética para una digestión saludable.',
        publisher: '1 kg',
        stock: 14
    },
    {
        id: 11,
        name: 'Pithaya',
        categoria: 'Frutas y verduras',
        precioConDescuento: '5.89 x kg',
        price: 5.89,
        img: "../../public/img/a0d5f30590ce9bdafbd8515abbf77aaaa6a06aba.png",
        descripcion: 'La pithaya es el fruto de un cactus (Hylocereus undatus), de la familia Cactaceae. De piel rosada con escamas y pulpa blanca o roja salpicada de semillas negras, su textura es suave y su sabor delicadamente dulce. Rica en prebióticos y antioxidantes, se consume fresca o en batidos, favoreciendo la salud intestinal y la hidratación.',
        publisher: '1 kg',
        stock: 5
    },
    {
        id: 12,
        name: 'Fresa',
        categoria: 'Frutas y verduras',
        precioConDescuento: '8.89 x kg',
        price: 8.89,
        img: "../../public/img/istockphoto-1157946861-612x612.jpg",
        descripcion: 'La fresa es una fruta de forma cónica o redondeada, reconocible por su vibrante color rojo y superficie cubierta de pequeñas semillas amarillas. De pulpa jugosa y aromática, combina un sabor dulce con un ligero toque ácido que la hace versátil en gastronomía, destacando en postres, mermeladas y consumo fresco.',
        publisher: '1 kg',
        stock: 10
    },
    {
        id: 13,
        name: 'Carne de res',
        categoria: 'Carnes, aves y pescados',
        precioConDescuento: '13.89 x kg',
        price: 13.89,
        img: "/img/6dd24c8896e01f1a8253c57baef9c0924d72ea35.png",
        descripcion: 'Corte premium de carne de res con marmoleado perfecto, ideal para parrillas y estofados. Seleccionada de animales criados en pastoreo libre, ofrece alto contenido de proteínas, hierro y vitamina B12. Recomendada para preparaciones a fuego alto que mantengan su jugosidad característica.',
        publisher: '1 kg',
        stock: 15
        },
        {
            id: 14,
            name: 'Pollo entero fresco',
            categoria: 'Carnes, aves y pescados',
            precioConDescuento: '10.89 x kg',
            price: 10.89,
            img: "/img/857d0311b665e1b9d7ad7f26cca9de21b6ee138f.png",
            descripcion: 'Pollo de corral criado sin hormonas, con carne tierna y piel dorada perfecta para asados. Rico en proteínas magras y aminoácidos esenciales, se destaca por su versatilidad en cocina: desde caldos nutritivos hasta horneados crujientes. Presentación entera con vísceras.',
            publisher: '1 kg',
            stock: 12
        },
        {
            id: 15,
            name: 'Arroz extra blanco',
            categoria: 'Abarrotes',
            precioConDescuento: '5.89 x kg',
            price: 5.89,
            img: "/img/1ca7e26da2f5ec5fa4b515d39099d85ba4c8ce47.png",
            descripcion: 'Arroz de grano largo cultivado en valles costeros, con textura esponjosa y aroma natural. Libre de gluten y bajo en grasas, es fuente de carbohidratos complejos y minerales esenciales. Ideal como base para paellas, guarniciones o platos orientales.',
            publisher: '1 kg',
            stock: 25
        },
        {
            id: 16,
            name: 'Azúcar rubia orgánica',
            categoria: 'Abarrotes',
            precioConDescuento: '4.89 x kg',
            price: 4.89,
            img: "/img/9c9e092b9472fad2a8dad58923177f57e8bc7545.png",
            descripcion: 'Azúcar sin refinar obtenida de caña ecológica, con cristales dorados y notas de melaza. Conserva minerales naturales como calcio y potasio. Endulzante perfecto para repostería, bebidas y balance nutricional consciente.',
            publisher: '1 kg',
            stock: 18
        },
        {
            id: 17,
            name: 'Aceite de oliva extra virgen',
            categoria: 'Abarrotes',
            precioConDescuento: '7.99 x botella',
            price: 7.99,
            img: "/img/727280-1200-auto.webp",
            descripcion: 'Extraído en frío de aceitunas arbequinas, con aroma frutado y sabor equilibrado. Rico en ácidos grasos monoinsaturados y antioxidantes naturales. Ideal para aderezos, salteados saludables y como toque final en platos gourmet.',
            publisher: '500 ml',
            stock: 20
        },
        {
            id: 18,
            name: 'Fideos spaghetti integrales',
            categoria: 'Abarrotes',
            precioConDescuento: '8.99 x paquete',
            price: 8.99,
            img: "/img/727281-1200-auto.webp",
            descripcion: 'Pasta artesanal elaborada con sémola de trigo integral y agua de manantial. Alto contenido en fibra dietética y proteínas vegetales. Cocción al dente perfecta para salsas clásicas o preparaciones ligeras con vegetales frescos.',
            publisher: '500 g',
            stock: 22
        },
        {
            id: 19,
            name: 'Atún en agua premium',
            categoria: 'Abarrotes',
            precioConDescuento: '5.99 x lata',
            price: 5.99,
            img: "/img/758878-1200-auto.webp",
            descripcion: 'Filetes de atún aleta amarilla en conserva natural, capturados sosteniblemente. Fuente de omega-3, selenio y proteínas de alto valor biológico. Versátil para ensaladas, sándwiches o platos rápidos sin sacrificar nutrición.',
            publisher: '180 g',
            stock: 30
        },
        {
            id: 20,
            name: 'Avena en hojuelas orgánica',
            categoria: 'Abarrotes',
            precioConDescuento: '6.99 x kg',
            price: 6.99,
            img: "/img/eb94d39f23f230c669ec53cc4c8578972c1028ab.png",
            descripcion: 'Hojuelas de avena cultivada sin pesticidas, de textura cremosa al cocinar. Rica en betaglucanos que ayudan a regular colesterol y azúcar en sangre. Desayuno nutritivo base para porridges, smoothies o productos horneados.',
            publisher: '1 kg',
            stock: 14
        },
        {
            id: 21,
            name: 'Tomahawk madurado',
            categoria: 'Carnes, aves y pescados',
            precioConDescuento: '20.99 x kg',
            price: 20.99,
            img: "/img/744519-1.jpg.webp",
            descripcion: 'Corte premium con hueso en forma de hacha, madurado 28 días para intensificar su sabor. Marmoleado excepcional que garantiza terneza y jugosidad incomparables. Pieza estrella para parrillas que impresionen a gourmets exigentes.',
            publisher: '1 kg',
            stock: 8
        },
        {
            id: 22,
            name: 'Carne molida especial',
            categoria: 'Carnes, aves y pescados',
            precioConDescuento: '4.99 x kg',
            price: 4.99,
            img: "/img/109178-01-7312.jpg.webp",
            descripcion: 'Mezcla seleccionada de cortes magros con un 15% de grasa balanceada. Textura perfecta para hamburguesas jugosas, salsa boloñesa o rellenos. De producción local con trazabilidad garantizada desde el campo.',
            publisher: '1 kg',
            stock: 17
        },
        {
            id: 23,
            name: 'Filete de merluza fresca',
            categoria: 'Carnes, aves y pescados',
            precioConDescuento: '5.50 x kg',
            price: 5.50,
            img: "/img/filetdemero-1.png",
            descripcion: 'Lomos sin espinas de pescado blanco capturado en frías aguas patagónicas. Carne firme y de sabor delicado, rica en fósforo y yodo. Preparación rápida al vapor, a la plancha o en ceviches livianos.',
            publisher: '1 kg',
            stock: 10
        },
        {
            id: 24,
            name: 'Café en grano tostado',
            categoria: 'Abarrotes',
            precioConDescuento: '6.99 x kg',
            price: 6.99,
            img: "/img/b03a20cf9778284cb1227135894c082e707913b0.png",
            descripcion: 'Mezcla de arábicas andinos tostados a media altura para equilibrio entre acidez y cuerpo. Notas a chocolate negro y nueces con aroma intenso. Fresco molido garantiza la taza perfecta para mañanas energéticas.',
            publisher: '500 g',
            stock: 16
        }
];

const get = (id) => games.find(g => g.id == id);
const getAll = () => games;

export default { get, getAll };