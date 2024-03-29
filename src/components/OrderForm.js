import {
  FormControl,
  Input,
  InputGroup,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import Button from "./ButtonBlob";

const inputs = [{ placeholder: "Name", type: "text", name: "name" }];

export default function OrderForm({ name: names }) {
  const toast = useToast();

  const [formValues, setFormValues] = useState({
    name: names,
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast({
      title: `Hi, ${formValues.name} your order has been taken`,
      containerStyle: {
        "&>div": {
          backgroundColor: "candyPink.900",
          alignItems: "center",
        },
      },
      status: "success",
      position: "bottom-right",
    });

    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <FormControl as="form" onSubmit={handleSubmit} marginBlockStart="36px">
      <InputGroup variant="flushed" flexDirection="column" gridGap="12px">
        {inputs.map((input, key) => (
          <Input
            key={key}
            required
            name={input.name}
            autoComplete={input.name}
            value={formValues[input.name]}
            type={input.type}
            onChange={handleChange}
            placeholder={input.placeholder}
            _placeholder={{ color: "white" }}
            // paddingInline="6px"
            _focus={{
              borderColor: "candyPink.900",
              boxShadow: " 0px 1px 0px 0px #EF7474",
            }}
            _autofill={{
              textFillColor: "#ffff",
              boxShadow: "0 0 0px 1000px #EF7474 inset",
              borderRadius: "6px",
              borderColor: "candyPink.900",
            }}
          />
        ))}
        <Select
          placeholder="Would you like to come to my party?"
          _focus={{
            borderColor: "candyPink.900",
            boxShadow: " 0px 1px 0px 0px #EF7474",
          }}
          _autofill={{
            textFillColor: "#ffff",
            boxShadow: "0 0 0px 1000px #EF7474 inset",
            borderRadius: "6px",
            borderColor: "candyPink.900",
          }}
        >
          <option value="option1">Yes</option>
          <option value="option2">No</option>
        </Select>
        <Select
          placeholder="Who are you going with?"
          _focus={{
            borderColor: "candyPink.900",
            boxShadow: " 0px 1px 0px 0px #EF7474",
          }}
          _autofill={{
            textFillColor: "#ffff",
            boxShadow: "0 0 0px 1000px #EF7474 inset",
            borderRadius: "6px",
            borderColor: "candyPink.900",
          }}
        >
          <option value="option1">Mommy</option>
          <option value="option2">Daddy</option>
          <option value="option2">Mommy & Daddy</option>
          <option value="option2">Partner</option>
        </Select>
        <Textarea
          paddingBlockStart="20px"
          placeholder="Give your wish..."
          name="message"
          required
          value={formValues.message}
          onChange={handleChange}
          marginBlockEnd="40px"
          variant="flushed"
          borderRadius="none"
          _placeholder={{ color: "white" }}
          _focus={{
            borderColor: "candyPink.900",
            boxShadow: " 0px 1px 0px 0px #EF7474",
          }}
        />
      </InputGroup>
      <Button
        textTransform="capitalize"
        color="white"
        backgroundColor="white"
        blobColor="candyPink.900"
        type="submit"
      >
        send
      </Button>
    </FormControl>
  );
}
