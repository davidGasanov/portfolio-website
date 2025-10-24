import Container from "../../components/container";

const SkillsSection = () => {
  return (
    <section className="w-full min-h-screen bg-dark-secondary/25">
      <Container className="pt-20 md:pt-24">
        <div className="flex flex-col gap-3 items-center text-center">
          <h1 className="text-4xl md:h1-large font-bold font-montserrat text-primary">
            Skills
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
