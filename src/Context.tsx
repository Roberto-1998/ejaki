import React, { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ContextInterface {
  steps: any;
  bannerImg: any;
  logoImg: any;
  catalogImg: any;
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
}

export const Context = createContext<ContextInterface | null>(null);

//Tengo dudas de si debo validar los inputs de tipo file y como hacerlo
const customFormSchema = yup.object().shape({});

export const Provider = ({ children }: any) => {
  const [steps, setSteps] = useState([
    { id: "logoImg", text: "Sube el logo de la tienda", isCompleted: false },
    { id: "catalogImg", text: "Imagen para el catálogo", isCompleted: false },
    { id: "bannerImg", text: "Imagen de banner", isCompleted: false },
    {
      id: "deliveryMethod",
      text: "Define el método de entrega",
      isCompleted: false,
    },
    { id: "contactInfo", text: "Añade datos de contacto", isCompleted: false },
    { id: "categories", text: "Añade categorías", isCompleted: false },
    { id: "createAProduct", text: "Crea un producto", isCompleted: false },
  ]);

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
      catalogImg: "",
    },
  });
  const bannerImg = watch("bannerImg");
  const logoImg = watch("logoImg");
  const catalogImg = watch("catalogImg");

  useEffect(() => {
    if (bannerImg) {
      const newSteps = steps.map((step) =>
        step.id === "bannerImg" ? { ...step, isCompleted: true } : { ...step }
      );
      setSteps(newSteps);
    }
  }, [bannerImg]);
  useEffect(() => {
    if (logoImg) {
      const newSteps = steps.map((step) =>
        step.id === "logoImg" ? { ...step, isCompleted: true } : { ...step }
      );
      setSteps(newSteps);
    }
  }, [logoImg]);
  useEffect(() => {
    if (catalogImg) {
      const newSteps = steps.map((step) =>
        step.id === "catalogImg" ? { ...step, isCompleted: true } : { ...step }
      );
      setSteps(newSteps);
    }
  }, [catalogImg]);

  const onSubmit = (data: any) => {
    console.table(data);
    resetForm();
  };
  const resetForm = () => {
    reset(
      {
        bannerImg: "",
        logoImg: "",
        catalogImg: "",
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
    steps,
    bannerImg,
    logoImg,
    catalogImg,
    errors,
    register,
    handleSubmit,
    onSubmit,
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};
