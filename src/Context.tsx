import React, { createContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Context = createContext({});

const customFormSchema = yup.object().shape({
  bannerImg: yup.string().required("Agregue una imagen al banner"),
});

export const Provider = ({ children }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customFormSchema),
    defaultValues: {
      bannerImg: "",
    },
  });
  const bannerImg = watch("bannerImg");
  const onSubmit = (data: any) => {
    console.table(data);
    resetForm();
  };
  const resetForm = () => {
    reset(
      {
        bannerImg: "",
      },
      {
        keepErrors: true,
        keepDirty: true,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
      }
    );
  };
  const value = { bannerImg, register, handleSubmit, errors };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
