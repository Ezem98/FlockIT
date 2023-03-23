import { Container, Row, Column } from "./tableElements.js";

export const Table = ({ data }) => {

    console.log({data})
  return (
    <Container>
      <Row>
        <Column header>Nombre</Column>
        <Column header>Latitud</Column>
        <Column header>Longitud</Column>
      </Row>
      {data?.map((e) => {
        return (
          <Row data onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${e.centroide.lat}%2C${e.centroide.lon}`)}>
            <Column>{e.nombre}</Column>
            <Column>{e.centroide.lat}</Column>
            <Column>{e.centroide.lon}</Column>
          </Row>
        );
      })}
    </Container>
  );
};
