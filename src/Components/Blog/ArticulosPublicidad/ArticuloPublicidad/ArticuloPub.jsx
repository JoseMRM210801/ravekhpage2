import React from 'react';
import { Link } from 'react-scroll';
import './ArticuloWhisper.css';
import whisper from './imgs/whisper.jpg';
import whisperBanner from './imgs/whisperBanner.jpg';

export const ArticuloWhisper = () => {
  // Contenido de cada sección
  const secciones = [
    {
      id: 'seccion-PB',
      titulo: '¿Que es la publicidad de Facebook?',  
      contenido: [
      'La publicidad de Facebook es una estrategia de marketing digital que utiliza la plataforma de redes sociales Facebook para promocionar productos, servicios o marcas.',
      'Esta forma de publicidad aprovecha la amplia base de usuarios de Facebook, permitiendo a los anunciantes dirigirse a audiencias específicas según diversos criterios, como la demografía, los intereses y el comportamiento en línea.',
      'Los anuncios en Facebook pueden tomar diversas formas, como anuncios de imagen, videos promocionales, anuncios de carrusel y anuncios de historias, ofreciendo a los anunciantes flexibilidad en la presentación de su mensaje.',
      'Además, la plataforma proporciona herramientas de análisis que permiten a los anunciantes evaluar el rendimiento de sus campañas, medir la interacción del usuario y ajustar estrategias para mejorar los resultados.',
      'Con la constante evolución de las características publicitarias de Facebook, los profesionales del marketing digital buscan aprovechar esta poderosa herramienta para llegar de manera efectiva a su audiencia objetivo.'
     ]
    },
    {
      id: 'seccion-ventajas-Facebook',
      titulo: '¿Cuales Son las ventajas de usar Facebook ads?',
      contenido: [
        'La publicidad en Facebook Ads ofrece numerosas ventajas para los anunciantes que buscan promocionar sus productos, servicios o marcas de manera efectiva.',
        '1. Segmentación precisa: Facebook permite a los anunciantes dirigirse a audiencias específicas según criterios como la demografía, intereses y comportamiento en línea, lo que aumenta la relevancia de los anuncios.',
        '2. Amplia base de usuarios: Con miles de millones de usuarios activos, Facebook proporciona un alcance masivo, permitiendo llegar a una audiencia diversa en diferentes ubicaciones geográficas.',
        '3. Variedad de formatos publicitarios: Los anuncios en Facebook pueden ser de diversos tipos, como imágenes, videos, carruseles y anuncios de historias, ofreciendo flexibilidad en la presentación del mensaje publicitario.',
        '4. Herramientas de análisis y seguimiento: La plataforma ofrece herramientas robustas para medir el rendimiento de las campañas, analizar la interacción del usuario y ajustar estrategias en tiempo real para mejorar los resultados.',
        '5. Personalización de presupuestos y programación: Los anunciantes pueden establecer sus propios presupuestos y horarios de publicación, lo que brinda un mayor control sobre los costos y la visibilidad de los anuncios.',
        'En resumen, Facebook Ads es una poderosa herramienta de marketing digital que brinda a los anunciantes la capacidad de llegar de manera efectiva a su audiencia objetivo, con opciones flexibles y herramientas analíticas para optimizar el rendimiento de las campañas.'  
      ]
    },
    {
      id: 'seccion-comofunciona',
      titulo: '¿Como funciona facebook ADS?',
      contenido: [
        'Facebook Ads opera mediante un sistema de subasta y algoritmos sofisticados que permiten a los anunciantes competir por la visibilidad de sus anuncios.',
        '1. Configuración del anuncio: Los anunciantes crean sus anuncios en el Administrador de Anuncios de Facebook, donde eligen el formato, el contenido creativo y definen su audiencia objetivo.',
        '2. Proceso de subasta: Cuando alguien en la audiencia objetivo de un anunciante está en línea, Facebook realiza una subasta en tiempo real para determinar cuál de los anuncios disponibles se mostrará. La subasta considera diversos factores, como la oferta del anunciante, la relevancia del anuncio y la probabilidad de que el usuario realice la acción deseada (clic, visualización, etc.).',
        '3. Segmentación y audiencia: La segmentación se basa en datos demográficos, intereses y comportamientos en línea. Los anunciantes pueden personalizar la audiencia para llegar a usuarios específicos.',
        '4. Entrega del anuncio: Una vez que se completa la subasta, Facebook muestra el anuncio al usuario ganador en su línea de tiempo, feed o en otros lugares de la plataforma.',
        '5. Análisis y ajustes: Los anunciantes pueden analizar el rendimiento de sus anuncios a través de herramientas de análisis en el Administrador de Anuncios, lo que les permite realizar ajustes continuos para mejorar la efectividad de la campaña.',
        'En resumen, Facebook Ads utiliza un sistema complejo de subasta y segmentación para mostrar anuncios de manera relevante a usuarios específicos, brindando a los anunciantes la oportunidad de llegar a sus audiencias de manera efectiva en la plataforma.'
   
      ]
    },
    {
      id: 'seccion-drf',
      titulo: 'Cómo usar Facebook ADS',
      contenido: [
        'Utilizar Facebook Ads de manera efectiva implica seguir una serie de pasos clave para maximizar el rendimiento de tus campañas publicitarias:',
        '1. Configuración de la cuenta publicitaria: Crea una cuenta publicitaria en el Administrador de Anuncios de Facebook y vincúlala a tu página de Facebook. Esto te dará acceso a las herramientas de publicidad de la plataforma.',
        '2. Definición de objetivos de la campaña: Antes de crear anuncios, establece claramente tus objetivos. Pueden incluir aumentar el conocimiento de la marca, generar clics hacia tu sitio web, obtener instalaciones de aplicaciones, entre otros.',
        '3. Identificación de la audiencia objetivo: Utiliza las herramientas de segmentación de Facebook para definir tu audiencia objetivo. Puedes seleccionar características demográficas, intereses y comportamientos específicos para llegar a usuarios relevantes.',
        '4. Creación de anuncios atractivos: Diseña anuncios creativos y atractivos que resalten tus productos o servicios. Considera el uso de imágenes de alta calidad y mensajes persuasivos que capten la atención de tu audiencia.',
        '5. Configuración del presupuesto y calendario: Establece un presupuesto diario o total para tu campaña, así como un calendario de publicación. Esto te brinda control sobre los costos y la duración de tus anuncios.',
        '6. Monitorización y ajustes continuos: Una vez que tus anuncios estén en marcha, realiza un seguimiento regular del rendimiento. Utiliza las herramientas analíticas de Facebook para entender qué funciona y realiza ajustes según sea necesario para mejorar los resultados.',
        '7. Prueba y optimización: Experimenta con diferentes elementos, como imágenes, copias y llamadas a la acción. Realiza pruebas A/B para identificar las variaciones que generan mejores resultados y optimiza tus campañas en consecuencia.',
        'Siguiendo estos pasos y manteniéndote al tanto de las tendencias y cambios en la plataforma, podrás utilizar Facebook Ads de manera efectiva para alcanzar tus objetivos de marketing.'
      ]
    },
    {
      id: 'seccion-imp',
      titulo: 'Crear ',
      contenido: [
      

        // Accede a Facebook Ads Manager
        'Accede a Facebook Ads Manager:',
        <div key="acceso-ads-manager" className="rounded-lg p-4 bg-gray-800 text-white my-4 overflow-x-auto">
          <p className="text-gray-300 mb-2"># Accede a Facebook Ads Manager</p>
          <code className="text-green-300">
            // Inicia sesión en tu cuenta de Facebook
            // Ve al Administrador de Anuncios desde el menú de navegación o visita https://www.facebook.com/ads/manager
          </code>
        </div>,
        
        // Selecciona el Objetivo de la Campaña
        'Selecciona el Objetivo de la Campaña:',
        <div key="seleccion-objetivo" className="rounded-lg p-4 bg-gray-800 text-white my-4 overflow-x-auto">
          <p className="text-gray-300 mb-2"># Selecciona el Objetivo de la Campaña</p>
          <code className="text-green-300">
            // Haz clic en el botón "Crear" para comenzar una nueva campaña
            // Selecciona el objetivo de tu campaña, como "Tráfico", "Conversiones", "Reconocimiento de Marca", etc.
          </code>
        </div>,
        
        // Configura la Configuración de la Campaña
        'Configura la Configuración de la Campaña:',
        <div key="configuracion-campana" className="rounded-lg p-4 bg-gray-800 text-white my-4 overflow-x-auto">
          <p className="text-gray-300 mb-2"># Configura la Configuración de la Campaña</p>
          <code className="text-green-300">
            // Completa la información básica de la campaña, como el nombre de la campaña, el conjunto de anuncios y el anuncio
            // Define la audiencia objetivo, que puede incluir datos demográficos, intereses y comportamientos específicos
          </code>
        </div>,
        
        // Configura el Presupuesto y la Programación
        'Configura el Presupuesto y la Programación:',
        <div key="configuracion-presupuesto" className="rounded-lg p-4 bg-gray-800 text-white my-4 overflow-x-auto">
          <p className="text-gray-300 mb-2"># Configura el Presupuesto y la Programación</p>
          <code className="text-green-300">
            // Establece el presupuesto diario o total de tu campaña
            // Define la programación de anuncios, es decir, el período de tiempo durante el cual se mostrarán tus anuncios
          </code>
        </div>,
        
        // Elige la Colocación de Anuncios
        'Elige la Colocación de Anuncios:',
        <div key="eleccion-colocacion" className="rounded-lg p-4 bg-gray-800 text-white my-4 overflow-x-auto">
          <p className="text-gray-300 mb-2"># Elige la Colocación de Anuncios</p>
          <code className="text-green-300">
            // Selecciona dónde quieres que se muestren tus anuncios, como el Feed de Noticias de Facebook, Instagram, Audience Network, etc.
          </code>
        </div>,
        
        // Diseña tus Anuncios
        'Diseña tus Anuncios:',
        <div key="diseno-anuncios" className="rounded-lg p-4 bg-gray-800 text-white my-4 overflow-x-auto">
          <p className="text-gray-300 mb-2"># Diseña tus Anuncios</p>
          <code className="text-green-300">
            // Crea el contenido visual y textual de tus anuncios, utilizando imágenes, videos, texto y enlaces
            // Asegúrate de que tus anuncios cumplan con las políticas publicitarias de Facebook
          </code>
        </div>,
        
        // Configura el Seguimiento y la Medición
        'Configura el Seguimiento y la Medición:',
        <div key="configuracion-seguimiento" className="rounded-lg p-4 bg-gray-800 text-white my-4 overflow-x-auto">
          <p className="text-gray-300 mb-2"># Configura el Seguimiento y la Medición</p>
          <code className="text-green-300">
            // Agrega el Píxel de Facebook a tu sitio web para realizar un seguimiento de las conversiones y optimizar tus anuncios
            // Define las conversiones que deseas realizar un seguimiento y optimizar
          </code>
        </div>,
        
        // Revisa y Publica tu Campaña
        'Revisa y Publica tu Campaña:',
        <div key="revision-publicacion" className="rounded-lg p-4 bg-gray-800 text-white my-4 overflow-x-auto">
          <p className="text-gray-300 mb-2"># Revisa y Publica tu Campaña</p>
          <code className="text-green-300">
            // Revisa todas las configuraciones de tu campaña en la vista previa
            // Haz clic en "Publicar" para activar tu campaña
          </code>
        </div>,
       
        // Monitorea el Rendimiento
        'Monitorea el Rendimiento:',
        <div key="monitoreo-rendimiento" className="rounded-lg p-4 bg-gray-800 text-white my-4 overflow-x-auto">
          <p className="text-gray-300 mb-2"># Monitorea el Rendimiento</p>
          <code className="text-green-300">
            // Utiliza Facebook Ads Manager para realizar un seguimiento del rendimiento de tus anuncios
            // Ajusta la configuración según los datos de rendimiento y realiza cambios según sea necesario
          </code>
        </div>
      ]
    }
  ];

  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <div className="hero min-h-screen blanco" style={{ backgroundImage: `url(${whisperBanner})`, maxWidth: '100%', overflowX: 'hidden' }}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content flex-col lg:flex-row-reverse max-w-3xl mx-auto">
          <img src={whisper} className="max-w-sm rounded-lg shadow-2xl" alt="Whisper Library" />
          <div className="max-w-full">
            <h1 className="text-5xl font-bold p-6 ">Descubriendo Whisper: La Revolucionaria Librería de OpenAI</h1>
            <p className="p-6 justo">
              En este artículo, nos sumergiremos en el fascinante mundo de Whisper de OpenAI. Descubrirás de cerca cómo esta innovadora biblioteca funciona y, lo que es aún más emocionante, aprenderás a integrarla fácilmente en tus proyectos de programación, sin importar su naturaleza o complejidad.
            </p>
            <p className='p-6 justo'>
              Whisper va más allá de ser simplemente una librería; es una herramienta que puede potenciar de manera significativa tus desarrollos. Únete a nosotros en este fascinante recorrido mientras desvelamos los secretos de Whisper y exploramos cómo puede elevar la calidad y eficiencia de tus proyectos hacia nuevos horizontes. Prepárate para descubrir y aprovechar todo el potencial de esta notable incorporación a la familia de OpenAI. ¡El futuro de tus proyectos está a punto de dar un salto cuántico!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-6 max-w-3xl mx-auto">
        <ul className="menu bg-neutral w-56 rounded-box space-y-4 my-6">
          <li>
            <h2 className="menu-title blanco">Contenido</h2>
            <ul>
              {secciones.map((seccion) => (
                <li key={seccion.id}>
                  <Link to={seccion.id} smooth={true} duration={500} className="link link-hover blanco">{seccion.titulo}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {secciones.map((seccion) => (
          <section key={seccion.id} id={seccion.id} className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">{seccion.titulo}</h2>
            {seccion.contenido.map((parrafo, index) => (
              <p key={index} className="text-gray-700">{parrafo}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

