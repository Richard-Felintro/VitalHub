import { ScreenTitle } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { useState } from "react";
import { ListComponent } from "../../components/List/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { DoctorCard } from "../../components/DoctorCard/DoctorCard";
export const SelectDoctorScreen = () => {
  const Doutores = [
    {
      id: 1,
      name: "Dra Alessandra",
      specialty: "Dermatologa, Esteticista",
      imgSource: "Alessandra.png",
    },
    {
      id: 2,
      name: "Dr Kumushiro",
      specialty: "Cirurgião, Cardiologista",
      imgSource: "Kumushiro.png",
    },
    {
      id: 3,
      name: "Dr Rodrigo Santos",
      specialty: "Clínico, Pediatra",
      imgSource: "Rodrigo.png",
    },
  ];
  const [selectedDoctor, setSelectedDoctor] = useState(0);
  return (
    <Container>
      <ScreenTitle>Selecionar médico</ScreenTitle>
      <ListComponent
        data={Doutores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DoctorCard
            name={item.name}
            specialty={item.specialty}
            imgSource={"../../assets/Alessandra.png"}
            selected={selectedDoctor == item.id ? true : false}
            onPress={() => setSelectedDoctor(item.id)}
          />
        )}
      />

      <Button>
        <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
      </Button>
      <ButtonSecondary>
        <Link color={"#344F8F"}>Cancelar</Link>
      </ButtonSecondary>
    </Container>
  );
};
