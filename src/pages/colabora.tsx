import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';

import { Contained, Donations, Hero, Layout } from '../components';

const ColaboraPage: React.FC<PageProps> = () => (
  <Layout>
    <Hero>
      <Hero.Title>Colabora</Hero.Title>
    </Hero>

    <Contained>
      <h3>Voluntariado</h3>

      <p>
        ¡Únete a nosotros y sé el héroe que nuestras adorables colonias felinas
        necesitan!
      </p>

      <p>
        En el corazón de nuestra comunidad, hay pequeños seres peludos que
        necesitan tu ayuda. Las colonias de gatos callejeros dependen de
        personas compasivas y comprometidas para asegurarse de que cada miembro
        de esta adorable pandilla tenga una vida plena y saludable.
      </p>

      <p>
        ¿Te gustaría ser parte de esta misión maravillosa? Convertirte en
        voluntario de nuestra asociación de cuidados de colonias felinas es una
        experiencia gratificante que marca la diferencia en la vida de estos
        encantadores mininos.
      </p>

      <p>
        Imagina ser el faro de esperanza para esos ojitos brillantes que miran
        con curiosidad y ternura. Tu tiempo y dedicación pueden marcar la
        diferencia entre una vida llena de desafíos y una vida llena de amor y
        cuidados. Al unirte a nosotros, te conviertes en el defensor de aquellos
        que no pueden hablar por sí mismos.
      </p>

      <p>
        ¿Qué puedes hacer como voluntario? Las posibilidades son infinitas.
        Desde alimentar a los gatos y proporcionar refugio, hasta participar en
        campañas de esterilización y concientización en la comunidad. Si tienes
        habilidades médicas o simplemente te encanta pasar tiempo jugando con
        estos adorables amigos, hay un lugar para ti en nuestro equipo.
      </p>

      <p>
        La satisfacción de saber que estás contribuyendo a mejorar las vidas de
        estos gatos callejeros es incomparable. Cada acto de bondad, por pequeño
        que sea, suma un gran impacto en el bienestar de estas criaturas
        vulnerables.
      </p>

      <p>
        No necesitas ser un experto en gatos para unirte a nosotros; solo
        necesitas un corazón lleno de compasión y el deseo de marcar la
        diferencia. ¡Cada voluntario cuenta!
      </p>

      <p>
        Así que, ¿te unes a nosotros? Sé parte de esta familia de amantes de los
        felinos, donde cada ronroneo y cada cola levantada es una prueba del
        cambio que juntos podemos lograr. ¡Haz la elección de ser el ángel
        guardián de nuestras colonias felinas y únete a nosotros en esta
        increíble aventura de amor y compasión! ¡Te necesitamos!
      </p>
    </Contained>

    <Hero>
      <h3>Colaboración económica</h3>
      <Donations />
    </Hero>
  </Layout>
);

export default ColaboraPage;

export const Head: HeadFC = () => <title>CER El Encinar - Colabora</title>;
