const preguntas = [ 
    {
	titulo: "Menciona un bicho que puedes encontrar dentro de tu casa.",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Arañas", puntuacionUno: 22},
            {respuestaDos: "Moscas", puntuacionDos: 17},
            {respuestaTres: "Cucharachas", puntuacionTres: 13},
            {respuestaCuatro: "Hormigas", puntuacionCuatro: 13},
            {respuestaCinco: "Mosc@s", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Menciona un alimento de color rojo.",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "Manzana", puntuacionUno: 30},
            {respuestaDos: "Jitomate", puntuacionDos: 20},
            {respuestaTres: "Fresa", puntuacionTres: 13},
            {respuestaCuatro: "Sandía", puntuacionCuatro: 8},
            {respuestaCinco: "Ciruela", puntuacionCinco: 4}
        ]
    },
    {
	titulo: "Menciona algo que se obtiene de un árbol.",
	tipo: "naturaleza",
	respuestas: [
            {respuestaUno: "Fruta", puntuacionUno: 40},
			{respuestaDos: "Papel", puntuacionDos: 15},
			{respuestaTres: "Madera", puntuacionTres: 12},
			{respuestaCuatro: "Lápiz", puntuacionCuatro: 8},
			{respuestaCinco: "Oxigeno" ,puntuacionCinco: 4}
        ]
    },
    {
	titulo : "Nombra un país de América del Sur.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Brasil", puntuacionUno: 40},
			{respuestaDos: "Argentina", puntuacionDos: 15},
			{respuestaTres: "Chile", puntuacionTres: 12},
			{respuestaCuatro: "Guatemala", puntuacionCuatro: 8},
			{respuestaCinco: "Bolivia", puntuacionCinco: 3}
		]
	},
	{
	titulo : "Menciona una especialidad médica.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Ginecología", puntuacionUno: 38},
			{respuestaDos: "Odontología", puntuacionDos: 27},
			{respuestaTres: "Cardiologia", puntuacionTres: 12},
			{respuestaCuatro: "Pediatría", puntuacionCuatro: 10},
			{respuestaCinco: "Cirujano", puntuacionCinco: 8}
		]
	},
	{
	titulo : "Menciona regalo barato que siempre será bien aceptado.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Flores", puntuacionUno: 44},
			{respuestaDos: "Tarjeta/Carta", puntuacionDos: 24},
			{respuestaTres: "Chocolates", puntuacionTres: 18},
			{respuestaCuatro: "Peluches", puntuacionCuatro: 11},
			{respuestaCinco: "Dinero", puntuacionCinco: 6}
		]
	},
	{
	titulo : "Termina la frase: Estoy que me lleva la...",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Fregada", puntuacionUno: 37},
			{respuestaDos: "Chingada", puntuacionDos: 31},
			{respuestaTres: "Verga", puntuacionTres: 12},
			{respuestaCuatro: "Que me trajo", puntuacionCuatro: 12},
			{respuestaCinco: "Canción", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona Dato el cual se puede leer en una caja de cereal.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Datos Nutricionales", puntuacionUno: 44},
			{respuestaDos: "Ingredientes", puntuacionDos: 23},
			{respuestaTres: "Marca", puntuacionTres: 16},
			{respuestaCuatro: "Nombre del producto", puntuacionCuatro: 7},
			{respuestaCinco: "Juego o Cupón", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona Carrera la cuál suele asociarse como Artista.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Canto", puntuacionUno: 23},
			{respuestaDos: "Actuación", puntuacionDos: 20},
			{respuestaTres: "Baile/Danza", puntuacionTres: 18},
			{respuestaCuatro: "Pintura/Dibujo", puntuacionCuatro: 13},
			{respuestaCinco: "Músico", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona un sabor de una crema en una fiesta.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Queso", puntuacionUno: 32},
			{respuestaDos: "Atun", puntuacionDos: 25},
			{respuestaTres: "Cebolla", puntuacionTres: 25},
			{respuestaCuatro: "Chipotle", puntuacionCuatro: 14},
			{respuestaCinco: "Chile", puntuacionCinco: 13}
		]
	},
	{
	titulo : "Menciona una fobia o miedo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Alturas", puntuacionUno: 25},
			{respuestaDos: "Arañas", puntuacionDos: 21},
			{respuestaTres: "Oscuridad", puntuacionTres: 16},
			{respuestaCuatro: "Estar encerrado", puntuacionCuatro: 10},
			{respuestaCinco: "Ratas", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Nombra algo que desafía la ley de la Gravedad.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Aviones", puntuacionUno: 37},
			{respuestaDos: "Drones", puntuacionDos: 29},
			{respuestaTres: "Helicópteros", puntuacionTres: 21},
			{respuestaCuatro: "Cohetes", puntuacionCuatro: 16},
			{respuestaCinco: "Satélites", puntuacionCinco: 10}
		]
	},
	{
	titulo : "Menciona lugar donde los estudiantes se la pintean.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Parque", puntuacionUno: 41},
			{respuestaDos: "Cine", puntuacionDos: 18},
			{respuestaTres: "Maquinitas", puntuacionTres: 12},
			{respuestaCuatro: "Centro", puntuacionCuatro: 10},
			{respuestaCinco: "Billar o Bar", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona cosas que llevamos para acampar.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Casa de campaña", puntuacionUno: 38},
			{respuestaDos: "Bolsa para dormir", puntuacionDos: 33},
			{respuestaTres: "Comida", puntuacionTres: 24},
			{respuestaCuatro: "Lámpara/Linterna", puntuacionCuatro: 15},
			{respuestaCinco: "Mochila", puntuacionCinco: 11}
		]
	},
	{
	titulo : "Menciona preguntas que te hacen cuando vas a las carnes frias.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "¿Que va a llevar?", puntuacionUno: 35},
			{respuestaDos: "¿Cuánto va a llevar?", puntuacionDos: 24},
			{respuestaTres: "¿De que marca?", puntuacionTres: 20},
			{respuestaCuatro: "¿Así está bien?", puntuacionCuatro: 17},
			{respuestaCinco: "¿En que le puedo ayudar?", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona un animal marino que no sea un pez.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Camarón", puntuacionUno: 48},
			{respuestaDos: "Pulpo", puntuacionDos: 39},
			{respuestaTres: "Ballena", puntuacionTres: 21},
			{respuestaCuatro: "Tortuga", puntuacionCuatro: 13},
			{respuestaCinco: "Caballito de mar", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona un pan No Dulce.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Torcido", puntuacionUno: 29},
			{respuestaDos: "Pan de caja(Bimbo)", puntuacionDos: 27},
			{respuestaTres: "Virginia", puntuacionTres:18},
			{respuestaCuatro: "Telera", puntuacionCuatro:11},
			{respuestaCinco: "Baguette", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona deporte que entre mas pesado estes mas te aydua.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Sumo", puntuacionUno: 39},
			{respuestaDos: "Lucha libre", puntuacionDos: 31},
			{respuestaTres: "FútBol Americano", puntuacionTres: 27},
			{respuestaCuatro: "Levantamiento de pesas", puntuacionCuatro: 15},
			{respuestaCinco: "Box", puntuacionCinco: 12}
		]
	},
	{
	titulo : "Menciona material que se usa para hacer esculturas.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Barro", puntuacionUno: 45},
			{respuestaDos: "Piedra", puntuacionDos: 37},
			{respuestaTres: "Mármol", puntuacionTres: 24},
			{respuestaCuatro: "Yeso", puntuacionCuatro: 15},
			{respuestaCinco: "Metal", puntuacionCinco: 10}
		]
	},
	{
	titulo : "Menciona Características de la gente Asiática.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Ojos chinos", puntuacionUno: 39},
			{respuestaDos: "DelgaDos", puntuacionDos: 31},
			{respuestaTres: "Inteligencia", puntuacionTres: 27},
			{respuestaCuatro: "Color de piel", puntuacionCuatro: 15},
			{respuestaCinco: "Idioma", puntuacionCinco: 12}
		]
	},
	{
	titulo : "Menciona algo que es malo para el cabello.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Tintes", puntuacionUno: 43},
			{respuestaDos: "Fijadores", puntuacionDos: 36},
			{respuestaTres: "El sol", puntuacionTres: 24},
			{respuestaCuatro: "Caspa", puntuacionCuatro: 18},
			{respuestaCinco: "Gel", puntuacionCinco: 8}		]
	},
	{
	titulo : "Menciona un objeto que explota.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Bomba", puntuacionUno: 38},
			{respuestaDos: "Trike", puntuacionDos: 29},
			{respuestaTres: "Dinamita", puntuacionTres: 20},
			{respuestaCuatro: "Tanques de gas", puntuacionCuatro: 13},
			{respuestaCinco: "Granada", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona un pan de Dulce.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Dona", puntuacionUno: 36},
			{respuestaDos: "Concha", puntuacionDos: 32},
			{respuestaTres: "Leño", puntuacionTres: 26},
			{respuestaCuatro: "Puerquito", puntuacionCuatro: 15},
			{respuestaCinco: "Cocodrilo/Elote", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona que hay en una billetera de un Hombre.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Dinero", puntuacionUno: 31},
			{respuestaDos: "Fotos", puntuacionDos: 30},
			{respuestaTres: "Credenciales", puntuacionTres: 20},
			{respuestaCuatro: "Tarjetas", puntuacionCuatro: 11},
			{respuestaCinco: "Condones", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona una característica de una Limosina.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Larga", puntuacionUno: 31},
			{respuestaDos: "Color negro", puntuacionDos: 22},
			{respuestaTres: "Elegante", puntuacionTres: 16},
			{respuestaCuatro: "Costosa", puntuacionCuatro: 14},
			{respuestaCinco: "Divertida", puntuacionCinco: 10}
		]
	},
	{
	titulo : "Sin decir marcas Menciona alimentos que se pueden comprar en maquina Expendedora.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Refresco", puntuacionUno: 37},
			{respuestaDos: "Sabritas", puntuacionDos: 34},
			{respuestaTres: "Galletas", puntuacionTres: 22},
			{respuestaCuatro: "Dulces", puntuacionCuatro: 15},
			{respuestaCinco: "Agua", puntuacionCinco: 14}
		]
	},
	{
	titulo : "Menciona un lugar donde haya un chicle pegado.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Piso", puntuacionUno: 46},
			{respuestaDos: "Bajo la mesa", puntuacionDos: 32},
			{respuestaTres: "Zapato", puntuacionTres: 27},
			{respuestaCuatro: "Silla", puntuacionCuatro: 22},
			{respuestaCinco: "Pared", puntuacionCinco: 16}
		]
	},
	{
	titulo : "Menciona cosas que la gente compra esperando que le dure toda la vida.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Casa", puntuacionUno: 46},
			{respuestaDos: "Carro", puntuacionDos: 34},
			{respuestaTres: "Ropa", puntuacionTres: 29},
			{respuestaCuatro: "Muebles", puntuacionCuatro: 17},
			{respuestaCinco: "Electrodomestico", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona que cosas hacen los Gatos.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Jugar", puntuacionUno: 47},
			{respuestaDos: "Dormir", puntuacionDos: 39},
			{respuestaTres: "Comer", puntuacionTres: 21},
			{respuestaCuatro: "Maullar", puntuacionCuatro: 20},
			{respuestaCinco: "Lamer", puntuacionCinco: 13}
		]
	},
	{
	titulo : "Menciona utensilios de cocina.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Cuchara", puntuacionUno: 38},
			{respuestaDos: "Cuchillo", puntuacionDos: 28},
			{respuestaTres: "Sartén", puntuacionTres: 15},
			{respuestaCuatro: "Tenedor", puntuacionCuatro: 10},
			{respuestaCinco: "Cazuela", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Menciona algo que se enciende con un cerillo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Cigarro", puntuacionUno: 43},
			{respuestaDos: "Estufa", puntuacionDos:20},
			{respuestaTres: "Velas", puntuacionTres:10},
			{respuestaCuatro: "Papel", puntuacionCuatro:8},
			{respuestaCinco: "Fuegos Artificiales", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona algo que tenga cuernos.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Mi Ex", puntuacionUno: 62},
			{respuestaDos: "Venado", puntuacionDos: 50},
			{respuestaTres: "Chivo", puntuacionTres: 22},
			{respuestaCuatro: "Vaca", puntuacionCuatro: 17},
			{respuestaCinco: "Buey", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona que es lo más constante que hace un bebe.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Llorar", puntuacionUno: 63},
			{respuestaDos: "Popo", puntuacionDos: 42},
			{respuestaTres: "Comer", puntuacionTres: 33},
			{respuestaCuatro: "Dormir", puntuacionCuatro: 19},
			{respuestaCinco: "Jugar", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Menciona un alimento que se vende en lata.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Atún", puntuacionUno: 47},
			{respuestaDos: "Frijoles", puntuacionDos: 39},
			{respuestaTres: "Chícharos", puntuacionTres: 22},
			{respuestaCuatro: "Chiles", puntuacionCuatro: 11},
			{respuestaCinco: "Refresco", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona Artículos de higiene que no suelen faltar en un viaje.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Pasta dental", puntuacionUno: 36},
			{respuestaDos: "Cepillo de dientes", puntuacionDos: 34},
			{respuestaTres: "peine", puntuacionTres: 24},
			{respuestaCuatro: "Desodorante", puntuacionCuatro: 18},
			{respuestaCinco: "Shampoo", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona Lugar en donde conseguir hospedaje.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "App/Página web", puntuacionUno: 38},
			{respuestaDos: "Hotel", puntuacionDos: 30},
			{respuestaTres: "Motel", puntuacionTres: 27},
			{respuestaCuatro: "Hostel", puntuacionCuatro: 18},
			{respuestaCinco: "Con un conocido/Familiar", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona personaje clasico de terror.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Chucky", puntuacionUno: 39},
			{respuestaDos: "Wazaa :p", puntuacionDos:31},
			{respuestaTres: "Freddy Krueger", puntuacionTres: 29},
			{respuestaCuatro: "Un negro", puntuacionCuatro: 21},
			{respuestaCinco: "Jason", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona pelicula antigua de terror.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Drácula", puntuacionUno: 31},
			{respuestaDos: "El Exorcista", puntuacionDos: 26},
			{respuestaTres: "El Resplandor", puntuacionTres: 20},
			{respuestaCuatro: "It (Eso)", puntuacionCuatro: 17},
			{respuestaCinco: "Psicosis", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Menciona disfraces clasicos Sexys que una chica suele vestirse.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Gatita", puntuacionUno: 35},
			{respuestaDos: "Vampira", puntuacionDos: 29},
			{respuestaTres: "Diablita", puntuacionTres: 22},
			{respuestaCuatro: "Brujita", puntuacionCuatro: 12},
			{respuestaCinco: "Caperucita Roja", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona que debe tener una casa para ser mansión.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Muy grande", puntuacionUno: 46},
			{respuestaDos: "Tener alberca", puntuacionDos: 46},
			{respuestaTres: "Gigante jardín", puntuacionTres: 26},
			{respuestaCuatro: "Muebles lujosos", puntuacionCuatro: 17},
			{respuestaCinco: "Muy alta", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona especia usada en la cocina.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Sal", puntuacionUno: 31},
			{respuestaDos: "Pimienta", puntuacionDos: 28},
			{respuestaTres: "Ajo", puntuacionTres: 25},
			{respuestaCuatro: "laurel", puntuacionCuatro: 17},
			{respuestaCinco: "Orégano", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona cosas que un niño puede querer y tiene ruedas.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Bicicleta", puntuacionUno: 36},
			{respuestaDos: "Un coche", puntuacionDos: 33},
			{respuestaTres: "Patines", puntuacionTres: 27},
			{respuestaCuatro: "Juguete", puntuacionCuatro: 14},
			{respuestaCinco: "Patineta", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona cosas bonitas que alguien se pudiera decir en el espejo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Que guapo/bonito", puntuacionUno: 39},
			{respuestaDos: "Que alto te ves", puntuacionDos: 32},
			{respuestaTres: "Que delgado te ves", puntuacionTres:28},
			{respuestaCuatro: "Que sexy te ves", puntuacionCuatro: 15},
			{respuestaCinco: "me veo muy bien", puntuacionCinco: 12}		
		]
	},
	{
	titulo : "Menciona cosas que comen los gusanos.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Plantas", puntuacionUno: 45},
			{respuestaDos: "Cadáveres", puntuacionDos: 37},
			{respuestaTres: "Frutas", puntuacionTres: 31},
			{respuestaCuatro: "Comida echada a perder", puntuacionCuatro: 16},
			{respuestaCinco: "Cosas podridas", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Menciona signo de ortografía que sirve para marcas pausa.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Coma", puntuacionUno: 39},
			{respuestaDos: "Punto", puntuacionDos: 36},
			{respuestaTres: "Punto y coma", puntuacionTres: 25},
			{respuestaCuatro: "Guión", puntuacionCuatro: 20},
			{respuestaCinco: "Dos puntos", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona cosas que se venden para fiestas patrias.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Banderas", puntuacionUno: 39},
			{respuestaDos: "Bigotes", puntuacionDos: 36},
			{respuestaTres: "Confeti", puntuacionTres: 25},
			{respuestaCuatro: "Sombreros", puntuacionCuatro: 20},
			{respuestaCinco: "Alcohol", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Termina la frase 'Te quiero de aquí hasta...'.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "El cielo", puntuacionUno: 39},
			{respuestaDos: "La luna", puntuacionDos: 36},
			{respuestaTres: "El infinito", puntuacionTres: 28},
			{respuestaCuatro: "El mas allá", puntuacionCuatro: 17},
			{respuestaCinco: "Las estrellas", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona que suele ver en carnavales.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Disfraces", puntuacionUno: 37},
			{respuestaDos: "Carros alegóricos", puntuacionDos: 32},
			{respuestaTres: "Máscaras/antifraces", puntuacionTres: 26},
			{respuestaCuatro: "Bailes", puntuacionCuatro: 21},
			{respuestaCinco: "Mucha gente", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona parte del cuerpo que puedes tocar para provocar el coito.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Cuello", puntuacionUno: 60},
			{respuestaDos: "Cintura", puntuacionDos: 23},
			{respuestaTres: "Espalda", puntuacionTres: 20},
			{respuestaCuatro: "Piernas", puntuacionCuatro:15},
			{respuestaCinco: "Pecho", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona animal que la gente suele ver con sus crias.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Gallina", puntuacionUno: 47},
			{respuestaDos: "Perro", puntuacionDos: 40},
			{respuestaTres: "Gato", puntuacionTres: 34},
			{respuestaCuatro: "Puercos", puntuacionCuatro: 13},
			{respuestaCinco: "Roedores", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona un insecto que asuste.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Araña/Trantula", puntuacionUno: 38},
			{respuestaDos: "Cucaracha Voladora", puntuacionDos: 24},
			{respuestaTres: "Alacrán", puntuacionTres: 8},
			{respuestaCuatro: "Abeja/Avispa", puntuacionCuatro: 8},
			{respuestaCinco: "Cienpiés", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona que puede agregarse al café.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Azúcar", puntuacionUno: 33},
			{respuestaDos: "Crema", puntuacionDos: 28},
			{respuestaTres: "Leche", puntuacionTres: 23},
			{respuestaCuatro: "Canela", puntuacionCuatro: 10},
			{respuestaCinco: "Alcohol", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona frase clásica para decir que no te interesa tu EX.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "No l@ queria", puntuacionUno: 26},
			{respuestaDos: "Era aburrid@", puntuacionDos: 20},
			{respuestaTres: "Era odioso/No soportaba", puntuacionTres: 12},
			{respuestaCuatro: "Infidelidad", puntuacionCuatro: 8},
			{respuestaCinco: "Yo l@ deje", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona un objeto hecho de vidrio.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Vaso", puntuacionUno: 38},
			{respuestaDos: "Botellas", puntuacionDos: 19},
			{respuestaTres: "Espejos", puntuacionTres: 15},
			{respuestaCuatro: "Ventanas", puntuacionCuatro: 5},
			{respuestaCinco: "Copa", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Menciona medio de transporte con el que podrías conocer todo el mundo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Avión", puntuacionUno: 34},
			{respuestaDos: "Motocicleta", puntuacionDos: 16},
			{respuestaTres: "Automóvil", puntuacionTres: 16},
			{respuestaCuatro: "Helicóptero", puntuacionCuatro: 7},
			{respuestaCinco: "Autobús/Casa Rodante", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona parte del cuerpo donde suelen hacerle cosquillas.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Pies", puntuacionUno: 37},
			{respuestaDos: "Estómago", puntuacionDos: 19},
			{respuestaTres: "Axila", puntuacionTres: 15},
			{respuestaCuatro: "Costillas", puntuacionCuatro: 9},
			{respuestaCinco: "Cuello", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Menciona un país que últimamente ha estado en algún tipo de guerra.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Rusia", puntuacionUno: 28},
			{respuestaDos: "Ucrania", puntuacionDos: 17},
			{respuestaTres: "China", puntuacionTres: 16},
			{respuestaCuatro: "Estados Unidos", puntuacionCuatro: 12},
			{respuestaCinco: "Israel", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona algo que suele estar en el refigerador de un soltero.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Cerveza", puntuacionUno: 39},
			{respuestaDos: "Leche", puntuacionDos: 24},
			{respuestaTres: "Comida", puntuacionTres: 14},
			{respuestaCuatro: "Refresco", puntuacionCuatro: 12},
			{respuestaCinco: "Fruta/Verduras", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona una actividad que provoca cansancio en los ojos.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Leer", puntuacionUno: 36},
			{respuestaDos: "Televisión", puntuacionDos: 28},
			{respuestaTres: "Teléfono", puntuacionTres: 26},
			{respuestaCuatro: "Estar en el sol", puntuacionCuatro: 13},
			{respuestaCinco: "Computadora", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona característica clásica de una porrista de fútbol americano.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Mini falda", puntuacionUno: 42},
			{respuestaDos: "Pompones", puntuacionDos: 33},
			{respuestaTres: "Buen cuerpo", puntuacionTres: 23},
			{respuestaCuatro: "Guapas/Bonitas", puntuacionCuatro: 17},
			{respuestaCinco: "Flexibilidad", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona prenda la cúal se abotone.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Camisa", puntuacionUno: 44},
			{respuestaDos: "Blusa", puntuacionDos: 34},
			{respuestaTres: "Pantalón", puntuacionTres: 27},
			{respuestaCuatro: "Suéter", puntuacionCuatro: 22},
			{respuestaCinco: "Falda", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona ademas de Okay, di otra manera de decir que estás de acuerdo.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Bien", puntuacionUno: 45},
			{respuestaDos: "Si", puntuacionDos: 19},
			{respuestaTres: "Claro", puntuacionTres: 16},
			{respuestaCuatro: "Perfecto", puntuacionCuatro: 10},
			{respuestaCinco: "De acuerdo", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona algo en lo que los niños se trepen.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Árboles", puntuacionUno: 44},
			{respuestaDos: "Culumpio", puntuacionDos: 38},
			{respuestaTres: "Resbaladilla", puntuacionTres: 24},
			{respuestaCuatro: "En la gente", puntuacionCuatro: 10},
			{respuestaCinco: "Coches", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona la cantidad de un billete de México.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Cien", puntuacionUno: 23},
			{respuestaDos: "Veinte", puntuacionDos: 20},
			{respuestaTres: "Doscientos", puntuacionTres: 15},
			{respuestaCuatro: "Quinientos", puntuacionCuatro: 10},
			{respuestaCinco: "Mil", puntuacionCinco: 8}		
		]
	},
		{
	titulo : "Menciona vegetal que el mexicano promedio fríe.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Papas", puntuacionUno: 35},
			{respuestaDos: "Cebolla", puntuacionDos: 27},
			{respuestaTres: "Calabaza", puntuacionTres: 22},
			{respuestaCuatro: "Zanahoria", puntuacionCuatro: 11},
			{respuestaCinco: "Chile", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Articulo escolar que pierden los niños",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "El Lápiz", puntuacionUno: 34},
			{respuestaDos: "Sacapuntas", puntuacionDos: 30},
			{respuestaTres: "Borrador", puntuacionTres: 25},
			{respuestaCuatro: "Colores", puntuacionCuatro: 21},
			{respuestaCinco: "Regla", puntuacionCinco: 14}		
		]
	},
	{
	titulo : "Menciona fruta que se usa de botana",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Mango", puntuacionUno: 35},
			{respuestaDos: "Pepino", puntuacionDos: 30},
			{respuestaTres: "Jicama", puntuacionTres: 27},
			{respuestaCuatro: "Manzana", puntuacionCuatro: 15},
			{respuestaCinco: "Uva", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Critica general que le suelen hacer a un restaurante",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Comida", puntuacionUno: 41},
			{respuestaDos: "Servicio", puntuacionDos: 32},
			{respuestaTres: "Decoración", puntuacionTres: 22},
			{respuestaCuatro: "Ubicación", puntuacionCuatro: 20},
			{respuestaCinco: "Igiene", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Algo que la gente suele desperticiar",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Agua", puntuacionUno: 40},
			{respuestaDos: "Comida", puntuacionDos: 34},
			{respuestaTres: "Tiempo", puntuacionTres: 26},
			{respuestaCuatro: "Basura", puntuacionCuatro: 17},
			{respuestaCinco: "Dinero", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Dinos una fobia comun de la gente",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Alturas", puntuacionUno: 42},
			{respuestaDos: "Arañas", puntuacionDos: 35},
			{respuestaTres: "Encerrado", puntuacionTres: 29},
			{respuestaCuatro: "Hablar publico", puntuacionCuatro: 19},
			{respuestaCinco: "Oscuridad", puntuacionCinco: 15}		
		]
	},
	{
	titulo : "Menciona algo especifico que las mujeres usan para maquillarse",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Labial", puntuacionUno: 41},
			{respuestaDos: "Rimen", puntuacionDos: 35},
			{respuestaTres: "Base", puntuacionTres: 33},
			{respuestaCuatro: "Polvo", puntuacionCuatro: 25},
			{respuestaCinco: "Rugor", puntuacionCinco: 12}		
		]
	},
	{
	titulo : "Menciona un ingrediente del Pozole",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Maiz", puntuacionUno: 38},
			{respuestaDos: "Carne", puntuacionDos: 34},
			{respuestaTres: "Chile", puntuacionTres: 22},
			{respuestaCuatro: "Lechuga", puntuacionCuatro: 18},
			{respuestaCinco: "Orégano", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Menciona un Animal que sea muy fuerte",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "León", puntuacionUno: 39},
			{respuestaDos: "Oso", puntuacionDos: 31},
			{respuestaTres: "Elefante", puntuacionTres: 29},
			{respuestaCuatro: "Gorila", puntuacionCuatro: 21},
			{respuestaCinco: "Tigre", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Castigo que los padres solían hacer a sus hijos",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "No salir", puntuacionUno: 37},
			{respuestaDos: "Te pegaban", puntuacionDos: 30},
			{respuestaTres: "No ver TV/Celular", puntuacionTres: 21},
			{respuestaCuatro: "No comer", puntuacionCuatro: 12},
			{respuestaCinco: "No dar Dinero", puntuacionCinco: 3}		
		]
	},
	{
	titulo: "Menciona algo común que arruina Las Vacaciones",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Mal Clima", puntuacionUno: 31},
            {respuestaDos: "Enfermedad", puntuacionDos: 30},
            {respuestaTres: "Accidente", puntuacionTres: 21},
            {respuestaCuatro: "Por Dinero", puntuacionCuatro: 13},
            {respuestaCinco: "Trabajo", puntuacionCinco: 9}
        ]
    },
    {
	titulo: "Forma común de decir que estuvo bien",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Estuvo Suave", puntuacionUno: 42},
            {respuestaDos: "Estuvo Chingon", puntuacionDos: 32},
            {respuestaTres: "Estuvo Padre", puntuacionTres: 16},
            {respuestaCuatro: "Estuvo Genial", puntuacionCuatro: 15},
            {respuestaCinco: "Estuvo Maravilloso", puntuacionCinco: 3}
        ]
    },
	{
	titulo: "Catástrofes que hayan sido tema de Películas",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Terremoto", puntuacionUno: 43},
            {respuestaDos: "Huracán", puntuacionDos: 37},
            {respuestaTres: "Hundimiento de Barco", puntuacionTres: 17},
            {respuestaCuatro: "Erupción de volcán", puntuacionCuatro: 15},
            {respuestaCinco: "Tornado", puntuacionCinco: 11}
        ]
    },
	{
	titulo: "Además de Fútbol, menciona un deporte con mucha afición.",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Básquetbol", puntuacionUno: 26},
            {respuestaDos: "Tenis", puntuacionDos: 23},
            {respuestaTres: "Béisbol", puntuacionTres: 17},
            {respuestaCuatro: "Fútbol Americano", puntuacionCuatro: 12},
            {respuestaCinco: "Voleibol", puntuacionCinco: 8}
        ]
    },
	{
	titulo: "Malestares que puede ocasionar subirse a un avión",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Mido", puntuacionUno: 40},
            {respuestaDos: "Dolor de cabeza", puntuacionDos: 35},
            {respuestaTres: "Dolor de estómago", puntuacionTres: 22},
            {respuestaCuatro: "Obstrucción de oídos", puntuacionCuatro: 16},
            {respuestaCinco: "Náuseas", puntuacionCinco: 9}
        ]
    },
	{
	titulo: "Con que suele rellenarse un Globo",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Aire", puntuacionUno: 37},
            {respuestaDos: "Gas", puntuacionDos: 26},
            {respuestaTres: "Agua", puntuacionTres: 20},
            {respuestaCuatro: "Harina", puntuacionCuatro: 13},
            {respuestaCinco: "Confeti", puntuacionCinco: 11}
        ]
    },
	{
	titulo: "Menciona algo que tenga rayas",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Cebra", puntuacionUno: 31},
            {respuestaDos: "Ropa", puntuacionDos: 22},
            {respuestaTres: "Cuaderno", puntuacionTres: 16},
            {respuestaCuatro: "El piso/Asulejos", puntuacionCuatro: 13},
            {respuestaCinco: "Una Regla", puntuacionCinco: 10}
        ]
    },
	{
	titulo: "Menciona cosas en las que la gente se fija antes de comprar un celular",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "La marca", puntuacionUno: 43},
           {respuestaDos: "Si esta bonito", puntuacionDos: 33},
            {respuestaTres: "Precio", puntuacionTres: 26},
            {respuestaCuatro: "Color", puntuacionCuatro: 19},
            {respuestaCinco: "Camara", puntuacionCinco: 13}
        ]
    },
	{
	titulo: "Cosas que te encuentras en un camino de terracería",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Piedras", puntuacionUno: 33},
            {respuestaDos: "Animales", puntuacionDos: 25},
            {respuestaTres: "Tierra", puntuacionTres: 21},
            {respuestaCuatro: "Árboles", puntuacionCuatro: 14},
            {respuestaCinco: "Polvo", puntuacionCinco: 7}
        ]
    },
	{
	titulo: "Cosas que la familia se turna para usar.",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "El Baño", puntuacionUno: 52},
            {respuestaDos: "La Televisión", puntuacionDos: 41},
            {respuestaTres: "Ropa", puntuacionTres: 33},
            {respuestaCuatro: "La Computadora", puntuacionCuatro: 27},
            {respuestaCinco: "El Coche", puntuacionCinco: 22}
        ]
    },
	{
	titulo: "Nombra una profesión que requiera estar detrás de series de TV o Novelas",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Camarógrafo", puntuacionUno: 48},
            {respuestaDos: "Director", puntuacionDos: 37},
            {respuestaTres: "Productor", puntuacionTres: 30},
            {respuestaCuatro: "Actor/Actriz", puntuacionCuatro: 23},
            {respuestaCinco: "Escritor", puntuacionCinco: 16}
        ]
    },
	{
	titulo: "Nombra una manera de llamar a la lluvia según su intensidad",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Tormenta", puntuacionUno: 34},
            {respuestaDos: "Uracan", puntuacionDos: 32},
            {respuestaTres: "ChipiChipi", puntuacionTres: 29},
            {respuestaCuatro: "Tifón", puntuacionCuatro: 22},
            {respuestaCinco: "Llovizna", puntuacionCinco: 11}
        ]
    },
	{
	titulo: "Menciona un personaje de Alicia en el país de las maravillas",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Alicia", puntuacionUno: 41},
            {respuestaDos: "Conejo", puntuacionDos: 37},
            {respuestaTres: "Sombrero", puntuacionTres: 21},
            {respuestaCuatro: "Reina Roja", puntuacionCuatro: 15},
            {respuestaCinco: "Gato", puntuacionCinco: 6}
        ]
    },
	{
	titulo: "Menciona una Aderezo para ensalada",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "Ranch", puntuacionUno: 39},
            {respuestaDos: "César", puntuacionDos: 33},
            {respuestaTres: "Vinagreta", puntuacionTres: 24},
            {respuestaCuatro: "Mayonesa", puntuacionCuatro: 16},
            {respuestaCinco: "Chipotle", puntuacionCinco: 5}
        ]
    },
	{
	titulo: "Figuras clásicas que se hacen con hojas de papel",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Barco", puntuacionUno: 38},
            {respuestaDos: "Avion", puntuacionDos: 31},
            {respuestaTres: "Paloma/Ave", puntuacionTres: 27},
            {respuestaCuatro: "Corazón", puntuacionCuatro: 18},
            {respuestaCinco: "Sobre", puntuacionCinco: 7}
        ]
    },
	{
	titulo: "Cosas que los bebes hacen y causan Ternura",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Su risa", puntuacionUno: 32},
            {respuestaDos: "Hacer Pucheros", puntuacionDos: 28},
            {respuestaTres: "Balbucear", puntuacionTres: 20},
            {respuestaCuatro: "Llorar", puntuacionCuatro: 14},
            {respuestaCinco: "Dormir", puntuacionCinco: 5}
        ]
    },
	{
	titulo: "Canción mexicana que se canta en ocasiones especiales",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Cielito Lindo", puntuacionUno: 37},
            {respuestaDos: "Las Mañanitas", puntuacionDos: 25},
            {respuestaTres: "México lindo", puntuacionTres: 23},
            {respuestaCuatro: "Himno nacional", puntuacionCuatro: 23},
            {respuestaCinco: "La Guadalupana", puntuacionCinco: 12}
        ]
    },
	{
	titulo: "Nombra un insecto que no vuela",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "La Hormiga", puntuacionUno: 31},
            {respuestaDos: "Gusano", puntuacionDos: 25},
            {respuestaTres: "Araña", puntuacionTres: 23},
            {respuestaCuatro: "Cochinilla", puntuacionCuatro: 12},
            {respuestaCinco: "Mantis", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Algo que debes evitar cuando estás enfermo de la garganta",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Tomar Cosas Frías", puntuacionUno: 39},
            {respuestaDos: "Estar en lo frío", puntuacionDos: 31},
            {respuestaTres: "Fumar", puntuacionTres: 25},
            {respuestaCuatro: "Hablar", puntuacionCuatro: 17},
            {respuestaCinco: "Comer Picante", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Nombra un animal de boca grande",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Cocodrilo", puntuacionUno: 30},
            {respuestaDos: "Tiburón", puntuacionDos: 26},
            {respuestaTres: "Ballena", puntuacionTres: 16},
            {respuestaCuatro: "León", puntuacionCuatro: 11},
            {respuestaCinco: "Hipopótamo", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Cosas que le suele caer sobre la cabreza a personaje de caricatura",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Piedra", puntuacionUno: 37},
            {respuestaDos: "Yunque", puntuacionDos: 25},
            {respuestaTres: "Ladrillo", puntuacionTres: 17},
            {respuestaCuatro: "Maceta", puntuacionCuatro: 13},
            {respuestaCinco: "Agua", puntuacionCinco: 5}
        ]
    },
    {
	titulo: "Razones por las que una persona preferiría tener cabello corto",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Rapidez al peinar", puntuacionUno: 33},
            {respuestaDos: "Porque se ve mejor", puntuacionDos: 28},
            {respuestaTres: "Por el calor", puntuacionTres: 22},
            {respuestaCuatro: "Por Moda", puntuacionCuatro: 10},
            {respuestaCinco: "Se ensucia menos",puntuacionCinco: 7}
        ]
    },
    {
	titulo: "Manera de destruir un documento",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Quemandolo", puntuacionUno: 33},
            {respuestaDos: "Mojandolo", puntuacionDos: 28},
            {respuestaTres: "Partirlo en pedazos", puntuacionTres: 22},
            {respuestaCuatro: "Rayandolo", puntuacionCuatro: 10},
            {respuestaCinco: "En la Trituradora", puntuacionCinco: 7}
        ]
    },
    {
	titulo: "Menciona un nombre que va acompañado de Maria",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Guadalupe", puntuacionUno: 30},
            {respuestaDos: "Isabel", puntuacionDos: 28},
            {respuestaTres: "José", puntuacionTres: 21}, 
            {respuestaCuatro: "Antonia", puntuacionCuatro: 17},
            {respuestaCinco: "Fernanda", puntuacionCinco: 9}
        ]
    },
    {
	titulo: "Menciona un caldo",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "De Pollo", puntuacionUno: 42},
            {respuestaDos: "De Res", puntuacionDos: 35},
            {respuestaTres: "De papas", puntuacionTres: 27},
            {respuestaCuatro: "Albóndigas", puntuacionCuatro: 21},
            {respuestaCinco: "Verduras/Cocido", puntuacionCinco: 13}
        ]
    },
    {
	titulo: "Actividad doméstica que se puede hacer en menos de 10Min",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Barrer", puntuacionUno: 34},
            {respuestaDos: "Tender la cama", puntuacionDos: 28},
            {respuestaTres: "Lavar trastes", puntuacionTres: 21},
            {respuestaCuatro: "Sacudir", puntuacionCuatro: 14},
            {respuestaCinco: "Trapear", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Menciona accesorio que complementa el vestido de novia",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Ramo", puntuacionUno: 28},
            {respuestaDos: "Velo", puntuacionDos: 24},
            {respuestaTres: "Zapatillas", puntuacionTres: 19},
            {respuestaCuatro: "Anillo", puntuacionCuatro: 12},
            {respuestaCinco: "La Cola", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Oficio o Profesión que se usen tijeras",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Costurero", puntuacionUno: 37},
            {respuestaDos: "Peluquero/Estilista", puntuacionDos: 33},
            {respuestaTres: "Modista", puntuacionTres: 28},
            {respuestaCuatro: "Decorador", puntuacionCuatro: 17},
            {respuestaCinco: "Jardinero", puntuacionCinco: 13}
        ]
    },
    {
	titulo: "Menciona algo que puede ser confundido con un OVNI a lo lejos",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Avion", puntuacionUno: 33},
            {respuestaDos: "Estrella", puntuacionDos: 28},
            {respuestaTres: "Globo", puntuacionTres: 23},
            {respuestaCuatro: "Helicoptero", puntuacionCuatro: 18},
            {respuestaCinco: "Cometa", puntuacionCinco: 14}
        ]
    },
    {
	titulo: "Además del Rey menciona una pieza de Ajedrez",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Caballo", puntuacionUno: 26},
            {respuestaDos: "Reina", puntuacionDos: 19},
            {respuestaTres: "Peón", puntuacionTres: 15},
            {respuestaCuatro: "Torre", puntuacionCuatro: 8},
            {respuestaCinco: "Alfil", puntuacionCinco: 3}
        ]
    },
    {
	titulo: "Menciona un oficio donde se requiere la ayuda de un chalan",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Albañil", puntuacionUno: 35},
            {respuestaDos: "Mecánico", puntuacionDos: 31},
            {respuestaTres: "Pintor", puntuacionTres: 27},
            {respuestaCuatro: "Carpintero", puntuacionCuatro: 19},
            {respuestaCinco: "Carniero", puntuacionCinco: 10}
        ]
    },
    {
	titulo: "Cosas que suelen rentarse",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Una casa", puntuacionUno: 38},
            {respuestaDos: "Un Avion", puntuacionDos: 34},
            {respuestaTres: "Departamento", puntuacionTres: 22},
            {respuestaCuatro: "Una Habitación", puntuacionCuatro: 18},
            {respuestaCinco: "Ropa", puntuacionCinco: 14}
        ]
    },
    {
	titulo: "Nombra un juego de mesa",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Uno", puntuacionUno: 41},
             {respuestaDos: "Turista", puntuacionDos: 36},
            {respuestaTres: "Domino", puntuacionTres: 29},
            {respuestaCuatro: "Baraja", puntuacionCuatro: 11},
            {respuestaCinco: "Lotería", puntuacionCinco: 8}
        ]
    },
    {
	titulo: "Ingrediente básico de un guacamole",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "Aguacate", puntuacionUno: 40},
            {respuestaDos: "Tomate", puntuacionDos: 30},
            {respuestaTres: "Cebolla", puntuacionTres: 26},
            {respuestaCuatro: "Sal", puntuacionCuatro: 16},
            {respuestaCinco: "limón", puntuacionCinco: 7}
        ]
    },
    {
	titulo: "Antes de la invención de la luz ¿Con que se Iluminaba?",
	tipo: "normal",
	respuestas: [
            {respuestaUno: "Vela", puntuacionUno: 27},
            {respuestaDos: "Quinques", puntuacionDos: 20},
            {respuestaTres: "Fogata", puntuacionTres: 15},
            {respuestaCuatro: "Antorcha", puntuacionCuatro: 7},
            {respuestaCinco: "Faroles", puntuacionCinco: 6}
        ]
    },
    {
	titulo: "Menciona refresco tipico de Sonora",
	tipo: "alimento",
	respuestas: [
            {respuestaUno: "Coca Cola", puntuacionUno: 40},
            {respuestaDos: "Pepsi", puntuacionDos: 38},
            {respuestaTres: "Sprite", puntuacionTres: 20},
            {respuestaCuatro: "Fresca", puntuacionCuatro: 10},
            {respuestaCinco: "Fanta", puntuacionCinco: 6}
        ]
    },
    {
	titulo : "Menciona una razón para viajar.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Vacaciones", puntuacionUno: 32},
			{respuestaDos: "Fiesta familiar", puntuacionDos: 27},
			{respuestaTres: "Fecha festiva", puntuacionTres: 22},
			{respuestaCuatro: "Por mejor precio", puntuacionCuatro: 19},
			{respuestaCinco: "Descanso", puntuacionCinco: 16}		
		]
	},
	{
	titulo : "Dinos algo que los niños juegan a imitar a los adultos",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "A la casita", puntuacionUno: 54},
			{respuestaDos: "Policias y ladrones", puntuacionDos: 40},
			{respuestaTres: "A la comidita", puntuacionTres: 32},
			{respuestaCuatro: "Al doctor", puntuacionCuatro: 26},
			{respuestaCinco: "A los soldados", puntuacionCinco: 17}		
		]
	},
	{
	titulo : "Menciona un estado de ánimo",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Feliz/Contento", puntuacionUno: 41},
			{respuestaDos: "Triste", puntuacionDos: 34},
			{respuestaTres: "Aburrido", puntuacionTres: 25},
			{respuestaCuatro: "Asustado", puntuacionCuatro: 20},
			{respuestaCinco: "Sorprendido", puntuacionCinco: 12}		
		]
	},
	{
	titulo : "Nombra una fruta tropical",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Piña", puntuacionUno: 38},
			{respuestaDos: "Mango", puntuacionDos: 33},
			{respuestaTres: "Coco", puntuacionTres: 28},
			{respuestaCuatro: "Naranja", puntuacionCuatro: 25},
			{respuestaCinco: "Papaya", puntuacionCinco: 16}		
		]
	},
	{
	titulo : "Objetos o cosas que deja la gente debajo del colchón",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Dinero", puntuacionUno: 31},
			{respuestaDos: "Revistas", puntuacionDos: 30},
			{respuestaTres: "Documentos", puntuacionTres: 24},
			{respuestaCuatro: "Cartas", puntuacionCuatro: 18},
			{respuestaCinco: "Zapatos", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Cosa extraña que se encuentra en al comida de un restaurante y casue asco.",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Cucaracha", puntuacionUno: 30},
			{respuestaDos: "Mosca", puntuacionDos: 26},
			{respuestaTres: "Mosquito", puntuacionTres: 18},
			{respuestaCuatro: "Gusano", puntuacionCuatro: 12},
			{respuestaCinco: "Un cabello", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Nombra de dulce típico Mexicano",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Mazapan", puntuacionUno: 39},
			{respuestaDos: "Cocada", puntuacionDos: 30},
			{respuestaTres: "Jamoncillo", puntuacionTres: 26},
			{respuestaCuatro: "Pepitorias", puntuacionCuatro: 17},
			{respuestaCinco: "Camote", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona una señal de carretera",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Curva peligrosa", puntuacionUno: 35},
			{respuestaDos: "Max velocidad", puntuacionDos: 27},
			{respuestaTres: "Alto", puntuacionTres: 20},
			{respuestaCuatro: "Tope", puntuacionCuatro: 11},
			{respuestaCinco: "Retorno", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona algo que la gente hace estando triste",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Llorar", puntuacionUno: 39},
			{respuestaDos: "Escuchar Musica", puntuacionDos: 31},
			{respuestaTres: "Pensar/No salir", puntuacionTres: 29},
			{respuestaCuatro: "Comer", puntuacionCuatro: 16},
			{respuestaCinco: "Hablar con alguien", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Mueble que puede reparar un carpintero",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Silla", puntuacionUno: 31},
			{respuestaDos: "Mesa", puntuacionDos: 27},
			{respuestaTres: "Sillón", puntuacionTres: 22},
			{respuestaCuatro: "Ropero/closet", puntuacionCuatro: 14},
			{respuestaCinco: "Tocador", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Cuentanos una clásica crítica a un hotel.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "La cama", puntuacionUno: 38},
			{respuestaDos: "La ubicación", puntuacionDos: 33},
			{respuestaTres: "La habitación", puntuacionTres: 28},
			{respuestaCuatro: "El servicio", puntuacionCuatro: 22},
			{respuestaCinco: "La comida", puntuacionCinco: 15}		
		]
	},
	{
	titulo : "Acompañante de comida clásica de la dieta mexicana",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Tortilla", puntuacionUno: 36},
			{respuestaDos: "Frijoles", puntuacionDos: 31},
			{respuestaTres: "Arroz", puntuacionTres: 26},
			{respuestaCuatro: "Pan", puntuacionCuatro: 17},
			{respuestaCinco: "Refresco", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Menciona un tipo de salsa",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Valentina", puntuacionUno: 39},
			{respuestaDos: "Sonora", puntuacionDos: 33},
			{respuestaTres: "Mexico Lindo", puntuacionTres: 29},
			{respuestaCuatro: "De Tomate", puntuacionCuatro: 22},
			{respuestaCinco: "Bufalo", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona un pariente Político en masculino",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Suegro", puntuacionUno: 33},
			{respuestaDos: "Yerno", puntuacionDos: 28},
			{respuestaTres: "Cuñado", puntuacionTres: 25},
			{respuestaCuatro: "Tío", puntuacionCuatro: 17},
			{respuestaCinco: "Concuño", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Que suele incluir la caja de un celular nuevo",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Celular", puntuacionUno: 38},
			{respuestaDos: "Cargador", puntuacionDos: 30},
			{respuestaTres: "Audífonos", puntuacionTres: 22},
			{respuestaCuatro: "Instructivo", puntuacionCuatro: 16},
			{respuestaCinco: "Llave tarjeta SIM", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona alimento que viene enlatado",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Frijoles", puntuacionUno: 30},
			{respuestaDos: "Chiles", puntuacionDos: 26},
			{respuestaTres: "Atún", puntuacionTres: 17},
			{respuestaCuatro: "Elotes", puntuacionCuatro: 11},
			{respuestaCinco: "Hongos", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Ocaciones donde se le cita a los padres a la escuela.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Final de curso", puntuacionUno: 39},
			{respuestaDos: "Dias festivos", puntuacionDos: 27},
			{respuestaTres: "Reporte", puntuacionTres: 20},
			{respuestaCuatro: "Graduación", puntuacionCuatro: 14},
			{respuestaCinco: "Juntas", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Cosas que a los niños se les prohíbe llevar a la escuela",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Juguetes", puntuacionUno: 48},
			{respuestaDos: "Animales", puntuacionDos: 34},
			{respuestaTres: "Armas", puntuacionTres: 23},
			{respuestaCuatro: "Sustancias tóxicas", puntuacionCuatro: 16},
			{respuestaCinco: "Porno", puntuacionCinco: 12}		
		]
	},
	{
	titulo : "Menciona algo donde se pueda ser capitan",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Barco", puntuacionUno: 33},
			{respuestaDos: "Equipo Deportivo", puntuacionDos: 29},
			{respuestaTres: "Ejercicio", puntuacionTres: 27},
			{respuestaCuatro: "Meseros", puntuacionCuatro: 14},
			{respuestaCinco: "Bomberos", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Platillo extranjero popular en mexico",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Pizza", puntuacionUno: 32},
			{respuestaDos: "Comida china", puntuacionDos: 29},
			{respuestaTres: "Hamburguesa", puntuacionTres: 23},
			{respuestaCuatro: "Sushi", puntuacionCuatro: 18},
			{respuestaCinco: "HotDogs", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona algo que es transparente",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Aire", puntuacionUno: 47},
			{respuestaDos: "Agua", puntuacionDos: 35},
			{respuestaTres: "Plástico", puntuacionTres: 21},
			{respuestaCuatro: "Vidrio", puntuacionCuatro: 13},
			{respuestaCinco: "Bolsa de nylon", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Juguetes de niños que suelen estar en un parque",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Columpio", puntuacionUno: 40},
			{respuestaDos: "Resbaladilla", puntuacionDos: 33},
			{respuestaTres: "Sube y baja", puntuacionTres: 22},
			{respuestaCuatro: "Psamanos", puntuacionCuatro: 17},
			{respuestaCinco: "Gira gira", puntuacionCinco: 10}		
		]
	},
	{
	titulo : 'Dinos una manera popular de decirle a alguien que "Se ponga listo".',
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Abusado", puntuacionUno: 38},
			{respuestaDos: "Trucha", puntuacionDos: 36},
			{respuestaTres: "Al tiro", puntuacionTres: 27},
			{respuestaCuatro: "Aguas", puntuacionCuatro: 19},
			{respuestaCinco: "Ponte buso", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Menciona un animal que se considere un felino",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Gato", puntuacionUno: 36},
			{respuestaDos: "León", puntuacionDos: 34},
			{respuestaTres: "Tigre", puntuacionTres: 17},
			{respuestaCuatro: "Leopardo", puntuacionCuatro: 10},
			{respuestaCinco: "Puma", puntuacionCinco: 3}		
		]
	},
	{
		titulo : "Cosas que la gente suele robarse de un restaurante",
		tipo: "normal",
		respuestas: [
				{respuestaUno: "La comida", puntuacionUno: 38},
				{respuestaDos: "Cubiertos", puntuacionDos: 29},
				{respuestaTres: "Servilletas", puntuacionTres: 21},
				{respuestaCuatro: "Cenicero", puntuacionCuatro: 10},
				{respuestaCinco: "Basos", puntuacionCinco: 1}		
			]
		},
		{
	titulo : "Menciona una herramienta de un carpintero",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Martillo", puntuacionUno: 31},
			{respuestaDos: "Sierra", puntuacionDos: 29},
			{respuestaTres: "Cinta métrica", puntuacionTres: 20},
			{respuestaCuatro: "Nivel de gota", puntuacionCuatro: 13},
			{respuestaCinco: "Pinzas", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Cosas que necesitas para servirte un buen café en casa",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Café", puntuacionUno: 35},
			{respuestaDos: "Leche", puntuacionDos: 24},
			{respuestaTres: "Taza", puntuacionTres: 17},
			{respuestaCuatro: "Azucar", puntuacionCuatro: 9},
			{respuestaCinco: "Agua", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Alimentos que suelen comerse en rebanadas",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Pizza", puntuacionUno: 33},
			{respuestaDos: "Jamón", puntuacionDos: 26},
			{respuestaTres: "Pastel", puntuacionTres: 17},
			{respuestaCuatro: "Sushi", puntuacionCuatro: 11},
			{respuestaCinco: "Fruta", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona una forma o manera de preparar los chiles",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Rellenos", puntuacionUno: 36},
			{respuestaDos: "Asados", puntuacionDos: 27},
			{respuestaTres: "En Nogada", puntuacionTres: 19},
			{respuestaCuatro: "En vinagre", puntuacionCuatro: 9},
			{respuestaCinco: "En salsa", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona un súper héroe de Marvel",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Spiderman", puntuacionUno: 31},
			{respuestaDos: "Hulk", puntuacionDos: 29},
			{respuestaTres: "IronMan", puntuacionTres: 21},
			{respuestaCuatro: "Capitan America", puntuacionCuatro: 14},
			{respuestaCinco: "Wolverine", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Animal que puede andan en tierra como en agua",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Tortuga", puntuacionUno: 38},
			{respuestaDos: "Cocodrilo", puntuacionDos: 27},
			{respuestaTres: "Hipopótamo", puntuacionTres: 19},
			{respuestaCuatro: "Pato", puntuacionCuatro: 10},
			{respuestaCinco: "Rana", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Actividad donde se suela cerrarse los ojos",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Dormir", puntuacionUno: 40},
			{respuestaDos: "Besar", puntuacionDos: 33},
			{respuestaTres: "Estornudar", puntuacionTres: 27},
			{respuestaCuatro: "Meditar", puntuacionCuatro: 16},
			{respuestaCinco: "Guiñar", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Alimentos que suelen venderse en un carrito por las noches",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "HotDogs", puntuacionUno: 44},
			{respuestaDos: "Hamburguesas", puntuacionDos: 37},
			{respuestaTres: "Tacos", puntuacionTres: 26},
			{respuestaCuatro: "Helados", puntuacionCuatro: 17},
			{respuestaCinco: "Elotes", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Sabor comun de aguas frescas",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Limón", puntuacionUno: 42},
			{respuestaDos: "Jamaica", puntuacionDos: 34},
			{respuestaTres: "Horchata", puntuacionTres: 29},
			{respuestaCuatro: "Fresa", puntuacionCuatro: 20},
			{respuestaCinco: "Tamarindo", puntuacionCinco: 13}		
		]
	},
	{
	titulo : "Menciona una verdura verde",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Lechuga", puntuacionUno: 30},
			{respuestaDos: "Brócoli", puntuacionDos: 28},
			{respuestaTres: "Calabaza", puntuacionTres: 16},
			{respuestaCuatro: "Chiles", puntuacionCuatro: 10},
			{respuestaCinco: "Repollo", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Habitacion o cuarto de un hogar",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Recamara", puntuacionUno: 36},
			{respuestaDos: "Comedor", puntuacionDos: 21},
			{respuestaTres: "Cocina", puntuacionTres: 17},
			{respuestaCuatro: "Baño", puntuacionCuatro: 10},
			{respuestaCinco: "Sala", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Antojitos mexicanos mas populares",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Tacos", puntuacionUno: 33},
			{respuestaDos: "Pozole", puntuacionDos: 26},
			{respuestaTres: "Enchiladas", puntuacionTres: 21},
			{respuestaCuatro: "Quesadillas", puntuacionCuatro: 15},
			{respuestaCinco: "Tostadas", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Menciona algo que enciendes y apagas todos los dias",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "La luz", puntuacionUno: 38},
			{respuestaDos: "El automovil", puntuacionDos: 28},
			{respuestaTres: "La television", puntuacionTres: 24},
			{respuestaCuatro: "Celular/Laptop", puntuacionCuatro: 13},
			{respuestaCinco: "Estufa", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Parte del cuerpo que comúnmente le duele a la gente",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "La cabeza", puntuacionUno: 33},
			{respuestaDos: "El estomago", puntuacionDos: 26},
			{respuestaTres: "La espalda", puntuacionTres: 20},
			{respuestaCuatro: "Las piernas", puntuacionCuatro: 9},
			{respuestaCinco: "El cuello", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Ademas del pollo ¿Que ave suele comerse?",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Pavo", puntuacionUno: 33},
			{respuestaDos: "Pato", puntuacionDos: 26},
			{respuestaTres: "Codorniz", puntuacionTres: 20},
			{respuestaCuatro: "Gallina", puntuacionCuatro: 9},
			{respuestaCinco: "Paloma", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Problemas que te pueden suceder cuando vas al WC",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "No hay papel", puntuacionUno: 37},
			{respuestaDos: "Estreñido", puntuacionDos: 31},
			{respuestaTres: "No hay agua", puntuacionTres: 24},
			{respuestaCuatro: "Tapar el baño", puntuacionCuatro: 15},
			{respuestaCinco: "Ocupado", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Sobrenombre que suele hacer referencia a que eres menor.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Niño", puntuacionUno: 41},
			{respuestaDos: "Chamaco", puntuacionDos: 39},
			{respuestaTres: "Escuincle", puntuacionTres: 28},
			{respuestaCuatro: "Chiquillo", puntuacionCuatro: 12},
			{respuestaCinco: "Plevello", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Manera Mexicana de hacer referencia al dinero",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Lana", puntuacionUno: 47},
			{respuestaDos: "Baro", puntuacionDos: 32},
			{respuestaTres: "Feria", puntuacionTres: 24},
			{respuestaCuatro: "Billete", puntuacionCuatro: 11},
			{respuestaCinco: "Money", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Que suele robar la gente en un asalto.",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Dinero", puntuacionUno: 43},
			{respuestaDos: "Reloj", puntuacionDos: 30},
			{respuestaTres: "Aretes", puntuacionTres: 27},
			{respuestaCuatro: "Teléfono", puntuacionCuatro: 16},
			{respuestaCinco: "Mochila/Bolsa", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Menciona un objeto con ruedas",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Automovil", puntuacionUno: 41},
			{respuestaDos: "Motocicleta", puntuacionDos: 37},
			{respuestaTres: "Bicicleta", puntuacionTres: 23},
			{respuestaCuatro: "Silla Ancianos", puntuacionCuatro: 11},
			{respuestaCinco: "Carretilla", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Menciona un deporte que utilice un balón",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Fútbol", puntuacionUno: 52},
			{respuestaDos: "Baloncesto", puntuacionDos: 38},
			{respuestaTres: "Voleibol", puntuacionTres: 17},
			{respuestaCuatro: "Fútbol Amerciano", puntuacionCuatro: 13},
			{respuestaCinco: "Handbol", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Sin decir marcas, menciona bebidas alcohólicas",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Tequila", puntuacionUno: 47},
			{respuestaDos: "Vodka", puntuacionDos: 35},
			{respuestaTres: "Whisky", puntuacionTres: 24},
			{respuestaCuatro: "Cerveza", puntuacionCuatro: 19},
			{respuestaCinco: "Ron", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Formas románticas de referirte a tu pareja",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Amor", puntuacionUno: 41},
			{respuestaDos: "Cariño", puntuacionDos: 33},
			{respuestaTres: "Cielo", puntuacionTres: 27},
			{respuestaCuatro: "Vida", puntuacionCuatro: 21},
			{respuestaCinco: "Tesoro", puntuacionCinco: 12}		
		]
	},{
	titulo : "Redes sociales mas importantes del momento",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Facebook", puntuacionUno: 44},
			{respuestaDos: "Instagram", puntuacionDos: 32},
			{respuestaTres: "TikTok", puntuacionTres: 25},
			{respuestaCuatro: "Twitter", puntuacionCuatro: 17},
			{respuestaCinco: "Whatsapp", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona algo que te pones en los pies para caminar",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Tenis", puntuacionUno: 32},
			{respuestaDos: "Zapatos", puntuacionDos: 26},
			{respuestaTres: "Chanclas", puntuacionTres: 19},
			{respuestaCuatro: "Pantuflas", puntuacionCuatro: 14},
			{respuestaCinco: "Mocasines", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Prenda que sueles vestir para cubrirse del frío",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Chamarra", puntuacionUno: 36},
			{respuestaDos: "Abrigo", puntuacionDos: 29},
			{respuestaTres: "Suéter", puntuacionTres: 25},
			{respuestaCuatro: "Chaqueta", puntuacionCuatro: 18},
			{respuestaCinco: "Chaleco", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Objeto que sueles ponerte encima de la cabeza",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Gorra", puntuacionUno: 32},
			{respuestaDos: "Gorro", puntuacionDos: 29},
			{respuestaTres: "Sombrero", puntuacionTres: 17},
			{respuestaCuatro: "Visera", puntuacionCuatro: 16},
			{respuestaCinco: "Boina", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Género musical para bailar en pareja",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Salsa", puntuacionUno: 35},
			{respuestaDos: "Cumbia", puntuacionDos: 28},
			{respuestaTres: "Banda", puntuacionTres: 23},
			{respuestaCuatro: "Danzón", puntuacionCuatro: 17},
			{respuestaCinco: "Bachata", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Objetos que te llevas a la playa",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Traje de baño", puntuacionUno: 31},
			{respuestaDos: "Chanclas", puntuacionDos: 24},
			{respuestaTres: "Bloqueador", puntuacionTres: 19},
			{respuestaCuatro: "Gafas", puntuacionCuatro: 10},
			{respuestaCinco: "Goggles", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Objeto de joyeria que se pueden hacer con el oro",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Anillos", puntuacionUno: 46},
			{respuestaDos: "Cadenas", puntuacionDos: 35},
			{respuestaTres: "Esclava", puntuacionTres: 27},
			{respuestaCuatro: "Aretes", puntuacionCuatro: 14},
			{respuestaCinco: "Relojes", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Productos de mar (Comida) que se venden en lata",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Atún", puntuacionUno: 41},
			{respuestaDos: "Sardinas", puntuacionDos: 37},
			{respuestaTres: "Pulpo", puntuacionTres: 29},
			{respuestaCuatro: "Ostiones", puntuacionCuatro: 16},
			{respuestaCinco: "Jaiba", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Que color se distingue en el fuego",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Rojo", puntuacionUno: 35},
			{respuestaDos: "Naranja", puntuacionDos: 27},
			{respuestaTres: "Amarillo", puntuacionTres: 19},
			{respuestaCuatro: "Azul", puntuacionCuatro: 13},
			{respuestaCinco: "Morado", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona lugar donde la gente guarda el dinero",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Billetera", puntuacionUno: 36},
			{respuestaDos: "Alcancia", puntuacionDos: 28},
			{respuestaTres: "El colchon", puntuacionTres: 20},
			{respuestaCuatro: "El banco", puntuacionCuatro: 15},
			{respuestaCinco: "Monedero", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Cosas que las mujeres suelen ponerse postizo",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Bubis", puntuacionUno: 33},
			{respuestaDos: "Pompis", puntuacionDos: 29},
			{respuestaTres: "Pestañas", puntuacionTres: 23},
			{respuestaCuatro: "Uñas", puntuacionCuatro: 16},
			{respuestaCinco: "Cabello", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Pieza de pollo que pides en una polleria",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Pechuga", puntuacionUno: 37},
			{respuestaDos: "Alas", puntuacionDos: 28},
			{respuestaTres: "Perna", puntuacionTres: 22},
			{respuestaCuatro: "Muslo", puntuacionCuatro: 16},
			{respuestaCinco: "Patas", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Animal comestible de carne blanca",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Pollo", puntuacionUno: 38},
			{respuestaDos: "Pavo", puntuacionDos: 26},
			{respuestaTres: "Cerdo", puntuacionTres: 19},
			{respuestaCuatro: "Conejo", puntuacionCuatro: 13},
			{respuestaCinco: "Cordero", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Lugar donde la gente puede desnudarse. 7u7",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "En su cuarto", puntuacionUno: 46},
			{respuestaDos: "En el baño", puntuacionDos: 38},
			{respuestaTres: "Motel/Hotel", puntuacionTres: 18},
			{respuestaCuatro: "Playa", puntuacionCuatro: 12},
			{respuestaCinco: "Vestidores", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Menciona un platillo popular de huevos",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Estrellados", puntuacionUno: 34},
			{respuestaDos: "Revuelto", puntuacionDos: 31},
			{respuestaTres: "Divorciados", puntuacionTres: 23},
			{respuestaCuatro: "Huevo Torta", puntuacionCuatro: 17},
			{respuestaCinco: "Ranchero", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Frutas que suelen ponerse arriba de un postre",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Fresa", puntuacionUno: 30},
			{respuestaDos: "Cereza", puntuacionDos: 23},
			{respuestaTres: "Uva", puntuacionTres: 20},
			{respuestaCuatro: "Piña", puntuacionCuatro: 15},
			{respuestaCinco: "Mango", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Partes del hardware de una computadora",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Pantalla", puntuacionUno: 33},
			{respuestaDos: "Mouse", puntuacionDos: 26},
			{respuestaTres: "Teclado", puntuacionTres: 21},
			{respuestaCuatro: "CPU", puntuacionCuatro: 14},
			{respuestaCinco: "...", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Accesorios o joyas que van en al cabeza",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Diadema", puntuacionUno: 37},
			{respuestaDos: "Corona", puntuacionDos: 31},
			{respuestaTres: "Broche", puntuacionTres: 25},
			{respuestaCuatro: "Moño", puntuacionCuatro: 13},
			{respuestaCinco: "Liga", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Reptil que se puede usar como mascota",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Tortuga", puntuacionUno: 37},
			{respuestaDos: "Camaleón", puntuacionDos: 28},
			{respuestaTres: "Iguana", puntuacionTres: 24},
			{respuestaCuatro: "Vibora", puntuacionCuatro: 16},
			{respuestaCinco: "Lagartija", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Forma mas popular de referirse a un niño",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Chamaco", puntuacionUno: 25},
			{respuestaDos: "Morrito", puntuacionDos: 17},
			{respuestaTres: "Escuincle", puntuacionTres: 15},
			{respuestaCuatro: "Mocoso", puntuacionCuatro: 11},
			{respuestaCinco: "Chiquillo", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Que le pones a un plato de frutas",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Yogurt", puntuacionUno: 28},
			{respuestaDos: "Miel", puntuacionDos: 23},
			{respuestaTres: "Cereal", puntuacionTres: 19},
			{respuestaCuatro: "Queso", puntuacionCuatro: 13},
			{respuestaCinco: "Chile piquín", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona un producto lácteo",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "La leche", puntuacionUno: 31},
			{respuestaDos: "El queso", puntuacionDos: 24},
			{respuestaTres: "La crema", puntuacionTres: 16},
			{respuestaCuatro: "El Yogurt", puntuacionCuatro: 10},
			{respuestaCinco: "La nata", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Menciona una raza de perro",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Chihuahua", puntuacionUno: 33},
			{respuestaDos: "Salchicha", puntuacionDos: 25},
			{respuestaTres: "Pug", puntuacionTres: 17},
			{respuestaCuatro: "Dálamta", puntuacionCuatro: 9},
			{respuestaCinco: "Labrador", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Actividades que se hacen con la nariz",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Oler", puntuacionUno: 37},
			{respuestaDos: "Sacarse mocos", puntuacionDos: 23},
			{respuestaTres: "Estrnudar", puntuacionTres: 16},
			{respuestaCuatro: "Rascarse", puntuacionCuatro: 11},
			{respuestaCinco: "Respirar", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona un deporte individual",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Natacion", puntuacionUno: 37},
			{respuestaDos: "Tenis", puntuacionDos: 23},
			{respuestaTres: "Arco", puntuacionTres: 16},
			{respuestaCuatro: "Gimnasia", puntuacionCuatro: 11},
			{respuestaCinco: "Boxeo", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Menciona que parte del cuerpo se puede inyectar",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Brazo", puntuacionUno: 33},
			{respuestaDos: "Pompas", puntuacionDos: 28},
			{respuestaTres: "Abdomen", puntuacionTres: 21},
			{respuestaCuatro: "Hombro", puntuacionCuatro: 13},
			{respuestaCinco: "Muñeca", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Pretexto de un niño para no ir a la escuela",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Dolor de estómago", puntuacionUno: 38},
			{respuestaDos: "Resfriado", puntuacionDos: 30},
			{respuestaTres: "No hizo tarea", puntuacionTres: 22},
			{respuestaCuatro: "No estoy bien", puntuacionCuatro: 17},
			{respuestaCinco: "Lo molestan", puntuacionCinco: 14}		
		]
	},
	{
	titulo : "Marca de automoviles en mexico",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "VolksWagen", puntuacionUno: 37},
			{respuestaDos: "Ford", puntuacionDos: 33},
			{respuestaTres: "Honda", puntuacionTres: 25},
			{respuestaCuatro: "Toyota", puntuacionCuatro: 18},
			{respuestaCinco: "Nissan", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Menciona un personajes que haya revolucionado la tecnologia en los ultimos años",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Steve Jobs", puntuacionUno: 36},
			{respuestaDos: "Bill Gates", puntuacionDos: 28},
			{respuestaTres: "Mark Zuckerberg", puntuacionTres: 24},
			{respuestaCuatro: "Elon Musk", puntuacionCuatro: 13},
			{respuestaCinco: "Jeff Bezos", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona un pais que tenga rojo en su bandera",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Mexico", puntuacionUno: 43},
			{respuestaDos: "Canada", puntuacionDos: 37},
			{respuestaTres: "China", puntuacionTres: 29},
			{respuestaCuatro: "Japón", puntuacionCuatro: 11},
			{respuestaCinco: "España", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Nombra a una princesa famosa de Disney",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "BlancaNieves", puntuacionUno: 33},
			{respuestaDos: "Cenicienta", puntuacionDos: 26},
			{respuestaTres: "Aurora", puntuacionTres: 18},
			{respuestaCuatro: "Ariel", puntuacionCuatro: 14},
			{respuestaCinco: "Bella", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona un personaje de los Simpson",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Homero", puntuacionUno: 33},
			{respuestaDos: "Bart", puntuacionDos: 26},
			{respuestaTres: "Lisa", puntuacionTres: 18},
			{respuestaCuatro: "Marge", puntuacionCuatro: 14},
			{respuestaCinco: "Maggie", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona un personaje icónico de Eugenio Derbez",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Ludovico Peluches", puntuacionUno: 34},
			{respuestaDos: "Longe Moco", puntuacionDos: 25},
			{respuestaTres: "Armando Hoyos", puntuacionTres: 16},
			{respuestaCuatro: "Diablito", puntuacionCuatro: 11},
			{respuestaCinco: "Burro de Shrek", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Cosas que más importan en un hotel",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "La cama", puntuacionUno: 30},
			{respuestaDos: "La ubicación", puntuacionDos: 26},
			{respuestaTres: "La limpieza", puntuacionTres: 15},
			{respuestaCuatro: "La alberca", puntuacionCuatro: 9},
			{respuestaCinco: "La comida", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Artículo con el que se suele escribir a mano",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Lápiz", puntuacionUno: 29},
			{respuestaDos: "Lapicero", puntuacionDos: 27},
			{respuestaTres: "Plumón", puntuacionTres: 15},
			{respuestaCuatro: "Pluma", puntuacionCuatro: 10},
			{respuestaCinco: "Colores", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Menciona un marisco popular",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Camarón", puntuacionUno: 29},
			{respuestaDos: "Cangrejo", puntuacionDos: 23},
			{respuestaTres: "Langosta", puntuacionTres: 16},
			{respuestaCuatro: "Langostino", puntuacionCuatro: 11},
			{respuestaCinco: "Ostras", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Deporte donde se usa casco",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Fútbol Americano", puntuacionUno: 32},
			{respuestaDos: "Hockey", puntuacionDos: 24},
			{respuestaTres: "Ciclismo", puntuacionTres: 18},
			{respuestaCuatro: "Motociclismo", puntuacionCuatro: 14},
			{respuestaCinco: "Beisbol", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Fruta comun que se da en los arboles",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Manzana", puntuacionUno: 29},
			{respuestaDos: "Naranja", puntuacionDos: 23},
			{respuestaTres: "Plátano", puntuacionTres: 17},
			{respuestaCuatro: "Mango", puntuacionCuatro: 10},
			{respuestaCinco: "Limón", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Alimento que se da en una Vaina",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Chícharos", puntuacionUno: 36},
			{respuestaDos: "Habas", puntuacionDos: 27},
			{respuestaTres: "Lentejas", puntuacionTres: 19},
			{respuestaCuatro: "Frijoles", puntuacionCuatro: 11},
			{respuestaCinco: "Tamarindo", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Menciona las partes que conforman un libro",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Portada", puntuacionUno: 26},
			{respuestaDos: "Contraportada", puntuacionDos: 21},
			{respuestaTres: "Lomo", puntuacionTres: 14},
			{respuestaCuatro: "Introduccion", puntuacionCuatro: 7},
			{respuestaCinco: "Cuerpo", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Medio de transporte que vuelan",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Avión", puntuacionUno: 25},
			{respuestaDos: "Helicóptero", puntuacionDos: 20},
			{respuestaTres: "Globo", puntuacionTres: 17},
			{respuestaCuatro: "Planeador", puntuacionCuatro: 14},
			{respuestaCinco: "Cohete", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Idiomas mas comunes en el mundo",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Español", puntuacionUno: 31},
			{respuestaDos: "Chino", puntuacionDos: 27},
			{respuestaTres: "Inglés", puntuacionTres: 19},
			{respuestaCuatro: "Coreano", puntuacionCuatro: 16},
			{respuestaCinco: "Francés", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Personaje del chavo del ocho",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "El chavo", puntuacionUno: 38},
			{respuestaDos: "Kiko", puntuacionDos: 27},
			{respuestaTres: "Don Ramón", puntuacionTres: 19},
			{respuestaCuatro: "Chilindrina", puntuacionCuatro: 10},
			{respuestaCinco: "Doña Florinda", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Los ultimos presidenes de México",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Obrador", puntuacionUno: 38},
			{respuestaDos: "Peña", puntuacionDos: 27},
			{respuestaTres: "Calderón", puntuacionTres: 19},
			{respuestaCuatro: "Fox", puntuacionCuatro: 10},
			{respuestaCinco: "Zedillo", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Deporte mas popular en México",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Fútbol", puntuacionUno: 28},
			{respuestaDos: "Boxeo", puntuacionDos: 23},
			{respuestaTres: "Basquetbol", puntuacionTres: 17},
			{respuestaCuatro: "Natacion", puntuacionCuatro: 10},
			{respuestaCinco: "Beisbol", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Cadena de comida rápida más popular en México",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "McDonal's", puntuacionUno: 36},
			{respuestaDos: "Burger King", puntuacionDos: 27},
			{respuestaTres: "Pizza Domino's", puntuacionTres: 23},
			{respuestaCuatro: "Little Caesars", puntuacionCuatro: 16},
			{respuestaCinco: "KFC", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Postre Mexicano mas popular",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Arroz con leche", puntuacionUno: 33},
			{respuestaDos: "Flan", puntuacionDos: 29},
			{respuestaTres: "Pastel Galleta", puntuacionTres: 21},
			{respuestaCuatro: "Churros", puntuacionCuatro: 14},
			{respuestaCinco: "Helado/Nieve", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Instrumento con cuerdas",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Guitarra", puntuacionUno: 34},
			{respuestaDos: "Bajo", puntuacionDos: 26},
			{respuestaTres: "Ukelele", puntuacionTres: 21},
			{respuestaCuatro: "Violín", puntuacionCuatro: 12},
			{respuestaCinco: "Guitarra Eléctrica", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Que sueles untar al pan blanco",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Mayonesa", puntuacionUno: 33},
			{respuestaDos: "Mermelada", puntuacionDos: 25},
			{respuestaTres: "Nutella", puntuacionTres: 12},
			{respuestaCuatro: "Frijoles", puntuacionCuatro: 8},
			{respuestaCinco: "Mantequilla", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Tipos de madera mas conocidos",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Roble", puntuacionUno: 33},
			{respuestaDos: "Pino", puntuacionDos: 24},
			{respuestaTres: "Caoba", puntuacionTres: 19},
			{respuestaCuatro: "Cerezo", puntuacionCuatro: 13},
			{respuestaCinco: "Fresno", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Minearles mas populares",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Diamante", puntuacionUno: 36},
			{respuestaDos: "Oro", puntuacionDos: 27},
			{respuestaTres: "Plata", puntuacionTres: 20},
			{respuestaCuatro: "Esmeralda", puntuacionCuatro: 15},
			{respuestaCinco: "Rubí", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Cargo mas comun para hacer una pelicula",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Director", puntuacionUno: 31},
			{respuestaDos: "Guionista", puntuacionDos: 27},
			{respuestaTres: "Actores", puntuacionTres: 22},
			{respuestaCuatro: "Productor", puntuacionCuatro: 14},
			{respuestaCinco: "Camarógrafo", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Partes que componen un teatro",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Escenario", puntuacionUno: 28},
			{respuestaDos: "Sillas", puntuacionDos: 24},
			{respuestaTres: "Telón", puntuacionTres: 19},
			{respuestaCuatro: "Vestíbulo", puntuacionCuatro: 11},
			{respuestaCinco: "Vestuario", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona a los compañeros de clases del chavo del ocho",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Ñoño", puntuacionUno: 37},
			{respuestaDos: "Kiko", puntuacionDos: 27},
			{respuestaTres: "Chilindrina", puntuacionTres: 15},
			{respuestaCuatro: "Popis", puntuacionCuatro: 10},
			{respuestaCinco: "Godínez", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona tipos de leche mas comunes",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "De vaca", puntuacionUno: 34},
			{respuestaDos: "De Almendra", puntuacionDos: 23},
			{respuestaTres: "De cabra", puntuacionTres: 17},
			{respuestaCuatro: "En polvo", puntuacionCuatro: 13},
			{respuestaCinco: "De soja", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Ingredientes de un guacamoles",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Aguacate", puntuacionUno: 38},
			{respuestaDos: "Jitomate", puntuacionDos: 22},
			{respuestaTres: "Cebolla", puntuacionTres: 17},
			{respuestaCuatro: "Chile", puntuacionCuatro: 11},
			{respuestaCinco: "Sal", puntuacionCinco: 6}		
		]
	},{
	titulo : "Menciona diez marcas de supermercado mas populares en mexico",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Walmart", puntuacionUno: 41},
			{respuestaDos: "Soriana", puntuacionDos: 31},
			{respuestaTres: "Bodega Aurrerá", puntuacionTres: 26},
			{respuestaCuatro: "Chedraui", puntuacionCuatro: 17},
			{respuestaCinco: "Ley", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Materia básica en primaria",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Matemáticas", puntuacionUno: 35},
			{respuestaDos: "Español", puntuacionDos: 27},
			{respuestaTres: "Historia", puntuacionTres: 20},
			{respuestaCuatro: "Eduacación Física", puntuacionCuatro: 15},
			{respuestaCinco: "Computación", puntuacionCinco: 9}		
		]
	},
	{
	titulo : 'Menciona un color de los "Power Rangers"',
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Rojo", puntuacionUno: 38},
			{respuestaDos: "Amarillo", puntuacionDos: 29},
			{respuestaTres: "Rosa", puntuacionTres: 21},
			{respuestaCuatro: "Verde", puntuacionCuatro: 11},
			{respuestaCinco: "Azul", puntuacionCinco: 3}		
		]
	},
	{
	titulo : "Fruta que no puedes comerte con cascara",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Plátano", puntuacionUno: 41},
			{respuestaDos: "Sandía", puntuacionDos: 37},
			{respuestaTres: "Melón", puntuacionTres: 23},
			{respuestaCuatro: "Piña", puntuacionCuatro: 15},
			{respuestaCinco: "Naranja", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Menciona un país con mayor población en el mundo",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "China", puntuacionUno: 36},
			{respuestaDos: "India", puntuacionDos: 29},
			{respuestaTres: "Estados Unidos", puntuacionTres: 21},
			{respuestaCuatro: "Indonesia", puntuacionCuatro: 11},
			{respuestaCinco: "Brasil", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Dinos la posición de un jugaro de fútbol",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Delantero", puntuacionUno: 31},
			{respuestaDos: "Portero", puntuacionDos: 27},
			{respuestaTres: "Defensa", puntuacionTres: 19},
			{respuestaCuatro: "Medio Campista", puntuacionCuatro: 14},
			{respuestaCinco: "Lateral", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Dinos un personaje de pinocho",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Pinocho", puntuacionUno: 29},
			{respuestaDos: "Geppetto", puntuacionDos: 26},
			{respuestaTres: "Grillo", puntuacionTres: 17},
			{respuestaCuatro: "Hada Azul", puntuacionCuatro: 13},
			{respuestaCinco: "Zorro/Gato", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Menciona un personaje de la biblia",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Jesus", puntuacionUno: 34},
			{respuestaDos: "La virgen", puntuacionDos: 28},
			{respuestaTres: "Adan/Eva", puntuacionTres: 21},
			{respuestaCuatro: "Dios", puntuacionCuatro: 16},
			{respuestaCinco: "Moises", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona un regalo para el 14 de febrero",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Flores", puntuacionUno: 43},
			{respuestaDos: "Chocolates", puntuacionDos: 28},
			{respuestaTres: "Peluches", puntuacionTres: 25},
			{respuestaCuatro: "Carta", puntuacionCuatro: 19},
			{respuestaCinco: "Comida", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Verduras tipicas de una Sopa de verduras",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Zanahoria", puntuacionUno: 47},
			{respuestaDos: "Cebolla", puntuacionDos: 40},
			{respuestaTres: "Calabaza", puntuacionTres: 36},
			{respuestaCuatro: "Papa", puntuacionCuatro: 15},
			{respuestaCinco: "Brócoli", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Lugar donde sueles ver la hora",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "En el teléfono", puntuacionUno: 36},
			{respuestaDos: "En la pared", puntuacionDos: 30},
			{respuestaTres: "En la TV", puntuacionTres: 24},
			{respuestaCuatro: "En la PC", puntuacionCuatro: 15},
			{respuestaCinco: "En la muñeca", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Lugar donde haces amigos",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Escuela", puntuacionUno: 39},
			{respuestaDos: "Trabajo", puntuacionDos: 27},
			{respuestaTres: "Internet", puntuacionTres: 20},
			{respuestaCuatro: "Deporte", puntuacionCuatro: 14},
			{respuestaCinco: "En la calle", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Lugares en una casa donde suelen tener televisores",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Habitacion", puntuacionUno: 41},
			{respuestaDos: "Sala", puntuacionDos: 35},
			{respuestaTres: "Cocina", puntuacionTres: 26},
			{respuestaCuatro: "Jardín", puntuacionCuatro: 15},
			{respuestaCinco: "Comedor", puntuacionCinco: 8}		
		]
	},
	{
	titulo : "Cosas que relajan a una persona",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Dormir", puntuacionUno: 36},
			{respuestaDos: "Un abrazo", puntuacionDos: 33},
			{respuestaTres: "La Musica", puntuacionTres: 22},
			{respuestaCuatro: "Comida", puntuacionCuatro: 13},
			{respuestaCinco: "Un Masaje", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona Elenco (Personajes) de TOY STORY",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Woody", puntuacionUno: 37},
			{respuestaDos: "Buzz", puntuacionDos: 26},
			{respuestaTres: "Señor cara de papa", puntuacionTres: 19},
			{respuestaCuatro: "Ham (Cerdo)", puntuacionCuatro: 11},
			{respuestaCinco: "Jessie", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Menciona tipo de sabores populares de la marca Chips",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Fuego/Moradas", puntuacionUno: 80},
			{respuestaDos: "Jalapeño/Verdes", puntuacionDos: 76},
			{respuestaTres: "Sal de mar/Amarillas", puntuacionTres: 50},
			{respuestaCuatro: "Adobadas/Rojas", puntuacionCuatro: 45},
			{respuestaCinco: "Toreadas/habanero", puntuacionCinco: 30}		
		]
	},
	{
	titulo : "Valor de monedas mas usadas en México",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Cinco pesos", puntuacionUno: 45},
			{respuestaDos: "Diez pesos", puntuacionDos: 39},
			{respuestaTres: "Dos pesos", puntuacionTres: 31},
			{respuestaCuatro: "Un peso", puntuacionCuatro: 23},
			{respuestaCinco: "Cincuenta centavos", puntuacionCinco: 11}		
		]
	},
	{
	titulo : "Alimentos mas consumidos en mexico",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Tortilla", puntuacionUno: 31},
			{respuestaDos: "Frijoles", puntuacionDos: 27},
			{respuestaTres: "Huevo", puntuacionTres: 19},
			{respuestaCuatro: "Chile", puntuacionCuatro: 11},
			{respuestaCinco: "Pan", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Objetos naturales que vemos al observar el cielo",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Sol", puntuacionUno: 44},
			{respuestaDos: "Luna", puntuacionDos: 36},
			{respuestaTres: "Estrellas", puntuacionTres: 28},
			{respuestaCuatro: "Nubes", puntuacionCuatro: 17},
			{respuestaCinco: "Pajaro", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Documento que necesite tu firma",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Identificación", puntuacionUno: 44},
			{respuestaDos: "Contrato", puntuacionDos: 37},
			{respuestaTres: "Pasaporte", puntuacionTres: 28},
			{respuestaCuatro: "Acta de nacimiento", puntuacionCuatro: 11},
			{respuestaCinco: "Licencia de conducir", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Donde podrías ponerte un reloj",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "En la muñeca", puntuacionUno: 33},
			{respuestaDos: "En la pared", puntuacionDos: 28},
			{respuestaTres: "En la oficina", puntuacionTres: 21},
			{respuestaCuatro: "Trabajo", puntuacionCuatro: 8},
			{respuestaCinco: "En el buró", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Que tipo de personas lleva dentro un coche blindado",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Politícos", puntuacionUno: 38},
			{respuestaDos: "Artistas", puntuacionDos: 27},
			{respuestaTres: "Prisioneros", puntuacionTres: 19},
			{respuestaCuatro: "Mafiosos", puntuacionCuatro: 10},
			{respuestaCinco: "Delincuentes", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "De que se suele rellenar un chile",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Queso", puntuacionUno: 33},
			{respuestaDos: "Carne", puntuacionDos: 31},
			{respuestaTres: "Verduras", puntuacionTres: 25},
			{respuestaCuatro: "Camaron", puntuacionCuatro: 12},
			{respuestaCinco: "Pollo", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Algun objeto que puedas rentar en la playa",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Camastro", puntuacionUno: 31},
			{respuestaDos: "Sombrilla", puntuacionDos: 26},
			{respuestaTres: "Moto", puntuacionTres: 17},
			{respuestaCuatro: "Lancha", puntuacionCuatro: 14},
			{respuestaCinco: "Goggles", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona un tipo de consomé",
	tipo: "alimento",
	respuestas: [
			{respuestaUno: "Pollo", puntuacionUno: 36},
			{respuestaDos: "Res", puntuacionDos: 21},
			{respuestaTres: "Tomate", puntuacionTres: 17},
			{respuestaCuatro: "Camaron", puntuacionCuatro: 13},
			{respuestaCinco: "Verduras", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Lugares donde puedas encontrar un baño",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "En la casa", puntuacionUno: 35},
			{respuestaDos: "Restaurante", puntuacionDos: 26},
			{respuestaTres: "Hotel", puntuacionTres: 22},
			{respuestaCuatro: "Cafetería", puntuacionCuatro: 13},
			{respuestaCinco: "supermercado", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona algo que forma parte de la decoarión de una casa",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Muebles", puntuacionUno: 37},
			{respuestaDos: "Floreros", puntuacionDos: 31},
			{respuestaTres: "Alfombras", puntuacionTres: 24},
			{respuestaCuatro: "Cortinas", puntuacionCuatro: 19},
			{respuestaCinco: "Pinturas", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Menciona una característica de Michael Jackson",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Su baile", puntuacionUno: 41},
			{respuestaDos: "Guante Blanco", puntuacionDos: 37},
			{respuestaTres: "Su grito uhhhh", puntuacionTres: 22},
			{respuestaCuatro: "Su vestimenta", puntuacionCuatro: 14},
			{respuestaCinco: "Su sombrero", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Cosas que te hacen crecer la panza",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Embarazo", puntuacionUno: 38},
			{respuestaDos: "Alcohol", puntuacionDos: 33},
			{respuestaTres: "Las grasas", puntuacionTres: 20},
			{respuestaCuatro: "Falta de ejercicio", puntuacionCuatro: 10},
			{respuestaCinco: "Enfermedad", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Dinos un color que sea el nombre de una mujer",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Blanca", puntuacionUno: 28},
			{respuestaDos: "Rosa", puntuacionDos: 22},
			{respuestaTres: "Violeta", puntuacionTres: 14},
			{respuestaCuatro: "Celeste", puntuacionCuatro: 11},
			{respuestaCinco: "Azul", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Que suele hacer un niño a la hora de hacer berrinche",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Llorar", puntuacionUno: 34},
			{respuestaDos: "Gritar", puntuacionDos: 29},
			{respuestaTres: "Pegar", puntuacionTres: 25},
			{respuestaCuatro: "Patalear", puntuacionCuatro: 17},
			{respuestaCinco: "Ofender", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Departamentos de un súper mercado",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Carnes Frias", puntuacionUno: 41},
			{respuestaDos: "Abarrotes", puntuacionDos: 30},
			{respuestaTres: "Panadería", puntuacionTres: 24},
			{respuestaCuatro: "Hogar", puntuacionCuatro: 11},
			{respuestaCinco: "Jugueteria", puntuacionCinco: 6}		
		]
	},
	{
	titulo : "Cosas comunes que se compran en la tienda de la esquina",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Refresco", puntuacionUno: 47},
			{respuestaDos: "Botana", puntuacionDos: 34},
			{respuestaTres: "Alcohol", puntuacionTres: 27},
			{respuestaCuatro: "Despensa Basica", puntuacionCuatro: 16},
			{respuestaCinco: "Dulces", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "¿Que bebida es tradicional acompañar en una comida?",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Refresco", puntuacionUno: 40},
			{respuestaDos: "Cerveza", puntuacionDos: 34},
			{respuestaTres: "Agua", puntuacionTres: 24},
			{respuestaCuatro: "Aguas Frescas", puntuacionCuatro: 11},
			{respuestaCinco: "Café", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Fechas importantes para una pareja",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Dia de novios", puntuacionUno: 45},
			{respuestaDos: "Dia de boda", puntuacionDos: 32},
			{respuestaTres: "Cuando se conocieron", puntuacionTres: 21},
			{respuestaCuatro: "Compromiso", puntuacionCuatro: 16},
			{respuestaCinco: "San valentin", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Requisitos comunes para pedir empleo",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Edad", puntuacionUno: 33},
			{respuestaDos: "Experiencia", puntuacionDos: 22},
			{respuestaTres: "Sexo", puntuacionTres: 19},
			{respuestaCuatro: "Disponibilidad", puntuacionCuatro: 15},
			{respuestaCinco: "Ganas", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Beneficios de tener trabajo",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Salario", puntuacionUno: 41},
			{respuestaDos: "Prestaciones", puntuacionDos: 33},
			{respuestaTres: "Experiencia", puntuacionTres: 30},
			{respuestaCuatro: "Conocer Gente", puntuacionCuatro: 18},
			{respuestaCinco: "Hacer algo", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Que es importante considerar al elegir una carrera universitaria",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Habilidades", puntuacionUno: 39},
			{respuestaDos: "Intereses", puntuacionDos: 26},
			{respuestaTres: "Salario", puntuacionTres: 17},
			{respuestaCuatro: "Oferta Laboral", puntuacionCuatro: 13},
			{respuestaCinco: "Campus", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Operaciones que hacen en un banco",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Depositar", puntuacionUno: 40},
			{respuestaDos: "Retirar Dinero", puntuacionDos: 38},
			{respuestaTres: "Transferir cuenta", puntuacionTres: 29},
			{respuestaCuatro: "Abrir cuenta", puntuacionCuatro: 11},
			{respuestaCinco: "Cambiar cheque", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Menciona un género de televisión",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Noticiero", puntuacionUno: 35},
			{respuestaDos: "Telenovelas", puntuacionDos: 27},
			{respuestaTres: "Serie", puntuacionTres: 15},
			{respuestaCuatro: "Caricaturas", puntuacionCuatro: 10},
			{respuestaCinco: "Deportes", puntuacionCinco: 7}		
		]
	},
	{
	titulo : "Algo que suele enmarcarse",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Fotografias", puntuacionUno: 31},
			{respuestaDos: "Pinturas", puntuacionDos: 29},
			{respuestaTres: "Diplomas", puntuacionTres: 19},
			{respuestaCuatro: "Titulos", puntuacionCuatro: 14},
			{respuestaCinco: "Carteles", puntuacionCinco: 5}		
		]
	},
	{
	titulo : "Cosas que se ponen encima de una mesa de restaurante",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Platos", puntuacionUno: 35},
			{respuestaDos: "Vasos", puntuacionDos: 28},
			{respuestaTres: "Cubiertos", puntuacionTres: 23},
			{respuestaCuatro: "Mantel", puntuacionCuatro: 16},
			{respuestaCinco: "Flores", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Liquido que contiene una botella de plastico",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Agua", puntuacionUno: 35},
			{respuestaDos: "Refresco", puntuacionDos: 28},
			{respuestaTres: "Jugo", puntuacionTres: 23},
			{respuestaCuatro: "Alcohol", puntuacionCuatro: 16},
			{respuestaCinco: "Aceite", puntuacionCinco: 9}		
		]
	},
	{
	titulo : "Verdura que no sea de color verde",
	tipo: "normal",
	respuestas: [
			{respuestaUno: "Zanahoria", puntuacionUno: 44},
			{respuestaDos: "Coliflor", puntuacionDos: 30},
			{respuestaTres: "Cebolla", puntuacionTres: 26},
			{respuestaCuatro: "Ajo", puntuacionCuatro: 15},
			{respuestaCinco: "Pimiento", puntuacionCinco: 3}		
		]
	},
	/*
	{
	titulo : "",
	tipo: "",
	respuestas: [
			{respuestaUno: "", puntuacionUno: },
			{respuestaDos: "", puntuacionDos: },
			{respuestaTres: "", puntuacionTres: },
			{respuestaCuatro: "", puntuacionCuatro: },
			{respuestaCinco: "", puntuacionCinco: }		
		]
	},*/


	//TERMINE LA TEMPORADA 26, EMPEZAR CON LA 27s EN ADELANTE.

	//MUSICA ------------------------------------------------------------------------------------------------------------------------------------------------------------------
		{
	titulo : "Menciona las claves musicales mas comunes (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Sol", puntuacionUno: 40},
			{respuestaDos: "Fa", puntuacionDos: 30},
			{respuestaTres: "Do", puntuacionTres: 22},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
		{
	titulo : "Menciona las claves musicales mas comunes (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Sol", puntuacionUno: 40},
			{respuestaDos: "Fa", puntuacionDos: 30},
			{respuestaTres: "Do", puntuacionTres: 22},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona armaduras mas comunes en musica.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Do mayor, La menor (0#)", puntuacionUno: 36},
			{respuestaDos: "Re mayor, Si menor (2#)", puntuacionDos: 30},
			{respuestaTres: "Fa mayor, Re menor (1b)", puntuacionTres: 22},
			{respuestaCuatro: "Sol mayor, Mi menor (1#)", puntuacionCuatro: 17},
			{respuestaCinco: "La mayor, f# menor (3#)", puntuacionCinco: 15}		
		]
	},
	{
	titulo : "Menciona indicadores de Compás mas comunes en musica.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "4/4", puntuacionUno: 50},
			{respuestaDos: "3/4", puntuacionDos: 46},
			{respuestaTres: "2/4", puntuacionTres: 26},
			{respuestaCuatro: "Compasillo (C)", puntuacionCuatro: 13},
			{respuestaCinco: "Compasillo Binario (C|)", puntuacionCinco: 15}		
		]
	},
	{
	titulo : "Nombra Alteraciones Musicales.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Sostenido", puntuacionUno: 33},
			{respuestaDos: "Bemol", puntuacionDos: 29},
			{respuestaTres: "Becuadro", puntuacionTres: 20},
			{respuestaCuatro: "Doble Sostenido (x)", puntuacionCuatro: 5},
			{respuestaCinco: "Doble Bemol (bb)", puntuacionCinco: 2}		
		]
	},
	{
	titulo : "Nombra Articulaciones que podrias encontrar en una partitura.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Staccato (.)", puntuacionUno: 46},
			{respuestaDos: "Tenuto (-)", puntuacionDos: 37},
			{respuestaTres: "Marcato (v)", puntuacionTres: 18},
			{respuestaCuatro: "Trino (tr)", puntuacionCuatro: 15},
			{respuestaCinco: "Calderón (c.)", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Menciona las notas musicales.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Corchea", puntuacionUno: 30},
			{respuestaDos: "Negra", puntuacionDos: 27},
			{respuestaTres: "Redonda", puntuacionTres: 25},
			{respuestaCuatro: "Blanca", puntuacionCuatro: 10},
			{respuestaCinco: "Cuadrada", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Menciona barra de compas que encuentras en una Partitura (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Repeticion", puntuacionUno: 45},
			{respuestaDos: "Barra Final", puntuacionDos: 30},
			{respuestaTres: "Barra de compas", puntuacionTres: 27},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona dinámicas mas utilizadas.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Forte", puntuacionUno: 50},
			{respuestaDos: "Piano", puntuacionDos: 45},
			{respuestaTres: "MezzoPiano", puntuacionTres: 30},
			{respuestaCuatro: "MezzoForte", puntuacionCuatro: 25},
			{respuestaCinco: "Fortísimo", puntuacionCinco: 10}		
		]
	},
	{
	titulo : "Menciona mejores compositores de música clásica.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Wolfgang Amadeus Mozart", puntuacionUno: 46},
			{respuestaDos: "Ludwig van Beethoven", puntuacionDos: 44},
			{respuestaTres: "Vivaldi", puntuacionTres: 38},
			{respuestaCuatro: "Chopin", puntuacionCuatro: 30},
			{respuestaCinco: "Johann Sebastian Bach", puntuacionCinco: 28}		
		]
	},
	{
	titulo : "Menciona las notas principales que forman el acorde de Sol mayor (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Sol", puntuacionUno: 33},
			{respuestaDos: "Si", puntuacionDos: 28},
			{respuestaTres: "Re", puntuacionTres: 17},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona las notas principales que forman el acorde de Re mayor (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Re", puntuacionUno: 45},
			{respuestaDos: "Fa#", puntuacionDos: 38},
			{respuestaTres: "La", puntuacionTres: 36},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona las notas principales que forman el acorde de Do mayor (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Do", puntuacionUno: 20},
			{respuestaDos: "Mi", puntuacionDos: 17},
			{respuestaTres: "Sol", puntuacionTres: 14},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona las notas principales que forman el acorde de La menor (3 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "La", puntuacionUno: 60},
			{respuestaDos: "Do", puntuacionDos: 40},
			{respuestaTres: "Mi", puntuacionTres: 36},
			{respuestaCuatro: "", puntuacionCuatro: 0},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona instrumentos que mas famosos en una orquesta.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Violin", puntuacionUno: 36},
			{respuestaDos: "Cello", puntuacionDos: 34},
			{respuestaTres: "Trompeta", puntuacionTres: 28},
			{respuestaCuatro: "Piano", puntuacionCuatro: 24},
			{respuestaCinco: "Viola c:", puntuacionCinco: 1}		
		]
	},
	{
	titulo : "Menciona instrumentos de cuerda Frotada (4 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Violin", puntuacionUno: 24},
			{respuestaDos: "Cello", puntuacionDos: 20},
			{respuestaTres: "Viola", puntuacionTres: 13},
			{respuestaCuatro: "Contra Bajo", puntuacionCuatro: 8},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	},
	{
	titulo : "Menciona instrumentos de cuerda Pulsada.",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Guitarra", puntuacionUno: 34},
			{respuestaDos: "Arpa", puntuacionDos: 28},
			{respuestaTres: "Banjo", puntuacionTres: 20},
			{respuestaCuatro: "Tololoche", puntuacionCuatro: 17},
			{respuestaCinco: "Mandolina", puntuacionCinco: 12}		
		]
	},
	{
	titulo : "Menciona instrumentos de Aliento",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Trompeta", puntuacionUno: 32},
			{respuestaDos: "Flauta", puntuacionDos: 28},
			{respuestaTres: "Clarinete", puntuacionTres: 23},
			{respuestaCuatro: "Oboe", puntuacionCuatro: 17},
			{respuestaCinco: "Fagot", puntuacionCinco: 4}		
		]
	},
	{
	titulo : "Menciona las secciones de una orquesta (4 respuestas).",
	tipo: "musica",
	respuestas: [
			{respuestaUno: "Cuerdas", puntuacionUno: 40},
			{respuestaDos: "Maderas", puntuacionDos: 36},
			{respuestaTres: "Metales", puntuacionTres: 28},
			{respuestaCuatro: "Percusiones", puntuacionCuatro: 15},
			{respuestaCinco: "", puntuacionCinco: 0}		
		]
	}
]

var sonido = new Audio();
sonido.src="mp3/correcto.mp3";

var sonidoIncorrecto = new Audio();
sonidoIncorrecto.src="mp3/incorrecto.mp3";

var sonidoGanador = new Audio();
sonidoGanador.src="mp3/ganador.mp3";

var sonidoInicio = new Audio();
sonidoInicio.src="mp3/inicio.wav";

//Apellidos

var familiaUno = "";
var familiaDos = "";

//preguntas visibles
var preguntasVisibles = true;

//puntos normales, x2 o x3
var puntosMult = 0;

//Puntuaciones Familias.
var puntuacionPorRonda = 0;
var puntuacionFamUno = 0;
var puntuacionFamDos = 0;

var puntuacionUnoR= 0;
var textoRonda = "puntuacionPorRonda";


//Vidas
var vidasCambio = '<img src="img/x.png" class="vidas">';
var conteoVidas = 0;


const cantidadPreguntas = preguntas.length;
const cantidadPreguntasMenos1 = cantidadPreguntas - 1;

//Visibilidad de preguntas.
function mostrarPreguntas(){
	preguntasVisibles = document.getElementById("mostrarPreguntas");
	preguntasVisibles = preguntasVisibles.checked;
}

//Puntos normales
function puntosMultiplicados0(){
	puntosMult = document.getElementById("flexRadioDefault0").value;
}
//Puntos X2
function puntosMultiplicados1(){
	puntosMult = document.getElementById("flexRadioDefault1").value;
}
//Puntos X3
function puntosMultiplicados2(){
	puntosMult = document.getElementById("flexRadioDefault2").value;
}

function reinicioDeVidas(){
	conteoVidas = 0;
}

//Intefraz IDEX



function mainIndex(){
	var printMainIndex = '<div class="main"><div class="style-img-main-top"><img class="img-main-top" src="img/logo-100.png"></div><div class="menu-main"><div class="main-btns"><button class="btn-menu" onclick="preComenzar()">Jugar</button><button class="btn-menu" onclick="respuestas()">Respuestas</button><button class="btn-menu" onclick="instrucciones()">Instrucciones</button></div></div></div>';

	document.getElementById('mainIndex').innerHTML = printMainIndex;
}

//Interfaz para introducir los nombres de familias.
function preComenzar(){
	var printInt = '<div class="btn-position" id="list-btn-modal"><div class="containerRegister"><h3>Ingrese Familias</h3><br><input type="text" name="familiaUno" id="familiaUno" placeholder="Familia Uno"><h1>VS</h1><input type="text" name="familiaDos" id="familiaDos" placeholder="Familia Dos"><br><br><hr><p>Configuracion</p><div class="form-check"><input class="form-check-input" onclick="mostrarPreguntas()" type="checkbox" value="true" id="mostrarPreguntas" checked><label class="form-check-label" for="mostrarPreguntas">Mostrar preguntas</label></div><br><hr><br><button onclick="comenzar()">Comenzar</button></div><hr><br></div><button class="btn-regresar-listRespuestas" onclick="mainIndex()">Regresar</button>';

	document.getElementById('mainIndex').innerHTML = printInt;
}
 

//Interfaz con respuestas.
function respuestas(){
	var printResp = '<div class="mainListPreguntas"><div class="listPreguntas"><h4>Lista de preguntas</h4></div><br><p style="text-align: center;" >Cantidad de preguntas: '+cantidadPreguntas+'</p>';
	
for (var x = 0; x < cantidadPreguntas; x++) {

		printResp += '<hr><div class="accordion accordion-flush" id="flush-headingOne"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#resAccor'+x+'" aria-expanded="false" aria-controls="resAccor'+x+'"><div class="listRespText"><strong>'+x+':.  </strong>'+preguntas[x].titulo+'</div></button></h2><div id="resAccor'+x+'" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#flush-headingOne"><div class="accordion-body-X-Resp">';
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[0].respuestaUno+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[0].puntuacionUno+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 2
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[1].respuestaDos+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[1].puntuacionDos+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 3
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[2].respuestaTres+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[2].puntuacionTres+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 4
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[3].respuestaCuatro+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[3].puntuacionCuatro+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 5
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[4].respuestaCinco+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[4].puntuacionCinco+'</div>';
		printResp += '</div></div></div></div></div></div>';
		
	}
	printResp += '<br><button class="btn-regresar-listRespuestas" onclick="mainIndex()">Regresar</button></div>';
	document.getElementById('mainIndex').innerHTML = printResp;

}

function instrucciones(){
	var printAbout = '<h2>Se mostrara como se juega</h2><br><br><button onclick="mainIndex()">Regresar</button>';

	document.getElementById('mainIndex').innerHTML = printAbout;
}


//Interfaz donde se muestra la lista de preguntas.
function comenzar(){
	familiaUno = document.getElementById("familiaUno").value;
	familiaDos = document.getElementById("familiaDos").value;

var print = '<div class="container-menu-list"><p>Configuracion de puntuación:</p><div class="form-check form-check-inline"><input class="form-check-input" onclick="puntosMultiplicados0()" value="0" type="radio" name="flexRadioDefault" id="flexRadioDefault0" checked><label class="form-check-label" for="flexRadioDefault0">Normal |</label></div><div class="form-check form-check-inline"><input class="form-check-input" onclick="puntosMultiplicados1()" value="1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1">Puntos X2 |</label></div><div class="form-check form-check-inline"><input class="form-check-input" onclick="puntosMultiplicados2()" value="2" type="radio" name="flexRadioDefault" id="flexRadioDefault2"><label class="form-check-label" for="flexRadioDefault2">Puntos X3</label></div><hr><br><p>Categorias especiales: </p><strong  class="containerCat"><p class="categoriasText">Normal</p>|<p class="categoriasText" style="color:red;">Musica</p></strong><hr><div class="listPreguntas"><h4>Lista de preguntas</h4><p>Cantidad de preguntas: '+cantidadPreguntasMenos1+'</p></div></div><div class="container-list-preg">';

for (var i = 0; i < cantidadPreguntas; i++) {

		//Botones
		print += '<div class="btn-list-modal" onclick="reinicioDeVidas()" data-bs-toggle="modal" data-bs-target="#exampleModal'+i+'">';
		print += '<ul class="list-group" onmousedown="sonidoInicio.play()">';
		print += '<li class="list-group-item">';
		print += '<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched'+i+'">';
		
		print += '<label class="form-check-label stretched-link" for="firstCheckboxStretched'+i+'">';

		//Definir que categoria es
		if (preguntas[i].tipo == "musica"){
			print += '<strong style="color:red;">'+i+':. </strong>';
		}else {
			print += '<strong>'+i+':. </strong>';
		}

		//Definir si el usuario selecciono ver o no ver las preguntas.
		if (preguntasVisibles == true){
			print += ' '+preguntas[i].titulo;
		}else{
			print += '<i>...Preguntas Ocultas...</i>';
		}

		print += '</label>';

		print += '</li>';
		print += '</ul>';
		print += '</div>';

		//Contenedor Modal
		print += '<div class="modal fade" id="exampleModal'+i+'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">';
		print += '<div class="modal-dialog modal-fullscreen">';
		print += '<div class="modal-content">';
		print += '<div class="modal-header">';
		print += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
		print += '</div>';

		if (preguntasVisibles == true){
			print += '<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>'+i+': </strong>'+preguntas[i].titulo+'</h1>';
		}else{
			print += '<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>'+i+': </strong><i>...Preguntas Ocultas...</i></h1>';
		}
		print += '<div class="modal-body">';


					

		//Contenido Modal ------------------------
		print += '<div class="container-panel">';
		print += '<div class="row familias">';
		print += '<div class="col stylePunt"><div class="cont-punt"><div class="fam-punt"><h2>'+familiaUno+'</h2><h2><div class="familiasCol" id="puntuacionFamUno'+i+'">0</div></h2></div>';
		print += '<br><button class="button green" id="enviar" onmousedown="sonidoGanador.play()" onclick="incrementarFamUno()"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg></button><br><br>';
		print += '</div></div>'
		print += '<div class="col"><div class="punt-ronda"><h5>PUNTUACIÓN POR RONDA</h5><h1><div class="textoPuntuacion" id="puntuacionPorRonda'+i+'">0</div></h1></div></div>';
		print += '<div class="col stylePunt"><div class="cont-punt"><div class="fam-punt"><h2>'+familiaDos+'</h2><h2><div class="familiasCol" id="puntuacionFamDos'+i+'">0</div></h2></div>';
		print += '<br><button class="button green" id="startButton" onmousedown="sonidoGanador.play()" onclick="incrementarFamDos();" ><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg></button><br><br>';
		print += '</div></div>'
		print += '</div>';
		print += '<div class="tabla-respuestas">';
		print += '<h2>RESPUESTAS</H2>';
		print += '<hr>';




		//pizarra Respuesta 1

		
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesA'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregA"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 1.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregA"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[0].respuestaUno+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[0].puntuacionUno+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregA"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

	

		//pizarra Respuesta 2
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesB'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregB"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 2.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregB"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[1].respuestaDos+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[1].puntuacionDos+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregB"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

		

		//pizarra Respuesta 3
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesC'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregC"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 3.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregC"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[2].respuestaTres+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[2].puntuacionTres+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregC"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

		

		//pizarra Respuesta 4
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesD'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregD"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 4.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregD"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[3].respuestaCuatro+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[3].puntuacionCuatro+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregD"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

		

		//pizarra Respuesta 5
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesE'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregE"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 5.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregE"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[4].respuestaCinco+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[4].puntuacionCinco+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregE"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div>';

		

		print += '</div>';
		print += '<div class="row vidas-main" id="enviar" onmousedown="sonidoIncorrecto.play()" onclick="vidas'+i+'()"><div class="col" id="vida' + i + 'A"><img src="img/corazon.png" class="vidas"></div><div class="col" id="vida' + i + 'B"><img src="img/corazon.png" class="vidas"></div><div class="col" id="vida' + i + 'C"><img src="img/corazon.png" class="vidas"></div></div>';
		//Contenido Modal ------------------------

		print += '</div>';
		print += '</div>';
		print += '</div>';
		print += '</div>';
		print += '</div>';

}
		




		print += '</div>';



	//Imprime lista de preguntas en el Dom.
	document.getElementById('mainIndex').innerHTML = print;


	

}

const divPuntuacionUno = "puntuacionFamUno";
const divPuntuacionDos = "puntuacionFamDos";

function incrementarFamUno(){
	if (puntosMult == 0){
		puntuacionFamUno = puntuacionFamUno + puntuacionPorRonda;
	}else if(puntosMult == 1){
		puntuacionFamUno = puntuacionFamUno + puntuacionPorRonda * 2;
	}else if(puntosMult == 2){
		puntuacionFamUno = puntuacionFamUno + puntuacionPorRonda * 3;
	}
	puntuacionPorRonda = 0;

	for (var a = 0; a < cantidadPreguntas; a++) {
		var divContadorUno = divPuntuacionUno + a;
		document.getElementById(divContadorUno).innerHTML = puntuacionFamUno;
	}

	for (var e = 0; e < cantidadPreguntas; e++){
		var divPuntuacionPorRonda = textoRonda + e;
		document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
	}	
}

function incrementarFamDos(){
	if (puntosMult == 0){
		puntuacionFamDos = puntuacionFamDos + puntuacionPorRonda;
	}else if(puntosMult == 1){
		puntuacionFamDos = puntuacionFamDos + puntuacionPorRonda * 2;
	}else if(puntosMult == 2){
		puntuacionFamDos = puntuacionFamDos + puntuacionPorRonda * 3;
	}
	puntuacionPorRonda = 0;

	for (var b = 0; b < cantidadPreguntas; b++) {	
		var divContadorDos = divPuntuacionDos + b;
		document.getElementById(divContadorDos).innerHTML = puntuacionFamDos;
	}

	for (var e = 0; e < cantidadPreguntas; e++){
		var divPuntuacionPorRonda = textoRonda + e;
		document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
	}	
}



// FUNCIONES PARA LAS TECLAS
var paseA0=true;
function funcionesA0(){
if (paseA0 == true){
puntuacionUnoR = preguntas[0].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA0 = false;
}
}
var paseB0=true;
function funcionesB0(){
if (paseB0 == true){
puntuacionUnoR = preguntas[0].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB0 = false;
}
}
var paseC0=true;
function funcionesC0(){
if (paseC0 == true){
puntuacionUnoR = preguntas[0].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC0 = false;
}
}
var paseD0=true;
function funcionesD0(){
if (paseD0 == true){
puntuacionUnoR = preguntas[0].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD0 = false;
}
}
var paseE0=true;
function funcionesE0(){
if (paseE0 == true){
puntuacionUnoR = preguntas[0].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE0 = false;
}
}
//----------------------------------------------
function vidas0(){
if(conteoVidas == 0){
document.getElementById("vida0A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida0B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida0C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA1=true;
function funcionesA1(){
if (paseA1 == true){
puntuacionUnoR = preguntas[1].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA1 = false;
}
}
var paseB1=true;
function funcionesB1(){
if (paseB1 == true){
puntuacionUnoR = preguntas[1].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB1 = false;
}
}
var paseC1=true;
function funcionesC1(){
if (paseC1 == true){
puntuacionUnoR = preguntas[1].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC1 = false;
}
}
var paseD1=true;
function funcionesD1(){
if (paseD1 == true){
puntuacionUnoR = preguntas[1].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD1 = false;
}
}
var paseE1=true;
function funcionesE1(){
if (paseE1 == true){
puntuacionUnoR = preguntas[1].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE1 = false;
}
}
//----------------------------------------------
function vidas1(){
if(conteoVidas == 0){
document.getElementById("vida1A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida1B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida1C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA2=true;
function funcionesA2(){
if (paseA2 == true){
puntuacionUnoR = preguntas[2].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA2 = false;
}
}
var paseB2=true;
function funcionesB2(){
if (paseB2 == true){
puntuacionUnoR = preguntas[2].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB2 = false;
}
}
var paseC2=true;
function funcionesC2(){
if (paseC2 == true){
puntuacionUnoR = preguntas[2].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC2 = false;
}
}
var paseD2=true;
function funcionesD2(){
if (paseD2 == true){
puntuacionUnoR = preguntas[2].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD2 = false;
}
}
var paseE2=true;
function funcionesE2(){
if (paseE2 == true){
puntuacionUnoR = preguntas[2].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE2 = false;
}
}
//----------------------------------------------
function vidas2(){
if(conteoVidas == 0){
document.getElementById("vida2A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida2B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida2C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA3=true;
function funcionesA3(){
if (paseA3 == true){
puntuacionUnoR = preguntas[3].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA3 = false;
}
}
var paseB3=true;
function funcionesB3(){
if (paseB3 == true){
puntuacionUnoR = preguntas[3].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB3 = false;
}
}
var paseC3=true;
function funcionesC3(){
if (paseC3 == true){
puntuacionUnoR = preguntas[3].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC3 = false;
}
}
var paseD3=true;
function funcionesD3(){
if (paseD3 == true){
puntuacionUnoR = preguntas[3].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD3 = false;
}
}
var paseE3=true;
function funcionesE3(){
if (paseE3 == true){
puntuacionUnoR = preguntas[3].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE3 = false;
}
}
//----------------------------------------------
function vidas3(){
if(conteoVidas == 0){
document.getElementById("vida3A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida3B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida3C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA4=true;
function funcionesA4(){
if (paseA4 == true){
puntuacionUnoR = preguntas[4].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA4 = false;
}
}
var paseB4=true;
function funcionesB4(){
if (paseB4 == true){
puntuacionUnoR = preguntas[4].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB4 = false;
}
}
var paseC4=true;
function funcionesC4(){
if (paseC4 == true){
puntuacionUnoR = preguntas[4].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC4 = false;
}
}
var paseD4=true;
function funcionesD4(){
if (paseD4 == true){
puntuacionUnoR = preguntas[4].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD4 = false;
}
}
var paseE4=true;
function funcionesE4(){
if (paseE4 == true){
puntuacionUnoR = preguntas[4].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE4 = false;
}
}
//----------------------------------------------
function vidas4(){
if(conteoVidas == 0){
document.getElementById("vida4A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida4B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida4C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA5=true;
function funcionesA5(){
if (paseA5 == true){
puntuacionUnoR = preguntas[5].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA5 = false;
}
}
var paseB5=true;
function funcionesB5(){
if (paseB5 == true){
puntuacionUnoR = preguntas[5].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB5 = false;
}
}
var paseC5=true;
function funcionesC5(){
if (paseC5 == true){
puntuacionUnoR = preguntas[5].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC5 = false;
}
}
var paseD5=true;
function funcionesD5(){
if (paseD5 == true){
puntuacionUnoR = preguntas[5].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD5 = false;
}
}
var paseE5=true;
function funcionesE5(){
if (paseE5 == true){
puntuacionUnoR = preguntas[5].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE5 = false;
}
}
//----------------------------------------------
function vidas5(){
if(conteoVidas == 0){
document.getElementById("vida5A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida5B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida5C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA6=true;
function funcionesA6(){
if (paseA6 == true){
puntuacionUnoR = preguntas[6].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA6 = false;
}
}
var paseB6=true;
function funcionesB6(){
if (paseB6 == true){
puntuacionUnoR = preguntas[6].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB6 = false;
}
}
var paseC6=true;
function funcionesC6(){
if (paseC6 == true){
puntuacionUnoR = preguntas[6].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC6 = false;
}
}
var paseD6=true;
function funcionesD6(){
if (paseD6 == true){
puntuacionUnoR = preguntas[6].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD6 = false;
}
}
var paseE6=true;
function funcionesE6(){
if (paseE6 == true){
puntuacionUnoR = preguntas[6].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE6 = false;
}
}
//----------------------------------------------
function vidas6(){
if(conteoVidas == 0){
document.getElementById("vida6A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida6B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida6C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA7=true;
function funcionesA7(){
if (paseA7 == true){
puntuacionUnoR = preguntas[7].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA7 = false;
}
}
var paseB7=true;
function funcionesB7(){
if (paseB7 == true){
puntuacionUnoR = preguntas[7].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB7 = false;
}
}
var paseC7=true;
function funcionesC7(){
if (paseC7 == true){
puntuacionUnoR = preguntas[7].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC7 = false;
}
}
var paseD7=true;
function funcionesD7(){
if (paseD7 == true){
puntuacionUnoR = preguntas[7].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD7 = false;
}
}
var paseE7=true;
function funcionesE7(){
if (paseE7 == true){
puntuacionUnoR = preguntas[7].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE7 = false;
}
}
//----------------------------------------------
function vidas7(){
if(conteoVidas == 0){
document.getElementById("vida7A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida7B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida7C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA8=true;
function funcionesA8(){
if (paseA8 == true){
puntuacionUnoR = preguntas[8].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA8 = false;
}
}
var paseB8=true;
function funcionesB8(){
if (paseB8 == true){
puntuacionUnoR = preguntas[8].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB8 = false;
}
}
var paseC8=true;
function funcionesC8(){
if (paseC8 == true){
puntuacionUnoR = preguntas[8].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC8 = false;
}
}
var paseD8=true;
function funcionesD8(){
if (paseD8 == true){
puntuacionUnoR = preguntas[8].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD8 = false;
}
}
var paseE8=true;
function funcionesE8(){
if (paseE8 == true){
puntuacionUnoR = preguntas[8].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE8 = false;
}
}
//----------------------------------------------
function vidas8(){
if(conteoVidas == 0){
document.getElementById("vida8A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida8B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida8C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA9=true;
function funcionesA9(){
if (paseA9 == true){
puntuacionUnoR = preguntas[9].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA9 = false;
}
}
var paseB9=true;
function funcionesB9(){
if (paseB9 == true){
puntuacionUnoR = preguntas[9].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB9 = false;
}
}
var paseC9=true;
function funcionesC9(){
if (paseC9 == true){
puntuacionUnoR = preguntas[9].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC9 = false;
}
}
var paseD9=true;
function funcionesD9(){
if (paseD9 == true){
puntuacionUnoR = preguntas[9].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD9 = false;
}
}
var paseE9=true;
function funcionesE9(){
if (paseE9 == true){
puntuacionUnoR = preguntas[9].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE9 = false;
}
}
//----------------------------------------------
function vidas9(){
if(conteoVidas == 0){
document.getElementById("vida9A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida9B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida9C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA10=true;
function funcionesA10(){
if (paseA10 == true){
puntuacionUnoR = preguntas[10].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA10 = false;
}
}
var paseB10=true;
function funcionesB10(){
if (paseB10 == true){
puntuacionUnoR = preguntas[10].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB10 = false;
}
}
var paseC10=true;
function funcionesC10(){
if (paseC10 == true){
puntuacionUnoR = preguntas[10].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC10 = false;
}
}
var paseD10=true;
function funcionesD10(){
if (paseD10 == true){
puntuacionUnoR = preguntas[10].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD10 = false;
}
}
var paseE10=true;
function funcionesE10(){
if (paseE10 == true){
puntuacionUnoR = preguntas[10].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE10 = false;
}
}
//----------------------------------------------
function vidas10(){
if(conteoVidas == 0){
document.getElementById("vida10A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida10B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida10C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA11=true;
function funcionesA11(){
if (paseA11 == true){
puntuacionUnoR = preguntas[11].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA11 = false;
}
}
var paseB11=true;
function funcionesB11(){
if (paseB11 == true){
puntuacionUnoR = preguntas[11].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB11 = false;
}
}
var paseC11=true;
function funcionesC11(){
if (paseC11 == true){
puntuacionUnoR = preguntas[11].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC11 = false;
}
}
var paseD11=true;
function funcionesD11(){
if (paseD11 == true){
puntuacionUnoR = preguntas[11].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD11 = false;
}
}
var paseE11=true;
function funcionesE11(){
if (paseE11 == true){
puntuacionUnoR = preguntas[11].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE11 = false;
}
}
//----------------------------------------------
function vidas11(){
if(conteoVidas == 0){
document.getElementById("vida11A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida11B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida11C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA12=true;
function funcionesA12(){
if (paseA12 == true){
puntuacionUnoR = preguntas[12].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA12 = false;
}
}
var paseB12=true;
function funcionesB12(){
if (paseB12 == true){
puntuacionUnoR = preguntas[12].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB12 = false;
}
}
var paseC12=true;
function funcionesC12(){
if (paseC12 == true){
puntuacionUnoR = preguntas[12].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC12 = false;
}
}
var paseD12=true;
function funcionesD12(){
if (paseD12 == true){
puntuacionUnoR = preguntas[12].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD12 = false;
}
}
var paseE12=true;
function funcionesE12(){
if (paseE12 == true){
puntuacionUnoR = preguntas[12].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE12 = false;
}
}
//----------------------------------------------
function vidas12(){
if(conteoVidas == 0){
document.getElementById("vida12A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida12B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida12C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA13=true;
function funcionesA13(){
if (paseA13 == true){
puntuacionUnoR = preguntas[13].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA13 = false;
}
}
var paseB13=true;
function funcionesB13(){
if (paseB13 == true){
puntuacionUnoR = preguntas[13].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB13 = false;
}
}
var paseC13=true;
function funcionesC13(){
if (paseC13 == true){
puntuacionUnoR = preguntas[13].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC13 = false;
}
}
var paseD13=true;
function funcionesD13(){
if (paseD13 == true){
puntuacionUnoR = preguntas[13].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD13 = false;
}
}
var paseE13=true;
function funcionesE13(){
if (paseE13 == true){
puntuacionUnoR = preguntas[13].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE13 = false;
}
}
//----------------------------------------------
function vidas13(){
if(conteoVidas == 0){
document.getElementById("vida13A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida13B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida13C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA14=true;
function funcionesA14(){
if (paseA14 == true){
puntuacionUnoR = preguntas[14].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA14 = false;
}
}
var paseB14=true;
function funcionesB14(){
if (paseB14 == true){
puntuacionUnoR = preguntas[14].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB14 = false;
}
}
var paseC14=true;
function funcionesC14(){
if (paseC14 == true){
puntuacionUnoR = preguntas[14].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC14 = false;
}
}
var paseD14=true;
function funcionesD14(){
if (paseD14 == true){
puntuacionUnoR = preguntas[14].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD14 = false;
}
}
var paseE14=true;
function funcionesE14(){
if (paseE14 == true){
puntuacionUnoR = preguntas[14].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE14 = false;
}
}
//----------------------------------------------
function vidas14(){
if(conteoVidas == 0){
document.getElementById("vida14A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida14B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida14C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA15=true;
function funcionesA15(){
if (paseA15 == true){
puntuacionUnoR = preguntas[15].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA15 = false;
}
}
var paseB15=true;
function funcionesB15(){
if (paseB15 == true){
puntuacionUnoR = preguntas[15].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB15 = false;
}
}
var paseC15=true;
function funcionesC15(){
if (paseC15 == true){
puntuacionUnoR = preguntas[15].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC15 = false;
}
}
var paseD15=true;
function funcionesD15(){
if (paseD15 == true){
puntuacionUnoR = preguntas[15].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD15 = false;
}
}
var paseE15=true;
function funcionesE15(){
if (paseE15 == true){
puntuacionUnoR = preguntas[15].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE15 = false;
}
}
//----------------------------------------------
function vidas15(){
if(conteoVidas == 0){
document.getElementById("vida15A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida15B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida15C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA16=true;
function funcionesA16(){
if (paseA16 == true){
puntuacionUnoR = preguntas[16].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA16 = false;
}
}
var paseB16=true;
function funcionesB16(){
if (paseB16 == true){
puntuacionUnoR = preguntas[16].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB16 = false;
}
}
var paseC16=true;
function funcionesC16(){
if (paseC16 == true){
puntuacionUnoR = preguntas[16].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC16 = false;
}
}
var paseD16=true;
function funcionesD16(){
if (paseD16 == true){
puntuacionUnoR = preguntas[16].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD16 = false;
}
}
var paseE16=true;
function funcionesE16(){
if (paseE16 == true){
puntuacionUnoR = preguntas[16].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE16 = false;
}
}
//----------------------------------------------
function vidas16(){
if(conteoVidas == 0){
document.getElementById("vida16A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida16B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida16C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA17=true;
function funcionesA17(){
if (paseA17 == true){
puntuacionUnoR = preguntas[17].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA17 = false;
}
}
var paseB17=true;
function funcionesB17(){
if (paseB17 == true){
puntuacionUnoR = preguntas[17].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB17 = false;
}
}
var paseC17=true;
function funcionesC17(){
if (paseC17 == true){
puntuacionUnoR = preguntas[17].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC17 = false;
}
}
var paseD17=true;
function funcionesD17(){
if (paseD17 == true){
puntuacionUnoR = preguntas[17].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD17 = false;
}
}
var paseE17=true;
function funcionesE17(){
if (paseE17 == true){
puntuacionUnoR = preguntas[17].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE17 = false;
}
}
//----------------------------------------------
function vidas17(){
if(conteoVidas == 0){
document.getElementById("vida17A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida17B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida17C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA18=true;
function funcionesA18(){
if (paseA18 == true){
puntuacionUnoR = preguntas[18].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA18 = false;
}
}
var paseB18=true;
function funcionesB18(){
if (paseB18 == true){
puntuacionUnoR = preguntas[18].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB18 = false;
}
}
var paseC18=true;
function funcionesC18(){
if (paseC18 == true){
puntuacionUnoR = preguntas[18].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC18 = false;
}
}
var paseD18=true;
function funcionesD18(){
if (paseD18 == true){
puntuacionUnoR = preguntas[18].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD18 = false;
}
}
var paseE18=true;
function funcionesE18(){
if (paseE18 == true){
puntuacionUnoR = preguntas[18].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE18 = false;
}
}
//----------------------------------------------
function vidas18(){
if(conteoVidas == 0){
document.getElementById("vida18A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida18B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida18C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA19=true;
function funcionesA19(){
if (paseA19 == true){
puntuacionUnoR = preguntas[19].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA19 = false;
}
}
var paseB19=true;
function funcionesB19(){
if (paseB19 == true){
puntuacionUnoR = preguntas[19].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB19 = false;
}
}
var paseC19=true;
function funcionesC19(){
if (paseC19 == true){
puntuacionUnoR = preguntas[19].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC19 = false;
}
}
var paseD19=true;
function funcionesD19(){
if (paseD19 == true){
puntuacionUnoR = preguntas[19].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD19 = false;
}
}
var paseE19=true;
function funcionesE19(){
if (paseE19 == true){
puntuacionUnoR = preguntas[19].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE19 = false;
}
}
//----------------------------------------------
function vidas19(){
if(conteoVidas == 0){
document.getElementById("vida19A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida19B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida19C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA20=true;
function funcionesA20(){
if (paseA20 == true){
puntuacionUnoR = preguntas[20].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA20 = false;
}
}
var paseB20=true;
function funcionesB20(){
if (paseB20 == true){
puntuacionUnoR = preguntas[20].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB20 = false;
}
}
var paseC20=true;
function funcionesC20(){
if (paseC20 == true){
puntuacionUnoR = preguntas[20].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC20 = false;
}
}
var paseD20=true;
function funcionesD20(){
if (paseD20 == true){
puntuacionUnoR = preguntas[20].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD20 = false;
}
}
var paseE20=true;
function funcionesE20(){
if (paseE20 == true){
puntuacionUnoR = preguntas[20].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE20 = false;
}
}
//----------------------------------------------
function vidas20(){
if(conteoVidas == 0){
document.getElementById("vida20A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida20B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida20C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA21=true;
function funcionesA21(){
if (paseA21 == true){
puntuacionUnoR = preguntas[21].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA21 = false;
}
}
var paseB21=true;
function funcionesB21(){
if (paseB21 == true){
puntuacionUnoR = preguntas[21].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB21 = false;
}
}
var paseC21=true;
function funcionesC21(){
if (paseC21 == true){
puntuacionUnoR = preguntas[21].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC21 = false;
}
}
var paseD21=true;
function funcionesD21(){
if (paseD21 == true){
puntuacionUnoR = preguntas[21].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD21 = false;
}
}
var paseE21=true;
function funcionesE21(){
if (paseE21 == true){
puntuacionUnoR = preguntas[21].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE21 = false;
}
}
//----------------------------------------------
function vidas21(){
if(conteoVidas == 0){
document.getElementById("vida21A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida21B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida21C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA22=true;
function funcionesA22(){
if (paseA22 == true){
puntuacionUnoR = preguntas[22].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA22 = false;
}
}
var paseB22=true;
function funcionesB22(){
if (paseB22 == true){
puntuacionUnoR = preguntas[22].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB22 = false;
}
}
var paseC22=true;
function funcionesC22(){
if (paseC22 == true){
puntuacionUnoR = preguntas[22].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC22 = false;
}
}
var paseD22=true;
function funcionesD22(){
if (paseD22 == true){
puntuacionUnoR = preguntas[22].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD22 = false;
}
}
var paseE22=true;
function funcionesE22(){
if (paseE22 == true){
puntuacionUnoR = preguntas[22].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE22 = false;
}
}
//----------------------------------------------
function vidas22(){
if(conteoVidas == 0){
document.getElementById("vida22A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida22B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida22C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA23=true;
function funcionesA23(){
if (paseA23 == true){
puntuacionUnoR = preguntas[23].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA23 = false;
}
}
var paseB23=true;
function funcionesB23(){
if (paseB23 == true){
puntuacionUnoR = preguntas[23].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB23 = false;
}
}
var paseC23=true;
function funcionesC23(){
if (paseC23 == true){
puntuacionUnoR = preguntas[23].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC23 = false;
}
}
var paseD23=true;
function funcionesD23(){
if (paseD23 == true){
puntuacionUnoR = preguntas[23].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD23 = false;
}
}
var paseE23=true;
function funcionesE23(){
if (paseE23 == true){
puntuacionUnoR = preguntas[23].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE23 = false;
}
}
//----------------------------------------------
function vidas23(){
if(conteoVidas == 0){
document.getElementById("vida23A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida23B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida23C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA24=true;
function funcionesA24(){
if (paseA24 == true){
puntuacionUnoR = preguntas[24].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA24 = false;
}
}
var paseB24=true;
function funcionesB24(){
if (paseB24 == true){
puntuacionUnoR = preguntas[24].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB24 = false;
}
}
var paseC24=true;
function funcionesC24(){
if (paseC24 == true){
puntuacionUnoR = preguntas[24].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC24 = false;
}
}
var paseD24=true;
function funcionesD24(){
if (paseD24 == true){
puntuacionUnoR = preguntas[24].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD24 = false;
}
}
var paseE24=true;
function funcionesE24(){
if (paseE24 == true){
puntuacionUnoR = preguntas[24].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE24 = false;
}
}
//----------------------------------------------
function vidas24(){
if(conteoVidas == 0){
document.getElementById("vida24A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida24B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida24C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA25=true;
function funcionesA25(){
if (paseA25 == true){
puntuacionUnoR = preguntas[25].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA25 = false;
}
}
var paseB25=true;
function funcionesB25(){
if (paseB25 == true){
puntuacionUnoR = preguntas[25].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB25 = false;
}
}
var paseC25=true;
function funcionesC25(){
if (paseC25 == true){
puntuacionUnoR = preguntas[25].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC25 = false;
}
}
var paseD25=true;
function funcionesD25(){
if (paseD25 == true){
puntuacionUnoR = preguntas[25].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD25 = false;
}
}
var paseE25=true;
function funcionesE25(){
if (paseE25 == true){
puntuacionUnoR = preguntas[25].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE25 = false;
}
}
//----------------------------------------------
function vidas25(){
if(conteoVidas == 0){
document.getElementById("vida25A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida25B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida25C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA26=true;
function funcionesA26(){
if (paseA26 == true){
puntuacionUnoR = preguntas[26].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA26 = false;
}
}
var paseB26=true;
function funcionesB26(){
if (paseB26 == true){
puntuacionUnoR = preguntas[26].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB26 = false;
}
}
var paseC26=true;
function funcionesC26(){
if (paseC26 == true){
puntuacionUnoR = preguntas[26].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC26 = false;
}
}
var paseD26=true;
function funcionesD26(){
if (paseD26 == true){
puntuacionUnoR = preguntas[26].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD26 = false;
}
}
var paseE26=true;
function funcionesE26(){
if (paseE26 == true){
puntuacionUnoR = preguntas[26].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE26 = false;
}
}
//----------------------------------------------
function vidas26(){
if(conteoVidas == 0){
document.getElementById("vida26A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida26B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida26C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA27=true;
function funcionesA27(){
if (paseA27 == true){
puntuacionUnoR = preguntas[27].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA27 = false;
}
}
var paseB27=true;
function funcionesB27(){
if (paseB27 == true){
puntuacionUnoR = preguntas[27].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB27 = false;
}
}
var paseC27=true;
function funcionesC27(){
if (paseC27 == true){
puntuacionUnoR = preguntas[27].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC27 = false;
}
}
var paseD27=true;
function funcionesD27(){
if (paseD27 == true){
puntuacionUnoR = preguntas[27].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD27 = false;
}
}
var paseE27=true;
function funcionesE27(){
if (paseE27 == true){
puntuacionUnoR = preguntas[27].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE27 = false;
}
}
//----------------------------------------------
function vidas27(){
if(conteoVidas == 0){
document.getElementById("vida27A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida27B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida27C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA28=true;
function funcionesA28(){
if (paseA28 == true){
puntuacionUnoR = preguntas[28].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA28 = false;
}
}
var paseB28=true;
function funcionesB28(){
if (paseB28 == true){
puntuacionUnoR = preguntas[28].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB28 = false;
}
}
var paseC28=true;
function funcionesC28(){
if (paseC28 == true){
puntuacionUnoR = preguntas[28].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC28 = false;
}
}
var paseD28=true;
function funcionesD28(){
if (paseD28 == true){
puntuacionUnoR = preguntas[28].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD28 = false;
}
}
var paseE28=true;
function funcionesE28(){
if (paseE28 == true){
puntuacionUnoR = preguntas[28].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE28 = false;
}
}
//----------------------------------------------
function vidas28(){
if(conteoVidas == 0){
document.getElementById("vida28A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida28B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida28C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA29=true;
function funcionesA29(){
if (paseA29 == true){
puntuacionUnoR = preguntas[29].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA29 = false;
}
}
var paseB29=true;
function funcionesB29(){
if (paseB29 == true){
puntuacionUnoR = preguntas[29].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB29 = false;
}
}
var paseC29=true;
function funcionesC29(){
if (paseC29 == true){
puntuacionUnoR = preguntas[29].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC29 = false;
}
}
var paseD29=true;
function funcionesD29(){
if (paseD29 == true){
puntuacionUnoR = preguntas[29].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD29 = false;
}
}
var paseE29=true;
function funcionesE29(){
if (paseE29 == true){
puntuacionUnoR = preguntas[29].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE29 = false;
}
}
//----------------------------------------------
function vidas29(){
if(conteoVidas == 0){
document.getElementById("vida29A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida29B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida29C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA30=true;
function funcionesA30(){
if (paseA30 == true){
puntuacionUnoR = preguntas[30].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA30 = false;
}
}
var paseB30=true;
function funcionesB30(){
if (paseB30 == true){
puntuacionUnoR = preguntas[30].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB30 = false;
}
}
var paseC30=true;
function funcionesC30(){
if (paseC30 == true){
puntuacionUnoR = preguntas[30].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC30 = false;
}
}
var paseD30=true;
function funcionesD30(){
if (paseD30 == true){
puntuacionUnoR = preguntas[30].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD30 = false;
}
}
var paseE30=true;
function funcionesE30(){
if (paseE30 == true){
puntuacionUnoR = preguntas[30].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE30 = false;
}
}
//----------------------------------------------
function vidas30(){
if(conteoVidas == 0){
document.getElementById("vida30A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida30B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida30C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA31=true;
function funcionesA31(){
if (paseA31 == true){
puntuacionUnoR = preguntas[31].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA31 = false;
}
}
var paseB31=true;
function funcionesB31(){
if (paseB31 == true){
puntuacionUnoR = preguntas[31].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB31 = false;
}
}
var paseC31=true;
function funcionesC31(){
if (paseC31 == true){
puntuacionUnoR = preguntas[31].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC31 = false;
}
}
var paseD31=true;
function funcionesD31(){
if (paseD31 == true){
puntuacionUnoR = preguntas[31].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD31 = false;
}
}
var paseE31=true;
function funcionesE31(){
if (paseE31 == true){
puntuacionUnoR = preguntas[31].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE31 = false;
}
}
//----------------------------------------------
function vidas31(){
if(conteoVidas == 0){
document.getElementById("vida31A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida31B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida31C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA32=true;
function funcionesA32(){
if (paseA32 == true){
puntuacionUnoR = preguntas[32].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA32 = false;
}
}
var paseB32=true;
function funcionesB32(){
if (paseB32 == true){
puntuacionUnoR = preguntas[32].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB32 = false;
}
}
var paseC32=true;
function funcionesC32(){
if (paseC32 == true){
puntuacionUnoR = preguntas[32].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC32 = false;
}
}
var paseD32=true;
function funcionesD32(){
if (paseD32 == true){
puntuacionUnoR = preguntas[32].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD32 = false;
}
}
var paseE32=true;
function funcionesE32(){
if (paseE32 == true){
puntuacionUnoR = preguntas[32].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE32 = false;
}
}
//----------------------------------------------
function vidas32(){
if(conteoVidas == 0){
document.getElementById("vida32A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida32B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida32C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA33=true;
function funcionesA33(){
if (paseA33 == true){
puntuacionUnoR = preguntas[33].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA33 = false;
}
}
var paseB33=true;
function funcionesB33(){
if (paseB33 == true){
puntuacionUnoR = preguntas[33].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB33 = false;
}
}
var paseC33=true;
function funcionesC33(){
if (paseC33 == true){
puntuacionUnoR = preguntas[33].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC33 = false;
}
}
var paseD33=true;
function funcionesD33(){
if (paseD33 == true){
puntuacionUnoR = preguntas[33].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD33 = false;
}
}
var paseE33=true;
function funcionesE33(){
if (paseE33 == true){
puntuacionUnoR = preguntas[33].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE33 = false;
}
}
//----------------------------------------------
function vidas33(){
if(conteoVidas == 0){
document.getElementById("vida33A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida33B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida33C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA34=true;
function funcionesA34(){
if (paseA34 == true){
puntuacionUnoR = preguntas[34].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA34 = false;
}
}
var paseB34=true;
function funcionesB34(){
if (paseB34 == true){
puntuacionUnoR = preguntas[34].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB34 = false;
}
}
var paseC34=true;
function funcionesC34(){
if (paseC34 == true){
puntuacionUnoR = preguntas[34].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC34 = false;
}
}
var paseD34=true;
function funcionesD34(){
if (paseD34 == true){
puntuacionUnoR = preguntas[34].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD34 = false;
}
}
var paseE34=true;
function funcionesE34(){
if (paseE34 == true){
puntuacionUnoR = preguntas[34].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE34 = false;
}
}
//----------------------------------------------
function vidas34(){
if(conteoVidas == 0){
document.getElementById("vida34A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida34B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida34C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA35=true;
function funcionesA35(){
if (paseA35 == true){
puntuacionUnoR = preguntas[35].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA35 = false;
}
}
var paseB35=true;
function funcionesB35(){
if (paseB35 == true){
puntuacionUnoR = preguntas[35].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB35 = false;
}
}
var paseC35=true;
function funcionesC35(){
if (paseC35 == true){
puntuacionUnoR = preguntas[35].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC35 = false;
}
}
var paseD35=true;
function funcionesD35(){
if (paseD35 == true){
puntuacionUnoR = preguntas[35].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD35 = false;
}
}
var paseE35=true;
function funcionesE35(){
if (paseE35 == true){
puntuacionUnoR = preguntas[35].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE35 = false;
}
}
//----------------------------------------------
function vidas35(){
if(conteoVidas == 0){
document.getElementById("vida35A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida35B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida35C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA36=true;
function funcionesA36(){
if (paseA36 == true){
puntuacionUnoR = preguntas[36].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA36 = false;
}
}
var paseB36=true;
function funcionesB36(){
if (paseB36 == true){
puntuacionUnoR = preguntas[36].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB36 = false;
}
}
var paseC36=true;
function funcionesC36(){
if (paseC36 == true){
puntuacionUnoR = preguntas[36].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC36 = false;
}
}
var paseD36=true;
function funcionesD36(){
if (paseD36 == true){
puntuacionUnoR = preguntas[36].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD36 = false;
}
}
var paseE36=true;
function funcionesE36(){
if (paseE36 == true){
puntuacionUnoR = preguntas[36].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE36 = false;
}
}
//----------------------------------------------
function vidas36(){
if(conteoVidas == 0){
document.getElementById("vida36A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida36B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida36C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA37=true;
function funcionesA37(){
if (paseA37 == true){
puntuacionUnoR = preguntas[37].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA37 = false;
}
}
var paseB37=true;
function funcionesB37(){
if (paseB37 == true){
puntuacionUnoR = preguntas[37].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB37 = false;
}
}
var paseC37=true;
function funcionesC37(){
if (paseC37 == true){
puntuacionUnoR = preguntas[37].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC37 = false;
}
}
var paseD37=true;
function funcionesD37(){
if (paseD37 == true){
puntuacionUnoR = preguntas[37].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD37 = false;
}
}
var paseE37=true;
function funcionesE37(){
if (paseE37 == true){
puntuacionUnoR = preguntas[37].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE37 = false;
}
}
//----------------------------------------------
function vidas37(){
if(conteoVidas == 0){
document.getElementById("vida37A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida37B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida37C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA38=true;
function funcionesA38(){
if (paseA38 == true){
puntuacionUnoR = preguntas[38].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA38 = false;
}
}
var paseB38=true;
function funcionesB38(){
if (paseB38 == true){
puntuacionUnoR = preguntas[38].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB38 = false;
}
}
var paseC38=true;
function funcionesC38(){
if (paseC38 == true){
puntuacionUnoR = preguntas[38].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC38 = false;
}
}
var paseD38=true;
function funcionesD38(){
if (paseD38 == true){
puntuacionUnoR = preguntas[38].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD38 = false;
}
}
var paseE38=true;
function funcionesE38(){
if (paseE38 == true){
puntuacionUnoR = preguntas[38].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE38 = false;
}
}
//----------------------------------------------
function vidas38(){
if(conteoVidas == 0){
document.getElementById("vida38A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida38B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida38C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA39=true;
function funcionesA39(){
if (paseA39 == true){
puntuacionUnoR = preguntas[39].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA39 = false;
}
}
var paseB39=true;
function funcionesB39(){
if (paseB39 == true){
puntuacionUnoR = preguntas[39].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB39 = false;
}
}
var paseC39=true;
function funcionesC39(){
if (paseC39 == true){
puntuacionUnoR = preguntas[39].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC39 = false;
}
}
var paseD39=true;
function funcionesD39(){
if (paseD39 == true){
puntuacionUnoR = preguntas[39].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD39 = false;
}
}
var paseE39=true;
function funcionesE39(){
if (paseE39 == true){
puntuacionUnoR = preguntas[39].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE39 = false;
}
}
//----------------------------------------------
function vidas39(){
if(conteoVidas == 0){
document.getElementById("vida39A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida39B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida39C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA40=true;
function funcionesA40(){
if (paseA40 == true){
puntuacionUnoR = preguntas[40].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA40 = false;
}
}
var paseB40=true;
function funcionesB40(){
if (paseB40 == true){
puntuacionUnoR = preguntas[40].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB40 = false;
}
}
var paseC40=true;
function funcionesC40(){
if (paseC40 == true){
puntuacionUnoR = preguntas[40].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC40 = false;
}
}
var paseD40=true;
function funcionesD40(){
if (paseD40 == true){
puntuacionUnoR = preguntas[40].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD40 = false;
}
}
var paseE40=true;
function funcionesE40(){
if (paseE40 == true){
puntuacionUnoR = preguntas[40].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE40 = false;
}
}
//----------------------------------------------
function vidas40(){
if(conteoVidas == 0){
document.getElementById("vida40A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida40B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida40C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA41=true;
function funcionesA41(){
if (paseA41 == true){
puntuacionUnoR = preguntas[41].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA41 = false;
}
}
var paseB41=true;
function funcionesB41(){
if (paseB41 == true){
puntuacionUnoR = preguntas[41].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB41 = false;
}
}
var paseC41=true;
function funcionesC41(){
if (paseC41 == true){
puntuacionUnoR = preguntas[41].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC41 = false;
}
}
var paseD41=true;
function funcionesD41(){
if (paseD41 == true){
puntuacionUnoR = preguntas[41].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD41 = false;
}
}
var paseE41=true;
function funcionesE41(){
if (paseE41 == true){
puntuacionUnoR = preguntas[41].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE41 = false;
}
}
//----------------------------------------------
function vidas41(){
if(conteoVidas == 0){
document.getElementById("vida41A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida41B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida41C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA42=true;
function funcionesA42(){
if (paseA42 == true){
puntuacionUnoR = preguntas[42].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA42 = false;
}
}
var paseB42=true;
function funcionesB42(){
if (paseB42 == true){
puntuacionUnoR = preguntas[42].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB42 = false;
}
}
var paseC42=true;
function funcionesC42(){
if (paseC42 == true){
puntuacionUnoR = preguntas[42].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC42 = false;
}
}
var paseD42=true;
function funcionesD42(){
if (paseD42 == true){
puntuacionUnoR = preguntas[42].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD42 = false;
}
}
var paseE42=true;
function funcionesE42(){
if (paseE42 == true){
puntuacionUnoR = preguntas[42].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE42 = false;
}
}
//----------------------------------------------
function vidas42(){
if(conteoVidas == 0){
document.getElementById("vida42A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida42B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida42C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA43=true;
function funcionesA43(){
if (paseA43 == true){
puntuacionUnoR = preguntas[43].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA43 = false;
}
}
var paseB43=true;
function funcionesB43(){
if (paseB43 == true){
puntuacionUnoR = preguntas[43].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB43 = false;
}
}
var paseC43=true;
function funcionesC43(){
if (paseC43 == true){
puntuacionUnoR = preguntas[43].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC43 = false;
}
}
var paseD43=true;
function funcionesD43(){
if (paseD43 == true){
puntuacionUnoR = preguntas[43].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD43 = false;
}
}
var paseE43=true;
function funcionesE43(){
if (paseE43 == true){
puntuacionUnoR = preguntas[43].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE43 = false;
}
}
//----------------------------------------------
function vidas43(){
if(conteoVidas == 0){
document.getElementById("vida43A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida43B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida43C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA44=true;
function funcionesA44(){
if (paseA44 == true){
puntuacionUnoR = preguntas[44].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA44 = false;
}
}
var paseB44=true;
function funcionesB44(){
if (paseB44 == true){
puntuacionUnoR = preguntas[44].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB44 = false;
}
}
var paseC44=true;
function funcionesC44(){
if (paseC44 == true){
puntuacionUnoR = preguntas[44].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC44 = false;
}
}
var paseD44=true;
function funcionesD44(){
if (paseD44 == true){
puntuacionUnoR = preguntas[44].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD44 = false;
}
}
var paseE44=true;
function funcionesE44(){
if (paseE44 == true){
puntuacionUnoR = preguntas[44].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE44 = false;
}
}
//----------------------------------------------
function vidas44(){
if(conteoVidas == 0){
document.getElementById("vida44A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida44B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida44C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA45=true;
function funcionesA45(){
if (paseA45 == true){
puntuacionUnoR = preguntas[45].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA45 = false;
}
}
var paseB45=true;
function funcionesB45(){
if (paseB45 == true){
puntuacionUnoR = preguntas[45].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB45 = false;
}
}
var paseC45=true;
function funcionesC45(){
if (paseC45 == true){
puntuacionUnoR = preguntas[45].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC45 = false;
}
}
var paseD45=true;
function funcionesD45(){
if (paseD45 == true){
puntuacionUnoR = preguntas[45].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD45 = false;
}
}
var paseE45=true;
function funcionesE45(){
if (paseE45 == true){
puntuacionUnoR = preguntas[45].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE45 = false;
}
}
//----------------------------------------------
function vidas45(){
if(conteoVidas == 0){
document.getElementById("vida45A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida45B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida45C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA46=true;
function funcionesA46(){
if (paseA46 == true){
puntuacionUnoR = preguntas[46].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA46 = false;
}
}
var paseB46=true;
function funcionesB46(){
if (paseB46 == true){
puntuacionUnoR = preguntas[46].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB46 = false;
}
}
var paseC46=true;
function funcionesC46(){
if (paseC46 == true){
puntuacionUnoR = preguntas[46].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC46 = false;
}
}
var paseD46=true;
function funcionesD46(){
if (paseD46 == true){
puntuacionUnoR = preguntas[46].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD46 = false;
}
}
var paseE46=true;
function funcionesE46(){
if (paseE46 == true){
puntuacionUnoR = preguntas[46].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE46 = false;
}
}
//----------------------------------------------
function vidas46(){
if(conteoVidas == 0){
document.getElementById("vida46A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida46B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida46C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA47=true;
function funcionesA47(){
if (paseA47 == true){
puntuacionUnoR = preguntas[47].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA47 = false;
}
}
var paseB47=true;
function funcionesB47(){
if (paseB47 == true){
puntuacionUnoR = preguntas[47].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB47 = false;
}
}
var paseC47=true;
function funcionesC47(){
if (paseC47 == true){
puntuacionUnoR = preguntas[47].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC47 = false;
}
}
var paseD47=true;
function funcionesD47(){
if (paseD47 == true){
puntuacionUnoR = preguntas[47].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD47 = false;
}
}
var paseE47=true;
function funcionesE47(){
if (paseE47 == true){
puntuacionUnoR = preguntas[47].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE47 = false;
}
}
//----------------------------------------------
function vidas47(){
if(conteoVidas == 0){
document.getElementById("vida47A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida47B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida47C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA48=true;
function funcionesA48(){
if (paseA48 == true){
puntuacionUnoR = preguntas[48].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA48 = false;
}
}
var paseB48=true;
function funcionesB48(){
if (paseB48 == true){
puntuacionUnoR = preguntas[48].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB48 = false;
}
}
var paseC48=true;
function funcionesC48(){
if (paseC48 == true){
puntuacionUnoR = preguntas[48].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC48 = false;
}
}
var paseD48=true;
function funcionesD48(){
if (paseD48 == true){
puntuacionUnoR = preguntas[48].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD48 = false;
}
}
var paseE48=true;
function funcionesE48(){
if (paseE48 == true){
puntuacionUnoR = preguntas[48].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE48 = false;
}
}
//----------------------------------------------
function vidas48(){
if(conteoVidas == 0){
document.getElementById("vida48A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida48B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida48C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA49=true;
function funcionesA49(){
if (paseA49 == true){
puntuacionUnoR = preguntas[49].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA49 = false;
}
}
var paseB49=true;
function funcionesB49(){
if (paseB49 == true){
puntuacionUnoR = preguntas[49].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB49 = false;
}
}
var paseC49=true;
function funcionesC49(){
if (paseC49 == true){
puntuacionUnoR = preguntas[49].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC49 = false;
}
}
var paseD49=true;
function funcionesD49(){
if (paseD49 == true){
puntuacionUnoR = preguntas[49].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD49 = false;
}
}
var paseE49=true;
function funcionesE49(){
if (paseE49 == true){
puntuacionUnoR = preguntas[49].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE49 = false;
}
}
//----------------------------------------------
function vidas49(){
if(conteoVidas == 0){
document.getElementById("vida49A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida49B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida49C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA50=true;
function funcionesA50(){
if (paseA50 == true){
puntuacionUnoR = preguntas[50].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA50 = false;
}
}
var paseB50=true;
function funcionesB50(){
if (paseB50 == true){
puntuacionUnoR = preguntas[50].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB50 = false;
}
}
var paseC50=true;
function funcionesC50(){
if (paseC50 == true){
puntuacionUnoR = preguntas[50].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC50 = false;
}
}
var paseD50=true;
function funcionesD50(){
if (paseD50 == true){
puntuacionUnoR = preguntas[50].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD50 = false;
}
}
var paseE50=true;
function funcionesE50(){
if (paseE50 == true){
puntuacionUnoR = preguntas[50].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE50 = false;
}
}
//----------------------------------------------
function vidas50(){
if(conteoVidas == 0){
document.getElementById("vida50A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida50B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida50C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA51=true;
function funcionesA51(){
if (paseA51 == true){
puntuacionUnoR = preguntas[51].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA51 = false;
}
}
var paseB51=true;
function funcionesB51(){
if (paseB51 == true){
puntuacionUnoR = preguntas[51].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB51 = false;
}
}
var paseC51=true;
function funcionesC51(){
if (paseC51 == true){
puntuacionUnoR = preguntas[51].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC51 = false;
}
}
var paseD51=true;
function funcionesD51(){
if (paseD51 == true){
puntuacionUnoR = preguntas[51].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD51 = false;
}
}
var paseE51=true;
function funcionesE51(){
if (paseE51 == true){
puntuacionUnoR = preguntas[51].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE51 = false;
}
}
//----------------------------------------------
function vidas51(){
if(conteoVidas == 0){
document.getElementById("vida51A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida51B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida51C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA52=true;
function funcionesA52(){
if (paseA52 == true){
puntuacionUnoR = preguntas[52].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA52 = false;
}
}
var paseB52=true;
function funcionesB52(){
if (paseB52 == true){
puntuacionUnoR = preguntas[52].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB52 = false;
}
}
var paseC52=true;
function funcionesC52(){
if (paseC52 == true){
puntuacionUnoR = preguntas[52].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC52 = false;
}
}
var paseD52=true;
function funcionesD52(){
if (paseD52 == true){
puntuacionUnoR = preguntas[52].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD52 = false;
}
}
var paseE52=true;
function funcionesE52(){
if (paseE52 == true){
puntuacionUnoR = preguntas[52].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE52 = false;
}
}
//----------------------------------------------
function vidas52(){
if(conteoVidas == 0){
document.getElementById("vida52A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida52B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida52C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA53=true;
function funcionesA53(){
if (paseA53 == true){
puntuacionUnoR = preguntas[53].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA53 = false;
}
}
var paseB53=true;
function funcionesB53(){
if (paseB53 == true){
puntuacionUnoR = preguntas[53].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB53 = false;
}
}
var paseC53=true;
function funcionesC53(){
if (paseC53 == true){
puntuacionUnoR = preguntas[53].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC53 = false;
}
}
var paseD53=true;
function funcionesD53(){
if (paseD53 == true){
puntuacionUnoR = preguntas[53].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD53 = false;
}
}
var paseE53=true;
function funcionesE53(){
if (paseE53 == true){
puntuacionUnoR = preguntas[53].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE53 = false;
}
}
//----------------------------------------------
function vidas53(){
if(conteoVidas == 0){
document.getElementById("vida53A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida53B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida53C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA54=true;
function funcionesA54(){
if (paseA54 == true){
puntuacionUnoR = preguntas[54].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA54 = false;
}
}
var paseB54=true;
function funcionesB54(){
if (paseB54 == true){
puntuacionUnoR = preguntas[54].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB54 = false;
}
}
var paseC54=true;
function funcionesC54(){
if (paseC54 == true){
puntuacionUnoR = preguntas[54].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC54 = false;
}
}
var paseD54=true;
function funcionesD54(){
if (paseD54 == true){
puntuacionUnoR = preguntas[54].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD54 = false;
}
}
var paseE54=true;
function funcionesE54(){
if (paseE54 == true){
puntuacionUnoR = preguntas[54].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE54 = false;
}
}
//----------------------------------------------
function vidas54(){
if(conteoVidas == 0){
document.getElementById("vida54A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida54B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida54C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA55=true;
function funcionesA55(){
if (paseA55 == true){
puntuacionUnoR = preguntas[55].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA55 = false;
}
}
var paseB55=true;
function funcionesB55(){
if (paseB55 == true){
puntuacionUnoR = preguntas[55].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB55 = false;
}
}
var paseC55=true;
function funcionesC55(){
if (paseC55 == true){
puntuacionUnoR = preguntas[55].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC55 = false;
}
}
var paseD55=true;
function funcionesD55(){
if (paseD55 == true){
puntuacionUnoR = preguntas[55].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD55 = false;
}
}
var paseE55=true;
function funcionesE55(){
if (paseE55 == true){
puntuacionUnoR = preguntas[55].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE55 = false;
}
}
//----------------------------------------------
function vidas55(){
if(conteoVidas == 0){
document.getElementById("vida55A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida55B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida55C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA56=true;
function funcionesA56(){
if (paseA56 == true){
puntuacionUnoR = preguntas[56].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA56 = false;
}
}
var paseB56=true;
function funcionesB56(){
if (paseB56 == true){
puntuacionUnoR = preguntas[56].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB56 = false;
}
}
var paseC56=true;
function funcionesC56(){
if (paseC56 == true){
puntuacionUnoR = preguntas[56].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC56 = false;
}
}
var paseD56=true;
function funcionesD56(){
if (paseD56 == true){
puntuacionUnoR = preguntas[56].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD56 = false;
}
}
var paseE56=true;
function funcionesE56(){
if (paseE56 == true){
puntuacionUnoR = preguntas[56].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE56 = false;
}
}
//----------------------------------------------
function vidas56(){
if(conteoVidas == 0){
document.getElementById("vida56A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida56B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida56C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA57=true;
function funcionesA57(){
if (paseA57 == true){
puntuacionUnoR = preguntas[57].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA57 = false;
}
}
var paseB57=true;
function funcionesB57(){
if (paseB57 == true){
puntuacionUnoR = preguntas[57].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB57 = false;
}
}
var paseC57=true;
function funcionesC57(){
if (paseC57 == true){
puntuacionUnoR = preguntas[57].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC57 = false;
}
}
var paseD57=true;
function funcionesD57(){
if (paseD57 == true){
puntuacionUnoR = preguntas[57].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD57 = false;
}
}
var paseE57=true;
function funcionesE57(){
if (paseE57 == true){
puntuacionUnoR = preguntas[57].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE57 = false;
}
}
//----------------------------------------------
function vidas57(){
if(conteoVidas == 0){
document.getElementById("vida57A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida57B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida57C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA58=true;
function funcionesA58(){
if (paseA58 == true){
puntuacionUnoR = preguntas[58].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA58 = false;
}
}
var paseB58=true;
function funcionesB58(){
if (paseB58 == true){
puntuacionUnoR = preguntas[58].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB58 = false;
}
}
var paseC58=true;
function funcionesC58(){
if (paseC58 == true){
puntuacionUnoR = preguntas[58].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC58 = false;
}
}
var paseD58=true;
function funcionesD58(){
if (paseD58 == true){
puntuacionUnoR = preguntas[58].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD58 = false;
}
}
var paseE58=true;
function funcionesE58(){
if (paseE58 == true){
puntuacionUnoR = preguntas[58].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE58 = false;
}
}
//----------------------------------------------
function vidas58(){
if(conteoVidas == 0){
document.getElementById("vida58A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida58B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida58C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA59=true;
function funcionesA59(){
if (paseA59 == true){
puntuacionUnoR = preguntas[59].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA59 = false;
}
}
var paseB59=true;
function funcionesB59(){
if (paseB59 == true){
puntuacionUnoR = preguntas[59].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB59 = false;
}
}
var paseC59=true;
function funcionesC59(){
if (paseC59 == true){
puntuacionUnoR = preguntas[59].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC59 = false;
}
}
var paseD59=true;
function funcionesD59(){
if (paseD59 == true){
puntuacionUnoR = preguntas[59].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD59 = false;
}
}
var paseE59=true;
function funcionesE59(){
if (paseE59 == true){
puntuacionUnoR = preguntas[59].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE59 = false;
}
}
//----------------------------------------------
function vidas59(){
if(conteoVidas == 0){
document.getElementById("vida59A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida59B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida59C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA60=true;
function funcionesA60(){
if (paseA60 == true){
puntuacionUnoR = preguntas[60].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA60 = false;
}
}
var paseB60=true;
function funcionesB60(){
if (paseB60 == true){
puntuacionUnoR = preguntas[60].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB60 = false;
}
}
var paseC60=true;
function funcionesC60(){
if (paseC60 == true){
puntuacionUnoR = preguntas[60].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC60 = false;
}
}
var paseD60=true;
function funcionesD60(){
if (paseD60 == true){
puntuacionUnoR = preguntas[60].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD60 = false;
}
}
var paseE60=true;
function funcionesE60(){
if (paseE60 == true){
puntuacionUnoR = preguntas[60].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE60 = false;
}
}
//----------------------------------------------
function vidas60(){
if(conteoVidas == 0){
document.getElementById("vida60A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida60B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida60C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA61=true;
function funcionesA61(){
if (paseA61 == true){
puntuacionUnoR = preguntas[61].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA61 = false;
}
}
var paseB61=true;
function funcionesB61(){
if (paseB61 == true){
puntuacionUnoR = preguntas[61].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB61 = false;
}
}
var paseC61=true;
function funcionesC61(){
if (paseC61 == true){
puntuacionUnoR = preguntas[61].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC61 = false;
}
}
var paseD61=true;
function funcionesD61(){
if (paseD61 == true){
puntuacionUnoR = preguntas[61].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD61 = false;
}
}
var paseE61=true;
function funcionesE61(){
if (paseE61 == true){
puntuacionUnoR = preguntas[61].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE61 = false;
}
}
//----------------------------------------------
function vidas61(){
if(conteoVidas == 0){
document.getElementById("vida61A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida61B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida61C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA62=true;
function funcionesA62(){
if (paseA62 == true){
puntuacionUnoR = preguntas[62].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA62 = false;
}
}
var paseB62=true;
function funcionesB62(){
if (paseB62 == true){
puntuacionUnoR = preguntas[62].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB62 = false;
}
}
var paseC62=true;
function funcionesC62(){
if (paseC62 == true){
puntuacionUnoR = preguntas[62].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC62 = false;
}
}
var paseD62=true;
function funcionesD62(){
if (paseD62 == true){
puntuacionUnoR = preguntas[62].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD62 = false;
}
}
var paseE62=true;
function funcionesE62(){
if (paseE62 == true){
puntuacionUnoR = preguntas[62].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE62 = false;
}
}
//----------------------------------------------
function vidas62(){
if(conteoVidas == 0){
document.getElementById("vida62A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida62B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida62C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA63=true;
function funcionesA63(){
if (paseA63 == true){
puntuacionUnoR = preguntas[63].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA63 = false;
}
}
var paseB63=true;
function funcionesB63(){
if (paseB63 == true){
puntuacionUnoR = preguntas[63].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB63 = false;
}
}
var paseC63=true;
function funcionesC63(){
if (paseC63 == true){
puntuacionUnoR = preguntas[63].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC63 = false;
}
}
var paseD63=true;
function funcionesD63(){
if (paseD63 == true){
puntuacionUnoR = preguntas[63].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD63 = false;
}
}
var paseE63=true;
function funcionesE63(){
if (paseE63 == true){
puntuacionUnoR = preguntas[63].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE63 = false;
}
}
//----------------------------------------------
function vidas63(){
if(conteoVidas == 0){
document.getElementById("vida63A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida63B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida63C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA64=true;
function funcionesA64(){
if (paseA64 == true){
puntuacionUnoR = preguntas[64].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA64 = false;
}
}
var paseB64=true;
function funcionesB64(){
if (paseB64 == true){
puntuacionUnoR = preguntas[64].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB64 = false;
}
}
var paseC64=true;
function funcionesC64(){
if (paseC64 == true){
puntuacionUnoR = preguntas[64].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC64 = false;
}
}
var paseD64=true;
function funcionesD64(){
if (paseD64 == true){
puntuacionUnoR = preguntas[64].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD64 = false;
}
}
var paseE64=true;
function funcionesE64(){
if (paseE64 == true){
puntuacionUnoR = preguntas[64].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE64 = false;
}
}
//----------------------------------------------
function vidas64(){
if(conteoVidas == 0){
document.getElementById("vida64A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida64B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida64C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA65=true;
function funcionesA65(){
if (paseA65 == true){
puntuacionUnoR = preguntas[65].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA65 = false;
}
}
var paseB65=true;
function funcionesB65(){
if (paseB65 == true){
puntuacionUnoR = preguntas[65].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB65 = false;
}
}
var paseC65=true;
function funcionesC65(){
if (paseC65 == true){
puntuacionUnoR = preguntas[65].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC65 = false;
}
}
var paseD65=true;
function funcionesD65(){
if (paseD65 == true){
puntuacionUnoR = preguntas[65].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD65 = false;
}
}
var paseE65=true;
function funcionesE65(){
if (paseE65 == true){
puntuacionUnoR = preguntas[65].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE65 = false;
}
}
//----------------------------------------------
function vidas65(){
if(conteoVidas == 0){
document.getElementById("vida65A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida65B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida65C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA66=true;
function funcionesA66(){
if (paseA66 == true){
puntuacionUnoR = preguntas[66].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA66 = false;
}
}
var paseB66=true;
function funcionesB66(){
if (paseB66 == true){
puntuacionUnoR = preguntas[66].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB66 = false;
}
}
var paseC66=true;
function funcionesC66(){
if (paseC66 == true){
puntuacionUnoR = preguntas[66].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC66 = false;
}
}
var paseD66=true;
function funcionesD66(){
if (paseD66 == true){
puntuacionUnoR = preguntas[66].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD66 = false;
}
}
var paseE66=true;
function funcionesE66(){
if (paseE66 == true){
puntuacionUnoR = preguntas[66].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE66 = false;
}
}
//----------------------------------------------
function vidas66(){
if(conteoVidas == 0){
document.getElementById("vida66A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida66B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida66C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA67=true;
function funcionesA67(){
if (paseA67 == true){
puntuacionUnoR = preguntas[67].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA67 = false;
}
}
var paseB67=true;
function funcionesB67(){
if (paseB67 == true){
puntuacionUnoR = preguntas[67].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB67 = false;
}
}
var paseC67=true;
function funcionesC67(){
if (paseC67 == true){
puntuacionUnoR = preguntas[67].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC67 = false;
}
}
var paseD67=true;
function funcionesD67(){
if (paseD67 == true){
puntuacionUnoR = preguntas[67].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD67 = false;
}
}
var paseE67=true;
function funcionesE67(){
if (paseE67 == true){
puntuacionUnoR = preguntas[67].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE67 = false;
}
}
//----------------------------------------------
function vidas67(){
if(conteoVidas == 0){
document.getElementById("vida67A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida67B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida67C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA68=true;
function funcionesA68(){
if (paseA68 == true){
puntuacionUnoR = preguntas[68].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA68 = false;
}
}
var paseB68=true;
function funcionesB68(){
if (paseB68 == true){
puntuacionUnoR = preguntas[68].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB68 = false;
}
}
var paseC68=true;
function funcionesC68(){
if (paseC68 == true){
puntuacionUnoR = preguntas[68].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC68 = false;
}
}
var paseD68=true;
function funcionesD68(){
if (paseD68 == true){
puntuacionUnoR = preguntas[68].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD68 = false;
}
}
var paseE68=true;
function funcionesE68(){
if (paseE68 == true){
puntuacionUnoR = preguntas[68].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE68 = false;
}
}
//----------------------------------------------
function vidas68(){
if(conteoVidas == 0){
document.getElementById("vida68A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida68B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida68C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA69=true;
function funcionesA69(){
if (paseA69 == true){
puntuacionUnoR = preguntas[69].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA69 = false;
}
}
var paseB69=true;
function funcionesB69(){
if (paseB69 == true){
puntuacionUnoR = preguntas[69].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB69 = false;
}
}
var paseC69=true;
function funcionesC69(){
if (paseC69 == true){
puntuacionUnoR = preguntas[69].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC69 = false;
}
}
var paseD69=true;
function funcionesD69(){
if (paseD69 == true){
puntuacionUnoR = preguntas[69].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD69 = false;
}
}
var paseE69=true;
function funcionesE69(){
if (paseE69 == true){
puntuacionUnoR = preguntas[69].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE69 = false;
}
}
//----------------------------------------------
function vidas69(){
if(conteoVidas == 0){
document.getElementById("vida69A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida69B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida69C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA70=true;
function funcionesA70(){
if (paseA70 == true){
puntuacionUnoR = preguntas[70].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA70 = false;
}
}
var paseB70=true;
function funcionesB70(){
if (paseB70 == true){
puntuacionUnoR = preguntas[70].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB70 = false;
}
}
var paseC70=true;
function funcionesC70(){
if (paseC70 == true){
puntuacionUnoR = preguntas[70].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC70 = false;
}
}
var paseD70=true;
function funcionesD70(){
if (paseD70 == true){
puntuacionUnoR = preguntas[70].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD70 = false;
}
}
var paseE70=true;
function funcionesE70(){
if (paseE70 == true){
puntuacionUnoR = preguntas[70].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE70 = false;
}
}
//----------------------------------------------
function vidas70(){
if(conteoVidas == 0){
document.getElementById("vida70A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida70B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida70C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA71=true;
function funcionesA71(){
if (paseA71 == true){
puntuacionUnoR = preguntas[71].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA71 = false;
}
}
var paseB71=true;
function funcionesB71(){
if (paseB71 == true){
puntuacionUnoR = preguntas[71].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB71 = false;
}
}
var paseC71=true;
function funcionesC71(){
if (paseC71 == true){
puntuacionUnoR = preguntas[71].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC71 = false;
}
}
var paseD71=true;
function funcionesD71(){
if (paseD71 == true){
puntuacionUnoR = preguntas[71].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD71 = false;
}
}
var paseE71=true;
function funcionesE71(){
if (paseE71 == true){
puntuacionUnoR = preguntas[71].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE71 = false;
}
}
//----------------------------------------------
function vidas71(){
if(conteoVidas == 0){
document.getElementById("vida71A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida71B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida71C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA72=true;
function funcionesA72(){
if (paseA72 == true){
puntuacionUnoR = preguntas[72].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA72 = false;
}
}
var paseB72=true;
function funcionesB72(){
if (paseB72 == true){
puntuacionUnoR = preguntas[72].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB72 = false;
}
}
var paseC72=true;
function funcionesC72(){
if (paseC72 == true){
puntuacionUnoR = preguntas[72].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC72 = false;
}
}
var paseD72=true;
function funcionesD72(){
if (paseD72 == true){
puntuacionUnoR = preguntas[72].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD72 = false;
}
}
var paseE72=true;
function funcionesE72(){
if (paseE72 == true){
puntuacionUnoR = preguntas[72].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE72 = false;
}
}
//----------------------------------------------
function vidas72(){
if(conteoVidas == 0){
document.getElementById("vida72A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida72B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida72C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA73=true;
function funcionesA73(){
if (paseA73 == true){
puntuacionUnoR = preguntas[73].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA73 = false;
}
}
var paseB73=true;
function funcionesB73(){
if (paseB73 == true){
puntuacionUnoR = preguntas[73].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB73 = false;
}
}
var paseC73=true;
function funcionesC73(){
if (paseC73 == true){
puntuacionUnoR = preguntas[73].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC73 = false;
}
}
var paseD73=true;
function funcionesD73(){
if (paseD73 == true){
puntuacionUnoR = preguntas[73].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD73 = false;
}
}
var paseE73=true;
function funcionesE73(){
if (paseE73 == true){
puntuacionUnoR = preguntas[73].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE73 = false;
}
}
//----------------------------------------------
function vidas73(){
if(conteoVidas == 0){
document.getElementById("vida73A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida73B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida73C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA74=true;
function funcionesA74(){
if (paseA74 == true){
puntuacionUnoR = preguntas[74].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA74 = false;
}
}
var paseB74=true;
function funcionesB74(){
if (paseB74 == true){
puntuacionUnoR = preguntas[74].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB74 = false;
}
}
var paseC74=true;
function funcionesC74(){
if (paseC74 == true){
puntuacionUnoR = preguntas[74].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC74 = false;
}
}
var paseD74=true;
function funcionesD74(){
if (paseD74 == true){
puntuacionUnoR = preguntas[74].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD74 = false;
}
}
var paseE74=true;
function funcionesE74(){
if (paseE74 == true){
puntuacionUnoR = preguntas[74].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE74 = false;
}
}
//----------------------------------------------
function vidas74(){
if(conteoVidas == 0){
document.getElementById("vida74A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida74B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida74C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA75=true;
function funcionesA75(){
if (paseA75 == true){
puntuacionUnoR = preguntas[75].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA75 = false;
}
}
var paseB75=true;
function funcionesB75(){
if (paseB75 == true){
puntuacionUnoR = preguntas[75].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB75 = false;
}
}
var paseC75=true;
function funcionesC75(){
if (paseC75 == true){
puntuacionUnoR = preguntas[75].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC75 = false;
}
}
var paseD75=true;
function funcionesD75(){
if (paseD75 == true){
puntuacionUnoR = preguntas[75].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD75 = false;
}
}
var paseE75=true;
function funcionesE75(){
if (paseE75 == true){
puntuacionUnoR = preguntas[75].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE75 = false;
}
}
//----------------------------------------------
function vidas75(){
if(conteoVidas == 0){
document.getElementById("vida75A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida75B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida75C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA76=true;
function funcionesA76(){
if (paseA76 == true){
puntuacionUnoR = preguntas[76].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA76 = false;
}
}
var paseB76=true;
function funcionesB76(){
if (paseB76 == true){
puntuacionUnoR = preguntas[76].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB76 = false;
}
}
var paseC76=true;
function funcionesC76(){
if (paseC76 == true){
puntuacionUnoR = preguntas[76].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC76 = false;
}
}
var paseD76=true;
function funcionesD76(){
if (paseD76 == true){
puntuacionUnoR = preguntas[76].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD76 = false;
}
}
var paseE76=true;
function funcionesE76(){
if (paseE76 == true){
puntuacionUnoR = preguntas[76].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE76 = false;
}
}
//----------------------------------------------
function vidas76(){
if(conteoVidas == 0){
document.getElementById("vida76A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida76B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida76C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA77=true;
function funcionesA77(){
if (paseA77 == true){
puntuacionUnoR = preguntas[77].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA77 = false;
}
}
var paseB77=true;
function funcionesB77(){
if (paseB77 == true){
puntuacionUnoR = preguntas[77].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB77 = false;
}
}
var paseC77=true;
function funcionesC77(){
if (paseC77 == true){
puntuacionUnoR = preguntas[77].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC77 = false;
}
}
var paseD77=true;
function funcionesD77(){
if (paseD77 == true){
puntuacionUnoR = preguntas[77].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD77 = false;
}
}
var paseE77=true;
function funcionesE77(){
if (paseE77 == true){
puntuacionUnoR = preguntas[77].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE77 = false;
}
}
//----------------------------------------------
function vidas77(){
if(conteoVidas == 0){
document.getElementById("vida77A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida77B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida77C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA78=true;
function funcionesA78(){
if (paseA78 == true){
puntuacionUnoR = preguntas[78].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA78 = false;
}
}
var paseB78=true;
function funcionesB78(){
if (paseB78 == true){
puntuacionUnoR = preguntas[78].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB78 = false;
}
}
var paseC78=true;
function funcionesC78(){
if (paseC78 == true){
puntuacionUnoR = preguntas[78].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC78 = false;
}
}
var paseD78=true;
function funcionesD78(){
if (paseD78 == true){
puntuacionUnoR = preguntas[78].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD78 = false;
}
}
var paseE78=true;
function funcionesE78(){
if (paseE78 == true){
puntuacionUnoR = preguntas[78].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE78 = false;
}
}
//----------------------------------------------
function vidas78(){
if(conteoVidas == 0){
document.getElementById("vida78A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida78B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida78C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA79=true;
function funcionesA79(){
if (paseA79 == true){
puntuacionUnoR = preguntas[79].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA79 = false;
}
}
var paseB79=true;
function funcionesB79(){
if (paseB79 == true){
puntuacionUnoR = preguntas[79].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB79 = false;
}
}
var paseC79=true;
function funcionesC79(){
if (paseC79 == true){
puntuacionUnoR = preguntas[79].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC79 = false;
}
}
var paseD79=true;
function funcionesD79(){
if (paseD79 == true){
puntuacionUnoR = preguntas[79].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD79 = false;
}
}
var paseE79=true;
function funcionesE79(){
if (paseE79 == true){
puntuacionUnoR = preguntas[79].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE79 = false;
}
}
//----------------------------------------------
function vidas79(){
if(conteoVidas == 0){
document.getElementById("vida79A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida79B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida79C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA80=true;
function funcionesA80(){
if (paseA80 == true){
puntuacionUnoR = preguntas[80].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA80 = false;
}
}
var paseB80=true;
function funcionesB80(){
if (paseB80 == true){
puntuacionUnoR = preguntas[80].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB80 = false;
}
}
var paseC80=true;
function funcionesC80(){
if (paseC80 == true){
puntuacionUnoR = preguntas[80].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC80 = false;
}
}
var paseD80=true;
function funcionesD80(){
if (paseD80 == true){
puntuacionUnoR = preguntas[80].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD80 = false;
}
}
var paseE80=true;
function funcionesE80(){
if (paseE80 == true){
puntuacionUnoR = preguntas[80].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE80 = false;
}
}
//----------------------------------------------
function vidas80(){
if(conteoVidas == 0){
document.getElementById("vida80A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida80B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida80C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA81=true;
function funcionesA81(){
if (paseA81 == true){
puntuacionUnoR = preguntas[81].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA81 = false;
}
}
var paseB81=true;
function funcionesB81(){
if (paseB81 == true){
puntuacionUnoR = preguntas[81].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB81 = false;
}
}
var paseC81=true;
function funcionesC81(){
if (paseC81 == true){
puntuacionUnoR = preguntas[81].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC81 = false;
}
}
var paseD81=true;
function funcionesD81(){
if (paseD81 == true){
puntuacionUnoR = preguntas[81].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD81 = false;
}
}
var paseE81=true;
function funcionesE81(){
if (paseE81 == true){
puntuacionUnoR = preguntas[81].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE81 = false;
}
}
//----------------------------------------------
function vidas81(){
if(conteoVidas == 0){
document.getElementById("vida81A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida81B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida81C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA82=true;
function funcionesA82(){
if (paseA82 == true){
puntuacionUnoR = preguntas[82].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA82 = false;
}
}
var paseB82=true;
function funcionesB82(){
if (paseB82 == true){
puntuacionUnoR = preguntas[82].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB82 = false;
}
}
var paseC82=true;
function funcionesC82(){
if (paseC82 == true){
puntuacionUnoR = preguntas[82].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC82 = false;
}
}
var paseD82=true;
function funcionesD82(){
if (paseD82 == true){
puntuacionUnoR = preguntas[82].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD82 = false;
}
}
var paseE82=true;
function funcionesE82(){
if (paseE82 == true){
puntuacionUnoR = preguntas[82].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE82 = false;
}
}
//----------------------------------------------
function vidas82(){
if(conteoVidas == 0){
document.getElementById("vida82A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida82B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida82C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA83=true;
function funcionesA83(){
if (paseA83 == true){
puntuacionUnoR = preguntas[83].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA83 = false;
}
}
var paseB83=true;
function funcionesB83(){
if (paseB83 == true){
puntuacionUnoR = preguntas[83].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB83 = false;
}
}
var paseC83=true;
function funcionesC83(){
if (paseC83 == true){
puntuacionUnoR = preguntas[83].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC83 = false;
}
}
var paseD83=true;
function funcionesD83(){
if (paseD83 == true){
puntuacionUnoR = preguntas[83].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD83 = false;
}
}
var paseE83=true;
function funcionesE83(){
if (paseE83 == true){
puntuacionUnoR = preguntas[83].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE83 = false;
}
}
//----------------------------------------------
function vidas83(){
if(conteoVidas == 0){
document.getElementById("vida83A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida83B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida83C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA84=true;
function funcionesA84(){
if (paseA84 == true){
puntuacionUnoR = preguntas[84].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA84 = false;
}
}
var paseB84=true;
function funcionesB84(){
if (paseB84 == true){
puntuacionUnoR = preguntas[84].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB84 = false;
}
}
var paseC84=true;
function funcionesC84(){
if (paseC84 == true){
puntuacionUnoR = preguntas[84].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC84 = false;
}
}
var paseD84=true;
function funcionesD84(){
if (paseD84 == true){
puntuacionUnoR = preguntas[84].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD84 = false;
}
}
var paseE84=true;
function funcionesE84(){
if (paseE84 == true){
puntuacionUnoR = preguntas[84].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE84 = false;
}
}
//----------------------------------------------
function vidas84(){
if(conteoVidas == 0){
document.getElementById("vida84A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida84B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida84C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA85=true;
function funcionesA85(){
if (paseA85 == true){
puntuacionUnoR = preguntas[85].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA85 = false;
}
}
var paseB85=true;
function funcionesB85(){
if (paseB85 == true){
puntuacionUnoR = preguntas[85].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB85 = false;
}
}
var paseC85=true;
function funcionesC85(){
if (paseC85 == true){
puntuacionUnoR = preguntas[85].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC85 = false;
}
}
var paseD85=true;
function funcionesD85(){
if (paseD85 == true){
puntuacionUnoR = preguntas[85].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD85 = false;
}
}
var paseE85=true;
function funcionesE85(){
if (paseE85 == true){
puntuacionUnoR = preguntas[85].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE85 = false;
}
}
//----------------------------------------------
function vidas85(){
if(conteoVidas == 0){
document.getElementById("vida85A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida85B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida85C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA86=true;
function funcionesA86(){
if (paseA86 == true){
puntuacionUnoR = preguntas[86].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA86 = false;
}
}
var paseB86=true;
function funcionesB86(){
if (paseB86 == true){
puntuacionUnoR = preguntas[86].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB86 = false;
}
}
var paseC86=true;
function funcionesC86(){
if (paseC86 == true){
puntuacionUnoR = preguntas[86].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC86 = false;
}
}
var paseD86=true;
function funcionesD86(){
if (paseD86 == true){
puntuacionUnoR = preguntas[86].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD86 = false;
}
}
var paseE86=true;
function funcionesE86(){
if (paseE86 == true){
puntuacionUnoR = preguntas[86].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE86 = false;
}
}
//----------------------------------------------
function vidas86(){
if(conteoVidas == 0){
document.getElementById("vida86A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida86B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida86C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA87=true;
function funcionesA87(){
if (paseA87 == true){
puntuacionUnoR = preguntas[87].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA87 = false;
}
}
var paseB87=true;
function funcionesB87(){
if (paseB87 == true){
puntuacionUnoR = preguntas[87].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB87 = false;
}
}
var paseC87=true;
function funcionesC87(){
if (paseC87 == true){
puntuacionUnoR = preguntas[87].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC87 = false;
}
}
var paseD87=true;
function funcionesD87(){
if (paseD87 == true){
puntuacionUnoR = preguntas[87].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD87 = false;
}
}
var paseE87=true;
function funcionesE87(){
if (paseE87 == true){
puntuacionUnoR = preguntas[87].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE87 = false;
}
}
//----------------------------------------------
function vidas87(){
if(conteoVidas == 0){
document.getElementById("vida87A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida87B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida87C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA88=true;
function funcionesA88(){
if (paseA88 == true){
puntuacionUnoR = preguntas[88].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA88 = false;
}
}
var paseB88=true;
function funcionesB88(){
if (paseB88 == true){
puntuacionUnoR = preguntas[88].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB88 = false;
}
}
var paseC88=true;
function funcionesC88(){
if (paseC88 == true){
puntuacionUnoR = preguntas[88].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC88 = false;
}
}
var paseD88=true;
function funcionesD88(){
if (paseD88 == true){
puntuacionUnoR = preguntas[88].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD88 = false;
}
}
var paseE88=true;
function funcionesE88(){
if (paseE88 == true){
puntuacionUnoR = preguntas[88].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE88 = false;
}
}
//----------------------------------------------
function vidas88(){
if(conteoVidas == 0){
document.getElementById("vida88A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida88B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida88C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA89=true;
function funcionesA89(){
if (paseA89 == true){
puntuacionUnoR = preguntas[89].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA89 = false;
}
}
var paseB89=true;
function funcionesB89(){
if (paseB89 == true){
puntuacionUnoR = preguntas[89].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB89 = false;
}
}
var paseC89=true;
function funcionesC89(){
if (paseC89 == true){
puntuacionUnoR = preguntas[89].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC89 = false;
}
}
var paseD89=true;
function funcionesD89(){
if (paseD89 == true){
puntuacionUnoR = preguntas[89].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD89 = false;
}
}
var paseE89=true;
function funcionesE89(){
if (paseE89 == true){
puntuacionUnoR = preguntas[89].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE89 = false;
}
}
//----------------------------------------------
function vidas89(){
if(conteoVidas == 0){
document.getElementById("vida89A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida89B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida89C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA90=true;
function funcionesA90(){
if (paseA90 == true){
puntuacionUnoR = preguntas[90].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA90 = false;
}
}
var paseB90=true;
function funcionesB90(){
if (paseB90 == true){
puntuacionUnoR = preguntas[90].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB90 = false;
}
}
var paseC90=true;
function funcionesC90(){
if (paseC90 == true){
puntuacionUnoR = preguntas[90].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC90 = false;
}
}
var paseD90=true;
function funcionesD90(){
if (paseD90 == true){
puntuacionUnoR = preguntas[90].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD90 = false;
}
}
var paseE90=true;
function funcionesE90(){
if (paseE90 == true){
puntuacionUnoR = preguntas[90].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE90 = false;
}
}
//----------------------------------------------
function vidas90(){
if(conteoVidas == 0){
document.getElementById("vida90A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida90B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida90C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA91=true;
function funcionesA91(){
if (paseA91 == true){
puntuacionUnoR = preguntas[91].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA91 = false;
}
}
var paseB91=true;
function funcionesB91(){
if (paseB91 == true){
puntuacionUnoR = preguntas[91].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB91 = false;
}
}
var paseC91=true;
function funcionesC91(){
if (paseC91 == true){
puntuacionUnoR = preguntas[91].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC91 = false;
}
}
var paseD91=true;
function funcionesD91(){
if (paseD91 == true){
puntuacionUnoR = preguntas[91].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD91 = false;
}
}
var paseE91=true;
function funcionesE91(){
if (paseE91 == true){
puntuacionUnoR = preguntas[91].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE91 = false;
}
}
//----------------------------------------------
function vidas91(){
if(conteoVidas == 0){
document.getElementById("vida91A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida91B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida91C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA92=true;
function funcionesA92(){
if (paseA92 == true){
puntuacionUnoR = preguntas[92].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA92 = false;
}
}
var paseB92=true;
function funcionesB92(){
if (paseB92 == true){
puntuacionUnoR = preguntas[92].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB92 = false;
}
}
var paseC92=true;
function funcionesC92(){
if (paseC92 == true){
puntuacionUnoR = preguntas[92].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC92 = false;
}
}
var paseD92=true;
function funcionesD92(){
if (paseD92 == true){
puntuacionUnoR = preguntas[92].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD92 = false;
}
}
var paseE92=true;
function funcionesE92(){
if (paseE92 == true){
puntuacionUnoR = preguntas[92].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE92 = false;
}
}
//----------------------------------------------
function vidas92(){
if(conteoVidas == 0){
document.getElementById("vida92A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida92B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida92C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA93=true;
function funcionesA93(){
if (paseA93 == true){
puntuacionUnoR = preguntas[93].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA93 = false;
}
}
var paseB93=true;
function funcionesB93(){
if (paseB93 == true){
puntuacionUnoR = preguntas[93].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB93 = false;
}
}
var paseC93=true;
function funcionesC93(){
if (paseC93 == true){
puntuacionUnoR = preguntas[93].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC93 = false;
}
}
var paseD93=true;
function funcionesD93(){
if (paseD93 == true){
puntuacionUnoR = preguntas[93].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD93 = false;
}
}
var paseE93=true;
function funcionesE93(){
if (paseE93 == true){
puntuacionUnoR = preguntas[93].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE93 = false;
}
}
//----------------------------------------------
function vidas93(){
if(conteoVidas == 0){
document.getElementById("vida93A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida93B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida93C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA94=true;
function funcionesA94(){
if (paseA94 == true){
puntuacionUnoR = preguntas[94].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA94 = false;
}
}
var paseB94=true;
function funcionesB94(){
if (paseB94 == true){
puntuacionUnoR = preguntas[94].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB94 = false;
}
}
var paseC94=true;
function funcionesC94(){
if (paseC94 == true){
puntuacionUnoR = preguntas[94].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC94 = false;
}
}
var paseD94=true;
function funcionesD94(){
if (paseD94 == true){
puntuacionUnoR = preguntas[94].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD94 = false;
}
}
var paseE94=true;
function funcionesE94(){
if (paseE94 == true){
puntuacionUnoR = preguntas[94].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE94 = false;
}
}
//----------------------------------------------
function vidas94(){
if(conteoVidas == 0){
document.getElementById("vida94A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida94B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida94C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA95=true;
function funcionesA95(){
if (paseA95 == true){
puntuacionUnoR = preguntas[95].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA95 = false;
}
}
var paseB95=true;
function funcionesB95(){
if (paseB95 == true){
puntuacionUnoR = preguntas[95].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB95 = false;
}
}
var paseC95=true;
function funcionesC95(){
if (paseC95 == true){
puntuacionUnoR = preguntas[95].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC95 = false;
}
}
var paseD95=true;
function funcionesD95(){
if (paseD95 == true){
puntuacionUnoR = preguntas[95].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD95 = false;
}
}
var paseE95=true;
function funcionesE95(){
if (paseE95 == true){
puntuacionUnoR = preguntas[95].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE95 = false;
}
}
//----------------------------------------------
function vidas95(){
if(conteoVidas == 0){
document.getElementById("vida95A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida95B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida95C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA96=true;
function funcionesA96(){
if (paseA96 == true){
puntuacionUnoR = preguntas[96].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA96 = false;
}
}
var paseB96=true;
function funcionesB96(){
if (paseB96 == true){
puntuacionUnoR = preguntas[96].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB96 = false;
}
}
var paseC96=true;
function funcionesC96(){
if (paseC96 == true){
puntuacionUnoR = preguntas[96].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC96 = false;
}
}
var paseD96=true;
function funcionesD96(){
if (paseD96 == true){
puntuacionUnoR = preguntas[96].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD96 = false;
}
}
var paseE96=true;
function funcionesE96(){
if (paseE96 == true){
puntuacionUnoR = preguntas[96].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE96 = false;
}
}
//----------------------------------------------
function vidas96(){
if(conteoVidas == 0){
document.getElementById("vida96A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida96B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida96C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA97=true;
function funcionesA97(){
if (paseA97 == true){
puntuacionUnoR = preguntas[97].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA97 = false;
}
}
var paseB97=true;
function funcionesB97(){
if (paseB97 == true){
puntuacionUnoR = preguntas[97].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB97 = false;
}
}
var paseC97=true;
function funcionesC97(){
if (paseC97 == true){
puntuacionUnoR = preguntas[97].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC97 = false;
}
}
var paseD97=true;
function funcionesD97(){
if (paseD97 == true){
puntuacionUnoR = preguntas[97].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD97 = false;
}
}
var paseE97=true;
function funcionesE97(){
if (paseE97 == true){
puntuacionUnoR = preguntas[97].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE97 = false;
}
}
//----------------------------------------------
function vidas97(){
if(conteoVidas == 0){
document.getElementById("vida97A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida97B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida97C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA98=true;
function funcionesA98(){
if (paseA98 == true){
puntuacionUnoR = preguntas[98].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA98 = false;
}
}
var paseB98=true;
function funcionesB98(){
if (paseB98 == true){
puntuacionUnoR = preguntas[98].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB98 = false;
}
}
var paseC98=true;
function funcionesC98(){
if (paseC98 == true){
puntuacionUnoR = preguntas[98].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC98 = false;
}
}
var paseD98=true;
function funcionesD98(){
if (paseD98 == true){
puntuacionUnoR = preguntas[98].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD98 = false;
}
}
var paseE98=true;
function funcionesE98(){
if (paseE98 == true){
puntuacionUnoR = preguntas[98].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE98 = false;
}
}
//----------------------------------------------
function vidas98(){
if(conteoVidas == 0){
document.getElementById("vida98A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida98B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida98C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA99=true;
function funcionesA99(){
if (paseA99 == true){
puntuacionUnoR = preguntas[99].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA99 = false;
}
}
var paseB99=true;
function funcionesB99(){
if (paseB99 == true){
puntuacionUnoR = preguntas[99].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB99 = false;
}
}
var paseC99=true;
function funcionesC99(){
if (paseC99 == true){
puntuacionUnoR = preguntas[99].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC99 = false;
}
}
var paseD99=true;
function funcionesD99(){
if (paseD99 == true){
puntuacionUnoR = preguntas[99].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD99 = false;
}
}
var paseE99=true;
function funcionesE99(){
if (paseE99 == true){
puntuacionUnoR = preguntas[99].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE99 = false;
}
}
//----------------------------------------------
function vidas99(){
if(conteoVidas == 0){
document.getElementById("vida99A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida99B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida99C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA100=true;
function funcionesA100(){
if (paseA100 == true){
puntuacionUnoR = preguntas[100].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA100 = false;
}
}
var paseB100=true;
function funcionesB100(){
if (paseB100 == true){
puntuacionUnoR = preguntas[100].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB100 = false;
}
}
var paseC100=true;
function funcionesC100(){
if (paseC100 == true){
puntuacionUnoR = preguntas[100].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC100 = false;
}
}
var paseD100=true;
function funcionesD100(){
if (paseD100 == true){
puntuacionUnoR = preguntas[100].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD100 = false;
}
}
var paseE100=true;
function funcionesE100(){
if (paseE100 == true){
puntuacionUnoR = preguntas[100].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE100 = false;
}
}
//----------------------------------------------
function vidas100(){
if(conteoVidas == 0){
document.getElementById("vida100A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida100B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida100C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA101=true;
function funcionesA101(){
if (paseA101 == true){
puntuacionUnoR = preguntas[101].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA101 = false;
}
}
var paseB101=true;
function funcionesB101(){
if (paseB101 == true){
puntuacionUnoR = preguntas[101].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB101 = false;
}
}
var paseC101=true;
function funcionesC101(){
if (paseC101 == true){
puntuacionUnoR = preguntas[101].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC101 = false;
}
}
var paseD101=true;
function funcionesD101(){
if (paseD101 == true){
puntuacionUnoR = preguntas[101].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD101 = false;
}
}
var paseE101=true;
function funcionesE101(){
if (paseE101 == true){
puntuacionUnoR = preguntas[101].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE101 = false;
}
}
//----------------------------------------------
function vidas101(){
if(conteoVidas == 0){
document.getElementById("vida101A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida101B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida101C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA102=true;
function funcionesA102(){
if (paseA102 == true){
puntuacionUnoR = preguntas[102].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA102 = false;
}
}
var paseB102=true;
function funcionesB102(){
if (paseB102 == true){
puntuacionUnoR = preguntas[102].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB102 = false;
}
}
var paseC102=true;
function funcionesC102(){
if (paseC102 == true){
puntuacionUnoR = preguntas[102].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC102 = false;
}
}
var paseD102=true;
function funcionesD102(){
if (paseD102 == true){
puntuacionUnoR = preguntas[102].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD102 = false;
}
}
var paseE102=true;
function funcionesE102(){
if (paseE102 == true){
puntuacionUnoR = preguntas[102].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE102 = false;
}
}
//----------------------------------------------
function vidas102(){
if(conteoVidas == 0){
document.getElementById("vida102A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida102B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida102C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA103=true;
function funcionesA103(){
if (paseA103 == true){
puntuacionUnoR = preguntas[103].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA103 = false;
}
}
var paseB103=true;
function funcionesB103(){
if (paseB103 == true){
puntuacionUnoR = preguntas[103].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB103 = false;
}
}
var paseC103=true;
function funcionesC103(){
if (paseC103 == true){
puntuacionUnoR = preguntas[103].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC103 = false;
}
}
var paseD103=true;
function funcionesD103(){
if (paseD103 == true){
puntuacionUnoR = preguntas[103].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD103 = false;
}
}
var paseE103=true;
function funcionesE103(){
if (paseE103 == true){
puntuacionUnoR = preguntas[103].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE103 = false;
}
}
//----------------------------------------------
function vidas103(){
if(conteoVidas == 0){
document.getElementById("vida103A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida103B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida103C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA104=true;
function funcionesA104(){
if (paseA104 == true){
puntuacionUnoR = preguntas[104].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA104 = false;
}
}
var paseB104=true;
function funcionesB104(){
if (paseB104 == true){
puntuacionUnoR = preguntas[104].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB104 = false;
}
}
var paseC104=true;
function funcionesC104(){
if (paseC104 == true){
puntuacionUnoR = preguntas[104].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC104 = false;
}
}
var paseD104=true;
function funcionesD104(){
if (paseD104 == true){
puntuacionUnoR = preguntas[104].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD104 = false;
}
}
var paseE104=true;
function funcionesE104(){
if (paseE104 == true){
puntuacionUnoR = preguntas[104].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE104 = false;
}
}
//----------------------------------------------
function vidas104(){
if(conteoVidas == 0){
document.getElementById("vida104A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida104B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida104C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA105=true;
function funcionesA105(){
if (paseA105 == true){
puntuacionUnoR = preguntas[105].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA105 = false;
}
}
var paseB105=true;
function funcionesB105(){
if (paseB105 == true){
puntuacionUnoR = preguntas[105].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB105 = false;
}
}
var paseC105=true;
function funcionesC105(){
if (paseC105 == true){
puntuacionUnoR = preguntas[105].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC105 = false;
}
}
var paseD105=true;
function funcionesD105(){
if (paseD105 == true){
puntuacionUnoR = preguntas[105].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD105 = false;
}
}
var paseE105=true;
function funcionesE105(){
if (paseE105 == true){
puntuacionUnoR = preguntas[105].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE105 = false;
}
}
//----------------------------------------------
function vidas105(){
if(conteoVidas == 0){
document.getElementById("vida105A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida105B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida105C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA106=true;
function funcionesA106(){
if (paseA106 == true){
puntuacionUnoR = preguntas[106].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA106 = false;
}
}
var paseB106=true;
function funcionesB106(){
if (paseB106 == true){
puntuacionUnoR = preguntas[106].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB106 = false;
}
}
var paseC106=true;
function funcionesC106(){
if (paseC106 == true){
puntuacionUnoR = preguntas[106].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC106 = false;
}
}
var paseD106=true;
function funcionesD106(){
if (paseD106 == true){
puntuacionUnoR = preguntas[106].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD106 = false;
}
}
var paseE106=true;
function funcionesE106(){
if (paseE106 == true){
puntuacionUnoR = preguntas[106].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE106 = false;
}
}
//----------------------------------------------
function vidas106(){
if(conteoVidas == 0){
document.getElementById("vida106A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida106B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida106C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA107=true;
function funcionesA107(){
if (paseA107 == true){
puntuacionUnoR = preguntas[107].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA107 = false;
}
}
var paseB107=true;
function funcionesB107(){
if (paseB107 == true){
puntuacionUnoR = preguntas[107].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB107 = false;
}
}
var paseC107=true;
function funcionesC107(){
if (paseC107 == true){
puntuacionUnoR = preguntas[107].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC107 = false;
}
}
var paseD107=true;
function funcionesD107(){
if (paseD107 == true){
puntuacionUnoR = preguntas[107].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD107 = false;
}
}
var paseE107=true;
function funcionesE107(){
if (paseE107 == true){
puntuacionUnoR = preguntas[107].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE107 = false;
}
}
//----------------------------------------------
function vidas107(){
if(conteoVidas == 0){
document.getElementById("vida107A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida107B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida107C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA108=true;
function funcionesA108(){
if (paseA108 == true){
puntuacionUnoR = preguntas[108].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA108 = false;
}
}
var paseB108=true;
function funcionesB108(){
if (paseB108 == true){
puntuacionUnoR = preguntas[108].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB108 = false;
}
}
var paseC108=true;
function funcionesC108(){
if (paseC108 == true){
puntuacionUnoR = preguntas[108].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC108 = false;
}
}
var paseD108=true;
function funcionesD108(){
if (paseD108 == true){
puntuacionUnoR = preguntas[108].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD108 = false;
}
}
var paseE108=true;
function funcionesE108(){
if (paseE108 == true){
puntuacionUnoR = preguntas[108].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE108 = false;
}
}
//----------------------------------------------
function vidas108(){
if(conteoVidas == 0){
document.getElementById("vida108A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida108B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida108C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA109=true;
function funcionesA109(){
if (paseA109 == true){
puntuacionUnoR = preguntas[109].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA109 = false;
}
}
var paseB109=true;
function funcionesB109(){
if (paseB109 == true){
puntuacionUnoR = preguntas[109].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB109 = false;
}
}
var paseC109=true;
function funcionesC109(){
if (paseC109 == true){
puntuacionUnoR = preguntas[109].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC109 = false;
}
}
var paseD109=true;
function funcionesD109(){
if (paseD109 == true){
puntuacionUnoR = preguntas[109].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD109 = false;
}
}
var paseE109=true;
function funcionesE109(){
if (paseE109 == true){
puntuacionUnoR = preguntas[109].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE109 = false;
}
}
//----------------------------------------------
function vidas109(){
if(conteoVidas == 0){
document.getElementById("vida109A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida109B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida109C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA110=true;
function funcionesA110(){
if (paseA110 == true){
puntuacionUnoR = preguntas[110].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA110 = false;
}
}
var paseB110=true;
function funcionesB110(){
if (paseB110 == true){
puntuacionUnoR = preguntas[110].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB110 = false;
}
}
var paseC110=true;
function funcionesC110(){
if (paseC110 == true){
puntuacionUnoR = preguntas[110].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC110 = false;
}
}
var paseD110=true;
function funcionesD110(){
if (paseD110 == true){
puntuacionUnoR = preguntas[110].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD110 = false;
}
}
var paseE110=true;
function funcionesE110(){
if (paseE110 == true){
puntuacionUnoR = preguntas[110].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE110 = false;
}
}
//----------------------------------------------
function vidas110(){
if(conteoVidas == 0){
document.getElementById("vida110A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida110B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida110C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA111=true;
function funcionesA111(){
if (paseA111 == true){
puntuacionUnoR = preguntas[111].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA111 = false;
}
}
var paseB111=true;
function funcionesB111(){
if (paseB111 == true){
puntuacionUnoR = preguntas[111].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB111 = false;
}
}
var paseC111=true;
function funcionesC111(){
if (paseC111 == true){
puntuacionUnoR = preguntas[111].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC111 = false;
}
}
var paseD111=true;
function funcionesD111(){
if (paseD111 == true){
puntuacionUnoR = preguntas[111].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD111 = false;
}
}
var paseE111=true;
function funcionesE111(){
if (paseE111 == true){
puntuacionUnoR = preguntas[111].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE111 = false;
}
}
//----------------------------------------------
function vidas111(){
if(conteoVidas == 0){
document.getElementById("vida111A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida111B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida111C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA112=true;
function funcionesA112(){
if (paseA112 == true){
puntuacionUnoR = preguntas[112].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA112 = false;
}
}
var paseB112=true;
function funcionesB112(){
if (paseB112 == true){
puntuacionUnoR = preguntas[112].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB112 = false;
}
}
var paseC112=true;
function funcionesC112(){
if (paseC112 == true){
puntuacionUnoR = preguntas[112].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC112 = false;
}
}
var paseD112=true;
function funcionesD112(){
if (paseD112 == true){
puntuacionUnoR = preguntas[112].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD112 = false;
}
}
var paseE112=true;
function funcionesE112(){
if (paseE112 == true){
puntuacionUnoR = preguntas[112].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE112 = false;
}
}
//----------------------------------------------
function vidas112(){
if(conteoVidas == 0){
document.getElementById("vida112A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida112B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida112C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA113=true;
function funcionesA113(){
if (paseA113 == true){
puntuacionUnoR = preguntas[113].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA113 = false;
}
}
var paseB113=true;
function funcionesB113(){
if (paseB113 == true){
puntuacionUnoR = preguntas[113].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB113 = false;
}
}
var paseC113=true;
function funcionesC113(){
if (paseC113 == true){
puntuacionUnoR = preguntas[113].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC113 = false;
}
}
var paseD113=true;
function funcionesD113(){
if (paseD113 == true){
puntuacionUnoR = preguntas[113].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD113 = false;
}
}
var paseE113=true;
function funcionesE113(){
if (paseE113 == true){
puntuacionUnoR = preguntas[113].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE113 = false;
}
}
//----------------------------------------------
function vidas113(){
if(conteoVidas == 0){
document.getElementById("vida113A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida113B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida113C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA114=true;
function funcionesA114(){
if (paseA114 == true){
puntuacionUnoR = preguntas[114].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA114 = false;
}
}
var paseB114=true;
function funcionesB114(){
if (paseB114 == true){
puntuacionUnoR = preguntas[114].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB114 = false;
}
}
var paseC114=true;
function funcionesC114(){
if (paseC114 == true){
puntuacionUnoR = preguntas[114].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC114 = false;
}
}
var paseD114=true;
function funcionesD114(){
if (paseD114 == true){
puntuacionUnoR = preguntas[114].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD114 = false;
}
}
var paseE114=true;
function funcionesE114(){
if (paseE114 == true){
puntuacionUnoR = preguntas[114].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE114 = false;
}
}
//----------------------------------------------
function vidas114(){
if(conteoVidas == 0){
document.getElementById("vida114A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida114B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida114C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA115=true;
function funcionesA115(){
if (paseA115 == true){
puntuacionUnoR = preguntas[115].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA115 = false;
}
}
var paseB115=true;
function funcionesB115(){
if (paseB115 == true){
puntuacionUnoR = preguntas[115].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB115 = false;
}
}
var paseC115=true;
function funcionesC115(){
if (paseC115 == true){
puntuacionUnoR = preguntas[115].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC115 = false;
}
}
var paseD115=true;
function funcionesD115(){
if (paseD115 == true){
puntuacionUnoR = preguntas[115].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD115 = false;
}
}
var paseE115=true;
function funcionesE115(){
if (paseE115 == true){
puntuacionUnoR = preguntas[115].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE115 = false;
}
}
//----------------------------------------------
function vidas115(){
if(conteoVidas == 0){
document.getElementById("vida115A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida115B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida115C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA116=true;
function funcionesA116(){
if (paseA116 == true){
puntuacionUnoR = preguntas[116].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA116 = false;
}
}
var paseB116=true;
function funcionesB116(){
if (paseB116 == true){
puntuacionUnoR = preguntas[116].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB116 = false;
}
}
var paseC116=true;
function funcionesC116(){
if (paseC116 == true){
puntuacionUnoR = preguntas[116].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC116 = false;
}
}
var paseD116=true;
function funcionesD116(){
if (paseD116 == true){
puntuacionUnoR = preguntas[116].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD116 = false;
}
}
var paseE116=true;
function funcionesE116(){
if (paseE116 == true){
puntuacionUnoR = preguntas[116].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE116 = false;
}
}
//----------------------------------------------
function vidas116(){
if(conteoVidas == 0){
document.getElementById("vida116A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida116B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida116C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA117=true;
function funcionesA117(){
if (paseA117 == true){
puntuacionUnoR = preguntas[117].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA117 = false;
}
}
var paseB117=true;
function funcionesB117(){
if (paseB117 == true){
puntuacionUnoR = preguntas[117].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB117 = false;
}
}
var paseC117=true;
function funcionesC117(){
if (paseC117 == true){
puntuacionUnoR = preguntas[117].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC117 = false;
}
}
var paseD117=true;
function funcionesD117(){
if (paseD117 == true){
puntuacionUnoR = preguntas[117].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD117 = false;
}
}
var paseE117=true;
function funcionesE117(){
if (paseE117 == true){
puntuacionUnoR = preguntas[117].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE117 = false;
}
}
//----------------------------------------------
function vidas117(){
if(conteoVidas == 0){
document.getElementById("vida117A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida117B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida117C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA118=true;
function funcionesA118(){
if (paseA118 == true){
puntuacionUnoR = preguntas[118].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA118 = false;
}
}
var paseB118=true;
function funcionesB118(){
if (paseB118 == true){
puntuacionUnoR = preguntas[118].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB118 = false;
}
}
var paseC118=true;
function funcionesC118(){
if (paseC118 == true){
puntuacionUnoR = preguntas[118].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC118 = false;
}
}
var paseD118=true;
function funcionesD118(){
if (paseD118 == true){
puntuacionUnoR = preguntas[118].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD118 = false;
}
}
var paseE118=true;
function funcionesE118(){
if (paseE118 == true){
puntuacionUnoR = preguntas[118].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE118 = false;
}
}
//----------------------------------------------
function vidas118(){
if(conteoVidas == 0){
document.getElementById("vida118A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida118B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida118C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA119=true;
function funcionesA119(){
if (paseA119 == true){
puntuacionUnoR = preguntas[119].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA119 = false;
}
}
var paseB119=true;
function funcionesB119(){
if (paseB119 == true){
puntuacionUnoR = preguntas[119].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB119 = false;
}
}
var paseC119=true;
function funcionesC119(){
if (paseC119 == true){
puntuacionUnoR = preguntas[119].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC119 = false;
}
}
var paseD119=true;
function funcionesD119(){
if (paseD119 == true){
puntuacionUnoR = preguntas[119].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD119 = false;
}
}
var paseE119=true;
function funcionesE119(){
if (paseE119 == true){
puntuacionUnoR = preguntas[119].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE119 = false;
}
}
//----------------------------------------------
function vidas119(){
if(conteoVidas == 0){
document.getElementById("vida119A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida119B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida119C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA120=true;
function funcionesA120(){
if (paseA120 == true){
puntuacionUnoR = preguntas[120].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA120 = false;
}
}
var paseB120=true;
function funcionesB120(){
if (paseB120 == true){
puntuacionUnoR = preguntas[120].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB120 = false;
}
}
var paseC120=true;
function funcionesC120(){
if (paseC120 == true){
puntuacionUnoR = preguntas[120].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC120 = false;
}
}
var paseD120=true;
function funcionesD120(){
if (paseD120 == true){
puntuacionUnoR = preguntas[120].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD120 = false;
}
}
var paseE120=true;
function funcionesE120(){
if (paseE120 == true){
puntuacionUnoR = preguntas[120].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE120 = false;
}
}
//----------------------------------------------
function vidas120(){
if(conteoVidas == 0){
document.getElementById("vida120A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida120B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida120C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA121=true;
function funcionesA121(){
if (paseA121 == true){
puntuacionUnoR = preguntas[121].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA121 = false;
}
}
var paseB121=true;
function funcionesB121(){
if (paseB121 == true){
puntuacionUnoR = preguntas[121].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB121 = false;
}
}
var paseC121=true;
function funcionesC121(){
if (paseC121 == true){
puntuacionUnoR = preguntas[121].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC121 = false;
}
}
var paseD121=true;
function funcionesD121(){
if (paseD121 == true){
puntuacionUnoR = preguntas[121].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD121 = false;
}
}
var paseE121=true;
function funcionesE121(){
if (paseE121 == true){
puntuacionUnoR = preguntas[121].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE121 = false;
}
}
//----------------------------------------------
function vidas121(){
if(conteoVidas == 0){
document.getElementById("vida121A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida121B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida121C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA122=true;
function funcionesA122(){
if (paseA122 == true){
puntuacionUnoR = preguntas[122].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA122 = false;
}
}
var paseB122=true;
function funcionesB122(){
if (paseB122 == true){
puntuacionUnoR = preguntas[122].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB122 = false;
}
}
var paseC122=true;
function funcionesC122(){
if (paseC122 == true){
puntuacionUnoR = preguntas[122].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC122 = false;
}
}
var paseD122=true;
function funcionesD122(){
if (paseD122 == true){
puntuacionUnoR = preguntas[122].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD122 = false;
}
}
var paseE122=true;
function funcionesE122(){
if (paseE122 == true){
puntuacionUnoR = preguntas[122].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE122 = false;
}
}
//----------------------------------------------
function vidas122(){
if(conteoVidas == 0){
document.getElementById("vida122A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida122B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida122C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA123=true;
function funcionesA123(){
if (paseA123 == true){
puntuacionUnoR = preguntas[123].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA123 = false;
}
}
var paseB123=true;
function funcionesB123(){
if (paseB123 == true){
puntuacionUnoR = preguntas[123].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB123 = false;
}
}
var paseC123=true;
function funcionesC123(){
if (paseC123 == true){
puntuacionUnoR = preguntas[123].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC123 = false;
}
}
var paseD123=true;
function funcionesD123(){
if (paseD123 == true){
puntuacionUnoR = preguntas[123].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD123 = false;
}
}
var paseE123=true;
function funcionesE123(){
if (paseE123 == true){
puntuacionUnoR = preguntas[123].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE123 = false;
}
}
//----------------------------------------------
function vidas123(){
if(conteoVidas == 0){
document.getElementById("vida123A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida123B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida123C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA124=true;
function funcionesA124(){
if (paseA124 == true){
puntuacionUnoR = preguntas[124].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA124 = false;
}
}
var paseB124=true;
function funcionesB124(){
if (paseB124 == true){
puntuacionUnoR = preguntas[124].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB124 = false;
}
}
var paseC124=true;
function funcionesC124(){
if (paseC124 == true){
puntuacionUnoR = preguntas[124].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC124 = false;
}
}
var paseD124=true;
function funcionesD124(){
if (paseD124 == true){
puntuacionUnoR = preguntas[124].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD124 = false;
}
}
var paseE124=true;
function funcionesE124(){
if (paseE124 == true){
puntuacionUnoR = preguntas[124].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE124 = false;
}
}
//----------------------------------------------
function vidas124(){
if(conteoVidas == 0){
document.getElementById("vida124A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida124B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida124C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA125=true;
function funcionesA125(){
if (paseA125 == true){
puntuacionUnoR = preguntas[125].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA125 = false;
}
}
var paseB125=true;
function funcionesB125(){
if (paseB125 == true){
puntuacionUnoR = preguntas[125].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB125 = false;
}
}
var paseC125=true;
function funcionesC125(){
if (paseC125 == true){
puntuacionUnoR = preguntas[125].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC125 = false;
}
}
var paseD125=true;
function funcionesD125(){
if (paseD125 == true){
puntuacionUnoR = preguntas[125].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD125 = false;
}
}
var paseE125=true;
function funcionesE125(){
if (paseE125 == true){
puntuacionUnoR = preguntas[125].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE125 = false;
}
}
//----------------------------------------------
function vidas125(){
if(conteoVidas == 0){
document.getElementById("vida125A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida125B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida125C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA126=true;
function funcionesA126(){
if (paseA126 == true){
puntuacionUnoR = preguntas[126].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA126 = false;
}
}
var paseB126=true;
function funcionesB126(){
if (paseB126 == true){
puntuacionUnoR = preguntas[126].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB126 = false;
}
}
var paseC126=true;
function funcionesC126(){
if (paseC126 == true){
puntuacionUnoR = preguntas[126].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC126 = false;
}
}
var paseD126=true;
function funcionesD126(){
if (paseD126 == true){
puntuacionUnoR = preguntas[126].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD126 = false;
}
}
var paseE126=true;
function funcionesE126(){
if (paseE126 == true){
puntuacionUnoR = preguntas[126].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE126 = false;
}
}
//----------------------------------------------
function vidas126(){
if(conteoVidas == 0){
document.getElementById("vida126A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida126B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida126C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA127=true;
function funcionesA127(){
if (paseA127 == true){
puntuacionUnoR = preguntas[127].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA127 = false;
}
}
var paseB127=true;
function funcionesB127(){
if (paseB127 == true){
puntuacionUnoR = preguntas[127].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB127 = false;
}
}
var paseC127=true;
function funcionesC127(){
if (paseC127 == true){
puntuacionUnoR = preguntas[127].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC127 = false;
}
}
var paseD127=true;
function funcionesD127(){
if (paseD127 == true){
puntuacionUnoR = preguntas[127].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD127 = false;
}
}
var paseE127=true;
function funcionesE127(){
if (paseE127 == true){
puntuacionUnoR = preguntas[127].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE127 = false;
}
}
//----------------------------------------------
function vidas127(){
if(conteoVidas == 0){
document.getElementById("vida127A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida127B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida127C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA128=true;
function funcionesA128(){
if (paseA128 == true){
puntuacionUnoR = preguntas[128].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA128 = false;
}
}
var paseB128=true;
function funcionesB128(){
if (paseB128 == true){
puntuacionUnoR = preguntas[128].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB128 = false;
}
}
var paseC128=true;
function funcionesC128(){
if (paseC128 == true){
puntuacionUnoR = preguntas[128].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC128 = false;
}
}
var paseD128=true;
function funcionesD128(){
if (paseD128 == true){
puntuacionUnoR = preguntas[128].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD128 = false;
}
}
var paseE128=true;
function funcionesE128(){
if (paseE128 == true){
puntuacionUnoR = preguntas[128].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE128 = false;
}
}
//----------------------------------------------
function vidas128(){
if(conteoVidas == 0){
document.getElementById("vida128A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida128B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida128C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA129=true;
function funcionesA129(){
if (paseA129 == true){
puntuacionUnoR = preguntas[129].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA129 = false;
}
}
var paseB129=true;
function funcionesB129(){
if (paseB129 == true){
puntuacionUnoR = preguntas[129].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB129 = false;
}
}
var paseC129=true;
function funcionesC129(){
if (paseC129 == true){
puntuacionUnoR = preguntas[129].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC129 = false;
}
}
var paseD129=true;
function funcionesD129(){
if (paseD129 == true){
puntuacionUnoR = preguntas[129].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD129 = false;
}
}
var paseE129=true;
function funcionesE129(){
if (paseE129 == true){
puntuacionUnoR = preguntas[129].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE129 = false;
}
}
//----------------------------------------------
function vidas129(){
if(conteoVidas == 0){
document.getElementById("vida129A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida129B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida129C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA130=true;
function funcionesA130(){
if (paseA130 == true){
puntuacionUnoR = preguntas[130].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA130 = false;
}
}
var paseB130=true;
function funcionesB130(){
if (paseB130 == true){
puntuacionUnoR = preguntas[130].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB130 = false;
}
}
var paseC130=true;
function funcionesC130(){
if (paseC130 == true){
puntuacionUnoR = preguntas[130].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC130 = false;
}
}
var paseD130=true;
function funcionesD130(){
if (paseD130 == true){
puntuacionUnoR = preguntas[130].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD130 = false;
}
}
var paseE130=true;
function funcionesE130(){
if (paseE130 == true){
puntuacionUnoR = preguntas[130].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE130 = false;
}
}
//----------------------------------------------
function vidas130(){
if(conteoVidas == 0){
document.getElementById("vida130A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida130B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida130C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA131=true;
function funcionesA131(){
if (paseA131 == true){
puntuacionUnoR = preguntas[131].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA131 = false;
}
}
var paseB131=true;
function funcionesB131(){
if (paseB131 == true){
puntuacionUnoR = preguntas[131].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB131 = false;
}
}
var paseC131=true;
function funcionesC131(){
if (paseC131 == true){
puntuacionUnoR = preguntas[131].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC131 = false;
}
}
var paseD131=true;
function funcionesD131(){
if (paseD131 == true){
puntuacionUnoR = preguntas[131].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD131 = false;
}
}
var paseE131=true;
function funcionesE131(){
if (paseE131 == true){
puntuacionUnoR = preguntas[131].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE131 = false;
}
}
//----------------------------------------------
function vidas131(){
if(conteoVidas == 0){
document.getElementById("vida131A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida131B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida131C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA132=true;
function funcionesA132(){
if (paseA132 == true){
puntuacionUnoR = preguntas[132].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA132 = false;
}
}
var paseB132=true;
function funcionesB132(){
if (paseB132 == true){
puntuacionUnoR = preguntas[132].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB132 = false;
}
}
var paseC132=true;
function funcionesC132(){
if (paseC132 == true){
puntuacionUnoR = preguntas[132].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC132 = false;
}
}
var paseD132=true;
function funcionesD132(){
if (paseD132 == true){
puntuacionUnoR = preguntas[132].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD132 = false;
}
}
var paseE132=true;
function funcionesE132(){
if (paseE132 == true){
puntuacionUnoR = preguntas[132].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE132 = false;
}
}
//----------------------------------------------
function vidas132(){
if(conteoVidas == 0){
document.getElementById("vida132A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida132B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida132C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA133=true;
function funcionesA133(){
if (paseA133 == true){
puntuacionUnoR = preguntas[133].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA133 = false;
}
}
var paseB133=true;
function funcionesB133(){
if (paseB133 == true){
puntuacionUnoR = preguntas[133].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB133 = false;
}
}
var paseC133=true;
function funcionesC133(){
if (paseC133 == true){
puntuacionUnoR = preguntas[133].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC133 = false;
}
}
var paseD133=true;
function funcionesD133(){
if (paseD133 == true){
puntuacionUnoR = preguntas[133].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD133 = false;
}
}
var paseE133=true;
function funcionesE133(){
if (paseE133 == true){
puntuacionUnoR = preguntas[133].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE133 = false;
}
}
//----------------------------------------------
function vidas133(){
if(conteoVidas == 0){
document.getElementById("vida133A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida133B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida133C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA134=true;
function funcionesA134(){
if (paseA134 == true){
puntuacionUnoR = preguntas[134].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA134 = false;
}
}
var paseB134=true;
function funcionesB134(){
if (paseB134 == true){
puntuacionUnoR = preguntas[134].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB134 = false;
}
}
var paseC134=true;
function funcionesC134(){
if (paseC134 == true){
puntuacionUnoR = preguntas[134].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC134 = false;
}
}
var paseD134=true;
function funcionesD134(){
if (paseD134 == true){
puntuacionUnoR = preguntas[134].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD134 = false;
}
}
var paseE134=true;
function funcionesE134(){
if (paseE134 == true){
puntuacionUnoR = preguntas[134].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE134 = false;
}
}
//----------------------------------------------
function vidas134(){
if(conteoVidas == 0){
document.getElementById("vida134A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida134B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida134C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA135=true;
function funcionesA135(){
if (paseA135 == true){
puntuacionUnoR = preguntas[135].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA135 = false;
}
}
var paseB135=true;
function funcionesB135(){
if (paseB135 == true){
puntuacionUnoR = preguntas[135].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB135 = false;
}
}
var paseC135=true;
function funcionesC135(){
if (paseC135 == true){
puntuacionUnoR = preguntas[135].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC135 = false;
}
}
var paseD135=true;
function funcionesD135(){
if (paseD135 == true){
puntuacionUnoR = preguntas[135].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD135 = false;
}
}
var paseE135=true;
function funcionesE135(){
if (paseE135 == true){
puntuacionUnoR = preguntas[135].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE135 = false;
}
}
//----------------------------------------------
function vidas135(){
if(conteoVidas == 0){
document.getElementById("vida135A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida135B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida135C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA136=true;
function funcionesA136(){
if (paseA136 == true){
puntuacionUnoR = preguntas[136].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA136 = false;
}
}
var paseB136=true;
function funcionesB136(){
if (paseB136 == true){
puntuacionUnoR = preguntas[136].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB136 = false;
}
}
var paseC136=true;
function funcionesC136(){
if (paseC136 == true){
puntuacionUnoR = preguntas[136].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC136 = false;
}
}
var paseD136=true;
function funcionesD136(){
if (paseD136 == true){
puntuacionUnoR = preguntas[136].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD136 = false;
}
}
var paseE136=true;
function funcionesE136(){
if (paseE136 == true){
puntuacionUnoR = preguntas[136].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE136 = false;
}
}
//----------------------------------------------
function vidas136(){
if(conteoVidas == 0){
document.getElementById("vida136A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida136B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida136C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA137=true;
function funcionesA137(){
if (paseA137 == true){
puntuacionUnoR = preguntas[137].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA137 = false;
}
}
var paseB137=true;
function funcionesB137(){
if (paseB137 == true){
puntuacionUnoR = preguntas[137].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB137 = false;
}
}
var paseC137=true;
function funcionesC137(){
if (paseC137 == true){
puntuacionUnoR = preguntas[137].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC137 = false;
}
}
var paseD137=true;
function funcionesD137(){
if (paseD137 == true){
puntuacionUnoR = preguntas[137].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD137 = false;
}
}
var paseE137=true;
function funcionesE137(){
if (paseE137 == true){
puntuacionUnoR = preguntas[137].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE137 = false;
}
}
//----------------------------------------------
function vidas137(){
if(conteoVidas == 0){
document.getElementById("vida137A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida137B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida137C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA138=true;
function funcionesA138(){
if (paseA138 == true){
puntuacionUnoR = preguntas[138].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA138 = false;
}
}
var paseB138=true;
function funcionesB138(){
if (paseB138 == true){
puntuacionUnoR = preguntas[138].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB138 = false;
}
}
var paseC138=true;
function funcionesC138(){
if (paseC138 == true){
puntuacionUnoR = preguntas[138].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC138 = false;
}
}
var paseD138=true;
function funcionesD138(){
if (paseD138 == true){
puntuacionUnoR = preguntas[138].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD138 = false;
}
}
var paseE138=true;
function funcionesE138(){
if (paseE138 == true){
puntuacionUnoR = preguntas[138].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE138 = false;
}
}
//----------------------------------------------
function vidas138(){
if(conteoVidas == 0){
document.getElementById("vida138A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida138B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida138C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA139=true;
function funcionesA139(){
if (paseA139 == true){
puntuacionUnoR = preguntas[139].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA139 = false;
}
}
var paseB139=true;
function funcionesB139(){
if (paseB139 == true){
puntuacionUnoR = preguntas[139].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB139 = false;
}
}
var paseC139=true;
function funcionesC139(){
if (paseC139 == true){
puntuacionUnoR = preguntas[139].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC139 = false;
}
}
var paseD139=true;
function funcionesD139(){
if (paseD139 == true){
puntuacionUnoR = preguntas[139].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD139 = false;
}
}
var paseE139=true;
function funcionesE139(){
if (paseE139 == true){
puntuacionUnoR = preguntas[139].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE139 = false;
}
}
//----------------------------------------------
function vidas139(){
if(conteoVidas == 0){
document.getElementById("vida139A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida139B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida139C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA140=true;
function funcionesA140(){
if (paseA140 == true){
puntuacionUnoR = preguntas[140].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA140 = false;
}
}
var paseB140=true;
function funcionesB140(){
if (paseB140 == true){
puntuacionUnoR = preguntas[140].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB140 = false;
}
}
var paseC140=true;
function funcionesC140(){
if (paseC140 == true){
puntuacionUnoR = preguntas[140].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC140 = false;
}
}
var paseD140=true;
function funcionesD140(){
if (paseD140 == true){
puntuacionUnoR = preguntas[140].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD140 = false;
}
}
var paseE140=true;
function funcionesE140(){
if (paseE140 == true){
puntuacionUnoR = preguntas[140].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE140 = false;
}
}
//----------------------------------------------
function vidas140(){
if(conteoVidas == 0){
document.getElementById("vida140A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida140B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida140C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA141=true;
function funcionesA141(){
if (paseA141 == true){
puntuacionUnoR = preguntas[141].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA141 = false;
}
}
var paseB141=true;
function funcionesB141(){
if (paseB141 == true){
puntuacionUnoR = preguntas[141].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB141 = false;
}
}
var paseC141=true;
function funcionesC141(){
if (paseC141 == true){
puntuacionUnoR = preguntas[141].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC141 = false;
}
}
var paseD141=true;
function funcionesD141(){
if (paseD141 == true){
puntuacionUnoR = preguntas[141].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD141 = false;
}
}
var paseE141=true;
function funcionesE141(){
if (paseE141 == true){
puntuacionUnoR = preguntas[141].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE141 = false;
}
}
//----------------------------------------------
function vidas141(){
if(conteoVidas == 0){
document.getElementById("vida141A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida141B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida141C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA142=true;
function funcionesA142(){
if (paseA142 == true){
puntuacionUnoR = preguntas[142].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA142 = false;
}
}
var paseB142=true;
function funcionesB142(){
if (paseB142 == true){
puntuacionUnoR = preguntas[142].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB142 = false;
}
}
var paseC142=true;
function funcionesC142(){
if (paseC142 == true){
puntuacionUnoR = preguntas[142].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC142 = false;
}
}
var paseD142=true;
function funcionesD142(){
if (paseD142 == true){
puntuacionUnoR = preguntas[142].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD142 = false;
}
}
var paseE142=true;
function funcionesE142(){
if (paseE142 == true){
puntuacionUnoR = preguntas[142].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE142 = false;
}
}
//----------------------------------------------
function vidas142(){
if(conteoVidas == 0){
document.getElementById("vida142A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida142B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida142C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA143=true;
function funcionesA143(){
if (paseA143 == true){
puntuacionUnoR = preguntas[143].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA143 = false;
}
}
var paseB143=true;
function funcionesB143(){
if (paseB143 == true){
puntuacionUnoR = preguntas[143].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB143 = false;
}
}
var paseC143=true;
function funcionesC143(){
if (paseC143 == true){
puntuacionUnoR = preguntas[143].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC143 = false;
}
}
var paseD143=true;
function funcionesD143(){
if (paseD143 == true){
puntuacionUnoR = preguntas[143].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD143 = false;
}
}
var paseE143=true;
function funcionesE143(){
if (paseE143 == true){
puntuacionUnoR = preguntas[143].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE143 = false;
}
}
//----------------------------------------------
function vidas143(){
if(conteoVidas == 0){
document.getElementById("vida143A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida143B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida143C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA144=true;
function funcionesA144(){
if (paseA144 == true){
puntuacionUnoR = preguntas[144].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA144 = false;
}
}
var paseB144=true;
function funcionesB144(){
if (paseB144 == true){
puntuacionUnoR = preguntas[144].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB144 = false;
}
}
var paseC144=true;
function funcionesC144(){
if (paseC144 == true){
puntuacionUnoR = preguntas[144].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC144 = false;
}
}
var paseD144=true;
function funcionesD144(){
if (paseD144 == true){
puntuacionUnoR = preguntas[144].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD144 = false;
}
}
var paseE144=true;
function funcionesE144(){
if (paseE144 == true){
puntuacionUnoR = preguntas[144].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE144 = false;
}
}
//----------------------------------------------
function vidas144(){
if(conteoVidas == 0){
document.getElementById("vida144A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida144B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida144C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA145=true;
function funcionesA145(){
if (paseA145 == true){
puntuacionUnoR = preguntas[145].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA145 = false;
}
}
var paseB145=true;
function funcionesB145(){
if (paseB145 == true){
puntuacionUnoR = preguntas[145].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB145 = false;
}
}
var paseC145=true;
function funcionesC145(){
if (paseC145 == true){
puntuacionUnoR = preguntas[145].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC145 = false;
}
}
var paseD145=true;
function funcionesD145(){
if (paseD145 == true){
puntuacionUnoR = preguntas[145].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD145 = false;
}
}
var paseE145=true;
function funcionesE145(){
if (paseE145 == true){
puntuacionUnoR = preguntas[145].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE145 = false;
}
}
//----------------------------------------------
function vidas145(){
if(conteoVidas == 0){
document.getElementById("vida145A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida145B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida145C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA146=true;
function funcionesA146(){
if (paseA146 == true){
puntuacionUnoR = preguntas[146].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA146 = false;
}
}
var paseB146=true;
function funcionesB146(){
if (paseB146 == true){
puntuacionUnoR = preguntas[146].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB146 = false;
}
}
var paseC146=true;
function funcionesC146(){
if (paseC146 == true){
puntuacionUnoR = preguntas[146].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC146 = false;
}
}
var paseD146=true;
function funcionesD146(){
if (paseD146 == true){
puntuacionUnoR = preguntas[146].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD146 = false;
}
}
var paseE146=true;
function funcionesE146(){
if (paseE146 == true){
puntuacionUnoR = preguntas[146].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE146 = false;
}
}
//----------------------------------------------
function vidas146(){
if(conteoVidas == 0){
document.getElementById("vida146A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida146B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida146C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA147=true;
function funcionesA147(){
if (paseA147 == true){
puntuacionUnoR = preguntas[147].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA147 = false;
}
}
var paseB147=true;
function funcionesB147(){
if (paseB147 == true){
puntuacionUnoR = preguntas[147].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB147 = false;
}
}
var paseC147=true;
function funcionesC147(){
if (paseC147 == true){
puntuacionUnoR = preguntas[147].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC147 = false;
}
}
var paseD147=true;
function funcionesD147(){
if (paseD147 == true){
puntuacionUnoR = preguntas[147].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD147 = false;
}
}
var paseE147=true;
function funcionesE147(){
if (paseE147 == true){
puntuacionUnoR = preguntas[147].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE147 = false;
}
}
//----------------------------------------------
function vidas147(){
if(conteoVidas == 0){
document.getElementById("vida147A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida147B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida147C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA148=true;
function funcionesA148(){
if (paseA148 == true){
puntuacionUnoR = preguntas[148].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA148 = false;
}
}
var paseB148=true;
function funcionesB148(){
if (paseB148 == true){
puntuacionUnoR = preguntas[148].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB148 = false;
}
}
var paseC148=true;
function funcionesC148(){
if (paseC148 == true){
puntuacionUnoR = preguntas[148].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC148 = false;
}
}
var paseD148=true;
function funcionesD148(){
if (paseD148 == true){
puntuacionUnoR = preguntas[148].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD148 = false;
}
}
var paseE148=true;
function funcionesE148(){
if (paseE148 == true){
puntuacionUnoR = preguntas[148].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE148 = false;
}
}
//----------------------------------------------
function vidas148(){
if(conteoVidas == 0){
document.getElementById("vida148A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida148B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida148C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA149=true;
function funcionesA149(){
if (paseA149 == true){
puntuacionUnoR = preguntas[149].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA149 = false;
}
}
var paseB149=true;
function funcionesB149(){
if (paseB149 == true){
puntuacionUnoR = preguntas[149].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB149 = false;
}
}
var paseC149=true;
function funcionesC149(){
if (paseC149 == true){
puntuacionUnoR = preguntas[149].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC149 = false;
}
}
var paseD149=true;
function funcionesD149(){
if (paseD149 == true){
puntuacionUnoR = preguntas[149].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD149 = false;
}
}
var paseE149=true;
function funcionesE149(){
if (paseE149 == true){
puntuacionUnoR = preguntas[149].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE149 = false;
}
}
//----------------------------------------------
function vidas149(){
if(conteoVidas == 0){
document.getElementById("vida149A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida149B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida149C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA150=true;
function funcionesA150(){
if (paseA150 == true){
puntuacionUnoR = preguntas[150].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA150 = false;
}
}
var paseB150=true;
function funcionesB150(){
if (paseB150 == true){
puntuacionUnoR = preguntas[150].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB150 = false;
}
}
var paseC150=true;
function funcionesC150(){
if (paseC150 == true){
puntuacionUnoR = preguntas[150].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC150 = false;
}
}
var paseD150=true;
function funcionesD150(){
if (paseD150 == true){
puntuacionUnoR = preguntas[150].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD150 = false;
}
}
var paseE150=true;
function funcionesE150(){
if (paseE150 == true){
puntuacionUnoR = preguntas[150].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE150 = false;
}
}
//----------------------------------------------
function vidas150(){
if(conteoVidas == 0){
document.getElementById("vida150A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida150B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida150C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA151=true;
function funcionesA151(){
if (paseA151 == true){
puntuacionUnoR = preguntas[151].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA151 = false;
}
}
var paseB151=true;
function funcionesB151(){
if (paseB151 == true){
puntuacionUnoR = preguntas[151].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB151 = false;
}
}
var paseC151=true;
function funcionesC151(){
if (paseC151 == true){
puntuacionUnoR = preguntas[151].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC151 = false;
}
}
var paseD151=true;
function funcionesD151(){
if (paseD151 == true){
puntuacionUnoR = preguntas[151].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD151 = false;
}
}
var paseE151=true;
function funcionesE151(){
if (paseE151 == true){
puntuacionUnoR = preguntas[151].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE151 = false;
}
}
//----------------------------------------------
function vidas151(){
if(conteoVidas == 0){
document.getElementById("vida151A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida151B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida151C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA152=true;
function funcionesA152(){
if (paseA152 == true){
puntuacionUnoR = preguntas[152].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA152 = false;
}
}
var paseB152=true;
function funcionesB152(){
if (paseB152 == true){
puntuacionUnoR = preguntas[152].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB152 = false;
}
}
var paseC152=true;
function funcionesC152(){
if (paseC152 == true){
puntuacionUnoR = preguntas[152].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC152 = false;
}
}
var paseD152=true;
function funcionesD152(){
if (paseD152 == true){
puntuacionUnoR = preguntas[152].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD152 = false;
}
}
var paseE152=true;
function funcionesE152(){
if (paseE152 == true){
puntuacionUnoR = preguntas[152].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE152 = false;
}
}
//----------------------------------------------
function vidas152(){
if(conteoVidas == 0){
document.getElementById("vida152A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida152B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida152C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA153=true;
function funcionesA153(){
if (paseA153 == true){
puntuacionUnoR = preguntas[153].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA153 = false;
}
}
var paseB153=true;
function funcionesB153(){
if (paseB153 == true){
puntuacionUnoR = preguntas[153].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB153 = false;
}
}
var paseC153=true;
function funcionesC153(){
if (paseC153 == true){
puntuacionUnoR = preguntas[153].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC153 = false;
}
}
var paseD153=true;
function funcionesD153(){
if (paseD153 == true){
puntuacionUnoR = preguntas[153].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD153 = false;
}
}
var paseE153=true;
function funcionesE153(){
if (paseE153 == true){
puntuacionUnoR = preguntas[153].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE153 = false;
}
}
//----------------------------------------------
function vidas153(){
if(conteoVidas == 0){
document.getElementById("vida153A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida153B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida153C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA154=true;
function funcionesA154(){
if (paseA154 == true){
puntuacionUnoR = preguntas[154].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA154 = false;
}
}
var paseB154=true;
function funcionesB154(){
if (paseB154 == true){
puntuacionUnoR = preguntas[154].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB154 = false;
}
}
var paseC154=true;
function funcionesC154(){
if (paseC154 == true){
puntuacionUnoR = preguntas[154].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC154 = false;
}
}
var paseD154=true;
function funcionesD154(){
if (paseD154 == true){
puntuacionUnoR = preguntas[154].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD154 = false;
}
}
var paseE154=true;
function funcionesE154(){
if (paseE154 == true){
puntuacionUnoR = preguntas[154].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE154 = false;
}
}
//----------------------------------------------
function vidas154(){
if(conteoVidas == 0){
document.getElementById("vida154A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida154B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida154C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA155=true;
function funcionesA155(){
if (paseA155 == true){
puntuacionUnoR = preguntas[155].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA155 = false;
}
}
var paseB155=true;
function funcionesB155(){
if (paseB155 == true){
puntuacionUnoR = preguntas[155].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB155 = false;
}
}
var paseC155=true;
function funcionesC155(){
if (paseC155 == true){
puntuacionUnoR = preguntas[155].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC155 = false;
}
}
var paseD155=true;
function funcionesD155(){
if (paseD155 == true){
puntuacionUnoR = preguntas[155].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD155 = false;
}
}
var paseE155=true;
function funcionesE155(){
if (paseE155 == true){
puntuacionUnoR = preguntas[155].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE155 = false;
}
}
//----------------------------------------------
function vidas155(){
if(conteoVidas == 0){
document.getElementById("vida155A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida155B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida155C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA156=true;
function funcionesA156(){
if (paseA156 == true){
puntuacionUnoR = preguntas[156].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA156 = false;
}
}
var paseB156=true;
function funcionesB156(){
if (paseB156 == true){
puntuacionUnoR = preguntas[156].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB156 = false;
}
}
var paseC156=true;
function funcionesC156(){
if (paseC156 == true){
puntuacionUnoR = preguntas[156].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC156 = false;
}
}
var paseD156=true;
function funcionesD156(){
if (paseD156 == true){
puntuacionUnoR = preguntas[156].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD156 = false;
}
}
var paseE156=true;
function funcionesE156(){
if (paseE156 == true){
puntuacionUnoR = preguntas[156].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE156 = false;
}
}
//----------------------------------------------
function vidas156(){
if(conteoVidas == 0){
document.getElementById("vida156A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida156B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida156C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA157=true;
function funcionesA157(){
if (paseA157 == true){
puntuacionUnoR = preguntas[157].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA157 = false;
}
}
var paseB157=true;
function funcionesB157(){
if (paseB157 == true){
puntuacionUnoR = preguntas[157].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB157 = false;
}
}
var paseC157=true;
function funcionesC157(){
if (paseC157 == true){
puntuacionUnoR = preguntas[157].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC157 = false;
}
}
var paseD157=true;
function funcionesD157(){
if (paseD157 == true){
puntuacionUnoR = preguntas[157].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD157 = false;
}
}
var paseE157=true;
function funcionesE157(){
if (paseE157 == true){
puntuacionUnoR = preguntas[157].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE157 = false;
}
}
//----------------------------------------------
function vidas157(){
if(conteoVidas == 0){
document.getElementById("vida157A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida157B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida157C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA158=true;
function funcionesA158(){
if (paseA158 == true){
puntuacionUnoR = preguntas[158].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA158 = false;
}
}
var paseB158=true;
function funcionesB158(){
if (paseB158 == true){
puntuacionUnoR = preguntas[158].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB158 = false;
}
}
var paseC158=true;
function funcionesC158(){
if (paseC158 == true){
puntuacionUnoR = preguntas[158].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC158 = false;
}
}
var paseD158=true;
function funcionesD158(){
if (paseD158 == true){
puntuacionUnoR = preguntas[158].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD158 = false;
}
}
var paseE158=true;
function funcionesE158(){
if (paseE158 == true){
puntuacionUnoR = preguntas[158].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE158 = false;
}
}
//----------------------------------------------
function vidas158(){
if(conteoVidas == 0){
document.getElementById("vida158A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida158B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida158C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA159=true;
function funcionesA159(){
if (paseA159 == true){
puntuacionUnoR = preguntas[159].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA159 = false;
}
}
var paseB159=true;
function funcionesB159(){
if (paseB159 == true){
puntuacionUnoR = preguntas[159].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB159 = false;
}
}
var paseC159=true;
function funcionesC159(){
if (paseC159 == true){
puntuacionUnoR = preguntas[159].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC159 = false;
}
}
var paseD159=true;
function funcionesD159(){
if (paseD159 == true){
puntuacionUnoR = preguntas[159].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD159 = false;
}
}
var paseE159=true;
function funcionesE159(){
if (paseE159 == true){
puntuacionUnoR = preguntas[159].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE159 = false;
}
}
//----------------------------------------------
function vidas159(){
if(conteoVidas == 0){
document.getElementById("vida159A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida159B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida159C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA160=true;
function funcionesA160(){
if (paseA160 == true){
puntuacionUnoR = preguntas[160].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA160 = false;
}
}
var paseB160=true;
function funcionesB160(){
if (paseB160 == true){
puntuacionUnoR = preguntas[160].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB160 = false;
}
}
var paseC160=true;
function funcionesC160(){
if (paseC160 == true){
puntuacionUnoR = preguntas[160].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC160 = false;
}
}
var paseD160=true;
function funcionesD160(){
if (paseD160 == true){
puntuacionUnoR = preguntas[160].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD160 = false;
}
}
var paseE160=true;
function funcionesE160(){
if (paseE160 == true){
puntuacionUnoR = preguntas[160].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE160 = false;
}
}
//----------------------------------------------
function vidas160(){
if(conteoVidas == 0){
document.getElementById("vida160A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida160B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida160C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA161=true;
function funcionesA161(){
if (paseA161 == true){
puntuacionUnoR = preguntas[161].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA161 = false;
}
}
var paseB161=true;
function funcionesB161(){
if (paseB161 == true){
puntuacionUnoR = preguntas[161].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB161 = false;
}
}
var paseC161=true;
function funcionesC161(){
if (paseC161 == true){
puntuacionUnoR = preguntas[161].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC161 = false;
}
}
var paseD161=true;
function funcionesD161(){
if (paseD161 == true){
puntuacionUnoR = preguntas[161].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD161 = false;
}
}
var paseE161=true;
function funcionesE161(){
if (paseE161 == true){
puntuacionUnoR = preguntas[161].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE161 = false;
}
}
//----------------------------------------------
function vidas161(){
if(conteoVidas == 0){
document.getElementById("vida161A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida161B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida161C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA162=true;
function funcionesA162(){
if (paseA162 == true){
puntuacionUnoR = preguntas[162].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA162 = false;
}
}
var paseB162=true;
function funcionesB162(){
if (paseB162 == true){
puntuacionUnoR = preguntas[162].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB162 = false;
}
}
var paseC162=true;
function funcionesC162(){
if (paseC162 == true){
puntuacionUnoR = preguntas[162].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC162 = false;
}
}
var paseD162=true;
function funcionesD162(){
if (paseD162 == true){
puntuacionUnoR = preguntas[162].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD162 = false;
}
}
var paseE162=true;
function funcionesE162(){
if (paseE162 == true){
puntuacionUnoR = preguntas[162].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE162 = false;
}
}
//----------------------------------------------
function vidas162(){
if(conteoVidas == 0){
document.getElementById("vida162A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida162B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida162C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA163=true;
function funcionesA163(){
if (paseA163 == true){
puntuacionUnoR = preguntas[163].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA163 = false;
}
}
var paseB163=true;
function funcionesB163(){
if (paseB163 == true){
puntuacionUnoR = preguntas[163].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB163 = false;
}
}
var paseC163=true;
function funcionesC163(){
if (paseC163 == true){
puntuacionUnoR = preguntas[163].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC163 = false;
}
}
var paseD163=true;
function funcionesD163(){
if (paseD163 == true){
puntuacionUnoR = preguntas[163].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD163 = false;
}
}
var paseE163=true;
function funcionesE163(){
if (paseE163 == true){
puntuacionUnoR = preguntas[163].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE163 = false;
}
}
//----------------------------------------------
function vidas163(){
if(conteoVidas == 0){
document.getElementById("vida163A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida163B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida163C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA164=true;
function funcionesA164(){
if (paseA164 == true){
puntuacionUnoR = preguntas[164].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA164 = false;
}
}
var paseB164=true;
function funcionesB164(){
if (paseB164 == true){
puntuacionUnoR = preguntas[164].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB164 = false;
}
}
var paseC164=true;
function funcionesC164(){
if (paseC164 == true){
puntuacionUnoR = preguntas[164].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC164 = false;
}
}
var paseD164=true;
function funcionesD164(){
if (paseD164 == true){
puntuacionUnoR = preguntas[164].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD164 = false;
}
}
var paseE164=true;
function funcionesE164(){
if (paseE164 == true){
puntuacionUnoR = preguntas[164].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE164 = false;
}
}
//----------------------------------------------
function vidas164(){
if(conteoVidas == 0){
document.getElementById("vida164A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida164B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida164C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA165=true;
function funcionesA165(){
if (paseA165 == true){
puntuacionUnoR = preguntas[165].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA165 = false;
}
}
var paseB165=true;
function funcionesB165(){
if (paseB165 == true){
puntuacionUnoR = preguntas[165].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB165 = false;
}
}
var paseC165=true;
function funcionesC165(){
if (paseC165 == true){
puntuacionUnoR = preguntas[165].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC165 = false;
}
}
var paseD165=true;
function funcionesD165(){
if (paseD165 == true){
puntuacionUnoR = preguntas[165].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD165 = false;
}
}
var paseE165=true;
function funcionesE165(){
if (paseE165 == true){
puntuacionUnoR = preguntas[165].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE165 = false;
}
}
//----------------------------------------------
function vidas165(){
if(conteoVidas == 0){
document.getElementById("vida165A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida165B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida165C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA166=true;
function funcionesA166(){
if (paseA166 == true){
puntuacionUnoR = preguntas[166].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA166 = false;
}
}
var paseB166=true;
function funcionesB166(){
if (paseB166 == true){
puntuacionUnoR = preguntas[166].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB166 = false;
}
}
var paseC166=true;
function funcionesC166(){
if (paseC166 == true){
puntuacionUnoR = preguntas[166].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC166 = false;
}
}
var paseD166=true;
function funcionesD166(){
if (paseD166 == true){
puntuacionUnoR = preguntas[166].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD166 = false;
}
}
var paseE166=true;
function funcionesE166(){
if (paseE166 == true){
puntuacionUnoR = preguntas[166].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE166 = false;
}
}
//----------------------------------------------
function vidas166(){
if(conteoVidas == 0){
document.getElementById("vida166A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida166B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida166C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA167=true;
function funcionesA167(){
if (paseA167 == true){
puntuacionUnoR = preguntas[167].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA167 = false;
}
}
var paseB167=true;
function funcionesB167(){
if (paseB167 == true){
puntuacionUnoR = preguntas[167].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB167 = false;
}
}
var paseC167=true;
function funcionesC167(){
if (paseC167 == true){
puntuacionUnoR = preguntas[167].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC167 = false;
}
}
var paseD167=true;
function funcionesD167(){
if (paseD167 == true){
puntuacionUnoR = preguntas[167].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD167 = false;
}
}
var paseE167=true;
function funcionesE167(){
if (paseE167 == true){
puntuacionUnoR = preguntas[167].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE167 = false;
}
}
//----------------------------------------------
function vidas167(){
if(conteoVidas == 0){
document.getElementById("vida167A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida167B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida167C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA168=true;
function funcionesA168(){
if (paseA168 == true){
puntuacionUnoR = preguntas[168].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA168 = false;
}
}
var paseB168=true;
function funcionesB168(){
if (paseB168 == true){
puntuacionUnoR = preguntas[168].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB168 = false;
}
}
var paseC168=true;
function funcionesC168(){
if (paseC168 == true){
puntuacionUnoR = preguntas[168].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC168 = false;
}
}
var paseD168=true;
function funcionesD168(){
if (paseD168 == true){
puntuacionUnoR = preguntas[168].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD168 = false;
}
}
var paseE168=true;
function funcionesE168(){
if (paseE168 == true){
puntuacionUnoR = preguntas[168].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE168 = false;
}
}
//----------------------------------------------
function vidas168(){
if(conteoVidas == 0){
document.getElementById("vida168A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida168B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida168C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA169=true;
function funcionesA169(){
if (paseA169 == true){
puntuacionUnoR = preguntas[169].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA169 = false;
}
}
var paseB169=true;
function funcionesB169(){
if (paseB169 == true){
puntuacionUnoR = preguntas[169].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB169 = false;
}
}
var paseC169=true;
function funcionesC169(){
if (paseC169 == true){
puntuacionUnoR = preguntas[169].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC169 = false;
}
}
var paseD169=true;
function funcionesD169(){
if (paseD169 == true){
puntuacionUnoR = preguntas[169].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD169 = false;
}
}
var paseE169=true;
function funcionesE169(){
if (paseE169 == true){
puntuacionUnoR = preguntas[169].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE169 = false;
}
}
//----------------------------------------------
function vidas169(){
if(conteoVidas == 0){
document.getElementById("vida169A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida169B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida169C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA170=true;
function funcionesA170(){
if (paseA170 == true){
puntuacionUnoR = preguntas[170].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA170 = false;
}
}
var paseB170=true;
function funcionesB170(){
if (paseB170 == true){
puntuacionUnoR = preguntas[170].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB170 = false;
}
}
var paseC170=true;
function funcionesC170(){
if (paseC170 == true){
puntuacionUnoR = preguntas[170].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC170 = false;
}
}
var paseD170=true;
function funcionesD170(){
if (paseD170 == true){
puntuacionUnoR = preguntas[170].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD170 = false;
}
}
var paseE170=true;
function funcionesE170(){
if (paseE170 == true){
puntuacionUnoR = preguntas[170].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE170 = false;
}
}
//----------------------------------------------
function vidas170(){
if(conteoVidas == 0){
document.getElementById("vida170A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida170B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida170C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA171=true;
function funcionesA171(){
if (paseA171 == true){
puntuacionUnoR = preguntas[171].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA171 = false;
}
}
var paseB171=true;
function funcionesB171(){
if (paseB171 == true){
puntuacionUnoR = preguntas[171].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB171 = false;
}
}
var paseC171=true;
function funcionesC171(){
if (paseC171 == true){
puntuacionUnoR = preguntas[171].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC171 = false;
}
}
var paseD171=true;
function funcionesD171(){
if (paseD171 == true){
puntuacionUnoR = preguntas[171].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD171 = false;
}
}
var paseE171=true;
function funcionesE171(){
if (paseE171 == true){
puntuacionUnoR = preguntas[171].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE171 = false;
}
}
//----------------------------------------------
function vidas171(){
if(conteoVidas == 0){
document.getElementById("vida171A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida171B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida171C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA172=true;
function funcionesA172(){
if (paseA172 == true){
puntuacionUnoR = preguntas[172].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA172 = false;
}
}
var paseB172=true;
function funcionesB172(){
if (paseB172 == true){
puntuacionUnoR = preguntas[172].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB172 = false;
}
}
var paseC172=true;
function funcionesC172(){
if (paseC172 == true){
puntuacionUnoR = preguntas[172].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC172 = false;
}
}
var paseD172=true;
function funcionesD172(){
if (paseD172 == true){
puntuacionUnoR = preguntas[172].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD172 = false;
}
}
var paseE172=true;
function funcionesE172(){
if (paseE172 == true){
puntuacionUnoR = preguntas[172].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE172 = false;
}
}
//----------------------------------------------
function vidas172(){
if(conteoVidas == 0){
document.getElementById("vida172A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida172B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida172C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA173=true;
function funcionesA173(){
if (paseA173 == true){
puntuacionUnoR = preguntas[173].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA173 = false;
}
}
var paseB173=true;
function funcionesB173(){
if (paseB173 == true){
puntuacionUnoR = preguntas[173].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB173 = false;
}
}
var paseC173=true;
function funcionesC173(){
if (paseC173 == true){
puntuacionUnoR = preguntas[173].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC173 = false;
}
}
var paseD173=true;
function funcionesD173(){
if (paseD173 == true){
puntuacionUnoR = preguntas[173].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD173 = false;
}
}
var paseE173=true;
function funcionesE173(){
if (paseE173 == true){
puntuacionUnoR = preguntas[173].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE173 = false;
}
}
//----------------------------------------------
function vidas173(){
if(conteoVidas == 0){
document.getElementById("vida173A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida173B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida173C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA174=true;
function funcionesA174(){
if (paseA174 == true){
puntuacionUnoR = preguntas[174].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA174 = false;
}
}
var paseB174=true;
function funcionesB174(){
if (paseB174 == true){
puntuacionUnoR = preguntas[174].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB174 = false;
}
}
var paseC174=true;
function funcionesC174(){
if (paseC174 == true){
puntuacionUnoR = preguntas[174].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC174 = false;
}
}
var paseD174=true;
function funcionesD174(){
if (paseD174 == true){
puntuacionUnoR = preguntas[174].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD174 = false;
}
}
var paseE174=true;
function funcionesE174(){
if (paseE174 == true){
puntuacionUnoR = preguntas[174].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE174 = false;
}
}
//----------------------------------------------
function vidas174(){
if(conteoVidas == 0){
document.getElementById("vida174A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida174B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida174C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA175=true;
function funcionesA175(){
if (paseA175 == true){
puntuacionUnoR = preguntas[175].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA175 = false;
}
}
var paseB175=true;
function funcionesB175(){
if (paseB175 == true){
puntuacionUnoR = preguntas[175].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB175 = false;
}
}
var paseC175=true;
function funcionesC175(){
if (paseC175 == true){
puntuacionUnoR = preguntas[175].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC175 = false;
}
}
var paseD175=true;
function funcionesD175(){
if (paseD175 == true){
puntuacionUnoR = preguntas[175].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD175 = false;
}
}
var paseE175=true;
function funcionesE175(){
if (paseE175 == true){
puntuacionUnoR = preguntas[175].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE175 = false;
}
}
//----------------------------------------------
function vidas175(){
if(conteoVidas == 0){
document.getElementById("vida175A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida175B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida175C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA176=true;
function funcionesA176(){
if (paseA176 == true){
puntuacionUnoR = preguntas[176].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA176 = false;
}
}
var paseB176=true;
function funcionesB176(){
if (paseB176 == true){
puntuacionUnoR = preguntas[176].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB176 = false;
}
}
var paseC176=true;
function funcionesC176(){
if (paseC176 == true){
puntuacionUnoR = preguntas[176].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC176 = false;
}
}
var paseD176=true;
function funcionesD176(){
if (paseD176 == true){
puntuacionUnoR = preguntas[176].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD176 = false;
}
}
var paseE176=true;
function funcionesE176(){
if (paseE176 == true){
puntuacionUnoR = preguntas[176].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE176 = false;
}
}
//----------------------------------------------
function vidas176(){
if(conteoVidas == 0){
document.getElementById("vida176A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida176B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida176C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA177=true;
function funcionesA177(){
if (paseA177 == true){
puntuacionUnoR = preguntas[177].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA177 = false;
}
}
var paseB177=true;
function funcionesB177(){
if (paseB177 == true){
puntuacionUnoR = preguntas[177].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB177 = false;
}
}
var paseC177=true;
function funcionesC177(){
if (paseC177 == true){
puntuacionUnoR = preguntas[177].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC177 = false;
}
}
var paseD177=true;
function funcionesD177(){
if (paseD177 == true){
puntuacionUnoR = preguntas[177].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD177 = false;
}
}
var paseE177=true;
function funcionesE177(){
if (paseE177 == true){
puntuacionUnoR = preguntas[177].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE177 = false;
}
}
//----------------------------------------------
function vidas177(){
if(conteoVidas == 0){
document.getElementById("vida177A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida177B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida177C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA178=true;
function funcionesA178(){
if (paseA178 == true){
puntuacionUnoR = preguntas[178].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA178 = false;
}
}
var paseB178=true;
function funcionesB178(){
if (paseB178 == true){
puntuacionUnoR = preguntas[178].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB178 = false;
}
}
var paseC178=true;
function funcionesC178(){
if (paseC178 == true){
puntuacionUnoR = preguntas[178].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC178 = false;
}
}
var paseD178=true;
function funcionesD178(){
if (paseD178 == true){
puntuacionUnoR = preguntas[178].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD178 = false;
}
}
var paseE178=true;
function funcionesE178(){
if (paseE178 == true){
puntuacionUnoR = preguntas[178].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE178 = false;
}
}
//----------------------------------------------
function vidas178(){
if(conteoVidas == 0){
document.getElementById("vida178A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida178B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida178C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA179=true;
function funcionesA179(){
if (paseA179 == true){
puntuacionUnoR = preguntas[179].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA179 = false;
}
}
var paseB179=true;
function funcionesB179(){
if (paseB179 == true){
puntuacionUnoR = preguntas[179].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB179 = false;
}
}
var paseC179=true;
function funcionesC179(){
if (paseC179 == true){
puntuacionUnoR = preguntas[179].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC179 = false;
}
}
var paseD179=true;
function funcionesD179(){
if (paseD179 == true){
puntuacionUnoR = preguntas[179].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD179 = false;
}
}
var paseE179=true;
function funcionesE179(){
if (paseE179 == true){
puntuacionUnoR = preguntas[179].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE179 = false;
}
}
//----------------------------------------------
function vidas179(){
if(conteoVidas == 0){
document.getElementById("vida179A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida179B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida179C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA180=true;
function funcionesA180(){
if (paseA180 == true){
puntuacionUnoR = preguntas[180].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA180 = false;
}
}
var paseB180=true;
function funcionesB180(){
if (paseB180 == true){
puntuacionUnoR = preguntas[180].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB180 = false;
}
}
var paseC180=true;
function funcionesC180(){
if (paseC180 == true){
puntuacionUnoR = preguntas[180].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC180 = false;
}
}
var paseD180=true;
function funcionesD180(){
if (paseD180 == true){
puntuacionUnoR = preguntas[180].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD180 = false;
}
}
var paseE180=true;
function funcionesE180(){
if (paseE180 == true){
puntuacionUnoR = preguntas[180].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE180 = false;
}
}
//----------------------------------------------
function vidas180(){
if(conteoVidas == 0){
document.getElementById("vida180A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida180B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida180C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA181=true;
function funcionesA181(){
if (paseA181 == true){
puntuacionUnoR = preguntas[181].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA181 = false;
}
}
var paseB181=true;
function funcionesB181(){
if (paseB181 == true){
puntuacionUnoR = preguntas[181].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB181 = false;
}
}
var paseC181=true;
function funcionesC181(){
if (paseC181 == true){
puntuacionUnoR = preguntas[181].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC181 = false;
}
}
var paseD181=true;
function funcionesD181(){
if (paseD181 == true){
puntuacionUnoR = preguntas[181].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD181 = false;
}
}
var paseE181=true;
function funcionesE181(){
if (paseE181 == true){
puntuacionUnoR = preguntas[181].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE181 = false;
}
}
//----------------------------------------------
function vidas181(){
if(conteoVidas == 0){
document.getElementById("vida181A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida181B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida181C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA182=true;
function funcionesA182(){
if (paseA182 == true){
puntuacionUnoR = preguntas[182].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA182 = false;
}
}
var paseB182=true;
function funcionesB182(){
if (paseB182 == true){
puntuacionUnoR = preguntas[182].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB182 = false;
}
}
var paseC182=true;
function funcionesC182(){
if (paseC182 == true){
puntuacionUnoR = preguntas[182].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC182 = false;
}
}
var paseD182=true;
function funcionesD182(){
if (paseD182 == true){
puntuacionUnoR = preguntas[182].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD182 = false;
}
}
var paseE182=true;
function funcionesE182(){
if (paseE182 == true){
puntuacionUnoR = preguntas[182].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE182 = false;
}
}
//----------------------------------------------
function vidas182(){
if(conteoVidas == 0){
document.getElementById("vida182A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida182B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida182C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA183=true;
function funcionesA183(){
if (paseA183 == true){
puntuacionUnoR = preguntas[183].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA183 = false;
}
}
var paseB183=true;
function funcionesB183(){
if (paseB183 == true){
puntuacionUnoR = preguntas[183].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB183 = false;
}
}
var paseC183=true;
function funcionesC183(){
if (paseC183 == true){
puntuacionUnoR = preguntas[183].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC183 = false;
}
}
var paseD183=true;
function funcionesD183(){
if (paseD183 == true){
puntuacionUnoR = preguntas[183].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD183 = false;
}
}
var paseE183=true;
function funcionesE183(){
if (paseE183 == true){
puntuacionUnoR = preguntas[183].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE183 = false;
}
}
//----------------------------------------------
function vidas183(){
if(conteoVidas == 0){
document.getElementById("vida183A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida183B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida183C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA184=true;
function funcionesA184(){
if (paseA184 == true){
puntuacionUnoR = preguntas[184].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA184 = false;
}
}
var paseB184=true;
function funcionesB184(){
if (paseB184 == true){
puntuacionUnoR = preguntas[184].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB184 = false;
}
}
var paseC184=true;
function funcionesC184(){
if (paseC184 == true){
puntuacionUnoR = preguntas[184].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC184 = false;
}
}
var paseD184=true;
function funcionesD184(){
if (paseD184 == true){
puntuacionUnoR = preguntas[184].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD184 = false;
}
}
var paseE184=true;
function funcionesE184(){
if (paseE184 == true){
puntuacionUnoR = preguntas[184].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE184 = false;
}
}
//----------------------------------------------
function vidas184(){
if(conteoVidas == 0){
document.getElementById("vida184A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida184B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida184C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA185=true;
function funcionesA185(){
if (paseA185 == true){
puntuacionUnoR = preguntas[185].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA185 = false;
}
}
var paseB185=true;
function funcionesB185(){
if (paseB185 == true){
puntuacionUnoR = preguntas[185].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB185 = false;
}
}
var paseC185=true;
function funcionesC185(){
if (paseC185 == true){
puntuacionUnoR = preguntas[185].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC185 = false;
}
}
var paseD185=true;
function funcionesD185(){
if (paseD185 == true){
puntuacionUnoR = preguntas[185].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD185 = false;
}
}
var paseE185=true;
function funcionesE185(){
if (paseE185 == true){
puntuacionUnoR = preguntas[185].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE185 = false;
}
}
//----------------------------------------------
function vidas185(){
if(conteoVidas == 0){
document.getElementById("vida185A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida185B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida185C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA186=true;
function funcionesA186(){
if (paseA186 == true){
puntuacionUnoR = preguntas[186].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA186 = false;
}
}
var paseB186=true;
function funcionesB186(){
if (paseB186 == true){
puntuacionUnoR = preguntas[186].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB186 = false;
}
}
var paseC186=true;
function funcionesC186(){
if (paseC186 == true){
puntuacionUnoR = preguntas[186].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC186 = false;
}
}
var paseD186=true;
function funcionesD186(){
if (paseD186 == true){
puntuacionUnoR = preguntas[186].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD186 = false;
}
}
var paseE186=true;
function funcionesE186(){
if (paseE186 == true){
puntuacionUnoR = preguntas[186].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE186 = false;
}
}
//----------------------------------------------
function vidas186(){
if(conteoVidas == 0){
document.getElementById("vida186A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida186B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida186C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA187=true;
function funcionesA187(){
if (paseA187 == true){
puntuacionUnoR = preguntas[187].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA187 = false;
}
}
var paseB187=true;
function funcionesB187(){
if (paseB187 == true){
puntuacionUnoR = preguntas[187].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB187 = false;
}
}
var paseC187=true;
function funcionesC187(){
if (paseC187 == true){
puntuacionUnoR = preguntas[187].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC187 = false;
}
}
var paseD187=true;
function funcionesD187(){
if (paseD187 == true){
puntuacionUnoR = preguntas[187].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD187 = false;
}
}
var paseE187=true;
function funcionesE187(){
if (paseE187 == true){
puntuacionUnoR = preguntas[187].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE187 = false;
}
}
//----------------------------------------------
function vidas187(){
if(conteoVidas == 0){
document.getElementById("vida187A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida187B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida187C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA188=true;
function funcionesA188(){
if (paseA188 == true){
puntuacionUnoR = preguntas[188].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA188 = false;
}
}
var paseB188=true;
function funcionesB188(){
if (paseB188 == true){
puntuacionUnoR = preguntas[188].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB188 = false;
}
}
var paseC188=true;
function funcionesC188(){
if (paseC188 == true){
puntuacionUnoR = preguntas[188].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC188 = false;
}
}
var paseD188=true;
function funcionesD188(){
if (paseD188 == true){
puntuacionUnoR = preguntas[188].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD188 = false;
}
}
var paseE188=true;
function funcionesE188(){
if (paseE188 == true){
puntuacionUnoR = preguntas[188].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE188 = false;
}
}
//----------------------------------------------
function vidas188(){
if(conteoVidas == 0){
document.getElementById("vida188A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida188B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida188C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA189=true;
function funcionesA189(){
if (paseA189 == true){
puntuacionUnoR = preguntas[189].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA189 = false;
}
}
var paseB189=true;
function funcionesB189(){
if (paseB189 == true){
puntuacionUnoR = preguntas[189].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB189 = false;
}
}
var paseC189=true;
function funcionesC189(){
if (paseC189 == true){
puntuacionUnoR = preguntas[189].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC189 = false;
}
}
var paseD189=true;
function funcionesD189(){
if (paseD189 == true){
puntuacionUnoR = preguntas[189].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD189 = false;
}
}
var paseE189=true;
function funcionesE189(){
if (paseE189 == true){
puntuacionUnoR = preguntas[189].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE189 = false;
}
}
//----------------------------------------------
function vidas189(){
if(conteoVidas == 0){
document.getElementById("vida189A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida189B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida189C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA190=true;
function funcionesA190(){
if (paseA190 == true){
puntuacionUnoR = preguntas[190].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA190 = false;
}
}
var paseB190=true;
function funcionesB190(){
if (paseB190 == true){
puntuacionUnoR = preguntas[190].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB190 = false;
}
}
var paseC190=true;
function funcionesC190(){
if (paseC190 == true){
puntuacionUnoR = preguntas[190].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC190 = false;
}
}
var paseD190=true;
function funcionesD190(){
if (paseD190 == true){
puntuacionUnoR = preguntas[190].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD190 = false;
}
}
var paseE190=true;
function funcionesE190(){
if (paseE190 == true){
puntuacionUnoR = preguntas[190].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE190 = false;
}
}
//----------------------------------------------
function vidas190(){
if(conteoVidas == 0){
document.getElementById("vida190A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida190B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida190C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA191=true;
function funcionesA191(){
if (paseA191 == true){
puntuacionUnoR = preguntas[191].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA191 = false;
}
}
var paseB191=true;
function funcionesB191(){
if (paseB191 == true){
puntuacionUnoR = preguntas[191].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB191 = false;
}
}
var paseC191=true;
function funcionesC191(){
if (paseC191 == true){
puntuacionUnoR = preguntas[191].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC191 = false;
}
}
var paseD191=true;
function funcionesD191(){
if (paseD191 == true){
puntuacionUnoR = preguntas[191].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD191 = false;
}
}
var paseE191=true;
function funcionesE191(){
if (paseE191 == true){
puntuacionUnoR = preguntas[191].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE191 = false;
}
}
//----------------------------------------------
function vidas191(){
if(conteoVidas == 0){
document.getElementById("vida191A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida191B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida191C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA192=true;
function funcionesA192(){
if (paseA192 == true){
puntuacionUnoR = preguntas[192].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA192 = false;
}
}
var paseB192=true;
function funcionesB192(){
if (paseB192 == true){
puntuacionUnoR = preguntas[192].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB192 = false;
}
}
var paseC192=true;
function funcionesC192(){
if (paseC192 == true){
puntuacionUnoR = preguntas[192].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC192 = false;
}
}
var paseD192=true;
function funcionesD192(){
if (paseD192 == true){
puntuacionUnoR = preguntas[192].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD192 = false;
}
}
var paseE192=true;
function funcionesE192(){
if (paseE192 == true){
puntuacionUnoR = preguntas[192].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE192 = false;
}
}
//----------------------------------------------
function vidas192(){
if(conteoVidas == 0){
document.getElementById("vida192A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida192B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida192C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA193=true;
function funcionesA193(){
if (paseA193 == true){
puntuacionUnoR = preguntas[193].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA193 = false;
}
}
var paseB193=true;
function funcionesB193(){
if (paseB193 == true){
puntuacionUnoR = preguntas[193].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB193 = false;
}
}
var paseC193=true;
function funcionesC193(){
if (paseC193 == true){
puntuacionUnoR = preguntas[193].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC193 = false;
}
}
var paseD193=true;
function funcionesD193(){
if (paseD193 == true){
puntuacionUnoR = preguntas[193].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD193 = false;
}
}
var paseE193=true;
function funcionesE193(){
if (paseE193 == true){
puntuacionUnoR = preguntas[193].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE193 = false;
}
}
//----------------------------------------------
function vidas193(){
if(conteoVidas == 0){
document.getElementById("vida193A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida193B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida193C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA194=true;
function funcionesA194(){
if (paseA194 == true){
puntuacionUnoR = preguntas[194].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA194 = false;
}
}
var paseB194=true;
function funcionesB194(){
if (paseB194 == true){
puntuacionUnoR = preguntas[194].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB194 = false;
}
}
var paseC194=true;
function funcionesC194(){
if (paseC194 == true){
puntuacionUnoR = preguntas[194].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC194 = false;
}
}
var paseD194=true;
function funcionesD194(){
if (paseD194 == true){
puntuacionUnoR = preguntas[194].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD194 = false;
}
}
var paseE194=true;
function funcionesE194(){
if (paseE194 == true){
puntuacionUnoR = preguntas[194].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE194 = false;
}
}
//----------------------------------------------
function vidas194(){
if(conteoVidas == 0){
document.getElementById("vida194A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida194B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida194C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA195=true;
function funcionesA195(){
if (paseA195 == true){
puntuacionUnoR = preguntas[195].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA195 = false;
}
}
var paseB195=true;
function funcionesB195(){
if (paseB195 == true){
puntuacionUnoR = preguntas[195].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB195 = false;
}
}
var paseC195=true;
function funcionesC195(){
if (paseC195 == true){
puntuacionUnoR = preguntas[195].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC195 = false;
}
}
var paseD195=true;
function funcionesD195(){
if (paseD195 == true){
puntuacionUnoR = preguntas[195].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD195 = false;
}
}
var paseE195=true;
function funcionesE195(){
if (paseE195 == true){
puntuacionUnoR = preguntas[195].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE195 = false;
}
}
//----------------------------------------------
function vidas195(){
if(conteoVidas == 0){
document.getElementById("vida195A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida195B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida195C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA196=true;
function funcionesA196(){
if (paseA196 == true){
puntuacionUnoR = preguntas[196].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA196 = false;
}
}
var paseB196=true;
function funcionesB196(){
if (paseB196 == true){
puntuacionUnoR = preguntas[196].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB196 = false;
}
}
var paseC196=true;
function funcionesC196(){
if (paseC196 == true){
puntuacionUnoR = preguntas[196].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC196 = false;
}
}
var paseD196=true;
function funcionesD196(){
if (paseD196 == true){
puntuacionUnoR = preguntas[196].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD196 = false;
}
}
var paseE196=true;
function funcionesE196(){
if (paseE196 == true){
puntuacionUnoR = preguntas[196].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE196 = false;
}
}
//----------------------------------------------
function vidas196(){
if(conteoVidas == 0){
document.getElementById("vida196A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida196B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida196C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA197=true;
function funcionesA197(){
if (paseA197 == true){
puntuacionUnoR = preguntas[197].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA197 = false;
}
}
var paseB197=true;
function funcionesB197(){
if (paseB197 == true){
puntuacionUnoR = preguntas[197].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB197 = false;
}
}
var paseC197=true;
function funcionesC197(){
if (paseC197 == true){
puntuacionUnoR = preguntas[197].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC197 = false;
}
}
var paseD197=true;
function funcionesD197(){
if (paseD197 == true){
puntuacionUnoR = preguntas[197].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD197 = false;
}
}
var paseE197=true;
function funcionesE197(){
if (paseE197 == true){
puntuacionUnoR = preguntas[197].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE197 = false;
}
}
//----------------------------------------------
function vidas197(){
if(conteoVidas == 0){
document.getElementById("vida197A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida197B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida197C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA198=true;
function funcionesA198(){
if (paseA198 == true){
puntuacionUnoR = preguntas[198].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA198 = false;
}
}
var paseB198=true;
function funcionesB198(){
if (paseB198 == true){
puntuacionUnoR = preguntas[198].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB198 = false;
}
}
var paseC198=true;
function funcionesC198(){
if (paseC198 == true){
puntuacionUnoR = preguntas[198].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC198 = false;
}
}
var paseD198=true;
function funcionesD198(){
if (paseD198 == true){
puntuacionUnoR = preguntas[198].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD198 = false;
}
}
var paseE198=true;
function funcionesE198(){
if (paseE198 == true){
puntuacionUnoR = preguntas[198].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE198 = false;
}
}
//----------------------------------------------
function vidas198(){
if(conteoVidas == 0){
document.getElementById("vida198A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida198B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida198C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA199=true;
function funcionesA199(){
if (paseA199 == true){
puntuacionUnoR = preguntas[199].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA199 = false;
}
}
var paseB199=true;
function funcionesB199(){
if (paseB199 == true){
puntuacionUnoR = preguntas[199].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB199 = false;
}
}
var paseC199=true;
function funcionesC199(){
if (paseC199 == true){
puntuacionUnoR = preguntas[199].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC199 = false;
}
}
var paseD199=true;
function funcionesD199(){
if (paseD199 == true){
puntuacionUnoR = preguntas[199].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD199 = false;
}
}
var paseE199=true;
function funcionesE199(){
if (paseE199 == true){
puntuacionUnoR = preguntas[199].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE199 = false;
}
}
//----------------------------------------------
function vidas199(){
if(conteoVidas == 0){
document.getElementById("vida199A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida199B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida199C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA200=true;
function funcionesA200(){
if (paseA200 == true){
puntuacionUnoR = preguntas[200].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA200 = false;
}
}
var paseB200=true;
function funcionesB200(){
if (paseB200 == true){
puntuacionUnoR = preguntas[200].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB200 = false;
}
}
var paseC200=true;
function funcionesC200(){
if (paseC200 == true){
puntuacionUnoR = preguntas[200].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC200 = false;
}
}
var paseD200=true;
function funcionesD200(){
if (paseD200 == true){
puntuacionUnoR = preguntas[200].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD200 = false;
}
}
var paseE200=true;
function funcionesE200(){
if (paseE200 == true){
puntuacionUnoR = preguntas[200].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE200 = false;
}
}
//----------------------------------------------
function vidas200(){
if(conteoVidas == 0){
document.getElementById("vida200A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida200B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida200C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA201=true;
function funcionesA201(){
if (paseA201 == true){
puntuacionUnoR = preguntas[201].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA201 = false;
}
}
var paseB201=true;
function funcionesB201(){
if (paseB201 == true){
puntuacionUnoR = preguntas[201].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB201 = false;
}
}
var paseC201=true;
function funcionesC201(){
if (paseC201 == true){
puntuacionUnoR = preguntas[201].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC201 = false;
}
}
var paseD201=true;
function funcionesD201(){
if (paseD201 == true){
puntuacionUnoR = preguntas[201].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD201 = false;
}
}
var paseE201=true;
function funcionesE201(){
if (paseE201 == true){
puntuacionUnoR = preguntas[201].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE201 = false;
}
}
//----------------------------------------------
function vidas201(){
if(conteoVidas == 0){
document.getElementById("vida201A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida201B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida201C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA202=true;
function funcionesA202(){
if (paseA202 == true){
puntuacionUnoR = preguntas[202].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA202 = false;
}
}
var paseB202=true;
function funcionesB202(){
if (paseB202 == true){
puntuacionUnoR = preguntas[202].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB202 = false;
}
}
var paseC202=true;
function funcionesC202(){
if (paseC202 == true){
puntuacionUnoR = preguntas[202].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC202 = false;
}
}
var paseD202=true;
function funcionesD202(){
if (paseD202 == true){
puntuacionUnoR = preguntas[202].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD202 = false;
}
}
var paseE202=true;
function funcionesE202(){
if (paseE202 == true){
puntuacionUnoR = preguntas[202].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE202 = false;
}
}
//----------------------------------------------
function vidas202(){
if(conteoVidas == 0){
document.getElementById("vida202A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida202B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida202C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA203=true;
function funcionesA203(){
if (paseA203 == true){
puntuacionUnoR = preguntas[203].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA203 = false;
}
}
var paseB203=true;
function funcionesB203(){
if (paseB203 == true){
puntuacionUnoR = preguntas[203].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB203 = false;
}
}
var paseC203=true;
function funcionesC203(){
if (paseC203 == true){
puntuacionUnoR = preguntas[203].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC203 = false;
}
}
var paseD203=true;
function funcionesD203(){
if (paseD203 == true){
puntuacionUnoR = preguntas[203].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD203 = false;
}
}
var paseE203=true;
function funcionesE203(){
if (paseE203 == true){
puntuacionUnoR = preguntas[203].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE203 = false;
}
}
//----------------------------------------------
function vidas203(){
if(conteoVidas == 0){
document.getElementById("vida203A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida203B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida203C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA204=true;
function funcionesA204(){
if (paseA204 == true){
puntuacionUnoR = preguntas[204].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA204 = false;
}
}
var paseB204=true;
function funcionesB204(){
if (paseB204 == true){
puntuacionUnoR = preguntas[204].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB204 = false;
}
}
var paseC204=true;
function funcionesC204(){
if (paseC204 == true){
puntuacionUnoR = preguntas[204].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC204 = false;
}
}
var paseD204=true;
function funcionesD204(){
if (paseD204 == true){
puntuacionUnoR = preguntas[204].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD204 = false;
}
}
var paseE204=true;
function funcionesE204(){
if (paseE204 == true){
puntuacionUnoR = preguntas[204].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE204 = false;
}
}
//----------------------------------------------
function vidas204(){
if(conteoVidas == 0){
document.getElementById("vida204A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida204B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida204C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA205=true;
function funcionesA205(){
if (paseA205 == true){
puntuacionUnoR = preguntas[205].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA205 = false;
}
}
var paseB205=true;
function funcionesB205(){
if (paseB205 == true){
puntuacionUnoR = preguntas[205].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB205 = false;
}
}
var paseC205=true;
function funcionesC205(){
if (paseC205 == true){
puntuacionUnoR = preguntas[205].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC205 = false;
}
}
var paseD205=true;
function funcionesD205(){
if (paseD205 == true){
puntuacionUnoR = preguntas[205].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD205 = false;
}
}
var paseE205=true;
function funcionesE205(){
if (paseE205 == true){
puntuacionUnoR = preguntas[205].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE205 = false;
}
}
//----------------------------------------------
function vidas205(){
if(conteoVidas == 0){
document.getElementById("vida205A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida205B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida205C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA206=true;
function funcionesA206(){
if (paseA206 == true){
puntuacionUnoR = preguntas[206].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA206 = false;
}
}
var paseB206=true;
function funcionesB206(){
if (paseB206 == true){
puntuacionUnoR = preguntas[206].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB206 = false;
}
}
var paseC206=true;
function funcionesC206(){
if (paseC206 == true){
puntuacionUnoR = preguntas[206].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC206 = false;
}
}
var paseD206=true;
function funcionesD206(){
if (paseD206 == true){
puntuacionUnoR = preguntas[206].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD206 = false;
}
}
var paseE206=true;
function funcionesE206(){
if (paseE206 == true){
puntuacionUnoR = preguntas[206].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE206 = false;
}
}
//----------------------------------------------
function vidas206(){
if(conteoVidas == 0){
document.getElementById("vida206A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida206B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida206C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA207=true;
function funcionesA207(){
if (paseA207 == true){
puntuacionUnoR = preguntas[207].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA207 = false;
}
}
var paseB207=true;
function funcionesB207(){
if (paseB207 == true){
puntuacionUnoR = preguntas[207].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB207 = false;
}
}
var paseC207=true;
function funcionesC207(){
if (paseC207 == true){
puntuacionUnoR = preguntas[207].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC207 = false;
}
}
var paseD207=true;
function funcionesD207(){
if (paseD207 == true){
puntuacionUnoR = preguntas[207].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD207 = false;
}
}
var paseE207=true;
function funcionesE207(){
if (paseE207 == true){
puntuacionUnoR = preguntas[207].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE207 = false;
}
}
//----------------------------------------------
function vidas207(){
if(conteoVidas == 0){
document.getElementById("vida207A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida207B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida207C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA208=true;
function funcionesA208(){
if (paseA208 == true){
puntuacionUnoR = preguntas[208].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA208 = false;
}
}
var paseB208=true;
function funcionesB208(){
if (paseB208 == true){
puntuacionUnoR = preguntas[208].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB208 = false;
}
}
var paseC208=true;
function funcionesC208(){
if (paseC208 == true){
puntuacionUnoR = preguntas[208].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC208 = false;
}
}
var paseD208=true;
function funcionesD208(){
if (paseD208 == true){
puntuacionUnoR = preguntas[208].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD208 = false;
}
}
var paseE208=true;
function funcionesE208(){
if (paseE208 == true){
puntuacionUnoR = preguntas[208].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE208 = false;
}
}
//----------------------------------------------
function vidas208(){
if(conteoVidas == 0){
document.getElementById("vida208A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida208B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida208C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA209=true;
function funcionesA209(){
if (paseA209 == true){
puntuacionUnoR = preguntas[209].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA209 = false;
}
}
var paseB209=true;
function funcionesB209(){
if (paseB209 == true){
puntuacionUnoR = preguntas[209].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB209 = false;
}
}
var paseC209=true;
function funcionesC209(){
if (paseC209 == true){
puntuacionUnoR = preguntas[209].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC209 = false;
}
}
var paseD209=true;
function funcionesD209(){
if (paseD209 == true){
puntuacionUnoR = preguntas[209].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD209 = false;
}
}
var paseE209=true;
function funcionesE209(){
if (paseE209 == true){
puntuacionUnoR = preguntas[209].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE209 = false;
}
}
//----------------------------------------------
function vidas209(){
if(conteoVidas == 0){
document.getElementById("vida209A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida209B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida209C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA210=true;
function funcionesA210(){
if (paseA210 == true){
puntuacionUnoR = preguntas[210].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA210 = false;
}
}
var paseB210=true;
function funcionesB210(){
if (paseB210 == true){
puntuacionUnoR = preguntas[210].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB210 = false;
}
}
var paseC210=true;
function funcionesC210(){
if (paseC210 == true){
puntuacionUnoR = preguntas[210].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC210 = false;
}
}
var paseD210=true;
function funcionesD210(){
if (paseD210 == true){
puntuacionUnoR = preguntas[210].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD210 = false;
}
}
var paseE210=true;
function funcionesE210(){
if (paseE210 == true){
puntuacionUnoR = preguntas[210].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE210 = false;
}
}
//----------------------------------------------
function vidas210(){
if(conteoVidas == 0){
document.getElementById("vida210A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida210B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida210C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA211=true;
function funcionesA211(){
if (paseA211 == true){
puntuacionUnoR = preguntas[211].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA211 = false;
}
}
var paseB211=true;
function funcionesB211(){
if (paseB211 == true){
puntuacionUnoR = preguntas[211].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB211 = false;
}
}
var paseC211=true;
function funcionesC211(){
if (paseC211 == true){
puntuacionUnoR = preguntas[211].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC211 = false;
}
}
var paseD211=true;
function funcionesD211(){
if (paseD211 == true){
puntuacionUnoR = preguntas[211].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD211 = false;
}
}
var paseE211=true;
function funcionesE211(){
if (paseE211 == true){
puntuacionUnoR = preguntas[211].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE211 = false;
}
}
//----------------------------------------------
function vidas211(){
if(conteoVidas == 0){
document.getElementById("vida211A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida211B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida211C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA212=true;
function funcionesA212(){
if (paseA212 == true){
puntuacionUnoR = preguntas[212].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA212 = false;
}
}
var paseB212=true;
function funcionesB212(){
if (paseB212 == true){
puntuacionUnoR = preguntas[212].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB212 = false;
}
}
var paseC212=true;
function funcionesC212(){
if (paseC212 == true){
puntuacionUnoR = preguntas[212].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC212 = false;
}
}
var paseD212=true;
function funcionesD212(){
if (paseD212 == true){
puntuacionUnoR = preguntas[212].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD212 = false;
}
}
var paseE212=true;
function funcionesE212(){
if (paseE212 == true){
puntuacionUnoR = preguntas[212].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE212 = false;
}
}
//----------------------------------------------
function vidas212(){
if(conteoVidas == 0){
document.getElementById("vida212A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida212B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida212C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA213=true;
function funcionesA213(){
if (paseA213 == true){
puntuacionUnoR = preguntas[213].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA213 = false;
}
}
var paseB213=true;
function funcionesB213(){
if (paseB213 == true){
puntuacionUnoR = preguntas[213].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB213 = false;
}
}
var paseC213=true;
function funcionesC213(){
if (paseC213 == true){
puntuacionUnoR = preguntas[213].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC213 = false;
}
}
var paseD213=true;
function funcionesD213(){
if (paseD213 == true){
puntuacionUnoR = preguntas[213].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD213 = false;
}
}
var paseE213=true;
function funcionesE213(){
if (paseE213 == true){
puntuacionUnoR = preguntas[213].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE213 = false;
}
}
//----------------------------------------------
function vidas213(){
if(conteoVidas == 0){
document.getElementById("vida213A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida213B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida213C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA214=true;
function funcionesA214(){
if (paseA214 == true){
puntuacionUnoR = preguntas[214].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA214 = false;
}
}
var paseB214=true;
function funcionesB214(){
if (paseB214 == true){
puntuacionUnoR = preguntas[214].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB214 = false;
}
}
var paseC214=true;
function funcionesC214(){
if (paseC214 == true){
puntuacionUnoR = preguntas[214].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC214 = false;
}
}
var paseD214=true;
function funcionesD214(){
if (paseD214 == true){
puntuacionUnoR = preguntas[214].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD214 = false;
}
}
var paseE214=true;
function funcionesE214(){
if (paseE214 == true){
puntuacionUnoR = preguntas[214].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE214 = false;
}
}
//----------------------------------------------
function vidas214(){
if(conteoVidas == 0){
document.getElementById("vida214A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida214B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida214C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA215=true;
function funcionesA215(){
if (paseA215 == true){
puntuacionUnoR = preguntas[215].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA215 = false;
}
}
var paseB215=true;
function funcionesB215(){
if (paseB215 == true){
puntuacionUnoR = preguntas[215].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB215 = false;
}
}
var paseC215=true;
function funcionesC215(){
if (paseC215 == true){
puntuacionUnoR = preguntas[215].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC215 = false;
}
}
var paseD215=true;
function funcionesD215(){
if (paseD215 == true){
puntuacionUnoR = preguntas[215].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD215 = false;
}
}
var paseE215=true;
function funcionesE215(){
if (paseE215 == true){
puntuacionUnoR = preguntas[215].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE215 = false;
}
}
//----------------------------------------------
function vidas215(){
if(conteoVidas == 0){
document.getElementById("vida215A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida215B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida215C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA216=true;
function funcionesA216(){
if (paseA216 == true){
puntuacionUnoR = preguntas[216].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA216 = false;
}
}
var paseB216=true;
function funcionesB216(){
if (paseB216 == true){
puntuacionUnoR = preguntas[216].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB216 = false;
}
}
var paseC216=true;
function funcionesC216(){
if (paseC216 == true){
puntuacionUnoR = preguntas[216].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC216 = false;
}
}
var paseD216=true;
function funcionesD216(){
if (paseD216 == true){
puntuacionUnoR = preguntas[216].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD216 = false;
}
}
var paseE216=true;
function funcionesE216(){
if (paseE216 == true){
puntuacionUnoR = preguntas[216].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE216 = false;
}
}
//----------------------------------------------
function vidas216(){
if(conteoVidas == 0){
document.getElementById("vida216A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida216B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida216C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA217=true;
function funcionesA217(){
if (paseA217 == true){
puntuacionUnoR = preguntas[217].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA217 = false;
}
}
var paseB217=true;
function funcionesB217(){
if (paseB217 == true){
puntuacionUnoR = preguntas[217].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB217 = false;
}
}
var paseC217=true;
function funcionesC217(){
if (paseC217 == true){
puntuacionUnoR = preguntas[217].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC217 = false;
}
}
var paseD217=true;
function funcionesD217(){
if (paseD217 == true){
puntuacionUnoR = preguntas[217].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD217 = false;
}
}
var paseE217=true;
function funcionesE217(){
if (paseE217 == true){
puntuacionUnoR = preguntas[217].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE217 = false;
}
}
//----------------------------------------------
function vidas217(){
if(conteoVidas == 0){
document.getElementById("vida217A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida217B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida217C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA218=true;
function funcionesA218(){
if (paseA218 == true){
puntuacionUnoR = preguntas[218].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA218 = false;
}
}
var paseB218=true;
function funcionesB218(){
if (paseB218 == true){
puntuacionUnoR = preguntas[218].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB218 = false;
}
}
var paseC218=true;
function funcionesC218(){
if (paseC218 == true){
puntuacionUnoR = preguntas[218].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC218 = false;
}
}
var paseD218=true;
function funcionesD218(){
if (paseD218 == true){
puntuacionUnoR = preguntas[218].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD218 = false;
}
}
var paseE218=true;
function funcionesE218(){
if (paseE218 == true){
puntuacionUnoR = preguntas[218].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE218 = false;
}
}
//----------------------------------------------
function vidas218(){
if(conteoVidas == 0){
document.getElementById("vida218A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida218B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida218C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA219=true;
function funcionesA219(){
if (paseA219 == true){
puntuacionUnoR = preguntas[219].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA219 = false;
}
}
var paseB219=true;
function funcionesB219(){
if (paseB219 == true){
puntuacionUnoR = preguntas[219].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB219 = false;
}
}
var paseC219=true;
function funcionesC219(){
if (paseC219 == true){
puntuacionUnoR = preguntas[219].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC219 = false;
}
}
var paseD219=true;
function funcionesD219(){
if (paseD219 == true){
puntuacionUnoR = preguntas[219].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD219 = false;
}
}
var paseE219=true;
function funcionesE219(){
if (paseE219 == true){
puntuacionUnoR = preguntas[219].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE219 = false;
}
}
//----------------------------------------------
function vidas219(){
if(conteoVidas == 0){
document.getElementById("vida219A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida219B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida219C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA220=true;
function funcionesA220(){
if (paseA220 == true){
puntuacionUnoR = preguntas[220].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA220 = false;
}
}
var paseB220=true;
function funcionesB220(){
if (paseB220 == true){
puntuacionUnoR = preguntas[220].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB220 = false;
}
}
var paseC220=true;
function funcionesC220(){
if (paseC220 == true){
puntuacionUnoR = preguntas[220].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC220 = false;
}
}
var paseD220=true;
function funcionesD220(){
if (paseD220 == true){
puntuacionUnoR = preguntas[220].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD220 = false;
}
}
var paseE220=true;
function funcionesE220(){
if (paseE220 == true){
puntuacionUnoR = preguntas[220].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE220 = false;
}
}
//----------------------------------------------
function vidas220(){
if(conteoVidas == 0){
document.getElementById("vida220A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida220B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida220C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA221=true;
function funcionesA221(){
if (paseA221 == true){
puntuacionUnoR = preguntas[221].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA221 = false;
}
}
var paseB221=true;
function funcionesB221(){
if (paseB221 == true){
puntuacionUnoR = preguntas[221].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB221 = false;
}
}
var paseC221=true;
function funcionesC221(){
if (paseC221 == true){
puntuacionUnoR = preguntas[221].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC221 = false;
}
}
var paseD221=true;
function funcionesD221(){
if (paseD221 == true){
puntuacionUnoR = preguntas[221].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD221 = false;
}
}
var paseE221=true;
function funcionesE221(){
if (paseE221 == true){
puntuacionUnoR = preguntas[221].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE221 = false;
}
}
//----------------------------------------------
function vidas221(){
if(conteoVidas == 0){
document.getElementById("vida221A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida221B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida221C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA222=true;
function funcionesA222(){
if (paseA222 == true){
puntuacionUnoR = preguntas[222].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA222 = false;
}
}
var paseB222=true;
function funcionesB222(){
if (paseB222 == true){
puntuacionUnoR = preguntas[222].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB222 = false;
}
}
var paseC222=true;
function funcionesC222(){
if (paseC222 == true){
puntuacionUnoR = preguntas[222].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC222 = false;
}
}
var paseD222=true;
function funcionesD222(){
if (paseD222 == true){
puntuacionUnoR = preguntas[222].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD222 = false;
}
}
var paseE222=true;
function funcionesE222(){
if (paseE222 == true){
puntuacionUnoR = preguntas[222].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE222 = false;
}
}
//----------------------------------------------
function vidas222(){
if(conteoVidas == 0){
document.getElementById("vida222A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida222B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida222C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA223=true;
function funcionesA223(){
if (paseA223 == true){
puntuacionUnoR = preguntas[223].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA223 = false;
}
}
var paseB223=true;
function funcionesB223(){
if (paseB223 == true){
puntuacionUnoR = preguntas[223].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB223 = false;
}
}
var paseC223=true;
function funcionesC223(){
if (paseC223 == true){
puntuacionUnoR = preguntas[223].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC223 = false;
}
}
var paseD223=true;
function funcionesD223(){
if (paseD223 == true){
puntuacionUnoR = preguntas[223].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD223 = false;
}
}
var paseE223=true;
function funcionesE223(){
if (paseE223 == true){
puntuacionUnoR = preguntas[223].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE223 = false;
}
}
//----------------------------------------------
function vidas223(){
if(conteoVidas == 0){
document.getElementById("vida223A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida223B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida223C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA224=true;
function funcionesA224(){
if (paseA224 == true){
puntuacionUnoR = preguntas[224].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA224 = false;
}
}
var paseB224=true;
function funcionesB224(){
if (paseB224 == true){
puntuacionUnoR = preguntas[224].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB224 = false;
}
}
var paseC224=true;
function funcionesC224(){
if (paseC224 == true){
puntuacionUnoR = preguntas[224].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC224 = false;
}
}
var paseD224=true;
function funcionesD224(){
if (paseD224 == true){
puntuacionUnoR = preguntas[224].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD224 = false;
}
}
var paseE224=true;
function funcionesE224(){
if (paseE224 == true){
puntuacionUnoR = preguntas[224].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE224 = false;
}
}
//----------------------------------------------
function vidas224(){
if(conteoVidas == 0){
document.getElementById("vida224A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida224B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida224C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA225=true;
function funcionesA225(){
if (paseA225 == true){
puntuacionUnoR = preguntas[225].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA225 = false;
}
}
var paseB225=true;
function funcionesB225(){
if (paseB225 == true){
puntuacionUnoR = preguntas[225].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB225 = false;
}
}
var paseC225=true;
function funcionesC225(){
if (paseC225 == true){
puntuacionUnoR = preguntas[225].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC225 = false;
}
}
var paseD225=true;
function funcionesD225(){
if (paseD225 == true){
puntuacionUnoR = preguntas[225].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD225 = false;
}
}
var paseE225=true;
function funcionesE225(){
if (paseE225 == true){
puntuacionUnoR = preguntas[225].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE225 = false;
}
}
//----------------------------------------------
function vidas225(){
if(conteoVidas == 0){
document.getElementById("vida225A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida225B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida225C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA226=true;
function funcionesA226(){
if (paseA226 == true){
puntuacionUnoR = preguntas[226].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA226 = false;
}
}
var paseB226=true;
function funcionesB226(){
if (paseB226 == true){
puntuacionUnoR = preguntas[226].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB226 = false;
}
}
var paseC226=true;
function funcionesC226(){
if (paseC226 == true){
puntuacionUnoR = preguntas[226].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC226 = false;
}
}
var paseD226=true;
function funcionesD226(){
if (paseD226 == true){
puntuacionUnoR = preguntas[226].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD226 = false;
}
}
var paseE226=true;
function funcionesE226(){
if (paseE226 == true){
puntuacionUnoR = preguntas[226].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE226 = false;
}
}
//----------------------------------------------
function vidas226(){
if(conteoVidas == 0){
document.getElementById("vida226A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida226B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida226C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA227=true;
function funcionesA227(){
if (paseA227 == true){
puntuacionUnoR = preguntas[227].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA227 = false;
}
}
var paseB227=true;
function funcionesB227(){
if (paseB227 == true){
puntuacionUnoR = preguntas[227].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB227 = false;
}
}
var paseC227=true;
function funcionesC227(){
if (paseC227 == true){
puntuacionUnoR = preguntas[227].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC227 = false;
}
}
var paseD227=true;
function funcionesD227(){
if (paseD227 == true){
puntuacionUnoR = preguntas[227].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD227 = false;
}
}
var paseE227=true;
function funcionesE227(){
if (paseE227 == true){
puntuacionUnoR = preguntas[227].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE227 = false;
}
}
//----------------------------------------------
function vidas227(){
if(conteoVidas == 0){
document.getElementById("vida227A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida227B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida227C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA228=true;
function funcionesA228(){
if (paseA228 == true){
puntuacionUnoR = preguntas[228].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA228 = false;
}
}
var paseB228=true;
function funcionesB228(){
if (paseB228 == true){
puntuacionUnoR = preguntas[228].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB228 = false;
}
}
var paseC228=true;
function funcionesC228(){
if (paseC228 == true){
puntuacionUnoR = preguntas[228].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC228 = false;
}
}
var paseD228=true;
function funcionesD228(){
if (paseD228 == true){
puntuacionUnoR = preguntas[228].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD228 = false;
}
}
var paseE228=true;
function funcionesE228(){
if (paseE228 == true){
puntuacionUnoR = preguntas[228].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE228 = false;
}
}
//----------------------------------------------
function vidas228(){
if(conteoVidas == 0){
document.getElementById("vida228A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida228B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida228C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA229=true;
function funcionesA229(){
if (paseA229 == true){
puntuacionUnoR = preguntas[229].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA229 = false;
}
}
var paseB229=true;
function funcionesB229(){
if (paseB229 == true){
puntuacionUnoR = preguntas[229].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB229 = false;
}
}
var paseC229=true;
function funcionesC229(){
if (paseC229 == true){
puntuacionUnoR = preguntas[229].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC229 = false;
}
}
var paseD229=true;
function funcionesD229(){
if (paseD229 == true){
puntuacionUnoR = preguntas[229].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD229 = false;
}
}
var paseE229=true;
function funcionesE229(){
if (paseE229 == true){
puntuacionUnoR = preguntas[229].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE229 = false;
}
}
//----------------------------------------------
function vidas229(){
if(conteoVidas == 0){
document.getElementById("vida229A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida229B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida229C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA230=true;
function funcionesA230(){
if (paseA230 == true){
puntuacionUnoR = preguntas[230].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA230 = false;
}
}
var paseB230=true;
function funcionesB230(){
if (paseB230 == true){
puntuacionUnoR = preguntas[230].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB230 = false;
}
}
var paseC230=true;
function funcionesC230(){
if (paseC230 == true){
puntuacionUnoR = preguntas[230].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC230 = false;
}
}
var paseD230=true;
function funcionesD230(){
if (paseD230 == true){
puntuacionUnoR = preguntas[230].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD230 = false;
}
}
var paseE230=true;
function funcionesE230(){
if (paseE230 == true){
puntuacionUnoR = preguntas[230].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE230 = false;
}
}
//----------------------------------------------
function vidas230(){
if(conteoVidas == 0){
document.getElementById("vida230A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida230B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida230C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA231=true;
function funcionesA231(){
if (paseA231 == true){
puntuacionUnoR = preguntas[231].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA231 = false;
}
}
var paseB231=true;
function funcionesB231(){
if (paseB231 == true){
puntuacionUnoR = preguntas[231].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB231 = false;
}
}
var paseC231=true;
function funcionesC231(){
if (paseC231 == true){
puntuacionUnoR = preguntas[231].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC231 = false;
}
}
var paseD231=true;
function funcionesD231(){
if (paseD231 == true){
puntuacionUnoR = preguntas[231].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD231 = false;
}
}
var paseE231=true;
function funcionesE231(){
if (paseE231 == true){
puntuacionUnoR = preguntas[231].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE231 = false;
}
}
//----------------------------------------------
function vidas231(){
if(conteoVidas == 0){
document.getElementById("vida231A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida231B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida231C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA232=true;
function funcionesA232(){
if (paseA232 == true){
puntuacionUnoR = preguntas[232].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA232 = false;
}
}
var paseB232=true;
function funcionesB232(){
if (paseB232 == true){
puntuacionUnoR = preguntas[232].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB232 = false;
}
}
var paseC232=true;
function funcionesC232(){
if (paseC232 == true){
puntuacionUnoR = preguntas[232].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC232 = false;
}
}
var paseD232=true;
function funcionesD232(){
if (paseD232 == true){
puntuacionUnoR = preguntas[232].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD232 = false;
}
}
var paseE232=true;
function funcionesE232(){
if (paseE232 == true){
puntuacionUnoR = preguntas[232].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE232 = false;
}
}
//----------------------------------------------
function vidas232(){
if(conteoVidas == 0){
document.getElementById("vida232A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida232B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida232C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA233=true;
function funcionesA233(){
if (paseA233 == true){
puntuacionUnoR = preguntas[233].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA233 = false;
}
}
var paseB233=true;
function funcionesB233(){
if (paseB233 == true){
puntuacionUnoR = preguntas[233].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB233 = false;
}
}
var paseC233=true;
function funcionesC233(){
if (paseC233 == true){
puntuacionUnoR = preguntas[233].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC233 = false;
}
}
var paseD233=true;
function funcionesD233(){
if (paseD233 == true){
puntuacionUnoR = preguntas[233].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD233 = false;
}
}
var paseE233=true;
function funcionesE233(){
if (paseE233 == true){
puntuacionUnoR = preguntas[233].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE233 = false;
}
}
//----------------------------------------------
function vidas233(){
if(conteoVidas == 0){
document.getElementById("vida233A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida233B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida233C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA234=true;
function funcionesA234(){
if (paseA234 == true){
puntuacionUnoR = preguntas[234].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA234 = false;
}
}
var paseB234=true;
function funcionesB234(){
if (paseB234 == true){
puntuacionUnoR = preguntas[234].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB234 = false;
}
}
var paseC234=true;
function funcionesC234(){
if (paseC234 == true){
puntuacionUnoR = preguntas[234].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC234 = false;
}
}
var paseD234=true;
function funcionesD234(){
if (paseD234 == true){
puntuacionUnoR = preguntas[234].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD234 = false;
}
}
var paseE234=true;
function funcionesE234(){
if (paseE234 == true){
puntuacionUnoR = preguntas[234].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE234 = false;
}
}
//----------------------------------------------
function vidas234(){
if(conteoVidas == 0){
document.getElementById("vida234A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida234B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida234C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA235=true;
function funcionesA235(){
if (paseA235 == true){
puntuacionUnoR = preguntas[235].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA235 = false;
}
}
var paseB235=true;
function funcionesB235(){
if (paseB235 == true){
puntuacionUnoR = preguntas[235].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB235 = false;
}
}
var paseC235=true;
function funcionesC235(){
if (paseC235 == true){
puntuacionUnoR = preguntas[235].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC235 = false;
}
}
var paseD235=true;
function funcionesD235(){
if (paseD235 == true){
puntuacionUnoR = preguntas[235].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD235 = false;
}
}
var paseE235=true;
function funcionesE235(){
if (paseE235 == true){
puntuacionUnoR = preguntas[235].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE235 = false;
}
}
//----------------------------------------------
function vidas235(){
if(conteoVidas == 0){
document.getElementById("vida235A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida235B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida235C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA236=true;
function funcionesA236(){
if (paseA236 == true){
puntuacionUnoR = preguntas[236].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA236 = false;
}
}
var paseB236=true;
function funcionesB236(){
if (paseB236 == true){
puntuacionUnoR = preguntas[236].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB236 = false;
}
}
var paseC236=true;
function funcionesC236(){
if (paseC236 == true){
puntuacionUnoR = preguntas[236].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC236 = false;
}
}
var paseD236=true;
function funcionesD236(){
if (paseD236 == true){
puntuacionUnoR = preguntas[236].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD236 = false;
}
}
var paseE236=true;
function funcionesE236(){
if (paseE236 == true){
puntuacionUnoR = preguntas[236].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE236 = false;
}
}
//----------------------------------------------
function vidas236(){
if(conteoVidas == 0){
document.getElementById("vida236A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida236B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida236C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA237=true;
function funcionesA237(){
if (paseA237 == true){
puntuacionUnoR = preguntas[237].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA237 = false;
}
}
var paseB237=true;
function funcionesB237(){
if (paseB237 == true){
puntuacionUnoR = preguntas[237].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB237 = false;
}
}
var paseC237=true;
function funcionesC237(){
if (paseC237 == true){
puntuacionUnoR = preguntas[237].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC237 = false;
}
}
var paseD237=true;
function funcionesD237(){
if (paseD237 == true){
puntuacionUnoR = preguntas[237].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD237 = false;
}
}
var paseE237=true;
function funcionesE237(){
if (paseE237 == true){
puntuacionUnoR = preguntas[237].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE237 = false;
}
}
//----------------------------------------------
function vidas237(){
if(conteoVidas == 0){
document.getElementById("vida237A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida237B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida237C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA238=true;
function funcionesA238(){
if (paseA238 == true){
puntuacionUnoR = preguntas[238].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA238 = false;
}
}
var paseB238=true;
function funcionesB238(){
if (paseB238 == true){
puntuacionUnoR = preguntas[238].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB238 = false;
}
}
var paseC238=true;
function funcionesC238(){
if (paseC238 == true){
puntuacionUnoR = preguntas[238].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC238 = false;
}
}
var paseD238=true;
function funcionesD238(){
if (paseD238 == true){
puntuacionUnoR = preguntas[238].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD238 = false;
}
}
var paseE238=true;
function funcionesE238(){
if (paseE238 == true){
puntuacionUnoR = preguntas[238].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE238 = false;
}
}
//----------------------------------------------
function vidas238(){
if(conteoVidas == 0){
document.getElementById("vida238A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida238B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida238C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA239=true;
function funcionesA239(){
if (paseA239 == true){
puntuacionUnoR = preguntas[239].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA239 = false;
}
}
var paseB239=true;
function funcionesB239(){
if (paseB239 == true){
puntuacionUnoR = preguntas[239].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB239 = false;
}
}
var paseC239=true;
function funcionesC239(){
if (paseC239 == true){
puntuacionUnoR = preguntas[239].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC239 = false;
}
}
var paseD239=true;
function funcionesD239(){
if (paseD239 == true){
puntuacionUnoR = preguntas[239].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD239 = false;
}
}
var paseE239=true;
function funcionesE239(){
if (paseE239 == true){
puntuacionUnoR = preguntas[239].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE239 = false;
}
}
//----------------------------------------------
function vidas239(){
if(conteoVidas == 0){
document.getElementById("vida239A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida239B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida239C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA240=true;
function funcionesA240(){
if (paseA240 == true){
puntuacionUnoR = preguntas[240].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA240 = false;
}
}
var paseB240=true;
function funcionesB240(){
if (paseB240 == true){
puntuacionUnoR = preguntas[240].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB240 = false;
}
}
var paseC240=true;
function funcionesC240(){
if (paseC240 == true){
puntuacionUnoR = preguntas[240].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC240 = false;
}
}
var paseD240=true;
function funcionesD240(){
if (paseD240 == true){
puntuacionUnoR = preguntas[240].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD240 = false;
}
}
var paseE240=true;
function funcionesE240(){
if (paseE240 == true){
puntuacionUnoR = preguntas[240].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE240 = false;
}
}
//----------------------------------------------
function vidas240(){
if(conteoVidas == 0){
document.getElementById("vida240A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida240B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida240C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA241=true;
function funcionesA241(){
if (paseA241 == true){
puntuacionUnoR = preguntas[241].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA241 = false;
}
}
var paseB241=true;
function funcionesB241(){
if (paseB241 == true){
puntuacionUnoR = preguntas[241].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB241 = false;
}
}
var paseC241=true;
function funcionesC241(){
if (paseC241 == true){
puntuacionUnoR = preguntas[241].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC241 = false;
}
}
var paseD241=true;
function funcionesD241(){
if (paseD241 == true){
puntuacionUnoR = preguntas[241].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD241 = false;
}
}
var paseE241=true;
function funcionesE241(){
if (paseE241 == true){
puntuacionUnoR = preguntas[241].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE241 = false;
}
}
//----------------------------------------------
function vidas241(){
if(conteoVidas == 0){
document.getElementById("vida241A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida241B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida241C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA242=true;
function funcionesA242(){
if (paseA242 == true){
puntuacionUnoR = preguntas[242].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA242 = false;
}
}
var paseB242=true;
function funcionesB242(){
if (paseB242 == true){
puntuacionUnoR = preguntas[242].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB242 = false;
}
}
var paseC242=true;
function funcionesC242(){
if (paseC242 == true){
puntuacionUnoR = preguntas[242].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC242 = false;
}
}
var paseD242=true;
function funcionesD242(){
if (paseD242 == true){
puntuacionUnoR = preguntas[242].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD242 = false;
}
}
var paseE242=true;
function funcionesE242(){
if (paseE242 == true){
puntuacionUnoR = preguntas[242].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE242 = false;
}
}
//----------------------------------------------
function vidas242(){
if(conteoVidas == 0){
document.getElementById("vida242A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida242B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida242C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA243=true;
function funcionesA243(){
if (paseA243 == true){
puntuacionUnoR = preguntas[243].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA243 = false;
}
}
var paseB243=true;
function funcionesB243(){
if (paseB243 == true){
puntuacionUnoR = preguntas[243].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB243 = false;
}
}
var paseC243=true;
function funcionesC243(){
if (paseC243 == true){
puntuacionUnoR = preguntas[243].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC243 = false;
}
}
var paseD243=true;
function funcionesD243(){
if (paseD243 == true){
puntuacionUnoR = preguntas[243].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD243 = false;
}
}
var paseE243=true;
function funcionesE243(){
if (paseE243 == true){
puntuacionUnoR = preguntas[243].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE243 = false;
}
}
//----------------------------------------------
function vidas243(){
if(conteoVidas == 0){
document.getElementById("vida243A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida243B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida243C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA244=true;
function funcionesA244(){
if (paseA244 == true){
puntuacionUnoR = preguntas[244].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA244 = false;
}
}
var paseB244=true;
function funcionesB244(){
if (paseB244 == true){
puntuacionUnoR = preguntas[244].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB244 = false;
}
}
var paseC244=true;
function funcionesC244(){
if (paseC244 == true){
puntuacionUnoR = preguntas[244].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC244 = false;
}
}
var paseD244=true;
function funcionesD244(){
if (paseD244 == true){
puntuacionUnoR = preguntas[244].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD244 = false;
}
}
var paseE244=true;
function funcionesE244(){
if (paseE244 == true){
puntuacionUnoR = preguntas[244].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE244 = false;
}
}
//----------------------------------------------
function vidas244(){
if(conteoVidas == 0){
document.getElementById("vida244A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida244B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida244C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA245=true;
function funcionesA245(){
if (paseA245 == true){
puntuacionUnoR = preguntas[245].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA245 = false;
}
}
var paseB245=true;
function funcionesB245(){
if (paseB245 == true){
puntuacionUnoR = preguntas[245].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB245 = false;
}
}
var paseC245=true;
function funcionesC245(){
if (paseC245 == true){
puntuacionUnoR = preguntas[245].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC245 = false;
}
}
var paseD245=true;
function funcionesD245(){
if (paseD245 == true){
puntuacionUnoR = preguntas[245].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD245 = false;
}
}
var paseE245=true;
function funcionesE245(){
if (paseE245 == true){
puntuacionUnoR = preguntas[245].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE245 = false;
}
}
//----------------------------------------------
function vidas245(){
if(conteoVidas == 0){
document.getElementById("vida245A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida245B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida245C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA246=true;
function funcionesA246(){
if (paseA246 == true){
puntuacionUnoR = preguntas[246].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA246 = false;
}
}
var paseB246=true;
function funcionesB246(){
if (paseB246 == true){
puntuacionUnoR = preguntas[246].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB246 = false;
}
}
var paseC246=true;
function funcionesC246(){
if (paseC246 == true){
puntuacionUnoR = preguntas[246].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC246 = false;
}
}
var paseD246=true;
function funcionesD246(){
if (paseD246 == true){
puntuacionUnoR = preguntas[246].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD246 = false;
}
}
var paseE246=true;
function funcionesE246(){
if (paseE246 == true){
puntuacionUnoR = preguntas[246].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE246 = false;
}
}
//----------------------------------------------
function vidas246(){
if(conteoVidas == 0){
document.getElementById("vida246A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida246B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida246C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA247=true;
function funcionesA247(){
if (paseA247 == true){
puntuacionUnoR = preguntas[247].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA247 = false;
}
}
var paseB247=true;
function funcionesB247(){
if (paseB247 == true){
puntuacionUnoR = preguntas[247].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB247 = false;
}
}
var paseC247=true;
function funcionesC247(){
if (paseC247 == true){
puntuacionUnoR = preguntas[247].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC247 = false;
}
}
var paseD247=true;
function funcionesD247(){
if (paseD247 == true){
puntuacionUnoR = preguntas[247].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD247 = false;
}
}
var paseE247=true;
function funcionesE247(){
if (paseE247 == true){
puntuacionUnoR = preguntas[247].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE247 = false;
}
}
//----------------------------------------------
function vidas247(){
if(conteoVidas == 0){
document.getElementById("vida247A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida247B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida247C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA248=true;
function funcionesA248(){
if (paseA248 == true){
puntuacionUnoR = preguntas[248].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA248 = false;
}
}
var paseB248=true;
function funcionesB248(){
if (paseB248 == true){
puntuacionUnoR = preguntas[248].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB248 = false;
}
}
var paseC248=true;
function funcionesC248(){
if (paseC248 == true){
puntuacionUnoR = preguntas[248].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC248 = false;
}
}
var paseD248=true;
function funcionesD248(){
if (paseD248 == true){
puntuacionUnoR = preguntas[248].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD248 = false;
}
}
var paseE248=true;
function funcionesE248(){
if (paseE248 == true){
puntuacionUnoR = preguntas[248].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE248 = false;
}
}
//----------------------------------------------
function vidas248(){
if(conteoVidas == 0){
document.getElementById("vida248A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida248B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida248C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA249=true;
function funcionesA249(){
if (paseA249 == true){
puntuacionUnoR = preguntas[249].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA249 = false;
}
}
var paseB249=true;
function funcionesB249(){
if (paseB249 == true){
puntuacionUnoR = preguntas[249].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB249 = false;
}
}
var paseC249=true;
function funcionesC249(){
if (paseC249 == true){
puntuacionUnoR = preguntas[249].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC249 = false;
}
}
var paseD249=true;
function funcionesD249(){
if (paseD249 == true){
puntuacionUnoR = preguntas[249].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD249 = false;
}
}
var paseE249=true;
function funcionesE249(){
if (paseE249 == true){
puntuacionUnoR = preguntas[249].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE249 = false;
}
}
//----------------------------------------------
function vidas249(){
if(conteoVidas == 0){
document.getElementById("vida249A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida249B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida249C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA250=true;
function funcionesA250(){
if (paseA250 == true){
puntuacionUnoR = preguntas[250].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA250 = false;
}
}
var paseB250=true;
function funcionesB250(){
if (paseB250 == true){
puntuacionUnoR = preguntas[250].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB250 = false;
}
}
var paseC250=true;
function funcionesC250(){
if (paseC250 == true){
puntuacionUnoR = preguntas[250].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC250 = false;
}
}
var paseD250=true;
function funcionesD250(){
if (paseD250 == true){
puntuacionUnoR = preguntas[250].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD250 = false;
}
}
var paseE250=true;
function funcionesE250(){
if (paseE250 == true){
puntuacionUnoR = preguntas[250].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE250 = false;
}
}
//----------------------------------------------
function vidas250(){
if(conteoVidas == 0){
document.getElementById("vida250A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida250B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida250C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA251=true;
function funcionesA251(){
if (paseA251 == true){
puntuacionUnoR = preguntas[251].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA251 = false;
}
}
var paseB251=true;
function funcionesB251(){
if (paseB251 == true){
puntuacionUnoR = preguntas[251].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB251 = false;
}
}
var paseC251=true;
function funcionesC251(){
if (paseC251 == true){
puntuacionUnoR = preguntas[251].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC251 = false;
}
}
var paseD251=true;
function funcionesD251(){
if (paseD251 == true){
puntuacionUnoR = preguntas[251].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD251 = false;
}
}
var paseE251=true;
function funcionesE251(){
if (paseE251 == true){
puntuacionUnoR = preguntas[251].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE251 = false;
}
}
//----------------------------------------------
function vidas251(){
if(conteoVidas == 0){
document.getElementById("vida251A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida251B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida251C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA252=true;
function funcionesA252(){
if (paseA252 == true){
puntuacionUnoR = preguntas[252].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA252 = false;
}
}
var paseB252=true;
function funcionesB252(){
if (paseB252 == true){
puntuacionUnoR = preguntas[252].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB252 = false;
}
}
var paseC252=true;
function funcionesC252(){
if (paseC252 == true){
puntuacionUnoR = preguntas[252].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC252 = false;
}
}
var paseD252=true;
function funcionesD252(){
if (paseD252 == true){
puntuacionUnoR = preguntas[252].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD252 = false;
}
}
var paseE252=true;
function funcionesE252(){
if (paseE252 == true){
puntuacionUnoR = preguntas[252].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE252 = false;
}
}
//----------------------------------------------
function vidas252(){
if(conteoVidas == 0){
document.getElementById("vida252A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida252B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida252C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA253=true;
function funcionesA253(){
if (paseA253 == true){
puntuacionUnoR = preguntas[253].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA253 = false;
}
}
var paseB253=true;
function funcionesB253(){
if (paseB253 == true){
puntuacionUnoR = preguntas[253].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB253 = false;
}
}
var paseC253=true;
function funcionesC253(){
if (paseC253 == true){
puntuacionUnoR = preguntas[253].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC253 = false;
}
}
var paseD253=true;
function funcionesD253(){
if (paseD253 == true){
puntuacionUnoR = preguntas[253].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD253 = false;
}
}
var paseE253=true;
function funcionesE253(){
if (paseE253 == true){
puntuacionUnoR = preguntas[253].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE253 = false;
}
}
//----------------------------------------------
function vidas253(){
if(conteoVidas == 0){
document.getElementById("vida253A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida253B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida253C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA254=true;
function funcionesA254(){
if (paseA254 == true){
puntuacionUnoR = preguntas[254].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA254 = false;
}
}
var paseB254=true;
function funcionesB254(){
if (paseB254 == true){
puntuacionUnoR = preguntas[254].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB254 = false;
}
}
var paseC254=true;
function funcionesC254(){
if (paseC254 == true){
puntuacionUnoR = preguntas[254].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC254 = false;
}
}
var paseD254=true;
function funcionesD254(){
if (paseD254 == true){
puntuacionUnoR = preguntas[254].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD254 = false;
}
}
var paseE254=true;
function funcionesE254(){
if (paseE254 == true){
puntuacionUnoR = preguntas[254].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE254 = false;
}
}
//----------------------------------------------
function vidas254(){
if(conteoVidas == 0){
document.getElementById("vida254A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida254B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida254C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA255=true;
function funcionesA255(){
if (paseA255 == true){
puntuacionUnoR = preguntas[255].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA255 = false;
}
}
var paseB255=true;
function funcionesB255(){
if (paseB255 == true){
puntuacionUnoR = preguntas[255].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB255 = false;
}
}
var paseC255=true;
function funcionesC255(){
if (paseC255 == true){
puntuacionUnoR = preguntas[255].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC255 = false;
}
}
var paseD255=true;
function funcionesD255(){
if (paseD255 == true){
puntuacionUnoR = preguntas[255].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD255 = false;
}
}
var paseE255=true;
function funcionesE255(){
if (paseE255 == true){
puntuacionUnoR = preguntas[255].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE255 = false;
}
}
//----------------------------------------------
function vidas255(){
if(conteoVidas == 0){
document.getElementById("vida255A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida255B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida255C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA256=true;
function funcionesA256(){
if (paseA256 == true){
puntuacionUnoR = preguntas[256].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA256 = false;
}
}
var paseB256=true;
function funcionesB256(){
if (paseB256 == true){
puntuacionUnoR = preguntas[256].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB256 = false;
}
}
var paseC256=true;
function funcionesC256(){
if (paseC256 == true){
puntuacionUnoR = preguntas[256].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC256 = false;
}
}
var paseD256=true;
function funcionesD256(){
if (paseD256 == true){
puntuacionUnoR = preguntas[256].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD256 = false;
}
}
var paseE256=true;
function funcionesE256(){
if (paseE256 == true){
puntuacionUnoR = preguntas[256].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE256 = false;
}
}
//----------------------------------------------
function vidas256(){
if(conteoVidas == 0){
document.getElementById("vida256A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida256B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida256C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA257=true;
function funcionesA257(){
if (paseA257 == true){
puntuacionUnoR = preguntas[257].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA257 = false;
}
}
var paseB257=true;
function funcionesB257(){
if (paseB257 == true){
puntuacionUnoR = preguntas[257].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB257 = false;
}
}
var paseC257=true;
function funcionesC257(){
if (paseC257 == true){
puntuacionUnoR = preguntas[257].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC257 = false;
}
}
var paseD257=true;
function funcionesD257(){
if (paseD257 == true){
puntuacionUnoR = preguntas[257].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD257 = false;
}
}
var paseE257=true;
function funcionesE257(){
if (paseE257 == true){
puntuacionUnoR = preguntas[257].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE257 = false;
}
}
//----------------------------------------------
function vidas257(){
if(conteoVidas == 0){
document.getElementById("vida257A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida257B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida257C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA258=true;
function funcionesA258(){
if (paseA258 == true){
puntuacionUnoR = preguntas[258].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA258 = false;
}
}
var paseB258=true;
function funcionesB258(){
if (paseB258 == true){
puntuacionUnoR = preguntas[258].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB258 = false;
}
}
var paseC258=true;
function funcionesC258(){
if (paseC258 == true){
puntuacionUnoR = preguntas[258].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC258 = false;
}
}
var paseD258=true;
function funcionesD258(){
if (paseD258 == true){
puntuacionUnoR = preguntas[258].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD258 = false;
}
}
var paseE258=true;
function funcionesE258(){
if (paseE258 == true){
puntuacionUnoR = preguntas[258].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE258 = false;
}
}
//----------------------------------------------
function vidas258(){
if(conteoVidas == 0){
document.getElementById("vida258A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida258B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida258C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA259=true;
function funcionesA259(){
if (paseA259 == true){
puntuacionUnoR = preguntas[259].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA259 = false;
}
}
var paseB259=true;
function funcionesB259(){
if (paseB259 == true){
puntuacionUnoR = preguntas[259].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB259 = false;
}
}
var paseC259=true;
function funcionesC259(){
if (paseC259 == true){
puntuacionUnoR = preguntas[259].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC259 = false;
}
}
var paseD259=true;
function funcionesD259(){
if (paseD259 == true){
puntuacionUnoR = preguntas[259].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD259 = false;
}
}
var paseE259=true;
function funcionesE259(){
if (paseE259 == true){
puntuacionUnoR = preguntas[259].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE259 = false;
}
}
//----------------------------------------------
function vidas259(){
if(conteoVidas == 0){
document.getElementById("vida259A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida259B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida259C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA260=true;
function funcionesA260(){
if (paseA260 == true){
puntuacionUnoR = preguntas[260].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA260 = false;
}
}
var paseB260=true;
function funcionesB260(){
if (paseB260 == true){
puntuacionUnoR = preguntas[260].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB260 = false;
}
}
var paseC260=true;
function funcionesC260(){
if (paseC260 == true){
puntuacionUnoR = preguntas[260].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC260 = false;
}
}
var paseD260=true;
function funcionesD260(){
if (paseD260 == true){
puntuacionUnoR = preguntas[260].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD260 = false;
}
}
var paseE260=true;
function funcionesE260(){
if (paseE260 == true){
puntuacionUnoR = preguntas[260].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE260 = false;
}
}
//----------------------------------------------
function vidas260(){
if(conteoVidas == 0){
document.getElementById("vida260A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida260B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida260C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA261=true;
function funcionesA261(){
if (paseA261 == true){
puntuacionUnoR = preguntas[261].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA261 = false;
}
}
var paseB261=true;
function funcionesB261(){
if (paseB261 == true){
puntuacionUnoR = preguntas[261].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB261 = false;
}
}
var paseC261=true;
function funcionesC261(){
if (paseC261 == true){
puntuacionUnoR = preguntas[261].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC261 = false;
}
}
var paseD261=true;
function funcionesD261(){
if (paseD261 == true){
puntuacionUnoR = preguntas[261].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD261 = false;
}
}
var paseE261=true;
function funcionesE261(){
if (paseE261 == true){
puntuacionUnoR = preguntas[261].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE261 = false;
}
}
//----------------------------------------------
function vidas261(){
if(conteoVidas == 0){
document.getElementById("vida261A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida261B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida261C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA262=true;
function funcionesA262(){
if (paseA262 == true){
puntuacionUnoR = preguntas[262].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA262 = false;
}
}
var paseB262=true;
function funcionesB262(){
if (paseB262 == true){
puntuacionUnoR = preguntas[262].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB262 = false;
}
}
var paseC262=true;
function funcionesC262(){
if (paseC262 == true){
puntuacionUnoR = preguntas[262].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC262 = false;
}
}
var paseD262=true;
function funcionesD262(){
if (paseD262 == true){
puntuacionUnoR = preguntas[262].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD262 = false;
}
}
var paseE262=true;
function funcionesE262(){
if (paseE262 == true){
puntuacionUnoR = preguntas[262].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE262 = false;
}
}
//----------------------------------------------
function vidas262(){
if(conteoVidas == 0){
document.getElementById("vida262A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida262B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida262C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA263=true;
function funcionesA263(){
if (paseA263 == true){
puntuacionUnoR = preguntas[263].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA263 = false;
}
}
var paseB263=true;
function funcionesB263(){
if (paseB263 == true){
puntuacionUnoR = preguntas[263].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB263 = false;
}
}
var paseC263=true;
function funcionesC263(){
if (paseC263 == true){
puntuacionUnoR = preguntas[263].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC263 = false;
}
}
var paseD263=true;
function funcionesD263(){
if (paseD263 == true){
puntuacionUnoR = preguntas[263].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD263 = false;
}
}
var paseE263=true;
function funcionesE263(){
if (paseE263 == true){
puntuacionUnoR = preguntas[263].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE263 = false;
}
}
//----------------------------------------------
function vidas263(){
if(conteoVidas == 0){
document.getElementById("vida263A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida263B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida263C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA264=true;
function funcionesA264(){
if (paseA264 == true){
puntuacionUnoR = preguntas[264].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA264 = false;
}
}
var paseB264=true;
function funcionesB264(){
if (paseB264 == true){
puntuacionUnoR = preguntas[264].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB264 = false;
}
}
var paseC264=true;
function funcionesC264(){
if (paseC264 == true){
puntuacionUnoR = preguntas[264].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC264 = false;
}
}
var paseD264=true;
function funcionesD264(){
if (paseD264 == true){
puntuacionUnoR = preguntas[264].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD264 = false;
}
}
var paseE264=true;
function funcionesE264(){
if (paseE264 == true){
puntuacionUnoR = preguntas[264].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE264 = false;
}
}
//----------------------------------------------
function vidas264(){
if(conteoVidas == 0){
document.getElementById("vida264A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida264B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida264C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA265=true;
function funcionesA265(){
if (paseA265 == true){
puntuacionUnoR = preguntas[265].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA265 = false;
}
}
var paseB265=true;
function funcionesB265(){
if (paseB265 == true){
puntuacionUnoR = preguntas[265].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB265 = false;
}
}
var paseC265=true;
function funcionesC265(){
if (paseC265 == true){
puntuacionUnoR = preguntas[265].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC265 = false;
}
}
var paseD265=true;
function funcionesD265(){
if (paseD265 == true){
puntuacionUnoR = preguntas[265].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD265 = false;
}
}
var paseE265=true;
function funcionesE265(){
if (paseE265 == true){
puntuacionUnoR = preguntas[265].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE265 = false;
}
}
//----------------------------------------------
function vidas265(){
if(conteoVidas == 0){
document.getElementById("vida265A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida265B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida265C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA266=true;
function funcionesA266(){
if (paseA266 == true){
puntuacionUnoR = preguntas[266].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA266 = false;
}
}
var paseB266=true;
function funcionesB266(){
if (paseB266 == true){
puntuacionUnoR = preguntas[266].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB266 = false;
}
}
var paseC266=true;
function funcionesC266(){
if (paseC266 == true){
puntuacionUnoR = preguntas[266].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC266 = false;
}
}
var paseD266=true;
function funcionesD266(){
if (paseD266 == true){
puntuacionUnoR = preguntas[266].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD266 = false;
}
}
var paseE266=true;
function funcionesE266(){
if (paseE266 == true){
puntuacionUnoR = preguntas[266].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE266 = false;
}
}
//----------------------------------------------
function vidas266(){
if(conteoVidas == 0){
document.getElementById("vida266A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida266B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida266C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA267=true;
function funcionesA267(){
if (paseA267 == true){
puntuacionUnoR = preguntas[267].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA267 = false;
}
}
var paseB267=true;
function funcionesB267(){
if (paseB267 == true){
puntuacionUnoR = preguntas[267].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB267 = false;
}
}
var paseC267=true;
function funcionesC267(){
if (paseC267 == true){
puntuacionUnoR = preguntas[267].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC267 = false;
}
}
var paseD267=true;
function funcionesD267(){
if (paseD267 == true){
puntuacionUnoR = preguntas[267].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD267 = false;
}
}
var paseE267=true;
function funcionesE267(){
if (paseE267 == true){
puntuacionUnoR = preguntas[267].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE267 = false;
}
}
//----------------------------------------------
function vidas267(){
if(conteoVidas == 0){
document.getElementById("vida267A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida267B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida267C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA268=true;
function funcionesA268(){
if (paseA268 == true){
puntuacionUnoR = preguntas[268].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA268 = false;
}
}
var paseB268=true;
function funcionesB268(){
if (paseB268 == true){
puntuacionUnoR = preguntas[268].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB268 = false;
}
}
var paseC268=true;
function funcionesC268(){
if (paseC268 == true){
puntuacionUnoR = preguntas[268].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC268 = false;
}
}
var paseD268=true;
function funcionesD268(){
if (paseD268 == true){
puntuacionUnoR = preguntas[268].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD268 = false;
}
}
var paseE268=true;
function funcionesE268(){
if (paseE268 == true){
puntuacionUnoR = preguntas[268].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE268 = false;
}
}
//----------------------------------------------
function vidas268(){
if(conteoVidas == 0){
document.getElementById("vida268A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida268B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida268C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA269=true;
function funcionesA269(){
if (paseA269 == true){
puntuacionUnoR = preguntas[269].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA269 = false;
}
}
var paseB269=true;
function funcionesB269(){
if (paseB269 == true){
puntuacionUnoR = preguntas[269].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB269 = false;
}
}
var paseC269=true;
function funcionesC269(){
if (paseC269 == true){
puntuacionUnoR = preguntas[269].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC269 = false;
}
}
var paseD269=true;
function funcionesD269(){
if (paseD269 == true){
puntuacionUnoR = preguntas[269].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD269 = false;
}
}
var paseE269=true;
function funcionesE269(){
if (paseE269 == true){
puntuacionUnoR = preguntas[269].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE269 = false;
}
}
//----------------------------------------------
function vidas269(){
if(conteoVidas == 0){
document.getElementById("vida269A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida269B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida269C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA270=true;
function funcionesA270(){
if (paseA270 == true){
puntuacionUnoR = preguntas[270].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA270 = false;
}
}
var paseB270=true;
function funcionesB270(){
if (paseB270 == true){
puntuacionUnoR = preguntas[270].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB270 = false;
}
}
var paseC270=true;
function funcionesC270(){
if (paseC270 == true){
puntuacionUnoR = preguntas[270].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC270 = false;
}
}
var paseD270=true;
function funcionesD270(){
if (paseD270 == true){
puntuacionUnoR = preguntas[270].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD270 = false;
}
}
var paseE270=true;
function funcionesE270(){
if (paseE270 == true){
puntuacionUnoR = preguntas[270].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE270 = false;
}
}
//----------------------------------------------
function vidas270(){
if(conteoVidas == 0){
document.getElementById("vida270A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida270B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida270C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA271=true;
function funcionesA271(){
if (paseA271 == true){
puntuacionUnoR = preguntas[271].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA271 = false;
}
}
var paseB271=true;
function funcionesB271(){
if (paseB271 == true){
puntuacionUnoR = preguntas[271].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB271 = false;
}
}
var paseC271=true;
function funcionesC271(){
if (paseC271 == true){
puntuacionUnoR = preguntas[271].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC271 = false;
}
}
var paseD271=true;
function funcionesD271(){
if (paseD271 == true){
puntuacionUnoR = preguntas[271].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD271 = false;
}
}
var paseE271=true;
function funcionesE271(){
if (paseE271 == true){
puntuacionUnoR = preguntas[271].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE271 = false;
}
}
//----------------------------------------------
function vidas271(){
if(conteoVidas == 0){
document.getElementById("vida271A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida271B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida271C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA272=true;
function funcionesA272(){
if (paseA272 == true){
puntuacionUnoR = preguntas[272].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA272 = false;
}
}
var paseB272=true;
function funcionesB272(){
if (paseB272 == true){
puntuacionUnoR = preguntas[272].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB272 = false;
}
}
var paseC272=true;
function funcionesC272(){
if (paseC272 == true){
puntuacionUnoR = preguntas[272].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC272 = false;
}
}
var paseD272=true;
function funcionesD272(){
if (paseD272 == true){
puntuacionUnoR = preguntas[272].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD272 = false;
}
}
var paseE272=true;
function funcionesE272(){
if (paseE272 == true){
puntuacionUnoR = preguntas[272].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE272 = false;
}
}
//----------------------------------------------
function vidas272(){
if(conteoVidas == 0){
document.getElementById("vida272A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida272B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida272C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA273=true;
function funcionesA273(){
if (paseA273 == true){
puntuacionUnoR = preguntas[273].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA273 = false;
}
}
var paseB273=true;
function funcionesB273(){
if (paseB273 == true){
puntuacionUnoR = preguntas[273].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB273 = false;
}
}
var paseC273=true;
function funcionesC273(){
if (paseC273 == true){
puntuacionUnoR = preguntas[273].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC273 = false;
}
}
var paseD273=true;
function funcionesD273(){
if (paseD273 == true){
puntuacionUnoR = preguntas[273].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD273 = false;
}
}
var paseE273=true;
function funcionesE273(){
if (paseE273 == true){
puntuacionUnoR = preguntas[273].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE273 = false;
}
}
//----------------------------------------------
function vidas273(){
if(conteoVidas == 0){
document.getElementById("vida273A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida273B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida273C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA274=true;
function funcionesA274(){
if (paseA274 == true){
puntuacionUnoR = preguntas[274].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA274 = false;
}
}
var paseB274=true;
function funcionesB274(){
if (paseB274 == true){
puntuacionUnoR = preguntas[274].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB274 = false;
}
}
var paseC274=true;
function funcionesC274(){
if (paseC274 == true){
puntuacionUnoR = preguntas[274].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC274 = false;
}
}
var paseD274=true;
function funcionesD274(){
if (paseD274 == true){
puntuacionUnoR = preguntas[274].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD274 = false;
}
}
var paseE274=true;
function funcionesE274(){
if (paseE274 == true){
puntuacionUnoR = preguntas[274].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE274 = false;
}
}
//----------------------------------------------
function vidas274(){
if(conteoVidas == 0){
document.getElementById("vida274A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida274B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida274C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA275=true;
function funcionesA275(){
if (paseA275 == true){
puntuacionUnoR = preguntas[275].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA275 = false;
}
}
var paseB275=true;
function funcionesB275(){
if (paseB275 == true){
puntuacionUnoR = preguntas[275].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB275 = false;
}
}
var paseC275=true;
function funcionesC275(){
if (paseC275 == true){
puntuacionUnoR = preguntas[275].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC275 = false;
}
}
var paseD275=true;
function funcionesD275(){
if (paseD275 == true){
puntuacionUnoR = preguntas[275].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD275 = false;
}
}
var paseE275=true;
function funcionesE275(){
if (paseE275 == true){
puntuacionUnoR = preguntas[275].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE275 = false;
}
}
//----------------------------------------------
function vidas275(){
if(conteoVidas == 0){
document.getElementById("vida275A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida275B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida275C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA276=true;
function funcionesA276(){
if (paseA276 == true){
puntuacionUnoR = preguntas[276].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA276 = false;
}
}
var paseB276=true;
function funcionesB276(){
if (paseB276 == true){
puntuacionUnoR = preguntas[276].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB276 = false;
}
}
var paseC276=true;
function funcionesC276(){
if (paseC276 == true){
puntuacionUnoR = preguntas[276].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC276 = false;
}
}
var paseD276=true;
function funcionesD276(){
if (paseD276 == true){
puntuacionUnoR = preguntas[276].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD276 = false;
}
}
var paseE276=true;
function funcionesE276(){
if (paseE276 == true){
puntuacionUnoR = preguntas[276].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE276 = false;
}
}
//----------------------------------------------
function vidas276(){
if(conteoVidas == 0){
document.getElementById("vida276A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida276B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida276C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
		//---------------------------------PREGUNTA 3------------------------------------------