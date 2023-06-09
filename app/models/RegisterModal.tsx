"use client";
import React from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Button from "../components/Button";
import Heading from "../components/Heading";
import useRegisterModal from "../hooks/useRegisterModal";
import Input from "../components/Input/Input";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(false);
      axios.post("/api/register", data);
      toast.success("Registered!");
      registerModal.onClose();
    } catch (error) {
      console.log(error);
      
      // toast.error(erro);
    }
    finally{
      setIsLoading(false);
    }
  };
  const bodyContent=(
    <div className="flex flex-col gap-4">
      <Heading 
       title="Welcome to Airbnb" 
       subTitle="Create an account" 
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
       <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button 
        outline 
        label="Continue with Google"
        Icon={FcGoogle}
        onClick={() => {}} 
      />
       <Button 
        outline 
        label="Continue with Github"
        Icon={AiFillGithub}
      />
       <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>Already have an account?
          <span    className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            ">Log in</span>
          </p>
      </div>
      </div>
  )
  return (
    <Modal 
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
  />
  ) 
};

export default RegisterModal;
