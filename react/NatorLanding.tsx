import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  CloudCog,
  CodeXml,
  Cog,
  FileUp,
  Gauge,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  ShieldCheck,
  Workflow,
  X,
  Zap,
} from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <a className={`button button--${variant}`} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
    </a>
  );
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Nator Inc., inicio">
      <span className="brand__mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand__word">
        Nator<span>Inc.</span>
      </span>
    </a>
  );
}

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="hero" id="inicio">
      <header className="nav container">
        <Brand />
        <nav
          className={menuOpen ? "nav__links nav__links--open" : "nav__links"}
          aria-label="Navegación principal"
        >
          <a href="#servicios" onClick={() => setMenuOpen(false)}>
            Servicios
          </a>
          <a href="#proceso" onClick={() => setMenuOpen(false)}>
            Cómo trabajamos
          </a>
          <a href="#casos" onClick={() => setMenuOpen(false)}>
            Casos
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </nav>
        <a className="nav__cta" href="#contacto">
          Hablar con un experto <ArrowRight size={15} />
        </a>
        <button
          className="nav__menu"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="eyebrow">
            <span className="eyebrow__dot" /> Automatización que funciona y se mantiene
          </div>
          <h1>
            Automatizamos procesos.
            <br />
            <em>Escalamos tu operación.</em>
          </h1>
          <p>
            Soluciones en la nube para RPA, orquestación y workflows conectados con UiPath, n8n,
            Zapier, Glassio Agents y más.
          </p>
          <div className="hero__actions">
            <ButtonLink href="#contacto">Solicitar demo</ButtonLink>
            <ButtonLink href="#casos" variant="secondary">
              Ver casos de uso
            </ButtonLink>
          </div>
          <div className="hero__proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>MA</span>
              <span>JR</span>
              <span>LS</span>
            </div>
            <p>
              <strong>Equipos de operaciones</strong>
              <br />
              recuperan tiempo para crecer.
            </p>
          </div>
        </div>

        <div
          className="automation-visual"
          aria-label="Panel de control mostrando un flujo de automatización en operación"
        >
          <div className="visual-glow" />
          <div className="flow-line flow-line--one" />
          <div className="flow-line flow-line--two" />
          <div className="float-node float-node--cloud">
            <CloudCog size={24} />
            <span>Cloud</span>
          </div>
          <div className="float-node float-node--api">
            <CodeXml size={23} />
            <span>API</span>
          </div>
          <div className="dashboard">
            <div className="dashboard__top">
              <Brand />
              <div className="dashboard__live">
                <span /> En operación
              </div>
            </div>
            <div className="dashboard__body">
              <div className="dashboard__side" aria-hidden="true">
                <span className="active" />
                <span />
                <span />
                <span />
              </div>
              <div className="dashboard__main">
                <div className="dashboard__title">
                  <div>
                    <small>FLUJO ACTIVO</small>
                    <strong>Facturación mensual</strong>
                  </div>
                  <span>•••</span>
                </div>
                <div className="metric-row">
                  <div>
                    <small>Procesados</small>
                    <strong>1.284</strong>
                    <span className="trend">+18%</span>
                  </div>
                  <div>
                    <small>Tiempo ahorrado</small>
                    <strong>146h</strong>
                    <span>este mes</span>
                  </div>
                </div>
                <div className="workflow-canvas">
                  <div className="workflow-step">
                    <span className="step-icon step-icon--mail">@</span>
                    <small>Entrada</small>
                  </div>
                  <div className="connector">
                    <span />
                  </div>
                  <div className="workflow-step">
                    <span className="step-icon step-icon--bot">
                      <Bot size={16} />
                    </span>
                    <small>Procesar</small>
                  </div>
                  <div className="connector">
                    <span />
                  </div>
                  <div className="workflow-step">
                    <span className="step-icon step-icon--check">
                      <Check size={16} />
                    </span>
                    <small>Validar</small>
                  </div>
                </div>
                <div className="activity">
                  <span>
                    <Check size={13} />
                  </span>
                  <div>
                    <strong>Factura #A-2891 procesada</strong>
                    <small>Hace 12 segundos</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="success-badge">
            <span>
              <Check size={16} />
            </span>
            <div>
              <strong>98.7%</strong>
              <small>Sin errores</small>
            </div>
          </div>
        </div>
      </div>
      <div className="container integrations-strip">
        <span>Se integra con</span>
        {[
          ["Ui", "UiPath"],
          ["n8n", "n8n"],
          ["↯", "zapier"],
          ["G", "Glassio Agents"],
        ].map(([symbol, name]) => (
          <div className="tech-logo" key={name}>
            <b>{symbol}</b>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    icon: Workflow,
    number: "01",
    title: "RPA & Orquestación",
    text: "Automatizamos tareas repetitivas y coordinamos procesos completos para que tu equipo opere sin fricción.",
  },
  {
    icon: Network,
    number: "02",
    title: "Integraciones & Workflows",
    text: "Conectamos tus plataformas, aplicaciones y APIs para que la información fluya sin trabajo manual.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Automatizaciones a medida",
    text: "Creamos bots, scripts, pipelines y monitoreo adaptados a la realidad de tu operación.",
  },
];

export function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-kicker">Qué hacemos</span>
            <h2>
              Menos tareas repetitivas.
              <br />
              Más trabajo que genera valor.
            </h2>
          </div>
          <p>
            Diseñamos automatizaciones prácticas, seguras y fáciles de mantener. Desde una tarea
            puntual hasta procesos que conectan toda tu operación.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, number, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-card__top">
                <span className="service-icon">
                  <Icon size={24} />
                </span>
                <small>{number}</small>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contacto">
                Más info <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const metrics = [
    ["Hasta 70%", "menos tareas manuales"],
    ["120+ horas", "recuperadas cada mes"],
    ["−85%", "errores operativos"],
    ["24/7", "procesos monitoreados"],
  ];
  return (
    <section className="metrics">
      <div className="container metrics__grid">
        {metrics.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="metrics__note">
        *Resultados de referencia. El impacto real se define durante el diagnóstico.
      </p>
    </section>
  );
}

function Process() {
  const steps = [
    [
      "01",
      "Diagnóstico",
      "Entendemos el proceso, sus puntos críticos y el resultado esperado.",
      "3–5 días",
    ],
    [
      "02",
      "PoC rápido",
      "Validamos la solución con una prueba funcional y medible.",
      "1–2 semanas",
    ],
    [
      "03",
      "Implementación",
      "Construimos, integramos y documentamos el flujo completo.",
      "2–6 semanas",
    ],
    ["04", "Operación & monitoreo", "Medimos, mantenemos y mejoramos continuamente.", "Continuo"],
  ];
  return (
    <section className="section process" id="proceso">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Cómo trabajamos</span>
          <h2>
            De la oportunidad a la operación.
            <br />
            Sin complicaciones.
          </h2>
          <p>Un proceso claro, con entregables visibles y resultados medibles en cada etapa.</p>
        </div>
        <div className="process-grid">
          {steps.map(([n, title, text, time], i) => (
            <article className="process-step" key={title}>
              <div className="process-step__number">{n}</div>
              {i < 3 && <div className="process-step__line" aria-hidden="true" />}
              <h3>{title}</h3>
              <p>{text}</p>
              <span>
                <Clock3 size={14} /> {time}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  const support = [
    [CloudCog, "Nube"],
    [CodeXml, "APIs"],
    [ShieldCheck, "Seguridad"],
  ] as const;
  return (
    <section className="tech-band">
      <div className="container tech-band__inner">
        <div>
          <span className="section-kicker">Tecnologías</span>
          <h2>Tu ecosistema, trabajando como uno solo.</h2>
          <p>Integraciones certificadas y conectores personalizados.</p>
        </div>
        <div className="tech-wall">
          <div className="tech-wall__logos">
            <span>
              <b>Ui</b> UiPath
            </span>
            <span>
              <b>n8n</b> n8n
            </span>
            <span>
              <b>↯</b> zapier
            </span>
            <span>
              <b>G</b> Glassio
            </span>
          </div>
          <div className="tech-wall__support">
            {support.map(([Icon, label]) => (
              <span key={label}>
                <Icon size={19} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const cases = [
  {
    area: "FINANZAS",
    title: "Facturas procesadas sin cuellos de botella",
    problem:
      "El equipo invertía días descargando, validando y registrando facturas de distintos proveedores.",
    solution: "Un flujo automatizado extrae los datos, valida reglas y registra cada documento.",
    metric: "−76%",
    metricLabel: "tiempo de procesamiento",
    quote: "Ahora el equipo revisa excepciones, no cientos de facturas.",
    person: "Líder de Operaciones",
    company: "Empresa de servicios B2B",
  },
  {
    area: "RECURSOS HUMANOS",
    title: "Cada ingreso listo desde el primer día",
    problem: "Las altas manuales generaban retrasos en accesos, documentos y bienvenida.",
    solution: "Un workflow coordina formularios, cuentas, notificaciones y seguimiento.",
    metric: "8 h",
    metricLabel: "ahorradas por ingreso",
    quote: "El onboarding pasó de una lista interminable a un proceso predecible.",
    person: "Directora de Talento",
    company: "Compañía regional",
  },
  {
    area: "OPERACIONES",
    title: "Reportes consolidados antes de empezar el día",
    problem: "La información se copiaba manualmente entre hojas y plataformas dispersas.",
    solution: "Conectores reúnen, validan y distribuyen los indicadores automáticamente.",
    metric: "99.4%",
    metricLabel: "datos consistentes",
    quote: "Tomamos decisiones con información lista, no con archivos por conciliar.",
    person: "Gerente de Operaciones",
    company: "Empresa de logística",
  },
];

function CaseStudies() {
  const [active, setActive] = useState(0);
  const item = cases[active];
  if (!item) return null;
  return (
    <section className="section cases" id="casos">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-kicker">Casos de uso</span>
            <h2>
              Resultados que se sienten
              <br />
              en la operación diaria.
            </h2>
          </div>
          <div className="carousel-controls">
            <button
              type="button"
              aria-label="Caso anterior"
              onClick={() => setActive((active - 1 + cases.length) % cases.length)}
            >
              <ChevronLeft />
            </button>
            <span>
              {String(active + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Caso siguiente"
              onClick={() => setActive((active + 1) % cases.length)}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <article className="case-card">
          <div className="case-card__story">
            <span>{item.area}</span>
            <h3>{item.title}</h3>
            <dl>
              <div>
                <dt>El reto</dt>
                <dd>{item.problem}</dd>
              </div>
              <div>
                <dt>La solución</dt>
                <dd>{item.solution}</dd>
              </div>
            </dl>
          </div>
          <div className="case-card__result">
            <Gauge size={28} />
            <strong>{item.metric}</strong>
            <span>{item.metricLabel}</span>
            <blockquote>“{item.quote}”</blockquote>
            <p>
              {item.person}
              <small>{item.company}</small>
            </p>
          </div>
        </article>
        <div className="carousel-dots">
          {cases.map((entry, index) => (
            <button
              type="button"
              aria-label={`Ver caso: ${entry.title}`}
              className={active === index ? "active" : ""}
              key={entry.title}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    [
      "PoC",
      "Valida una oportunidad de automatización con alcance, métricas y una prueba funcional.",
      ["Diagnóstico inicial", "Prototipo funcional", "Informe de viabilidad"],
    ],
    [
      "Implementación",
      "Lleva el flujo validado a producción con seguridad, documentación y adopción.",
      ["Desarrollo e integraciones", "Pruebas y despliegue", "Capacitación del equipo"],
    ],
    [
      "Soporte & evolución",
      "Mantén tus automatizaciones disponibles, medidas y preparadas para crecer.",
      ["Monitoreo continuo", "Mantenimiento preventivo", "Mejoras mensuales"],
    ],
  ] as const;
  return (
    <section className="section plans" id="planes">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Servicios</span>
          <h2>Empieza donde tenga más sentido.</h2>
          <p>Un alcance claro para validar, implementar o evolucionar tu automatización.</p>
        </div>
        <div className="plan-grid">
          {plans.map(([title, text, bullets], i) => (
            <article
              className={i === 1 ? "plan-card plan-card--featured" : "plan-card"}
              key={title}
            >
              {i === 1 && <span className="plan-card__flag">Más elegido</span>}
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {bullets.map((b) => (
                  <li key={b}>
                    <Check size={15} />
                    {b}
                  </li>
                ))}
              </ul>
              <ButtonLink href="#contacto" variant={i === 1 ? "primary" : "secondary"}>
                {i === 0 ? "Ver PoC" : "Hablar con un experto"}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.length < 50 || message.length > 300) return;
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 800);
  };
  return (
    <section className="contact" id="contacto">
      <div className="container contact__grid">
        <div className="contact__copy">
          <span className="section-kicker section-kicker--light">Hablemos</span>
          <h2>¿Qué proceso te está quitando tiempo?</h2>
          <p>
            Cuéntanos brevemente. En una primera conversación identificaremos oportunidades, alcance
            y próximos pasos.
          </p>
          <ul>
            <li>
              <Check size={16} /> Evaluación inicial sin costo
            </li>
            <li>
              <Check size={16} /> Respuesta en 24–48 horas
            </li>
            <li>
              <LockKeyhole size={16} /> Tu información se mantiene confidencial
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Nombre completo
              <input name="name" autoComplete="name" required placeholder="Tu nombre" />
            </label>
            <label>
              Email corporativo
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="tu@empresa.com"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Empresa
              <input
                name="company"
                autoComplete="organization"
                required
                placeholder="Nombre de tu empresa"
              />
            </label>
            <label>
              Teléfono <span>(opcional)</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="+57 300 000 0000" />
            </label>
          </div>
          <label>
            Proceso a automatizar
            <textarea
              name="description"
              required
              minLength={50}
              maxLength={300}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              aria-describedby="description-help"
              placeholder="Ej. Cada semana consolidamos manualmente reportes de cinco plataformas..."
            />
            <small
              id="description-help"
              className={
                message.length > 0 && message.length < 50
                  ? "form-hint form-hint--error"
                  : "form-hint"
              }
            >
              {message.length > 0 && message.length < 50
                ? "Por favor incluye una descripción de 50–300 caracteres"
                : `${message.length}/300 · Mínimo 50 caracteres`}
            </small>
          </label>
          <label className="file-field">
            <FileUp size={20} />
            <span>
              <strong>Adjuntar un ejemplo</strong>
              <small>PDF, XLSX o imagen · máx. 10 MB (opcional)</small>
            </span>
            <input
              name="attachment"
              type="file"
              accept=".pdf,.xlsx,.xls,.png,.jpg,.jpeg"
              aria-label="Adjuntar archivo de ejemplo"
            />
          </label>
          <button
            className="form-submit"
            type="submit"
            disabled={status !== "idle" || message.length < 50}
          >
            {status === "loading"
              ? "Enviando…"
              : status === "success"
                ? "Solicitud recibida"
                : "Solicitar evaluación"}
            {status === "success" ? <Check size={18} /> : <ArrowRight size={18} />}
          </button>
          {status === "success" && (
            <p className="form-success" role="status">
              Gracias — nos pondremos en contacto en 24–48h.
            </p>
          )}
          <p className="form-privacy">
            Al enviar aceptas nuestra política de privacidad. No compartimos tus datos.
          </p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div>
          <Brand />
          <p>Automatización en la nube para operaciones que quieren avanzar.</p>
          <a href="mailto:hola@natorinc.com">hola@natorinc.com</a>
        </div>
        <div>
          <strong>Explora</strong>
          <a href="#servicios">Servicios</a>
          <a href="#casos">Casos</a>
          <a href="#planes">Planes</a>
        </div>
        <div>
          <strong>Compañía</strong>
          <a href="#contacto">Contacto</a>
          <a href="#inicio">Blog</a>
          <a href="#inicio">Privacidad</a>
        </div>
        <div>
          <strong>Síguenos</strong>
          <a href="#inicio">LinkedIn</a>
          <a href="#inicio">YouTube</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2026 Nator Inc. Todos los derechos reservados.</span>
        <span>La información compartida en evaluaciones se trata de forma confidencial.</span>
      </div>
    </footer>
  );
}

function DialogflowAgent() {
  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    const href =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
    const src =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  return (
    <div
      className="dialogflow-host"
      dangerouslySetInnerHTML={{
        __html:
          '<df-messenger location="us-central1" project-id="noted-amphora-507318-f8" agent-id="c523c68e-2e60-4556-93cd-402253abc564" language-code="es" max-query-length="-1"><df-messenger-chat-bubble chat-title="Agente-cristiansanta"></df-messenger-chat-bubble></df-messenger>',
      }}
    />
  );
}

export default function NatorLanding() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Metrics />
        <Process />
        <Technologies />
        <CaseStudies />
        <Plans />
        <ContactForm />
      </main>
      <Footer />
      <DialogflowAgent />
    </>
  );
}
