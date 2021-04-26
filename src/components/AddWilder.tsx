import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Button, Error, Form, Input, Label } from "../style/form-elements";

const CREATE_WILDER = gql`
  mutation CreateWilder($input: InputWilder!) {
    createWilder(input: $input) {
      id
      name
      city
    }
  }
`;

function AddWilder(): JSX.Element {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [createWilder, { error, data }] = useMutation(CREATE_WILDER);
  console.log(data);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        createWilder({
          variables: {
            input: {
              name,
              city,
            },
          },
        });
      }}
    >
      {data && <p>wilder {data.createWilder.name} a été ajouté.e</p>}
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setName(e.target.value)
        }
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setCity(e.target.value)
        }
      />
      {error ? <Error>{error}</Error> : ""}
      <Button>Add</Button>
    </Form>
  );
}

export default AddWilder;
