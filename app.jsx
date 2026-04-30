/* global React, ReactDOM, InstructorPortrait, GoldCheck, IconHome, IconAV, IconVacuum, Countdown, Strip */
/* global TweaksPanel, useTweaks, TweakSection, TweakSlider, TweakToggle, TweakRadio, TweakSelect, TweakText, TweakColor */

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "Do absoluto zero ao cliente de alto padrão.",
  "subheadline": "5 dias intensivos para você dominar Automação Residencial, Áudio & Vídeo e Aspiração Central — e finalmente vender projetos premium.",
  "instructor_name": "Fernando Lançamento",
  "instructor_title": "Integrador master · 12 anos no mercado",
  "price_basic": 39,
  "price_pro": 97,
  "price_basic_from": 197,
  "price_pro_from": 497,
  "accent_color": "#d4a24c",
  "cta_color": "#1f8a5b",
  "show_countdown": true,
  "theme": "dark"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme + accent to root
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = tweaks.theme;
    root.style.setProperty("--gold-1", tweaks.accent_color);
    root.style.setProperty("--accent", tweaks.cta_color);
  }, [tweaks.theme, tweaks.accent_color, tweaks.cta_color]);

  // Countdown target = 7 days from page load (stable per session)
  const [target] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    d.setHours(20, 0, 0, 0);
    return d.toISOString();
  });

  const benefits = [
    "5 aulas ao vivo + gravação",
    "Conteúdo técnico avançado",
    "Materiais de venda prontos",
    "Roteiros de visita técnica",
    "Tabela de precificação",
    "Certificado digital",
  ];

  return (
    <>
      <Hero tweaks={tweaks} target={target} benefits={benefits} />
      <Strip items={[
        "AUTOMAÇÃO RESIDENCIAL",
        "ÁUDIO & VÍDEO",
        "ASPIRAÇÃO CENTRAL",
        "PROJETOS PREMIUM",
        "CLIENTES ALTO PADRÃO",
        "INTEGRAÇÃO TÉCNICA",
      ]} />
      <Pillars />
      <Schedule />
      <About />
      <Bonus />
      <Guarantee />
      <FAQ />
      <FinalCTA tweaks={tweaks} />
      <Footer />

      <TweaksPanel title="Tweaks · Página de Vendas">
        <TweakSection title="Conteúdo">
          <TweakText label="Headline" value={tweaks.headline} onChange={(v) => setTweak("headline", v)} multiline />
          <TweakText label="Subheadline" value={tweaks.subheadline} onChange={(v) => setTweak("subheadline", v)} multiline />
          <TweakText label="Nome do instrutor" value={tweaks.instructor_name} onChange={(v) => setTweak("instructor_name", v)} />
          <TweakText label="Título" value={tweaks.instructor_title} onChange={(v) => setTweak("instructor_title", v)} />
        </TweakSection>

        <TweakSection title="Oferta">
          <TweakSlider label="Preço básico (R$)" min={9} max={297} step={2} value={tweaks.price_basic} onChange={(v) => setTweak("price_basic", v)} />
          <TweakSlider label="Preço completo (R$)" min={47} max={997} step={2} value={tweaks.price_pro} onChange={(v) => setTweak("price_pro", v)} />
          <TweakSlider label="De (básico)" min={49} max={497} step={2} value={tweaks.price_basic_from} onChange={(v) => setTweak("price_basic_from", v)} />
          <TweakSlider label="De (completo)" min={97} max={1497} step={2} value={tweaks.price_pro_from} onChange={(v) => setTweak("price_pro_from", v)} />
          <TweakToggle label="Mostrar contagem regressiva" value={tweaks.show_countdown} onChange={(v) => setTweak("show_countdown", v)} />
        </TweakSection>

        <TweakSection title="Aparência">
          <TweakRadio label="Tema" value={tweaks.theme} options={[{label: "Escuro", value: "dark"}, {label: "Claro", value: "light"}]} onChange={(v) => setTweak("theme", v)} />
          <TweakColor label="Cor de destaque" value={tweaks.accent_color} onChange={(v) => setTweak("accent_color", v)} />
          <TweakColor label="Cor do CTA" value={tweaks.cta_color} onChange={(v) => setTweak("cta_color", v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

/* ==================== HERO ==================== */
function Hero({ tweaks, target, benefits }) {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-bg" />
      <div className="hero-grid-overlay" />
      <div className="container">
        <div className="hero-inner">
          {/* Left: instructor */}
          <div>
            <InstructorPortrait
              name={tweaks.instructor_name}
              title={tweaks.instructor_title}
              badge="EDIÇÃO 04 · 2026"
              src="assets/instructor-hero.png"
            />
          </div>

          {/* Right: copy + offer */}
          <div className="hero-copy">
            <div className="row-flex">
              <span className="live-banner">
                <span className="dot" /> Treinamento ao vivo · Vagas limitadas
              </span>
            </div>

            <div>
              <span className="eyebrow">Semana da Automação Classe A</span>
              <h1 style={{ marginTop: 18 }}>
                {tweaks.headline.split(".").map((part, i, arr) =>
                  part.trim() ? (
                    <span key={i}>
                      {i === arr.length - 2 ? <span className="gold">{part}.</span> : part + (i < arr.length - 1 ? "." : "")}
                    </span>
                  ) : null
                )}
              </h1>
            </div>

            <p className="lead">{tweaks.subheadline}</p>

            <ul className="benefit-list" style={{ color: "var(--gold-1)" }}>
              {benefits.map((b) => (
                <li key={b}>
                  <span style={{ color: "var(--gold-1)" }}><GoldCheck /></span>
                  <span style={{ color: "var(--fg-1)" }}>{b}</span>
                </li>
              ))}
            </ul>

            {tweaks.show_countdown && (
              <div style={{ marginTop: 8 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg-2)", marginBottom: 10 }}>
                  Inscrições encerram em
                </div>
                <Countdown targetISO={target} />
              </div>
            )}

            <div className="offer-stack">
              <OfferCard
                label="Plano Ao Vivo"
                from={tweaks.price_basic_from}
                price={tweaks.price_basic}
                summary="Acesso às 5 aulas ao vivo + grupo de tira-dúvidas."
                cta="Quero participar ao vivo"
              />
              <OfferCard
                featured
                label="Plano Completo"
                from={tweaks.price_pro_from}
                price={tweaks.price_pro}
                summary="Aulas ao vivo + gravação vitalícia + bônus + certificado."
                cta="Quero o plano completo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferCard({ label, from, price, summary, cta, featured }) {
  return (
    <div className={"offer-card" + (featured ? " featured" : "")}>
      <div className="label">{label}</div>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-3)" }}>
          De <span className="price-from">R$ {from}</span> por
        </div>
        <div className="price-row">
          <span className="price-currency">R$</span>
          <span className="price">{price}</span>
          <span className="price-suffix">à vista</span>
        </div>
      </div>
      <div className="summary">{summary}</div>
      <button className="btn btn-primary btn-block">{cta}</button>
    </div>
  );
}

/* ==================== PILLARS ==================== */
function Pillars() {
  const data = [
    {
      n: "01",
      icon: <IconHome />,
      title: "Automação Residencial",
      items: [
        "Protocolos KNX, Zigbee e Matter",
        "Cenas, lógica e integração com voz",
        "Quadros, infraestrutura e cabeamento",
        "Projeto técnico apresentável ao cliente",
      ],
    },
    {
      n: "02",
      icon: <IconAV />,
      title: "Áudio & Vídeo",
      items: [
        "Multi-room, distribuição e calibração",
        "Home theater Dolby Atmos · 5.1 → 9.4",
        "Painéis de LED, projeção e videowall",
        "Acústica residencial sem armadilhas",
      ],
    },
    {
      n: "03",
      icon: <IconVacuum />,
      title: "Aspiração Central",
      items: [
        "Dimensionamento de centrais e tubulação",
        "Pontos de uso e fluxo por planta",
        "Instalação em obra pronta vs. nova",
        "Argumento comercial que fecha venda",
      ],
    },
  ];
  return (
    <section className="section" id="pilares" data-screen-label="02 Pilares">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Os três pilares</span>
          <h2>Tudo o que você precisa para entregar projetos <span className="gold-soft">classe A</span>.</h2>
          <p className="lead">Conhecimento técnico, fluxo comercial e linguagem visual em um único treinamento. Cada pilar tem aula técnica + aula prática de venda.</p>
        </div>

        <div className="pillars">
          {data.map((p) => (
            <div className="pillar" key={p.n}>
              <div className="pillar-num">PILAR {p.n}</div>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <ul>
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== SCHEDULE ==================== */
function Schedule() {
  const days = [
    { when: "Segunda · 20h", date: "Aula 01", topic: "Fundamentos & projeto técnico de automação residencial." },
    { when: "Quarta · 20h", date: "Aula 02", topic: "Áudio, vídeo e painéis de LED do orçamento à entrega." },
    { when: "Sexta · 20h", date: "Aula 03", topic: "Aspiração central + fechamento comercial classe A." },
  ];
  return (
    <section className="section section-tight" data-screen-label="03 Agenda">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Agenda</span>
          <h2>Três encontros ao vivo, transmissão direta.</h2>
        </div>
        <div className="schedule">
          {days.map((d) => (
            <div className="day" key={d.date}>
              <div className="when">{d.when}</div>
              <div className="date">{d.date}</div>
              <div className="topic">{d.topic}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== ABOUT ==================== */
function About() {
  return (
    <section className="section" data-screen-label="04 Sobre">
      <div className="container">
        <div className="about-grid">
          <InstructorPortrait
            name="Fernando Lançamento"
            title="Integrador · Mentor · CEO"
            large
          />
          <div>
            <span className="eyebrow">Quem te ensina</span>
            <h2 style={{ marginTop: 16 }}>12 anos integrando residências de alto padrão — agora ensinando o método.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Mais de <span className="gold">320 residências entregues</span>, contratos médios na casa dos seis dígitos e clientes que indicam clientes. O método foi destilado em um sistema replicável: como entrar no mercado certo, qualificar o cliente, projetar com excelência e cobrar como classe A.
            </p>
            <div className="stats">
              <div className="stat">
                <div className="v">320+</div>
                <div className="l">Projetos entregues</div>
              </div>
              <div className="stat">
                <div className="v">12</div>
                <div className="l">Anos de campo</div>
              </div>
              <div className="stat">
                <div className="v">R$ 240k</div>
                <div className="l">Ticket médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== BONUS ==================== */
function Bonus() {
  const list = [
    { n: "01", title: "Tabela de precificação Classe A", desc: "Modelo editável para montar orçamentos premium em minutos.", val: "R$ 297" },
    { n: "02", title: "Roteiro de visita técnica", desc: "Checklist passo-a-passo para impressionar o cliente já na primeira visita.", val: "R$ 197" },
    { n: "03", title: "Templates de proposta comercial", desc: "Layouts editáveis prontos para enviar ao cliente.", val: "R$ 247" },
    { n: "04", title: "Comunidade fechada (90 dias)", desc: "Grupo de tira-dúvidas e networking com outros integradores.", val: "R$ 397" },
  ];
  return (
    <section className="section" data-screen-label="05 Bônus">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Bônus inclusos</span>
          <h2>Quatro bônus que valem o investimento sozinhos.</h2>
        </div>
        <div className="bonus-grid">
          {list.map((b) => (
            <div className="bonus" key={b.n}>
              <div className="bonus-num">{b.n}</div>
              <div>
                <h4>{b.title}</h4>
                <p style={{ fontSize: 14, color: "var(--fg-1)" }}>{b.desc}</p>
                <div className="val">VALOR INDIVIDUAL · {b.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== GUARANTEE ==================== */
function Guarantee() {
  return (
    <section className="section section-tight" data-screen-label="06 Garantia">
      <div className="container">
        <div className="guarantee">
          <div className="seal">
            <div className="num">7</div>
            <div className="word">Dias</div>
          </div>
          <div>
            <span className="eyebrow">Garantia incondicional</span>
            <h3 style={{ marginTop: 14, fontSize: 28 }}>Assista, aplique e decida. Se não for para você, devolvemos 100%.</h3>
            <p style={{ marginTop: 14, color: "var(--fg-1)", maxWidth: "60ch" }}>
              Você tem 7 dias para experimentar todo o conteúdo do treinamento. Não gostou? É só responder o e-mail de confirmação e o reembolso é integral, sem perguntas, sem letras miúdas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== FAQ ==================== */
function FAQ() {
  const items = [
    { q: "Sou iniciante. Consigo acompanhar?", a: "Sim. O treinamento começa do absoluto zero — protocolos, fundamentos elétricos e linguagem do mercado. Profissionais experientes encontram material avançado nas aulas práticas." },
    { q: "Vou receber certificado?", a: "Sim, certificado digital com sua participação registrada após assistir às três aulas." },
    { q: "Por quanto tempo tenho acesso?", a: "No plano Ao Vivo, acesso durante a semana de transmissão. No plano Completo, acesso vitalício às gravações e atualizações futuras." },
    { q: "Como funciona a garantia?", a: "Garantia incondicional de 7 dias. Basta solicitar o reembolso por e-mail e devolvemos o valor integral." },
    { q: "As aulas são gravadas?", a: "São transmitidas ao vivo. As gravações ficam disponíveis para alunos do plano Completo." },
    { q: "Quais formas de pagamento?", a: "Cartão de crédito (até 12x), Pix à vista e boleto bancário." },
  ];
  return (
    <section className="section" id="faq" data-screen-label="07 FAQ">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>Vamos tirar suas dúvidas.</h2>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <details className="faq" key={i} open={i === 0}>
              <summary>{it.q}</summary>
              <div className="answer">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== FINAL CTA ==================== */
function FinalCTA({ tweaks }) {
  return (
    <section className="section" data-screen-label="08 CTA Final">
      <div className="container">
        <div className="final-cta">
          <span className="eyebrow">Última chamada</span>
          <h2 style={{ maxWidth: "20ch" }}>Sua próxima venda <span className="gold">classe A</span> começa aqui.</h2>
          <p className="lead" style={{ textAlign: "center" }}>
            Inscreva-se agora e garanta sua vaga na próxima edição. R$ {tweaks.price_pro} no plano completo — menos que uma visita técnica.
          </p>
          <div className="ctas">
            <button className="btn btn-primary btn-lg">Garantir vaga · R$ {tweaks.price_pro}</button>
            <button className="btn btn-ghost btn-lg">Ver agenda completa</button>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg-2)", marginTop: 12 }}>
            Pagamento seguro · Garantia 7 dias · Acesso imediato
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div>
            Criado e desenvolvido por <strong style={{ color: "var(--fg-0)" }}>AUTOMAÇÃO CLASSE A LTDA</strong> · CNPJ 00.000.000/0001-00
          </div>
          <div className="row-flex">
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* mount */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
