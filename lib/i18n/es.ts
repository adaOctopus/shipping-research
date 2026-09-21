import type { Dictionary } from "@/lib/i18n/types";

const es: Dictionary = {
  skipToContent: "Saltar al contenido",
  header: {
    homeAria: "Inicio de Greek Ships XYZ",
    journeyAria: "Recorrido del envío",
    stages: ["Reserva", "En mar", "Aduana", "Muelle"],
    bookCall: "Reservar llamada",
    languageAria: "Idioma",
    languageEn: "English",
    languageEs: "Español",
  },
  hero: {
    h1: "Flete marítimo más rentable para transitarios.",
    h1Emphasis: "rentable",
    body: "Cuando la carga llega y la factura parece un abuso, el cliente importador mayorista se va. Mientras el contenedor sigue en el mar, el seguimiento, las navieras y el efectivo se comen el margen que creía tener. Investigamos cómo los transitarios oceánicos pequeños y medianos gestionan de verdad las operaciones de importación.",
    cta: "RESERVE UNA LLAMADA CON NOSOTROS",
  },
  ship: {
    title:
      "Portacontenedores oceánico que muestra cargos, seguimiento, navieras y capital para transitarios",
    desc: "Un portacontenedores oceánico moderno con pilas de color y llamadas a cargos de flete marítimo, seguimiento, navieras y capital de trabajo en transitarios pequeños y medianos.",
    labels: {
      charges: "cargos",
      tracking: "seguimiento",
      carriers: "navieras",
      capital: "capital",
    },
  },
  friction: {
    h2: "Los transitarios oceánicos pequeños y medianos se enfrentan a estos retos.",
    problems: [
      {
        number: "01",
        title: "Cargos que caen sobre el cliente",
        body: "Usted cotizó un número. Destino lanza otro: una remedición de CBM, D&D con un tiempo libre distinto, un examen aduanero, un recargo de guerra. El importador ve una factura disparatada con su nombre. La relación paga el golpe, sea la partida suya, del agente o de la naviera.",
      },
      {
        number: "02",
        title: "Un seguimiento que señala un punto, no el panorama",
        body: "El cliente llama porque un enlace reenviado muestra la última ubicación conocida. No indica si el contenedor llegará al corte, se quedará en transbordo o perderá el camión — y quien tiene que responder es usted.",
      },
      {
        number: "03",
        title: "Atrapado entre el importador y la naviera",
        body: "La prueba está en la naviera o en la consolidación LCL. El importador habla con usted. Las excepciones rebotan. Se pierden días. Las partidas sin documentar o se comen su margen o se convierten en la factura que rompe la cuenta.",
      },
      {
        number: "04",
        title: "El efectivo sale antes de que la carga genere ingreso",
        body: "El flete, los aranceles y los depósitos salen mientras el contenedor sigue en el mar. El retraso no es solo una entrega tardía. Es capital de trabajo sentado en un contenedor, y un cliente que ya mira el reloj.",
      },
    ],
  },
  conversation: {
    h2: "Hable con nosotros para cuidar al cliente de importación y el margen cuando llega la carga.",
    body: "Conversamos con gerentes de operaciones, gerentes de sucursal, coordinadores de importación y agentes de destino en transitarios oceánicos pequeños y medianos. Esto es descubrimiento, no una venta. Si el último expediente de importación trajo una factura de destino que sorprendió al cliente — o una partida que se comió el margen en silencio — nos gustaría saber cómo funciona eso de verdad.",
    cta: "Reservar una llamada",
    whoLabel: "A quién va dirigido",
    roles: [
      "Gerentes de operaciones",
      "Gerentes de sucursal",
      "Coordinadores de importación",
      "Agentes de destino",
      "Tarifas y cotización",
      "Gerentes de cuenta",
    ],
    whoBody:
      "Si usted lleva expedientes de importación marítima para clientes mayoristas — y los cargos en tránsito o posteriores a la entrega aprietan la relación o el margen — esa es la conversación.",
  },
  faq: {
    h2: "Operaciones de importación en flete marítimo: lo que ven los transitarios pequeños.",
    intro:
      "A partir de las conversaciones que queremos tener con equipos de operaciones, destino y cuentas en transitarios oceánicos pequeños y medianos: cargos posteriores a la entrega que sorprenden al cliente importador, fuga de margen, seguimiento mientras el contenedor está en el mar, y cómo una casa gestiona una partida que no puede verificar.",
    items: [
      {
        question:
          "¿Por qué los cargos de destino rompen cuentas de importación mayorista?",
        answer:
          "Al importador se le cotizó un número. Después de la entrega llega otra factura: una remedición de CBM o de peso que no coincide con la lista de empaque, demurrage y detention con un tiempo libre distinto al pactado, un recargo por examen aduanero, un recargo de guerra o de desvío, un cargo por discrepancia de destino cuando el MBL indica un puerto y el contenedor está en otro.\n\nLa prueba que lo resolvería suele existir en el expediente de la naviera o en su casa. No siempre se adjunta a la factura del cliente. El importador mayorista no ve un problema entre naviera y transitario. Lo ve a usted. Las cuentas que envían con la frecuencia suficiente para que sume — y que no tienen a alguien revisando cada línea — son las que se van.",
      },
      {
        question:
          "¿Con qué frecuencia aparecen partidas sorpresa en los expedientes de un transitario pequeño?",
        answer:
          "No es un caso extremo ni es universal. Operadores que vigilan de cerca ven demurrage en solo 1 o 2 de unos 20 envíos mensuales. Otros reportan partidas sorpresa en aproximadamente 1 de cada 5 envíos últimamente, y ya no las tratan como accidentes. Entre esas cuentas, la tasa recurrente se sitúa alrededor del 5–20 % de los envíos.\n\nEn un escritorio oceánico pequeño o mediano, las partidas sin documentar se absorben como margen o se repercuten. En ambos casos aparecen: como un expediente más delgado, o como un cliente que cree que la factura es un abuso. Pedir primero el respaldo a la naviera o a la consolidación hace desaparecer muchas. En el mercado, una auditoría completa de facturas sitúa el gasto de flete recuperable en el rango del 3–7 % cuando de verdad se tira del expediente.",
      },
      {
        question:
          "¿Qué es un recargo por remedición de CBM o dimensional en flete marítimo?",
        answer:
          "La remedición en destino cambia el volumen o el peso facturado respecto de lo declarado. En LCL se trata como procedimiento habitual; un cargo posterior a la entrega de unos 420 dólares es un tamaño que se reporta a menudo, incluso en casos en los que el CBM coincidía exactamente con la lista de empaque. El registro de medición casi siempre existe. No se ofrece a menos que alguien lo pida.\n\nLa cifra remedida puede salir más baja o más alta — paletizar cambia el volumen medido en ambos sentidos —, así que, como mínimo, es una variación que no se informa por defecto, no siempre un esquema. En FCL, el flete marítimo suele ser tarifa plana con independencia del CBM usado dentro de la caja; un cargo extra de CBM después de la entrega suele ser señal de que el movimiento era en realidad LCL. Los pallets no apilables a veces se costean a una altura convencional (unos 220–250 cm) con independencia de la altura real: conviene comprobar esa convención antes de tratar cada diferencia de CBM como un inflado, y antes de enviársela al importador.",
      },
      {
        question:
          "¿Qué son demurrage, detention y otros cargos de flete posteriores a la entrega?",
        answer:
          "Demurrage y detention son cargos de almacenamiento y de equipo una vez vencido el último día libre. Son solo una parte de lo que aparece después de la entrega. El resto del patrón incluye: cargos por examen aduanero cuando se ocultan los recibos; almacenamiento por clima o fuerza mayor facturado por encima del mercado durante un cierre documentado; detention de drayage sin aviso en tiempo real de que el tiempo libre venció; recargos por riesgo de guerra y por cambio de destino sobre cajas que nunca se acercaron a la zona de riesgo; cargos de liberación por discrepancia de destino cuando el MBL y el puerto real de descarga no coinciden; y desajustes de Incoterms / tiempo libre, cuando el agente de destino aplica un plazo distinto al pactado en origen. Las casas pequeñas y medianas tienen poco poder de negociación con la naviera. Los grandes embarcadores obtienen exenciones. Usted igual tiene que explicar el expediente al cliente.",
      },
      {
        question:
          "¿Cómo se gestiona un cargo de flete marítimo que no se puede verificar?",
        answer:
          "El mismo procedimiento aparece una y otra vez en LCL y FCL. Consiga el registro de medición o de báscula ligado a ese envío concreto — no un número reexpresado. Consiga la tarifa o la confirmación de flete que realmente se pactó. Consiga el cálculo detrás de la cifra en dólares, incluido el criterio W/M (peso o medida, el que sea mayor), desglosado si hay paletizado. Luego decida qué absorbe y qué repercute.\n\nCon el cliente, plantee la reclamación sin confrontación: no está soltando una sorpresa, las dimensiones registradas no coinciden y el papeleo debería aclararlo. Repercuta solo lo que pueda mostrar. Retenga por escrito la partida impugnada hasta que el expediente esté limpio.\n\nPara demurrage y detention en Estados Unidos, la norma de la FMC de mayo de 2024 incluye la disposición de contenedor no disponible: la parte que factura no puede cobrar D&D por ningún periodo en el que el contenedor no estuviera realmente disponible (examen aduanero, retraso de terminal o ferrocarril fuera de su control). Obtenga las marcas de tiempo de disponibilidad de la terminal y la orden de retiro o ferrocarril con fecha anterior al último día libre. Cite la disposición de contenedor no disponible por su nombre. La mayoría de las navieras revierten el cargo en la primera impugnación escrita. Si no, una queja CADRS ante la FMC es un camino de 30 a 60 días.\n\nNo todo documento faltante es mala fe: algunos cargos siguen pendientes aguas arriba, de la naviera a la casa. Y la prueba sola no siempre basta si retener el contenedor para discutir la partida vaciaría el stock del importador.",
      },
      {
        question: "¿Para quién es esta investigación, y para quién no?",
        answer:
          "Transitarios oceánicos pequeños y medianos que gestionan operaciones de importación para clientes mayoristas: gerentes de operaciones, gerentes de sucursal, coordinadores de importación, agentes de destino, tarifas y gerentes de cuenta. Quienes se sientan entre la naviera y el importador mientras la carga está en el mar, y quienes envían la factura cuando llega.\n\nNo son los 3PL gigantes con un escritorio de auditoría, ni las navieras, ni el importador mayorista, ni las casas FOB de origen cuya responsabilidad termina en el puerto de carga. Si sus expedientes de importación, sus relaciones con clientes o su margen se mueven cuando un contenedor está en el mar o cuando aparecen cargos de destino — esa es la conversación.",
      },
    ],
  },
  footer: {
    blurb:
      "Investigación con transitarios oceánicos pequeños y medianos. Hablamos de operaciones de importación, facturas al cliente después de la entrega y margen mientras la carga sigue en el mar.",
    bookCall: "Reservar una llamada",
    linkedinAria: "GShips Inc en LinkedIn",
    emailAria: "Enviar un correo a Tasos Valtinos",
  },
  seo: {
    title: "Operaciones de importación para transitarios oceánicos pequeños",
    description:
      "Investigación con transitarios oceánicos pequeños y medianos sobre operaciones de importación: cargos de destino que sorprenden al cliente mayorista, fuga de margen, seguimiento mientras la carga está en el mar. Reserve una conversación de 30 minutos.",
    keywords: [
      "transitario oceánico",
      "transitario pequeño",
      "transitario mediano",
      "operaciones de flete marítimo",
      "operaciones de importación",
      "márgenes de transitario",
      "cargos de destino",
      "cargos de flete después de la entrega",
      "remedición CBM",
      "demurrage y detention",
      "cargos LCL en destino",
      "factura de transitario al cliente",
      "operaciones NVOCC",
      "agente de destino",
      "seguimiento de carga marítima",
      "transitario de importación mayorista",
    ],
    jsonLdAbout:
      "Operaciones de importación en transitarios oceánicos pequeños y medianos",
    jsonLdAudience:
      "Gerentes de operaciones, gerentes de sucursal, coordinadores de importación y agentes de destino en transitarios oceánicos pequeños y medianos",
    jsonLdService:
      "Conversaciones de investigación con transitarios oceánicos pequeños y medianos sobre operaciones de importación: cargos posteriores a la entrega que afectan la relación con el cliente mayorista, fuga de margen y carga en el mar.",
    jsonLdOffer: "Conversación de 30 minutos sobre flete marítimo",
  },
};

export default es;
