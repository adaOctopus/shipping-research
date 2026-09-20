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
    h1: "Hacemos el flete marítimo más rentable para importadores pyme.",
    h1Emphasis: "rentable",
    body: "Los cargos inesperados, los retrasos, la aduana y las reclamaciones manuales con los transitarios destruyen su negocio. Aumente sus márgenes y ahorre tiempo de envío con nuestros análisis.",
    cta: "RESERVE UNA LLAMADA CON NOSOTROS",
  },
  ship: {
    title:
      "Portacontenedores oceánico que muestra los cargos de flete para importadores pyme",
    desc: "Un portacontenedores oceánico moderno con pilas de color y llamadas a cargos de flete marítimo, seguimiento, navieras y capital de trabajo en mayoristas de importación-exportación.",
    labels: {
      charges: "cargos",
      tracking: "seguimiento",
      carriers: "navieras",
      capital: "capital",
    },
  },
  friction: {
    h2: "Los gerentes de importación y de compras, los compradores de consumo masivo (FMCG) y los responsables de cadena de suministro se enfrentan a estos retos.",
    problems: [
      {
        number: "01",
        title: "Cargos que aparecen después de la cotización",
        body: "Una remedición de CBM o de peso que no coincide con la lista de empaque. Demurrage y detention con un tiempo libre distinto al pactado. Recargos por examen aduanero, recargos por riesgo de guerra, cargos por discrepancia de destino. La factura llega después de la entrega. El registro de medición queda del lado del transitario. No se comparte a menos que usted ya sepa pedirlo.",
      },
      {
        number: "02",
        title: "Un seguimiento que señala un punto, no el panorama",
        body: "Un enlace reenviado muestra la última ubicación conocida. No indica si el contenedor llegará al corte, se quedará en transbordo o perderá el camión.",
      },
      {
        number: "03",
        title: "El transitario como única puerta a la naviera",
        body: "La prueba está en la naviera o en la consolidación LCL. El importador habla con el transitario. Los transitarios medianos suelen incorporar cargos no verificados al margen. Pedir el ticket de báscula, la tarifa pactada y el cálculo W/M hace desaparecer muchas partidas. Las excepciones rebotan. Se pierden días.",
      },
      {
        number: "04",
        title: "El efectivo sale antes de que la carga genere ingreso",
        body: "El flete, los aranceles y los depósitos salen mientras el contenedor sigue en el mar. El retraso no es solo stock tardío. Es capital de trabajo sentado en un contenedor.",
      },
    ],
  },
  conversation: {
    h2: "Hable con nosotros para mejorar sus márgenes cuando la carga marítima llega a su muelle.",
    body: "Conversamos con gerentes de importación DDP y CIF, gerentes de compras y compradores de FMCG en mayoristas de importación-exportación de unas 11 a 50 personas: quienes pagan en destino, no exportadores FOB. Si el último envío marítimo trajo cargos después de la entrega que no pudo verificar, nos gustaría saber cuáles fueron.",
    cta: "Reservar una llamada",
    whoLabel: "A quién va dirigido",
    roles: [
      "Gerentes de importación",
      "Compradores de FMCG",
      "Compradores de importación",
      "Gerentes de compras",
      "Gerentes de abastecimiento",
      "Gerentes de cadena de suministro",
    ],
    whoBody:
      "Si usted contrata al transitario de destino bajo DDP o CIF — y el último envío trajo una remedición, D&D o un recargo que no pudo comprobar — esa es la conversación.",
  },
  faq: {
    h2: "Cargos de flete marítimo facturados después de la entrega: lo que ven los operadores.",
    intro:
      "A partir de conversaciones con gerentes de importación, gerentes de compras y compradores de FMCG en mayoristas de 11 a 50 personas: remedición, D&D, examen aduanero, recargo por riesgo de guerra y cómo impugnar una partida que no se puede verificar.",
    items: [
      {
        question:
          "¿Por qué aparecen cargos de flete marítimo después de la entrega?",
        answer:
          "Los importadores que envían con regularidad por vía marítima reciben facturas después de la entrega por cargos que no pueden verificar de forma independiente. El más habitual es un cargo por remedición de CBM o de peso que no coincide con la lista de empaque. También son frecuentes: demurrage y detention facturados con un tiempo libre distinto al pactado, recargos por examen aduanero, recargos por riesgo de guerra y por desvío, y cargos por discrepancia de destino cuando el MBL indica un puerto y el contenedor queda en otro.\n\nLa prueba que lo resolvería suele existir en el archivo de la naviera o del transitario. No se envía a menos que el importador ya sepa pedirla. Las empresas con alguien que audita cada partida de la factura lo detectan con una hoja de cálculo. Quienes salen perjudicados envían con la frecuencia suficiente para que sume, y no están organizados para revisar cada línea: en general, mayoristas de importación-exportación de unas 11 a 50 personas.",
      },
      {
        question:
          "¿Qué tan frecuentes son los cargos sorpresa en los envíos marítimos?",
        answer:
          "No es un caso extremo ni es universal. Operadores que vigilan de cerca ven demurrage en solo 1 o 2 de unos 20 envíos mensuales. Otros reportan partidas sorpresa en aproximadamente 1 de cada 5 envíos últimamente, y ya no las tratan como accidentes. Entre esas cuentas, la tasa recurrente se sitúa alrededor del 5–20 % de los envíos.\n\nLos transitarios medianos son los infractores más frecuentes, porque los cargos no verificados suelen estar incorporados al modelo de margen. Los nombres grandes son más limpios, pero igual se cuelan cargos si nadie revisa el papeleo. Pedir primero la documentación de respaldo hace desaparecer muchos de ellos. En el mercado, una auditoría completa de facturas sitúa el gasto de flete recuperable en el rango del 3–7 % cuando de verdad se tira del expediente.",
      },
      {
        question:
          "¿Qué es un recargo por remedición de CBM o dimensional en flete marítimo?",
        answer:
          "La remedición en destino cambia el volumen o el peso facturado respecto de lo declarado. En LCL se trata como procedimiento habitual; un cargo posterior a la entrega de unos 420 dólares es un tamaño que se reporta a menudo, incluso en casos en los que el CBM coincidía exactamente con la lista de empaque. El registro de medición casi siempre existe. No se ofrece a menos que usted lo pida.\n\nLa cifra remedida puede salir más baja o más alta — paletizar cambia el volumen medido en ambos sentidos —, así que, como mínimo, es una variación que no se informa por defecto, no siempre un esquema. En FCL, el flete marítimo suele ser tarifa plana con independencia del CBM usado dentro de la caja; un cargo extra de CBM después de la entrega suele ser señal de que el movimiento era en realidad LCL. Los pallets no apilables a veces se costean a una altura convencional (unos 220–250 cm) con independencia de la altura real: conviene comprobar esa convención antes de tratar cada diferencia de CBM como un inflado.",
      },
      {
        question:
          "¿Qué son demurrage, detention y otros cargos de flete posteriores a la entrega?",
        answer:
          "Demurrage y detention son cargos de almacenamiento y de equipo una vez vencido el último día libre. Son solo una parte de lo que aparece después de la entrega. El resto del patrón incluye: cargos por examen aduanero cuando se ocultan los recibos; almacenamiento por clima o fuerza mayor facturado por encima del mercado durante un cierre documentado; detention de drayage sin aviso en tiempo real de que el tiempo libre venció; recargos por riesgo de guerra y por cambio de destino sobre cajas que nunca se acercaron a la zona de riesgo; cargos de liberación por discrepancia de destino cuando el MBL y el puerto real de descarga no coinciden; y desajustes de Incoterms / tiempo libre, cuando el agente de destino aplica un plazo distinto al pactado en origen. Los embarcadores pequeños y medianos tienen poco poder de negociación. Los grandes obtienen exenciones.",
      },
      {
        question:
          "¿Cómo se impugnan cargos de flete marítimo que no se pueden verificar?",
        answer:
          "El mismo procedimiento aparece una y otra vez en LCL, FCL y courier. Pida el registro de medición o de báscula ligado a ese envío concreto — no un número reexpresado por el transitario. Pida la tarifa o la confirmación de flete que realmente se pactó. Pida el cálculo detrás de la cifra en dólares, incluido el criterio W/M (peso o medida, el que sea mayor), desglosado si hay paletizado.\n\nPlantee la reclamación sin confrontación: no se niega a pagar, sus dimensiones registradas no coinciden y el papeleo debería aclararlo. Pague lo que no está en disputa. Retenga por escrito solo la partida impugnada.\n\nPara demurrage y detention en Estados Unidos, la norma de la FMC de mayo de 2024 incluye la disposición de contenedor no disponible: la parte que factura no puede cobrar D&D por ningún periodo en el que el contenedor no estuviera realmente disponible (examen aduanero, retraso de terminal o ferrocarril fuera de su control). Obtenga las marcas de tiempo de disponibilidad de la terminal y la orden de retiro o ferrocarril con fecha anterior al último día libre. Cite la disposición de contenedor no disponible por su nombre. La mayoría de las navieras revierten el cargo en la primera impugnación escrita. Si no, una queja CADRS ante la FMC es un camino de 30 a 60 días.\n\nNo todo documento faltante es mala fe: algunos cargos siguen pendientes aguas arriba, de la naviera al transitario. Y la prueba sola no siempre basta si impugnar el cargo retendría el contenedor y arriesgaría un desabastecimiento.",
      },
      {
        question:
          "¿Quién paga los cargos extra de flete bajo FOB frente a DDP, y para quién es esto?",
        answer:
          "Bajo FOB, los cargos extra de destino los paga la propia empresa importadora: ese es el término. Bajo DDP, los cargos extra debería pagarlos el transitario. Los importadores CIF y DDP que contratan y pagan al transitario de destino son a quienes esto les pega: gerentes de importación, gerentes de abastecimiento, gerentes de compras, compradores de FMCG, gerentes de cadena de suministro y coordinadores logísticos del lado comprador en mayoristas de importación-exportación de 11 a 50 personas.\n\nNo es el exportador FOB (la responsabilidad termina en origen), ni el operador de graneles en contratos GAFTA (un mecanismo de demurrage distinto), ni transitarios o navieras. La mayoría de las respuestas de «a mí no me pasa» se explican por los Incoterms, que dejan a esa persona fuera de la exposición — no porque el problema sea raro.",
      },
    ],
  },
  footer: {
    blurb:
      "Investigación con importadores DDP y CIF. Hablamos con quienes pagan en destino cargos de flete marítimo que no pueden verificar de forma independiente.",
    bookCall: "Reservar una llamada",
    linkedinAria: "Perfil de LinkedIn de Tasos Valtinos",
  },
  seo: {
    title:
      "Cargos de flete marítimo no verificables después de la entrega",
    description:
      "Cargos de flete marítimo facturados después de la entrega que el importador mayorista no puede verificar: remedición de CBM, demurrage, detention, examen aduanero, recargo por riesgo de guerra. Para gerentes de importación DDP/CIF en empresas de 11 a 50 personas.",
    keywords: [
      "cargos de flete marítimo",
      "flete marítimo",
      "flete oceánico",
      "cargos de flete de contenedor",
      "cargos adicionales de flete",
      "cargos de flete después de la entrega",
      "remedición CBM",
      "recálculo dimensional",
      "demurrage y detention",
      "recargo por riesgo de guerra",
      "cargos de examen aduanero",
      "cargos LCL en destino",
      "impugnación de factura de flete",
      "importador DDP",
      "gerente de importación",
      "gerente de compras",
      "comprador FMCG",
      "importación exportación mayorista",
      "importador pyme",
    ],
    jsonLdAbout:
      "Cargos de flete marítimo no verificables facturados después de la entrega",
    jsonLdAudience:
      "Gerentes de importación DDP y CIF, gerentes de compras y compradores de FMCG en mayoristas de importación-exportación de 11 a 50 personas",
    jsonLdService:
      "Conversaciones de investigación con importadores DDP y CIF sobre cargos de flete marítimo facturados después de la entrega que no se pueden verificar de forma independiente: remedición, demurrage, detention, examen aduanero, recargo por riesgo de guerra y discrepancia de destino.",
    jsonLdOffer: "Conversación de 30 minutos sobre flete marítimo",
  },
};

export default es;
