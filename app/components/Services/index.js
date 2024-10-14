import Card from "../AboutCard";
import Section from "../Section";

export default function Services() {
  const services = [
    {
      image: "/images/tesoura.png",
      title: "Corte de Cabelo",
      desc: "Transforme seu visual com nossos cortes personalizados, do clássico ao moderno.",
    },
    {
      image: "/images/barbeador.png",
      title: "Barba",
      desc: "Deixe sua barba impecável com nossos serviços de aparo e modelagem.",
    },
    {
      image: "/images/navalha.png",
      title: "Pacotes Especiais",
      desc: "Combine corte de cabelo e barba por um preço especial. Venha para a [Nome da Barbearia].",
    },
    {
      image: "/images/secador-de-cabelo.png",
      title: "Tratamentos Capilares",
      desc: "Revitalize seus cabelos com nossos tratamentos de hidratação e revitalização.",
    },
  ];

  return (
    <Section className="row">
      {services.map((service, index) => (
        <Card
          key={index}
          image={service.image}
          title={service.title}
          desc={service.desc}
        />
      ))}
    </Section>
  );
}
