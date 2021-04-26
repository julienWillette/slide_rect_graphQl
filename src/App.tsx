import React, { useEffect, useState } from "react";
import "./App.css";
import { CardRow, Container, Footer, Header } from "./style/elements";
import Wilder, { WilderProps } from "./components/Wilder";
import AddWilder from "./components/AddWilder";

function App(): JSX.Element {
  const [wilders, setWilders] = useState<WilderProps[]>([]);

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilders");
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWilders();
  }, []);

  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <AddWilder />
      </Container>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilders.map((wilder) => (
            <Wilder
              key={wilder._id}
              name={wilder.name}
              city={wilder.city}
              skills={wilder.skills}
            />
          ))}
        </CardRow>
      </Container>
      <Footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
