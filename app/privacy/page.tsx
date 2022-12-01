import nextConfig from 'next.config'
import { SiteConfig } from 'interfaces/SiteConfig'

export default function Posts(): JSX.Element {
  const { holder, address, email, name, cif, website } =
    nextConfig.siteConfig as SiteConfig
  return (
    <section className="legal-content">
      <h1 className="legal-title">Política de Privacidad</h1>
      <p>
        <strong>{name}</strong> pone a su disposición a través de la página web
        https://{website} la presente política de privacidad con la finalidad de
        informarle, de forma detallada, sobre cómo tratamos sus datos personales
        y protegemos su privacidad y la información que nos proporciona. En caso
        de introducir modificaciones en un futuro sobre la misma se lo
        comunicaremos a través de la página web o a través de otros medios de
        modo que pueda conocer las nuevas condiciones de privacidad
        introducidas.
      </p>
      <p>
        En cumplimiento del Reglamento (UE) 2016/679, General de Protección de
        Datos y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de
        Datos Personales y garantía de los derechos digitales le informamos de
        lo siguiente:
      </p>
      <ol>
        <li>
          <h2 className="legal-title">Datos identificativos</h2>
          <p>
            Titular: <strong>{holder}</strong>
          </p>
          <p>
            CIF: <strong>{cif}</strong>
          </p>
          <p>
            Domicilio: <strong>{address}</strong>
          </p>
          <p>
            Correo electrónico: <strong>{email}</strong>
          </p>
        </li>
        <li>
          <h2 className="legal-title">
            ¿Con qué finalidad tratamos sus datos personales?
          </h2>
          <p>
            En <strong>{name}</strong> recabamos y tratamos su información
            personal con carácter general para gestionar la relación que
            mantenemos con Ud. siendo las principales finalidades que tenemos
            identificadas las siguientes:
          </p>
          <ul>
            <li>
              <p>
                Gestión y contratación de los productos y servicios ofrecidos
                por nuestra empresa.
              </p>
            </li>
            <li>
              <p>
                Canalizar las solicitudes de información, sugerencias y
                reclamaciones que nos pueda hacer llegar.
              </p>
            </li>
            <li>
              <p>
                Mantenerle informado sobre eventos, ofertas, productos y
                servicios que puedan resultar de su interés a través de
                distintos canales de comunicación siempre y cuando Ud. haya
                prestado su consentimiento.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="legal-title">¿Cómo recabamos su información?</h2>
          <p>
            Recabamos su información personal a través de diferentes medios,
            pero siempre será informado en el momento de la recogida mediante
            cláusulas informativas sobre el responsable del tratamiento, la
            finalidad y la base legal del mismo, los destinatarios de los datos
            y el periodo de conservación de su información, así como la forma en
            que puede ejercer los derechos que le asisten en materia de
            protección de datos.
          </p>
          <p>
            En general, la información personal que tratamos se limita a datos
            identificativos (nombre y apellidos, fecha de nacimiento, domicilio,
            DNI, teléfono y correo electrónico), servicios contratados y datos
            de pago y facturación.
          </p>
          <p>
            <strong>{name}</strong> utiliza redes sociales y esta es otra forma
            de llegar a usted. La información recogida a través de los mensajes
            y comunicaciones que publica puede contener información personal que
            se encuentra disponible online y accesible al público. Estas redes
            sociales cuentan con sus propias políticas de privacidad donde se
            explica cómo utilizan y comparten su información, por lo que{' '}
            <strong>{name}</strong> le recomienda que las consulte antes de
            hacer uso de estas para confirmar que está de acuerdo con la forma
            en que su información es recogida, tratada y compartida.
          </p>
        </li>
        <li>
          <h2 className="legal-title">Responsabilidad del usuario</h2>
          <p>
            Al facilitarnos sus datos a través de canales electrónicos, el
            usuario garantiza que es mayor de 14 años y que los datos
            facilitados a <strong>{name}</strong> son verdaderos, exactos,
            completos y actualizados. A estos efectos, el usuario confirma que
            responde de la veracidad de los datos comunicados y que mantendrá
            convenientemente actualizada dicha información de modo que responda
            a su situación real, haciéndose responsable de los datos falsos e
            inexactos que pudiera proporcionar, así como de los daños y
            perjuicios, directos o indirectos, que pudieran derivarse.
          </p>
        </li>
        <li>
          <h2 className="legal-title">¿Cuánto conservamos su información?</h2>
          <p>
            En <strong>{name}</strong> sólo conservamos su información por el
            periodo de tiempo necesario para cumplir con la finalidad para la
            que fue recogida, dar cumplimiento a las obligaciones legales que
            nos vienen impuestas y atender las posibles responsabilidades que
            pudieran derivar del cumplimiento de la finalidad por la que los
            datos fueron recabados.{' '}
          </p>
          <p>
            Si en algún momento hemos recogido sus datos para dirigirnos a usted
            como potencial usuario de nuestros servicios o dar respuesta a una
            solicitud de información realizada por su parte, dichos datos serán
            conservados por un máximo de 1 año desde su recogida, pasando a
            eliminarse transcurrido dicho plazo si no se ha formalizado una
            relación contractual o en el momento en que así nos lo solicite.
          </p>
          <p>
            En todo caso, y por regla general, mantendremos su información
            personal mientras exista una relación contractual que nos vincule o
            usted no ejerza su derecho de supresión y/o limitación del
            tratamiento, en cuyo caso, la información será bloqueada sin darle
            uso más allá de su conservación, mientras pueda ser necesaria para
            el ejercicio o defensa de reclamaciones o pudiera derivarse algún
            tipo de responsabilidad que tuviera que ser atendida.
          </p>
        </li>
        <li>
          <h2 className="legal-title">¿A quién comunicamos sus datos?</h2>
          <p>
            En general, en <strong>{name}</strong> no compartimos su información
            personal, salvo aquellas cesiones que debemos realizar en base a
            obligaciones legales impuestas.
          </p>
          <p>
            Asimismo, su información personal estará a disposición de las
            Administraciones Públicas, Jueces y Tribunales, para la atención de
            posibles responsabilidades nacidas del tratamiento.
          </p>
        </li>
        <li>
          <h2 className="legal-title">
            Transferencias internacionales de datos
          </h2>
          <p>
            No existen transferencias internacionales de sus datos a países
            fuera del Espacio Económico Europeo (EEE).
          </p>
        </li>
        <li>
          <h2 className="legal-title">
            ¿Cuáles son sus derechos con relación al tratamiento de sus datos y
            cómo puede ejercerlos?
          </h2>
          <p>
            La normativa en materia de protección de datos permite que pueda
            ejercer sus derechos de acceso, rectificación, supresión y
            portabilidad de datos y oposición y limitación a su tratamiento, así
            como a no ser objeto de decisiones basadas únicamente en el
            tratamiento automatizado de sus datos, cuando proceda.
          </p>
          <p>Estos derechos se caracterizan por lo siguiente:</p>
          <ul>
            <li>
              <p>
                Su ejercicio es gratuito, salvo que se trate de solicitudes
                manifiestamente infundadas o excesivas (p. ej., carácter
                repetitivo), en cuyo caso <strong>{name}</strong> podrá cobrar
                un canon proporcional a los costes administrativos soportados o
                negarse a actuar
              </p>
            </li>
            <li>
              <p>
                Puede ejercer los derechos directamente o por medio de tu
                representante legal o voluntario.
              </p>
            </li>
            <li>
              <p>
                Debemos responder a su solicitud en el plazo de un mes, aunque,
                si se tiene en cuenta la complejidad y número de solicitudes, se
                puede prorrogar el plazo en otros dos meses más.
              </p>
            </li>
            <li>
              <p>
                Tenemos la obligación de informarle sobre los medios para
                ejercitar estos derechos, los cuales deben ser accesibles y sin
                poder denegarle el ejercicio del derecho por el solo motivo de
                optar por otro medio. Si la solicitud se presenta por medios
                electrónicos, la información se facilitará por estos medios
                cuando sea posible, salvo que nos solicite que sea de otro modo.
              </p>
            </li>
            <li>
              <p>
                Si <strong>{name}</strong> no da curso a la solicitud, le
                informará, a más tardar en un mes, de las razones de su no
                actuación y la posibilidad de reclamar ante una Autoridad de
                Control.
              </p>
            </li>
          </ul>
          <p>
            A fin de facilitar su ejercicio, le facilitamos los enlaces al
            formulario de solicitud de cada uno de los derechos:
          </p>
          <ul>
            <li>
              <a
                href="https://www.aepd.es/media/formularios/formulario-derecho-de-acceso.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Formulario ejercicio del derecho de acceso
              </a>
            </li>
            <li>
              <a
                href="https://www.aepd.es/media/formularios/formulario-derecho-de-rectificacion.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Formulario de ejercicio del derecho de rectificación
              </a>
            </li>
            <li>
              <a
                href="https://www.aepd.es/media/formularios/formulario-derecho-de-oposicion.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Formulario de ejercicio del derecho de oposición
              </a>
            </li>
            <li>
              <a
                href="https://www.aepd.es/media/formularios/formulario-derecho-de-supresion.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Formulario de ejercicio del derecho de supresión (derecho “al
                olvido”)
              </a>
            </li>
            <li>
              <a
                href="https://www.aepd.es/media/formularios/formulario-derecho-de-limitacion.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Formulario de ejercicio del derecho a la limitación del
                tratamiento
              </a>
            </li>
            <li>
              <a
                href="https://www.aepd.es/media/formularios/formulario-derecho-de-portabilidad.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Formulario de ejercicios del derecho a la portabilidad
              </a>
            </li>
            <li>
              <a
                href="https://www.aepd.es/media/formularios/formulario-derecho-de-oposicion-decisiones-automatizadas.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Formulario de ejercicio a no ser objeto de decisiones
                individuales automatizadas
              </a>
            </li>
          </ul>
          <p>
            Para ejercer sus derechos <strong>{name}</strong> pone a su
            disposición los siguientes medios:
          </p>
          <ol>
            <li>
              <p>
                Mediante solicitud escrita y firmada dirigida a{' '}
                <strong>{holder}</strong>, {address}. Ref. Ejercicio de Derechos
                LOPD.
              </p>
            </li>
            <li>
              <p>
                Enviando formulario escaneado y firmado a la dirección de correo
                electrónico {email} indicando en el asunto Ejercicio de Derechos
                LOPD
              </p>
            </li>
          </ol>
          <p>
            En ambos casos, deberá acreditar su identidad acompañando fotocopia
            o en su caso, copia escaneada, de su DNI o documento equivalente
            para poder verificar que sólo damos respuesta al interesado o su
            representante legal, debiendo aportar en este caso documento
            acreditativo de la representación.
          </p>
          <p>
            Asimismo, y especialmente si considera que no ha obtenido
            satisfacción plena en el ejercicio de sus derechos, le informamos
            que podrá presentar una reclamación ante la autoridad nacional de
            control dirigiéndose a estos efectos a la Agencia Española de
            Protección de Datos, C/ Jorge Juan, 6 – 28001 Madrid.
          </p>
        </li>
        <li>
          <h2 className="legal-title">¿Cómo protegemos su información</h2>
          <p>
            En <strong>{name}</strong> nos comprometemos a proteger su
            información personal.
          </p>
          <p>
            Utilizamos medidas, controles y procedimientos de carácter físico,
            organizativo y tecnológico, razonablemente fiables y efectivos,
            orientados a preservar la integridad y la seguridad de sus datos y
            garantizar su privacidad.
          </p>
          <p>
            Además, todo el personal con acceso a los datos personales ha sido
            formado y tiene conocimiento de sus obligaciones con relación a los
            tratamientos de sus datos personales.
          </p>
          <p>
            Todas estas medidas de seguridad son revisadas de forma periódica
            para garantizar su adecuación y efectividad.
          </p>
          <p>
            Sin embargo, la seguridad absoluta no se puede garantizar y no
            existe ningún sistema de seguridad que sea impenetrable por lo que,
            en el caso de cualquier información objeto de tratamiento y bajo
            nuestro control se viese comprometida como consecuencia de una
            brecha de seguridad, tomaremos las medidas adecuadas para investigar
            el incidente, notificarlo a la Autoridad de Control y, en su caso, a
            aquellos usuarios que se hubieran podido ver afectados para que
            tomen las medidas adecuadas.
          </p>
        </li>
      </ol>
    </section>
  )
}
