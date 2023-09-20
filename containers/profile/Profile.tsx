"use client";
import BackButton from "@/component/ui/BackButton/BackButton";
import {
  BackBtn,
  Container,
  EditBtn,
  Form,
  FormControl,
  SaveButton,
} from "./profile.styles";
import Input from "@/component/ui/input/Input";
import useForm from "@/hooks/useForm";
import Button from "@/component/ui/button/Button";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Pencil1Icon } from "@radix-ui/react-icons";
import useAuth from "@/hooks/useAuth";
import { updateProfile } from "@/utils/helpers/updateUser";
import { toast } from "react-hot-toast";
import Loader from "@/component/ui/loader/Loader";
import NotificationModal from "@/component/NotificationModal";
import CustomSelect from "@/component/customSelect";
import * as Nglca from "nigerian-states-and-lgas";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const {
    session,
    status,
    userUpdate,
    loading,
    showModal,
    modalMessage,
    modalErrorType,
    closeModal,
  } = useAuth();

  const onSubmit = async (formData: { [key: string]: string }) => {
    try {
      // Call the updateProfile function from the service to update the profile
      const response = await updateProfile(
        session?.user._id as string,
        formData
      );
    
      if (response.success) {
        // Show success toast message
        userUpdate(formData);
        // toast.success("Profile updated successfully!");
        setIsEditable(false);
        // Redirect to a success page or do something else after successful update
      } else {
        // Show error toast message
        toast.error("Failed to update profile: ");
        // Handle the error or display an error message
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile");
      // Handle the error or display an error message
    }
  };

  const { formData, handleChange, handleSubmit, resetForm, errors } = useForm(
    {
      firstName: session ? session?.user.firstName : "",
      lastName: session ? session?.user.lastName : "",
      email: session ? session?.user.email : "",
      phone: session ? session?.user.phone : "",
      address: session ? session?.user.address : "",
      lga: session ? session?.user.lga : "",
      city: session ? session?.user?.city : "",
      state: session ? session.user?.state : "",
    },
    onSubmit
  );

  // if (status === "loading") return <Loader />;

  return (
    <Container>
      <BackBtn>
        <BackButton />
      </BackBtn>

      <Form onSubmit={handleSubmit}>
        <h2>Profile</h2>
        <EditBtn type="button" onClick={() => setIsEditable((prev) => !prev)}>
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
          <Input
            label="Local Gov Area"
            name="lga"
            type="text"
            readOnly={!isEditable}
            id="id"
            value={formData.lga}
            onChange={(e) => handleChange(e, e.target.name)}
          />
        </FormControl>
        <FormControl>
          <CustomSelect
            label="State"
            disabled={!isEditable}
            options={Nglca.states()}
            value={formData.state}
            name="state"
            onChange={(e) => handleChange(e, e.target.name)}
          />
          <CustomSelect
            label="city"
            disabled={!isEditable}
            options={Nglca.lgas(formData.state)}
            value={formData.city}
            name="city"
            onChange={(e) => handleChange(e, e.target.name)}
          />
        </FormControl>

        {isEditable && (
          <SaveButton type="submit" disabled={loading}>
            {loading ? "loading..." : "Save"}
          </SaveButton>
        )}
      </Form>

      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

export default Profile;
