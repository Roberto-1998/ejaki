import React, { createContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ContextInterface {
  bannerImg: any;
  logoImg: any;
  catalogoImg: any;
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
}

export const Context = createContext<ContextInterface | null>(null);

const customFormSchema = yup.object().shape({});

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
      logoImg: "",
      catalogoImg: "",
    },
  });
  const bannerImg = watch("bannerImg");
  const logoImg = watch("logoImg");
  const catalogoImg = watch("catalogoImg");
  const onSubmit = (data: any) => {
    console.table(data);
    resetForm();
  };
  const resetForm = () => {
    reset(
      {
        bannerImg: "",
        logoImg: "",
        catalogoImg: "",
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

  const contextData: ContextInterface = {
    bannerImg,
    logoImg,
    catalogoImg,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};
