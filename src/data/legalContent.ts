export const serviceCatalog = [
	{
		slug: "juicios-sucesorios",
		icon: "inheritance",
		title: "JUICIOS SUCESORIOS",
		description: "Juicios sucesorios testamentarios e intestamentarios.",
		intro:
			"Acompañamos a las familias en sucesiones testamentarias e intestamentarias, desde la apertura del juicio hasta la resolución y la protocolización de los bienes heredados.",
		sections: [
			{
				title: "Etapas del proceso",
				items: [
					"Apertura del juicio y presentación del escrito inicial.",
					"Seguimiento procesal y asignación del juzgado correspondiente.",
					"Identificación de herederos y albacea.",
					"Elaboración del inventario de bienes y su avalúo.",
					"Partición y adjudicación de los bienes conforme al testamento o a lo que disponga la ley.",
					"Resolución que concluye el juicio.",
					"Protocolización de los bienes heredados ante el notario de su elección.",
				],
			},
		],
	},
	{
		slug: "registro-civil",
		icon: "registry",
		title: "REGISTRO CIVIL",
		description: "Correcciones de Registro Civil.",
		intro:
			"Orientación sobre la obtención y corrección de documentos del Registro Civil, según el documento y la situación que deba revisarse.",
		sections: [
			{
				title: "Servicios disponibles",
				items: [
					"Obtención de actas de nacimiento, matrimonio, divorcio y defunción.",
					"Corrección de actas por errores ortográficos, abreviaturas u otros errores.",
					"Constancias de existencia o inexistencia de matrimonio o de hijos.",
					"Apostilla de documentos.",
				],
			},
		],
	},
	{
		slug: "servicios-notariales",
		icon: "notary",
		title: "SERVICIOS NOTARIALES",
		description: "Trámites y servicios notariales.",
		intro:
			"Apoyo en servicios notariales y trámites de inscripción relacionados con actos, documentos y bienes.",
		sections: [
			{
				title: "Servicios disponibles",
				items: [
					"Protocolización de juicios sucesorios.",
					"Protocolización de actas constitutivas.",
					"Protocolización de actas de asamblea.",
					"Inscripción de actas constitutivas, actas de asamblea, poderes notariales y escrituras en el Registro Público de la Propiedad y del Comercio.",
					"Búsqueda de folios mercantiles.",
				],
			},
		],
	},
	{
		slug: "servicios-inmobiliarios",
		icon: "property",
		title: "SERVICIOS JURÍDICOS E INMOBILIARIOS",
		description: "Servicios jurídicos e inmobiliarios.",
		intro:
			"Apoyo en la revisión, formalización y gestión de asuntos relacionados con inmuebles.",
		sections: [
			{
				title: "Servicios disponibles",
				items: [
					"Búsqueda de escrituras y antecedentes registrales.",
					"Avalúos y opiniones de valor para la venta de inmuebles.",
					"Revisión del estado jurídico de la propiedad.",
					"Elaboración de contratos de compraventa y arrendamiento, formalizados ante notario público o mediante convenio en un Centro de Justicia Alternativa.",
					"Trámite de certificado de libertad o gravamen.",
				],
			},
		],
	},
	{
		slug: "tramites-dependencias",
		icon: "government",
		title: "TRÁMITES ANTE DEPENDENCIAS",
		description: "Trámites ante dependencias estatales y municipales.",
		intro:
			"Atención y seguimiento de gestiones ante dependencias estatales y municipales en la Zona Metropolitana de Guadalajara.",
		sections: [
			{
				title: "Gestiones disponibles",
				items: [
					"Baja y canje de placas.",
					"Validación de facturas.",
					"Licencias y permisos municipales.",
					"Notificaciones, entrega y recolección de documentación sensible.",
					"Trámites ante dependencias estatales y municipales en la Zona Metropolitana de Guadalajara.",
				],
			},
		],
	},
] as const;

