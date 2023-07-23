"use client";
import BackButton from "@/component/ui/BackButton/BackButton";
import {
  BackBtn,
  Container,
  EditBtn,
  Form,
  FormControl,
} from "./profile.styles";
import Input from "@/component/ui/input/Input";
import useForm from "@/hooks/useForm";
import Button from "@/component/ui/button/Button";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Pencil1Icon } from "@radix-ui/react-icons";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const onSubmit = (formData: { [key: string]: string }) => {
    console.log("Sign Up", formData);
  };

  const { formData, handleChange, handleSubmit, resetForm, errors } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
    },
    onSubmit
  );

  return (
    <Container>
      <BackBtn>
        <BackButton />
      </BackBtn>

      <Form>
        <h2>Profile</h2>
        <EditBtn onClick={() => setIsEditable((prev) => !prev)}>
          <Pencil1Icon />
        </EditBtn>
        <FormControl>
          <Input
            label="First Name"
            name="firstName"
            type="text"
            id="id"
            readOnly={!isEditable}
            value={formData.firstName}
            onChange={(e) => handleChange(e, e.target.name)}
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            id="id"
            readOnly={!isEditable}
            value={formData.lastName}
            onChange={(e) => handleChange(e, e.target.name)}
          />
        </FormControl>
        <FormControl>
          <Input
            label="Email"
            name="email"
            type="email"
            id="id"
            readOnly={!isEditable}
            value={formData.email}
            onChange={(e) => handleChange(e, e.target.name)}
          />
          <Input
            label="Phone"
            name="phone"
            type="text"
            id="id"
            readOnly={!isEditable}
            value={formData.phone}
            onChange={(e) => handleChange(e, e.target.name)}
          />
        </FormControl>
        <FormControl>
          <Input
            label="Address"
            name="address"
            type="text"
            readOnly={!isEditable}
            id="id"
            value={formData.address}
            onChange={(e) => handleChange(e, e.target.name)}
          />
        </FormControl>
        <FormControl>
          <Input
            label="State"
            name="state"
            type="text"
            id="id"
            readOnly={!isEditable}
            value={formData.state}
            onChange={(e) => handleChange(e, e.target.name)}
          />
          <Input
            label="City"
            name="city"
            type="text"
            id="id"
            readOnly={!isEditable}
            value={formData.phone}
            onChange={(e) => handleChange(e, e.target.name)}
          />
        </FormControl>

        {isEditable && (
          <Button size="medium" color="primary">
            save
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default Profile;
