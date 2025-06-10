"use client";
import React from "react";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  Courriel: Yup.string()
    .email("Format de courriel invalide")
    .required("Le courriel est requis"),
  Téléphone: Yup.string().required("Le téléphone est requis"),
  Prénom: Yup.string().required("Le prénom est requis"),
  Nom: Yup.string().required("Le nom est requis"),
  Sujet: Yup.string().required("Le sujet est requis"),
  Message: Yup.string().required("Le message est requis"),
  politique: Yup.boolean().oneOf(
    [true],
    "Vous devez accepter la politique de confidentialité"
  ),
});
export type ContactData = Yup.InferType<typeof validationSchema>;
const Formulaire = () => {
  const formik = useFormik({
    initialValues: {
      Courriel: "",
      Téléphone: "",
      Prénom: "",
      Nom: "",
      Sujet: "",
      Message: "",
      politique: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Courriel: values.Courriel,
            Téléphone: values.Téléphone,
            Prénom: values.Prénom,
            Nom: values.Nom,
            Sujet: values.Sujet,
            Message: values.Message,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message || "Votre message a bien été envoyé.");
          resetForm();
        } else {
          alert(
            data.error || "Une erreur est survenue lors de l'envoi du message."
          );
        }
      } catch {
        alert("Une erreur est survenue lors de l'envoi du message.");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full bg-white p-4 pt-[60px] xl:px-[44px] 2xl:pl-[44px] lg:pb-[116px] 2xl:pr-[122px] border border-black space-y-[44px]"
    >
      <div className="space-y-4">
        <div className=" flex flex-col gap-4">
          <label htmlFor="Courriel">Courriel</label>
          <input
            type="text"
            id="Courriel"
            name="Courriel"
            className={`input-style ${
              formik.touched.Courriel && formik.errors.Courriel
                ? "!border-primary !border-b-2"
                : ""
            }`}
            placeholder="Courriel*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Courriel}
          />
          {formik.touched.Courriel && formik.errors.Courriel ? (
            <div className="text-red-500 text-sm">{formik.errors.Courriel}</div>
          ) : null}
        </div>
        <div className=" flex flex-col gap-4">
          <label htmlFor="Téléphone">Téléphone</label>
          <input
            type="text"
            id="Téléphone"
            name="Téléphone"
            className={`input-style ${
              formik.touched.Téléphone && formik.errors.Téléphone
                ? "!border-primary !border-b-2"
                : ""
            }`}
            placeholder="Téléphone*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Téléphone}
          />
          {formik.touched.Téléphone && formik.errors.Téléphone ? (
            <div className="text-red-500 text-sm">
              {formik.errors.Téléphone}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className=" w-full flex flex-col gap-4">
            <label htmlFor="Prénom">Prénom</label>
            <input
              type="text"
              id="Prénom"
              name="Prénom"
              className={`input-style ${
                formik.touched.Prénom && formik.errors.Prénom
                  ? "!border-primary !border-b-2"
                  : ""
              }`}
              placeholder="Prénom*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Prénom}
            />
            {formik.touched.Prénom && formik.errors.Prénom ? (
              <div className="text-red-500 text-sm">{formik.errors.Prénom}</div>
            ) : null}
          </div>
          <div className=" w-full flex flex-col gap-4">
            <label htmlFor="Nom">Nom</label>
            <input
              type="text"
              id="Nom"
              name="Nom"
              className={`input-style ${
                formik.touched.Nom && formik.errors.Nom
                  ? "!border-primary !border-b-2"
                  : ""
              }`}
              placeholder="Nom*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Nom}
            />
            {formik.touched.Nom && formik.errors.Nom ? (
              <div className="text-red-500 text-sm">{formik.errors.Nom}</div>
            ) : null}
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <label htmlFor="Sujet">Sujet</label>
          <input
            type="text"
            id="Sujet"
            name="Sujet"
            className={`input-style ${
              formik.touched.Sujet && formik.errors.Sujet
                ? "!border-primary !border-b-2"
                : ""
            }`}
            placeholder="Sujet*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Sujet}
          />
          {formik.touched.Sujet && formik.errors.Sujet ? (
            <div className="text-red-500 text-sm">{formik.errors.Sujet}</div>
          ) : null}
        </div>
        <div className=" flex flex-col gap-4">
          <label htmlFor="Message">Message</label>
          <textarea
            name="Message"
            id="Message"
            className={`input-style flex ${
              formik.touched.Message && formik.errors.Message
                ? "!border-primary !border-b-2"
                : ""
            }`}
            placeholder="Message*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Message}
          />
          {formik.touched.Message && formik.errors.Message ? (
            <div className="text-red-500 text-sm">{formik.errors.Message}</div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center space-x-3">
          <input
            id="politique"
            name="politique"
            type="checkbox"
            className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded ${
              formik.touched.politique && formik.errors.politique
                ? "!border-primary"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.politique}
          />
          <label htmlFor="politique" className="">
            {"J'ai lu et "}
            <span className=" underline">
              {" j'accepte la politique de confidentialité."}
            </span>
          </label>
        </div>
        {formik.touched.politique && formik.errors.politique ? (
          <div className="text-red-500 text-sm">{formik.errors.politique}</div>
        ) : null}
      </div>
      <Button variant="secondary">Envoyer</Button>
    </form>
  );
};

export default Formulaire;
