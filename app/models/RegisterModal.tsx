"use client";
import React from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import useRegisterModal from "../hooks/useRegisterModal";
type Props = {};

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
  return (
    <Modal 
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
  />
  ) 
};

export default RegisterModal;
