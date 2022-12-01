import nextConfig from 'next.config'
import { SiteConfig } from 'interfaces/SiteConfig'

export default function Legal(): JSX.Element {
  const { holder, address, email, name, cif, website } =
    nextConfig.siteConfig as SiteConfig
  return (
    <section className="legal-content">
      <h1 className="legal-title">Aviso legal</h1>
      <h2 className="legal-title">
        LEY DE LOS SERVICIOS DE LA SOCIEDAD DE LA INFORMACIÓN (LSSI)
      </h2>
      <p>
        <strong>{name}</strong>, responsable del sitio web, en adelante Titular,
        pone a disposición de los usuarios el presente documento, con el que
        pretende dar cumplimiento a las obligaciones dispuestas en la Ley
        34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y
        del Comercio Electrónico (LSSICE), así como informar a todos los
        usuarios del sitio web respecto a cuáles son las condiciones de uso.
      </p>
      <p>
        Toda persona que acceda a este sitio web asume el papel de usuario,
        comprometiéndose a la observancia y cumplimiento riguroso de las
        disposiciones aquí dispuestas, así como a cualquier otra disposición
        legal que fuera de aplicación.
      </p>
      <p>
        <strong>{name}</strong> se reserva el derecho de modificar cualquier
        tipo de información que pudiera aparecer en el sitio web, sin que exista
        obligación de preavisar o poner en conocimiento de los usuarios dichas
        obligaciones, entendiéndose como suficiente con la publicación en el
        sitio web de <strong>{website}</strong>.
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
          <h2 className="legal-title">Objeto</h2>
          <p>
            A través del Sitio Web, les ofrecemos a los Usuarios la posibilidad
            de acceder a la información sobre nuestros servicios.
          </p>
        </li>
        <li>
          <h2 className="legal-title">Privacidad y tratamiento de datos</h2>
          <p>
            Cuando para el acceso a determinados contenidos o servicio sea
            necesario facilitar datos de carácter personal, los Usuarios
            garantizarán su veracidad, exactitud, autenticidad y vigencia. El
            Titular dará a dichos datos el tratamiento automatizado que
            corresponda en función de su naturaleza o finalidad, en los términos
            indicados en la sección de <strong>Política de Privacidad</strong>.
          </p>
        </li>
        <li>
          <h2 className="legal-title">Propiedad industrial e intelectual</h2>
          <p>
            El Usuario reconoce y acepta que todos los contenidos que se
            muestran en el Sitio Web y en especial, diseños, textos, imágenes,
            logos, iconos, botones, software, nombres comerciales, marcas, o
            cualesquiera otros signos susceptibles de utilización industrial y/o
            comercial están sujetos a derechos de Propiedad Intelectual y todas
            las marcas, nombres comerciales o signos distintivos, todos los
            derechos de propiedad industrial e intelectual, sobre los contenidos
            y/o cualesquiera otros elementos insertados en el página, que son
            propiedad exclusiva del Titular y/o de terceros, quienes tienen el
            derecho exclusivo de utilizarlos en el tráfico económico. Por todo
            ello el Usuario se compromete a no reproducir, copiar, distribuir,
            poner a disposición o de cualquier otra forma comunicar
            públicamente, transformar o modificar tales contenidos manteniendo
            indemne al Titular de cualquier reclamación que se derive del
            incumplimiento de tales obligaciones. En ningún caso el acceso al
            Sitio Web implica ningún tipo de renuncia, transmisión, licencia o
            cesión total ni parcial de dichos derechos, salvo que se establezca
            expresamente lo contrario. Las presentes Condiciones Generales de
            Uso del Sitio Web no confieren a los Usuarios ningún otro derecho de
            utilización, alteración, explotación, reproducción, distribución o
            comunicación pública del Sitio Web y/o de sus Contenidos distintos
            de los aquí expresamente previstos. Cualquier otro uso o explotación
            de cualesquiera derechos estará sujeto a la previa y expresa
            autorización específicamente otorgada a tal efecto por el Titular o
            el tercero titular de los derechos afectados.
          </p>
          <p>
            Los contenidos, textos, fotografías, diseños, logotipos, imágenes,
            programas de ordenador, códigos fuente y, en general, cualquier
            creación intelectual existente en este Sitio Web, así como el propio
            Sitio Web en su conjunto, como obra artística multimedia, están
            protegidos como derechos de autor por la legislación en materia de
            propiedad intelectual. El Titular es dueño de los elementos que
            integran el diseño gráfico del Sitio Web, lo menús, botones de
            navegación, el código HTML, los textos, imágenes, texturas, gráficos
            y cualquier otro contenido del Sitio Web o, en cualquier caso,
            dispone de la correspondiente autorización para la utilización de
            dichos elementos. El contenido dispuesto en el Sitio Web no podrá
            ser reproducido ni en todo ni en parte, ni transmitido, ni
            registrado por ningún sistema de recuperación de información, en
            ninguna forma ni en ningún medio, a menos que se cuente con la
            autorización previa, por escrito, de la citada Entidad.
          </p>
          <p>
            Asimismo, queda prohibido suprimir, eludir y/o manipular el
            «copyright» así como los dispositivos técnicos de protección, o
            cualesquiera mecanismos de información que pudieren contener los
            contenidos. El Usuario de este Sitio Web se compromete a respetar
            los derechos enunciados y a evitar cualquier actuación que pudiera
            perjudicarlos, reservándose en todo caso el Titular el ejercicio de
            cuantos medios o acciones legales le correspondan en defensa de sus
            legítimos derechos de propiedad intelectual e industrial.
          </p>
        </li>
        <li>
          <h2 className="legal-title">
            Obligaciones y responsabilidades del usuario del Sitio Web
          </h2>
          <p>El Usuario se compromete a:</p>
          <ol>
            <li>
              <p>
                Hacer un uso adecuado y lícito del Sitio Web, así como de los
                contenidos y servicios, de conformidad con: (i) la legislación
                aplicable en cada momento; (ii) las Condiciones Generales de Uso
                del Sitio Web; (iii) la moral y buenas costumbres generalmente
                aceptadas y (iv) el orden público.
              </p>
            </li>
            <li>
              <p>
                Proveerse de todos los medios y requerimientos técnicos que se
                precisen para acceder al Sitio Web.
              </p>
            </li>
            <li>
              <p>
                Facilitar información veraz al cumplimentar con sus datos de
                carácter personal los formularios contenidos en el Sitio Web y a
                mantenerlos actualizados en todo momento de forma que responda,
                en cada momento, a la situación real del Usuario. El Usuario
                será el único responsable de las manifestaciones falsas o
                inexactas que realice y de los perjuicios que cause al Titular o
                a terceros por la información que facilite.
              </p>
            </li>
          </ol>
          <p>
            No obstante, lo establecido en el apartado anterior el Usuario
            deberá asimismo abstenerse de:
          </p>
          <ol>
            <li>
              <p>
                Hacer un uso no autorizado o fraudulento del Sitio Web y/o de
                los contenidos con fines o efectos ilícitos, prohibidos en las
                presentes Condiciones Generales de Uso, lesivos de los derechos
                e intereses de terceros, o que de cualquier forma puedan dañar,
                inutilizar, sobrecargar, deteriorar o impedir la normal
                utilización de los servicios o los documentos, archivos y toda
                clase de contenidos almacenados en cualquier equipo informático.
              </p>
            </li>
            <li>
              <p>
                Acceder o intentar acceder a recursos o áreas restringidas del
                Sitio Web, sin cumplir las condiciones exigidas para dicho
                acceso.
              </p>
            </li>
            <li>
              <p>
                Provocar daños en los sistemas físicos o lógicos del Sitio Web,
                de sus proveedores o de terceros.
              </p>
            </li>
            <li>
              <p>
                Introducir o difundir en la red virus informáticos o
                cualesquiera otros sistemas físicos o lógicos que sean
                susceptibles de provocar daños en los sistemas físicos o lógicos
                del Titular, proveedores o de terceros.
              </p>
            </li>
            <li>
              <p>
                Intentar acceder, utilizar y/o manipular los datos del Titular,
                terceros proveedores y otros Usuarios.
              </p>
            </li>
            <li>
              <p>
                Reproducir o copiar, distribuir, permitir el acceso del público
                a través de cualquier modalidad de comunicación pública,
                transformar o modificar los contenidos, a menos que se cuente
                con la autorización del titular de los correspondientes derechos
                o ello resulte legalmente permitido.
              </p>
            </li>
            <li>
              <p>
                Suprimir, ocultar o manipular las notas sobre derechos de
                propiedad intelectual o industrial y demás datos identificativos
                de los derechos del Titular o de terceros incorporados a los
                contenidos, así como los dispositivos técnicos de protección o
                cualesquiera mecanismos de información que puedan insertarse en
                los contenidos.
              </p>
            </li>
            <li>
              <p>
                Obtener e intentar obtener los contenidos empleando para ello
                medios o procedimientos distintos de los que, según los casos,
                se hayan puesto a su disposición a este efecto o se hayan
                indicado expresamente en las páginas web donde se encuentren los
                contenidos o, en general, de los que se empleen habitualmente en
                Internet por no entrañar un riesgo de daño o inutilización del
                Sitio web y/o de los contenidos.
              </p>
            </li>
            <li>
              <p>
                En particular, y a título meramente indicativo y no exhaustivo,
                el Usuario se compromete a no transmitir, difundir o poner a
                disposición de terceros informaciones, datos, contenidos,
                mensajes, gráficos, dibujos, archivos de sonido y/o imagen,
                fotografías, grabaciones, software y, en general, cualquier
                clase de material que:
              </p>
              <ul>
                <li>
                  <p>
                    De cualquier forma, sea contrario, menosprecie o atente
                    contra los derechos fundamentales y las libertades públicas
                    reconocidas constitucionalmente, en los Tratados
                    Internacionales y en el resto de la legislación vigente.
                  </p>
                </li>
                <li>
                  <p>
                    Induzca, incite o promueva actuaciones delictivas,
                    denigratorias, difamatorias, violentas o, en general,
                    contrarias a la ley, a la moral, a las buenas costumbres
                    generalmente aceptadas o al orden público.
                  </p>
                </li>
                <li>
                  <p>
                    Induzca, incite o promueva actuaciones, actitudes o
                    pensamientos discriminatorios por razón de sexo, raza,
                    religión, creencias, edad o condición.
                  </p>
                </li>
                <li>
                  <p>
                    Incorpore, ponga a disposición o permita acceder a
                    productos, elementos, mensajes y/o servicios delictivos,
                    violentos, ofensivos, nocivos, degradantes o, en general,
                    contrarios a la ley, a la moral y a las buenas costumbres
                    generalmente aceptadas o al orden público.
                  </p>
                </li>
                <li>
                  <p>
                    Induzca o pueda inducir a un estado inaceptable de ansiedad
                    o temor.
                  </p>
                </li>
                <li>
                  <p>
                    Induzca o incite a involucrarse en prácticas peligrosas, de
                    riesgo o nocivas para la salud y el equilibrio psíquico.
                  </p>
                </li>
                <li>
                  <p>
                    Se encuentra protegido por la legislación en materia de
                    protección intelectual o industrial perteneciente al Titular
                    o a terceros sin que haya sido autorizado el uso que se
                    pretenda realizar.
                  </p>
                </li>
                <li>
                  <p>
                    Sea contrario al honor, a la intimidad personal y familiar o
                    a la propia imagen de las personas.
                  </p>
                </li>
                <li>
                  <p>Constituya cualquier tipo de publicidad.</p>
                </li>
                <li>
                  <p>
                    Incluya cualquier tipo de virus o programa que impida el
                    normal funcionamiento del Sitio Web.
                  </p>
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Si para acceder a algunos de los servicios y/o contenidos del Sitio
            Web, se le proporcionara una contraseña, se obliga a usarla de
            manera diligente, manteniéndola en todo momento en secreto. En
            consecuencia, será responsable de su adecuada custodia y
            confidencialidad, comprometiéndose a no cederla a terceros, de
            manera temporal o permanente, ni a permitir el acceso a los
            mencionados servicios y/o contenidos por parte de personas ajenas.
            Igualmente, se obliga a notificar al Titular cualquier hecho que
            pueda suponer un uso indebido de su contraseña, como, a título
            enunciativo, su robo, extravío o el acceso no autorizado, con el fin
            de proceder a su inmediata cancelación. En consecuencia, mientras no
            efectúe la notificación anterior, el Titular quedará eximida de
            cualquier responsabilidad que pudiera derivarse del uso indebido de
            su contraseña, siendo de su responsabilidad cualquier utilización
            ilícita de los contenidos y/o servicios del Sitio Web por cualquier
            tercero ilegítimo. Si de manera negligente o dolosa incumpliera
            cualquiera de las obligaciones establecidas en las presentes
            Condiciones Generales de Uso, responderá por todos los daños y
            perjuicios que de dicho incumplimiento pudieran derivarse para el
            Titular.
          </p>
        </li>
        <li>
          <h2 className="legal-title">Responsabilidades</h2>
          <p>
            No se garantiza el acceso continuado, ni la correcta visualización,
            descarga o utilidad de los elementos e informaciones contenidas en
            la web que puedan verse impedidos, dificultados o interrumpidos por
            factores o circunstancias que están fuera de su control. No se hace
            responsable de las decisiones que pudieran adoptarse como
            consecuencia del acceso a los contenidos o informaciones ofrecidas.
          </p>
          <p>
            Se podrá interrumpir el servicio, o resolver de modo inmediato la
            relación con el Usuario, si se detecta que un uso de su Sitio Web, o
            de cualquiera de los servicios ofertados en el mismo, es contrario a
            las presentes Condiciones Generales de Uso. El Titular no se hace
            responsable por daños, perjuicios, pérdidas, reclamaciones o gastos
            derivados del uso del Sitio Web.
          </p>
          <p>
            Únicamente será responsable de eliminar, lo antes posible, los
            contenidos que puedan generar tales perjuicios, siempre que así se
            notifique. En especial no seremos responsables de los perjuicios que
            se pudieran derivar, entre otros, de:
          </p>
          <ol>
            <li>
              <p>
                Interferencias, interrupciones, fallos, omisiones, averías
                telefónicas, retrasos, bloqueos o desconexiones en el
                funcionamiento del sistema electrónico, motivadas por
                deficiencias, sobrecargas y errores en las líneas y redes de
                telecomunicaciones, o por cualquier otra causa ajena al control
                del Titular.{' '}
              </p>
            </li>
            <li>
              <p>
                Intromisiones ilegítimas mediante el uso de programas malignos
                de cualquier tipo y a través de cualquier medio de comunicación,
                tales como virus informáticos o cualesquiera otros.
              </p>
            </li>
            <li>
              <p>Abuso indebido o inadecuado del Sitio Web.</p>
            </li>
            <li>
              <p>
                Errores de seguridad o navegación producidos por un mal
                funcionamiento del navegador o por el uso de versiones no
                actualizadas del mismo. El administrador del Sitio web se
                reservan el derecho de retirar, total o parcialmente, cualquier
                contenido o información presente en el Sitio Web.
              </p>
            </li>
          </ol>
          <p>
            El Titular declina cualquier responsabilidad por los daños y
            perjuicios de toda naturaleza que pudieran deberse a la mala
            utilización de los servicios de libre disposición y uso por parte de
            los Usuarios de Sitio Web. Asimismo, queda exonerado de cualquier
            responsabilidad por el contenido e informaciones que puedan ser
            recibidas como consecuencia de los formularios de recogida de datos,
            estando los mismos únicamente para la prestación de los servicios de
            consultas y dudas. Por otro lado, en caso de causar daños y
            perjuicios por un uso ilícito o incorrecto de dichos servicios,
            podrá ser el Usuario reclamado por los daños o perjuicios causados.
          </p>
          <p>
            Usted mantendrá al Titular indemne frente a cualesquiera daños y
            perjuicios que se deriven de reclamaciones, acciones o demandas de
            terceros como consecuencia de su acceso o uso del Sitio Web.
            Asimismo, usted se obliga a indemnizar frente a cualesquiera daños y
            perjuicios, que se deriven del uso por su parte de “robots”,
            “spiders”, “crawlers” o herramientas similares empleadas con el fin
            de recabar o extraer datos o de cualquier otra actuación por su
            parte que imponga una carga irrazonable sobre el funcionamiento del
            Sitio Web.
          </p>
        </li>
        <li>
          <h2 className="legal-title">Hipervínculos</h2>
          <p>
            El Usuario se obliga a no reproducir de ningún modo, ni siquiera
            mediante un hiperenlace o hipervínculo, el Sitio Web, así como
            ninguno de sus contenidos, salvo autorización expresa y por escrito
            del responsable del fichero.
          </p>
          <p>
            El Sitio Web puede incluir enlaces a otros sitios web, gestionados
            por terceros, con objeto de facilitar el acceso del Usuario a la
            información de empresas colaboradoras y/o patrocinadoras. Conforme
            con ello, el Titular no se responsabiliza del contenido de dichos
            sitios web, ni se sitúa en una posición de garante ni/o de parte
            ofertante de los servicios y/o información que se puedan ofrecer a
            terceros a través de los enlaces de terceros.
          </p>
          <p>
            Se concede al Usuario un derecho limitado, revocable y no exclusivo
            a crear enlaces a la página principal del Sitio Web exclusivamente
            para uso privado y no comercial. Los sitios web que incluyan enlace
            a nuestro Sitio Web (i) no podrán falsear su relación ni afirmar que
            se ha autorizado tal enlace, ni incluir marcas, denominaciones,
            nombres comerciales, logotipos u otros signos distintivos del
            Titular; (ii) no podrán incluir contenidos que puedan considerarse
            de mal gusto, obscenos, ofensivos, controvertidos, que inciten a la
            violencia o la discriminación por razón de sexo, raza o religión,
            contrarios al orden público o ilícitos; (iii) no podrán enlazar a
            ninguna página del Sitio Web distinta de la página principal; (iv)
            deberá enlazar con la propia dirección del Sitio Web, sin permitir
            que el Sitio web que realice el enlace reproduzca el Sitio Web como
            parte de su web o dentro de uno de sus “frames” o crear un “browser”
            sobre cualquiera de las páginas del Sitio Web. El Titular podrá
            solicitar, en cualquier momento, que elimine cualquier enlace al
            Sitio Web, después de lo cual deberá proceder de inmediato a su
            eliminación.
          </p>
          <p>
            El Titular del Sitio Web no puede controlar la información,
            contenidos, productos o servicios facilitados por otros sitios web
            que tengan establecidos enlaces con destino al Sitio Web.
          </p>
        </li>
        <li>
          <h2 className="legal-title">Protección de datos</h2>
          <p>
            Para utilizar algunos de los Servicios, el Usuario debe proporcionar
            previamente ciertos datos de carácter personal. El Titular tratará
            de manera automatizada estos datos y aplicará las correspondientes
            medidas de seguridad, todo ello en cumplimiento del RGPD, LOPDGDD y
            LSSI. El Usuario puede acceder a la política seguida en el
            tratamiento de los datos personales, así como el establecimiento de
            las finalidades previamente establecidas, en las condiciones
            definidas en la <strong>Política de Privacidad</strong>.
          </p>
        </li>
        <li>
          <h2 className="legal-title">Cookies</h2>
          <p>
            El Titular se reserva el derecho de utilizar la tecnología “cookie”
            en el Sitio Web, a fin de reconocerlo como Usuario frecuente y
            personalizar el uso que realice del Sitio Web mediante la
            preselección de su idioma, o contenidos más deseados o específicos.
          </p>
          <p>
            Las cookies recopilan la dirección IP del usuario siendo Google el
            responsable del tratamiento de esta información.
          </p>
          <p>
            Las cookies son ficheros enviados a un navegador, por medio de un
            servidor Web, para registrar la navegación del Usuario en el Sitio
            Web, cuando el Usuario permita su recepción. Si usted lo desea puede
            configurar su navegador para ser avisado en pantalla de la recepción
            de cookies y para impedir la instalación de cookies en su disco
            duro. Por favor consulte las instrucciones y manuales de su
            navegador para ampliar esta información.
          </p>
          <p>
            Gracias a las cookies, resulta posible que se pueda reconocer el
            navegador del ordenador utilizado por el Usuario con la finalidad de
            facilitar contenidos y ofrecer las preferencias de navegación u
            publicitarias que el Usuario, a los perfiles demográficos de los
            Usuarios, así como para medir las visitas y parámetros del tráfico,
            controlar el progreso y número de entradas.
          </p>
        </li>
        <li>
          <h2 className="legal-title">Declaraciones y garantías</h2>
          <p>
            En general, los contenidos y servicios ofrecidos en el Sitio Web
            tienen carácter meramente informativo. Por consiguiente, al
            ofrecerlos, no se otorga garantía ni declaración alguna en relación
            con los contenidos y servicios ofrecidos en el Sitio web,
            incluyendo, a título enunciativo, garantías de licitud, fiabilidad,
            utilidad, veracidad, exactitud, o comerciabilidad, salvo en la
            medida en que por ley no puedan excluirse tales declaraciones y
            garantías.
          </p>
        </li>
        <li>
          <h2 className="legal-title">Fuerza mayor</h2>
          <p>
            El Titular no será responsable en todo en caso de imposibilidad de
            prestar servicio, si ésta se debe a interrupciones prolongadas del
            suministro eléctrico, líneas de telecomunicaciones, conflictos
            sociales, huelgas, rebelión, explosiones, inundaciones, actos y
            omisiones del Gobierno, y en general todos los supuestos de fuerza
            mayor o de caso fortuito.
          </p>
        </li>
        <li>
          <h2 className="legal-title">
            Resolución de controversias. Ley aplicable y jurisdicción
          </h2>
          <p>
            Las presentes Condiciones Generales de Uso, así como el uso del
            Sitio Web, se regirán por la legislación española. Para la
            resolución de cualquier controversia las partes se someterán a los
            Juzgados y Tribunales del domicilio social del Titular del Sitio
            Web.
          </p>
          <p>
            En el supuesto de que cualquier estipulación de las presentes
            Condiciones Generales de Uso resultara inexigible o nula en virtud
            de la legislación aplicable o como consecuencia de una resolución
            judicial o administrativa, dicha inexigibilidad o nulidad no hará
            que las presentes Condiciones Generales de Uso resulten inexigibles
            o nulas en su conjunto. En dichos casos, el Titular procederá a la
            modificación o sustitución de dicha estipulación por otra que sea
            válida y exigible y que, en la medida de lo posible, consiga el
            objetivo y pretensión reflejados en la estipulación original.
          </p>
        </li>
      </ol>
    </section>
  )
}
