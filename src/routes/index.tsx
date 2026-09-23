import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  Download,
  Heart,
  LockKeyhole,
  Printer,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import kitImage from "@/assets/kit-atividades-autismo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+250 Atividades para Crianças Autistas | Acesso Imediato" },
      { name: "description", content: "Atividades visuais, lúdicas e prontas para imprimir, criadas para apoiar o desenvolvimento de crianças autistas." },
      { property: "og:title", content: "+250 Atividades para Crianças Autistas" },
      { property: "og:description", content: "Material digital com atividades prontas para imprimir e aplicar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  ["Comunicação", "Recursos visuais para estimular expressão e compreensão."],
  ["Coordenação motora", "Recorte, traçado, associação e atividades manuais."],
  ["Rotina e autonomia", "Sequências simples para apoiar tarefas do dia a dia."],
  ["Emoções", "Atividades para reconhecer sentimentos e desenvolver autorregulação."],
  ["Alfabetização", "Letras, palavras e consciência fonológica de forma leve."],
  ["Raciocínio lógico", "Pareamento, classificação, sequência e percepção visual."],
];

const faqs = [
  ["Para qual idade o material é indicado?", "As atividades podem ser adaptadas para crianças em diferentes fases do desenvolvimento. Escolha as páginas conforme a habilidade e o interesse de cada criança."],
  ["Como recebo o material?", "O acesso é digital e liberado após a confirmação da compra. Você poderá baixar os arquivos e imprimir quando quiser."],
  ["Preciso imprimir tudo de uma vez?", "Não. Você pode selecionar e imprimir apenas as atividades que pretende aplicar naquele momento."],
  ["Posso usar em casa e em atendimentos?", "Sim. O material foi pensado para famílias, educadores e profissionais que acompanham crianças autistas."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia para conhecer o material e solicitar o reembolso dentro desse prazo."],
];

function Index() {
  const [seconds, setSeconds] = useState(452);
  const [offer, setOffer] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => (value > 0 ? value - 1 : 0)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const time = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  const scrollToOffer = () => document.querySelector("#oferta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="safe-strip"><ShieldCheck /> SITE OFICIAL E SEGURO — COMPRE COM TOTAL SEGURANÇA</div>
      <div className="urgency-bar">
        <span><Clock3 /> OFERTA ESPECIAL: GARANTA SEU ACESSO COM DESCONTO EM:</span>
        <strong>{time}</strong>
      </div>

      <section className="hero-section section-pad">
        <div className="content-wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles /> MATERIAL DIGITAL • ACESSO IMEDIATO</div>
            <h1>Você não precisa criar atividades do zero para <em>estimular o desenvolvimento</em></h1>
            <p className="hero-sub"><strong>+250 atividades prontas</strong> para crianças autistas aprenderem brincando</p>
            <div className="quick-points">
              <span><Check /> Prontas para imprimir</span><span><Check /> Organizadas por habilidade</span>
              <span><Check /> Aplicação simples</span><span><Check /> Acesso vitalício</span>
            </div>
            <Button onClick={scrollToOffer} className="primary-cta">QUERO VER AS ATIVIDADES <ArrowRight /></Button>
            <div className="micro-proof"><ShieldCheck /> Compra segura <LockKeyhole /> Pagamento protegido <Download /> Acesso imediato</div>
          </div>
          <div className="hero-visual">
            <div className="image-badge"><strong>+250</strong><span>ATIVIDADES</span></div>
            <img src={kitImage} width={1024} height={1024} alt="Kit ilustrativo com atividades educativas para crianças" />
          </div>
        </div>
      </section>

      <section className="problem-section section-pad">
        <div className="narrow-wrap">
          <p className="section-kicker">ISSO SOA FAMILIAR?</p>
          <h2>Você quer ajudar, mas nem sempre sabe <em>qual atividade aplicar</em></h2>
          <p className="lead">Buscar ideias todos os dias, adaptar materiais e tentar manter a atenção da criança exige tempo e energia.</p>
          <div className="pain-list">
            <span><X /> Horas procurando atividades na internet</span>
            <span><X /> Materiais confusos ou difíceis de adaptar</span>
            <span><X /> Insegurança sobre como estimular cada habilidade</span>
          </div>
          <div className="story-block">
            <Heart />
            <div><h3>O problema não é falta de dedicação. É falta de um caminho claro.</h3><p>Por isso reunimos atividades visuais e objetivas em um só lugar: você escolhe, imprime e aplica no ritmo da criança.</p></div>
          </div>
        </div>
      </section>

      <section className="benefits-section section-pad">
        <div className="content-wrap">
          <p className="section-kicker">DESENVOLVIMENTO COM PROPÓSITO</p>
          <h2>Um material completo para apoiar <em>habilidades importantes</em></h2>
          <div className="benefit-grid">
            {benefits.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="inside-section section-pad">
        <div className="content-wrap inside-grid">
          <div className="inside-image"><img src={kitImage} loading="lazy" width={1024} height={1024} alt="Exemplos ilustrativos das atividades do kit" /></div>
          <div>
            <p className="section-kicker">DENTRO DO MATERIAL</p>
            <h2>O que você recebe <em>agora mesmo</em></h2>
            <p className="lead left">Não é apenas um arquivo. É uma biblioteca prática para ter sempre uma atividade adequada ao alcance das mãos.</p>
            <ul className="receive-list">
              <li><Check /><span><strong>+250 atividades em PDF</strong> organizadas por objetivos.</span></li>
              <li><Check /><span><strong>Cartões visuais</strong> de rotina, emoções e comunicação.</span></li>
              <li><Check /><span><strong>Jogos de pareamento</strong> e associação para imprimir.</span></li>
              <li><Check /><span><strong>Atividades de coordenação</strong>, traçado e recorte.</span></li>
            </ul>
            <Button onClick={scrollToOffer} className="primary-cta">QUERO MEU ACESSO AGORA <ArrowRight /></Button>
          </div>
        </div>
      </section>

      <section className="steps-section section-pad">
        <div className="content-wrap">
          <p className="section-kicker">SIMPLES DE USAR</p><h2>Da compra à primeira atividade em <em>poucos minutos</em></h2>
          <div className="steps-grid">
            <article><Download /><b>1</b><h3>Baixe</h3><p>Receba o acesso digital após a confirmação.</p></article>
            <article><Printer /><b>2</b><h3>Imprima</h3><p>Escolha somente as páginas que deseja usar.</p></article>
            <article><Heart /><b>3</b><h3>Aplique</h3><p>Apresente a atividade respeitando o ritmo da criança.</p></article>
          </div>
        </div>
      </section>

      <section className="compare-section section-pad">
        <div className="content-wrap"><p className="section-kicker">UMA DECISÃO, DOIS CAMINHOS</p><h2>Como serão os próximos momentos de aprendizagem?</h2>
          <div className="compare-grid"><article className="without"><h3>SEM O KIT</h3><ul><li><X /> Busca demorada por ideias</li><li><X /> Materiais espalhados</li><li><X /> Planejamento cansativo</li></ul></article><article className="with"><h3>COM AS +250 ATIVIDADES</h3><ul><li><Check /> Tudo organizado em um lugar</li><li><Check /> Atividades prontas para imprimir</li><li><Check /> Mais confiança para aplicar</li></ul></article></div>
        </div>
      </section>

      <section id="oferta" className="offer-section section-pad">
        <div className="content-wrap">
          <p className="section-kicker light">OFERTA EXCLUSIVA</p><h2>Garanta o kit completo hoje</h2>
          <div className="coupon-banner"><Zap /> CUPOM APLICADO AUTOMATICAMENTE</div>
          <article className="offer-card">
            <div className="popular">MAIS ESCOLHIDO</div>
            <p className="offer-label">ACESSO COMPLETO + BÔNUS</p><h3>Kit +250 Atividades</h3>
            <div className="value-list"><span>+250 atividades prontas <b>R$ 97,00</b></span><span>Cartões visuais e jogos <b>R$ 47,00</b></span><span>Acesso vitalício <b>R$ 67,00</b></span></div>
            <p className="total">VALOR TOTAL: <s>R$ 211,00</s></p><p className="today">HOJE POR APENAS:</p>
            <div className="price"><small>R$</small>27<sup>,90</sup></div>
            <ul><li><Check /> Acesso imediato aos arquivos</li><li><Check /> Baixe e imprima quando quiser</li><li><Check /> Pagamento único, sem mensalidade</li><li><Check /> 7 dias de garantia</li></ul>
            <Button onClick={() => setOffer(1)} className="checkout-cta">QUERO AS +250 ATIVIDADES <ArrowRight /></Button>
            <div className="secure-row"><ShieldCheck /> Compra 100% segura <LockKeyhole /> PIX ou cartão</div>
          </article>
        </div>
      </section>

      <section className="faq-section section-pad"><div className="narrow-wrap"><p className="section-kicker">DÚVIDAS FREQUENTES</p><h2>Tudo o que você precisa saber</h2><Accordion type="single" collapsible>{faqs.map(([q,a],i)=><AccordionItem value={`item-${i}`} key={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>
      <section className="guarantee-section"><ShieldCheck /><div><h2>7 dias de garantia</h2><p>Conheça o material com tranquilidade. Se não fizer sentido para você, solicite o reembolso dentro do prazo.</p></div></section>
      <section className="final-cta section-pad">
        <div className="narrow-wrap">
          <p className="section-kicker">NÃO DEIXE PARA DEPOIS</p>
          <h2>Comece hoje a usar as <em>+250 atividades</em></h2>
          <p className="lead">O cupom já está aplicado. Garanta o acesso completo por apenas R$ 27,90 e receba tudo imediatamente no seu e-mail.</p>
          <Button onClick={scrollToOffer} className="primary-cta">QUERO AS ATIVIDADES AGORA! <ArrowRight /></Button>
        </div>
      </section>
      <footer><strong>+250 Atividades</strong><span>Material digital • Acesso imediato</span><small>© 2026. Todos os direitos reservados.</small></footer>

      <div className="sticky-cta">
        <div className="sticky-coupon"><Zap /> CUPOM APLICADO AUTOMATICAMENTE</div>
        <Button onClick={scrollToOffer} className="sticky-button">
          <span className="sticky-price">de <s>R$ 211,00</s> por <b>R$ 27,90</b></span>
          <span className="sticky-label">QUERO GARANTIR MEU DESCONTO AGORA <ArrowRight /></span>
        </Button>
      </div>

      {offer > 0 && <Downsell step={offer === 1 ? 1 : 2} onNext={() => setOffer(2)} onClose={() => setOffer(0)} />}
    </main>
  );
}

function Downsell({ step, onNext, onClose }: { step: 1 | 2; onNext: () => void; onClose: () => void }) {
  const price = step === 1 ? "19,90" : "10,00";
  return <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="downsell-title"><div className="downsell-modal">
    <Button variant="ghost" size="icon" className="modal-close" onClick={onClose} aria-label="Fechar"><X /></Button>
    <div className="modal-alert">ESPERE! UMA CONDIÇÃO ESPECIAL PARA VOCÊ</div>
    <Sparkles className="modal-spark" />
    <h2 id="downsell-title">{step === 1 ? "Leve o mesmo material com um desconto extra" : "Última chance: acesso pelo menor valor"}</h2>
    <p>{step === 1 ? "Queremos facilitar seu acesso. Aproveite esta oferta única antes de sair." : "Esta é a condição final e não será exibida novamente depois que você fechar."}</p>
    <div className="modal-price"><s>{step === 1 ? "R$ 27,90" : "R$ 19,90"}</s><strong>R$ {price}</strong><span>pagamento único</span></div>
    <Button className="checkout-cta" onClick={() => window.alert("Adicione aqui o link do seu checkout para concluir a compra.")}>SIM, QUERO APROVEITAR <ArrowRight /></Button>
    {step === 1 ? <button className="decline-link" onClick={onNext}>Não, obrigado. Quero continuar sem esta oferta.</button> : <button className="decline-link" onClick={onClose}>Não, obrigado. Vou deixar essa oportunidade passar.</button>}
    <div className="secure-row"><ShieldCheck /> Compra protegida • 7 dias de garantia</div>
  </div></div>;
}