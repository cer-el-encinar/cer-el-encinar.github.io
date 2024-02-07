import * as React from 'react';
import { Link, type HeadFC, type PageProps } from 'gatsby';

import { Contained, Hero, Layout, Statement } from '../components';

const NosotrosPage: React.FC<PageProps> = () => (
  <Layout>
    <Hero notMarginTopOnMobile>
      <Hero.Title>Nosotros</Hero.Title>
    </Hero>

    <Contained>
      <Statement>
        Asociación CER EL ENCINAR esta formada por un grupo de vecinos y
        colaboradores que trabajamos en el área de la Urbanización Encinar del
        Alberche de Villa del Prado, siempre y cuando los medios y los
        voluntarios puedan.
      </Statement>
      <p>
        ¡Bienvenido a "CER El Encinar"! Somos una asociación dedicada al cuidado
        y bienestar de los gatos en la encantadora urbanización del Encinar del
        Alberche. Nos apasiona mejorar la calidad de vida de nuestras amigas
        felinas mediante el compromiso con la captura, esterilización y retorno
        (CER), una práctica que promueve el equilibrio y la armonía en las
        colonias gatunas que comparten nuestro hogar.
      </p>
      <Statement>
        No contamos con ninguna subvención oficial en este momento, asi que
        todas nuestras intervenciones se financian con donaciones o
        colaboraciones puntuales
      </Statement>

      <h4>¿Quiénes somos en "CER El Encinar"?</h4>
      <p>
        En "CER El Encinar", conformamos un grupo unido de amantes de los
        animales, vecinos comprometidos y voluntarios dedicados, todos
        compartiendo una visión común: crear un ambiente donde los gatos
        callejeros puedan vivir de manera saludable y feliz. Nos especializamos
        en la implementación del método CER, una estrategia ética y sostenible
        para controlar la población felina.
      </p>

      <h4>Nuestra Misión en "CER El Encinar"</h4>
      <p>
        Nuestra misión es clara: velar por el bienestar de los gatos en el
        Encinar del Alberche. A través de la aplicación del método CER, buscamos
        controlar la población de manera ética, evitando la reproducción
        descontrolada y fomentando un equilibrio saludable en las colonias
        felinas. Además, nos esforzamos por proporcionar atención médica,
        alimento y refugio, mejorando así la calidad de vida de nuestros amigos
        de cuatro patas.
      </p>

      <h4>Actualmente realizamos</h4>
      <p>
        <ul>
          <li>Castraciones y retornos de gatos a sus colonias.</li>
          <li>Gestión de colonias Ferales censadas. </li>
          <li>
            Protección de colonias ya establecidas en puntos autogestionables. (
            evitando la alimentación indiscriminada en zonas publicas).
          </li>
          <li>
            Marcaciones de espacios protegidos (actualmente solo en zonas
            privadas).
          </li>
          <li>
            Banco de alimentos para colonias mediante donaciones particulares,
            asociaciones o empresas.
          </li>
          <li>Cuidado de gatos enfermos de las colonias gestionadas.</li>
          <li>Adopciones responsables de gatos de las colonias.</li>
          <li>Acuerdos veterinarios con entidades privadas.</li>
          <li>Asesoramiento Legal y denuncias sobre maltrato animal.</li>
          <li>Autofinancionaciones y Donaciones.</li>
          <li>Cursos , Asesoramiento y campañas de concienciación.</li>
          <li>Hogares de acogida temporales.</li>
        </ul>
      </p>

      <h4>¿Cómo Implementamos el Método CER en "CER El Encinar"?</h4>
      <p>
        La Captura, Esterilización y Retorno es un método eficaz y compasivo
        para abordar el problema de la superpoblación de gatos callejeros.
        Nuestro equipo de voluntarios se dedica a capturar a los gatos,
        llevarlos a una clínica veterinaria para la esterilización y,
        finalmente, devolverlos a su hogar en el Encinar del Alberche. Este
        enfoque no solo controla la población, sino que también mejora la salud
        y el bienestar de nuestros compañeros felinos.
      </p>

      <h4>Colabora con "CER El Encinar"</h4>
      <p>
        Te invitamos a unirte a nuestra causa. Ya sea ofreciendo tu tiempo como
        voluntario, realizando donaciones o simplemente difundiendo nuestra
        labor, cada pequeña contribución suma en nuestra misión. En "CER El
        Encinar", creemos en la fuerza de la comunidad para generar un cambio
        positivo. Únete a nosotros y sé parte de esta travesía dedicada a
        mejorar la vida de los gatos en el Encinar del Alberche. ¡Gracias por
        ser parte de nuestra historia!
      </p>

      <Link to="/colabora/">
        ¡Únete a nosotros y sé el héroe que nuestras adorables colonias felinas
        necesitan!
      </Link>
    </Contained>
  </Layout>
);

export default NosotrosPage;

export const Head: HeadFC = () => (
  <>
    <html lang="es" />
    <title>CER El Encinar - Nosotros</title>
    <meta name="description" content="CER El Encinar" />
  </>
);