export const legalContent = {
	name: "CENTRO JURIDICO E INMOBILIARIO",
	credentials: "Maestría en Derecho Corporativo",
	experience: "Abogado con 15 años de experiencia",
	targetAudience: [
		{
			title: "Personas y familias",
			description:
				"Asesoría y representación legal para reclamar, tramitar o regularizar herencias y sucesiones.",
		},
		{
			title: "Empresas de México",
			description:
				"Atención, representación y seguimiento de asuntos jurídicos en Guadalajara y su Zona Metropolitana.",
		},
		{
			title: "Mexicanos residentes en el extranjero",
			description:
				"Apoyo jurídico y gestoría en Guadalajara y municipios cercanos para realizar trámites y atender asuntos legales en México.",
		},
		{
			title: "Actas y documentos del Registro Civil",
			description:
				"Corrección, aclaración o regularización de actas de nacimiento, matrimonio, defunción y otros documentos del Registro Civil.",
		},
	],
	areas: [
		{
			title: "Herencias y sucesiones",
			description:
				"Orientación para conocer sus opciones legales al reclamar una herencia, ya sea mediante sucesión testamentaria o intestamentaria.",
			cta: "Consultar sobre una herencia",
			stages: [
				"Revisión inicial de la situación y de la documentación disponible.",
				"Determinación de herederos y albacea.",
				"Inventario, avalúo, partición y adjudicación de bienes.",
				"Seguimiento del juicio hasta su conclusión y protocolización correspondiente.",
			],
		},
		{
			title: "Servicios notariales",
			description:
				"Protocolización e inscripción de actos y documentos ante notario y el Registro Público de la Propiedad y del Comercio.",
			cta: "Consultar un servicio notarial",
			items: [
				"Protocolización de juicios sucesorios",
				"Protocolización de actas constitutivas",
				"Protocolización de actas de asamblea",
				"Inscripción de actas constitutivas, actas de asamblea, poderes notariales y escrituras en el Registro Público de la Propiedad y del Comercio",
				"Búsqueda de folios mercantiles",
			],
		},
		{
			title: "Mexicanos que viven en el extranjero",
			description:
				"Orientación para mexicanos que viven fuera del país y necesitan explorar apoyo jurídico o gestoría relacionada con Guadalajara.",
			cta: "Consultar desde el extranjero",
			pendingConfirmation:
				"El alcance específico de esta atención requiere confirmación antes de publicar información más detallada.",
			items: [
				"Obtención de actas de nacimiento, matrimonio, divorcio y defunción",
				"Apostilla de documentos",
				"Notificaciones, entrega y recolección de documentación sensible",
			],
		},
		{
			title: "Corrección de actas del Registro Civil",
			description:
				"Orientación sobre las opciones legales para corregir actas del Registro Civil con errores en nombres, apellidos o fechas.",
			cta: "Consultar una corrección de acta",
			items: [
				"Revisión de errores ortográficos, abreviaturas u otros datos del acta",
				"Obtención de actas de nacimiento, matrimonio, divorcio y defunción",
				"Apostilla de documentos",
			],
		},
		{
			title: "Servicios inmobiliarios",
			description:
				"Apoyo en la revisión, formalización y gestión de asuntos relacionados con inmuebles.",
			cta: "Consultar un asunto inmobiliario",
			items: [
				"Búsqueda de escrituras y antecedentes registrales",
				"Avalúos y opiniones de valor para la venta de inmuebles",
				"Revisión del estado jurídico de la propiedad",
				"Elaboración de contratos de compraventa y arrendamiento, formalizados ante notario público o mediante convenio en un Centro de Justicia Alternativa",
				"Trámite de certificado de libertad o gravamen",
			],
		},
		{
			title: "Asuntos corporativos en Guadalajara",
			description:
				"Apoyo para empresas de México que necesitan atender trámites o asuntos jurídicos ante autoridades estatales y municipales en Guadalajara.",
			cta: "Consultar un asunto corporativo",
			items: [
				"Baja y canje de placas",
				"Validación de facturas",
				"Licencias y permisos municipales",
				"Notificaciones, entrega y recolección de documentación sensible",
			],
		},
	],
};
