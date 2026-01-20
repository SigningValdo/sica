"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Save,
  ImageIcon,
  FileText,
  Type,
  Upload,
  X,
  Loader2,
} from "lucide-react";

interface LogementFormData {
  titre: string;
  description: string;
  image: string;
}

export default function NouveauLogement() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LogementFormData>({
    defaultValues: {
      titre: "",
      description: "",
      image: "",
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setUploadError(data.error || "Erreur lors de l'upload");
        return;
      }

      setValue("image", data.url);
      setImagePreview(data.url);
    } catch {
      setUploadError("Erreur lors de l'upload du fichier");
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setValue("image", "");
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (data: LogementFormData) => {
    setLoading(true);

    try {
      const response = await fetch("/api/admin/logements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/admin/logements");
      } else {
        console.error("Erreur lors de la création");
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Nouveau logement</h1>
          <p className="mt-2 text-gray-600">
            Ajoutez un nouveau logement à votre portefeuille
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Image Preview Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Image du logement
              </h2>
            </div>
            <div className="p-6">
              {/* Image Preview */}
              <div className="mb-4">
                <div className="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden border-2 border-dashed border-gray-300">
                  {imagePreview ? (
                    <>
                      <img
                        src={imagePreview}
                        alt="Aperçu"
                        className="w-full h-full object-cover"
                        onError={() => setImagePreview(null)}
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                      {uploading ? (
                        <>
                          <Loader2 className="w-16 h-16 mb-2 animate-spin" />
                          <p className="text-sm">Upload en cours...</p>
                        </>
                      ) : (
                        <>
                          <ImageIcon className="w-16 h-16 mb-2" />
                          <p className="text-sm">Aperçu de l&apos;image</p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Button */}
              <div className="space-y-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                />
                <input type="hidden" {...register("image", { required: "L'image est requise" })} />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Upload en cours...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      Choisir une image
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Formats acceptés: JPG, PNG, WebP, GIF. Taille max: 5MB
                </p>

                {uploadError && (
                  <p className="text-sm text-red-600 text-center">{uploadError}</p>
                )}

                {errors.image && (
                  <p className="text-sm text-red-600 text-center">
                    {errors.image.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Title Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Type className="w-5 h-5" />
                Titre du logement
              </h2>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titre *
              </label>
              <input
                type="text"
                {...register("titre", {
                  required: "Le titre est requis",
                  minLength: {
                    value: 5,
                    message: "Le titre doit contenir au moins 5 caractères",
                  },
                })}
                className={`w-full px-4 py-3 rounded-xl border outline-none ${
                  errors.titre
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:ring-2 focus:border-transparent transition-all text-lg`}
                placeholder="Ex: 30 LOGEMENTS MODERNES DANS UN IMMEUBLE DE 4 ÉTAGES"
              />
              {errors.titre && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.titre.message}
                </p>
              )}
              <p className="mt-2 text-xs text-gray-500">
                Le titre sera affiché en majuscules
              </p>
            </div>
          </div>

          {/* Description Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Description
              </h2>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                {...register("description", {
                  required: "La description est requise",
                  minLength: {
                    value: 20,
                    message:
                      "La description doit contenir au moins 20 caractères",
                  },
                })}
                rows={8}
                className={`w-full px-4 py-3 rounded-xl border outline-none ${
                  errors.description
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:ring-2 focus:border-transparent transition-all resize-none`}
                placeholder="Décrivez le logement en détail...

L'immeuble séduit par son architecture contemporaine raffinée, sa généreuse fenestration, ses balcons invitants et le choix de matériaux haut de gamme."
              />
              {errors.description && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
              <p className="mt-2 text-xs text-gray-500">
                Les retours à la ligne seront conservés dans l&apos;affichage
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Création...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Créer le logement
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
