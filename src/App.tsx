import React, { useEffect, useState } from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { CardRow, Container, Footer, Header } from "./style/elements";
import Wilder, { WilderProps } from "./components/Wilder";
import AddWilder from "./components/AddWilder";

const ALL_WILDERS = gql`
  query GetAllWilders {
    allWilders {
      id
      name
      city
      skills {
        id
        title
        votes
      }
    }
  }
`;

function App(): JSX.Element {
  const { loading, error, data } = useQuery(ALL_WILDERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
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
          {data.allWilders.map((wilder: WilderProps) => (
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
