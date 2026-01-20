"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
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

interface Logement extends LogementFormData {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export default function EditLogementPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LogementFormData>({
    defaultValues: {
      titre: "",
      description: "",
      image: "",
    },
  });

  // Fetch logement data
  useEffect(() => {
    if (id) {
      fetchLogement();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchLogement = async () => {
    try {
      const response = await fetch(`/api/admin/logements/${id}`);
      if (response.ok) {
        const data: Logement = await response.json();
        reset({
          titre: data.titre,
          description: data.description,
          image: data.image,
        });
        setImagePreview(data.image);
      } else {
        setError("Logement non trouvé");
      }
    } catch {
      setError("Erreur lors du chargement du logement");
    } finally {
      setLoading(false);
    }
  };

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
    setSaving(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/logements/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push(`/admin/logements/${id}`);
      } else {
        setError("Erreur lors de la sauvegarde");
      }
    } catch {
      setError("Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error && !imagePreview) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-500 text-lg mb-4">{error}</div>
          <button
            onClick={() => router.push("/admin/logements")}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

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
            onClick={() => router.push(`/admin/logements/${id}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour au détail
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            Modifier le logement
          </h1>
          <p className="mt-2 text-gray-600">
            Modifiez les informations du logement
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
                <input type="hidden" {...register("image")} />

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
                      {imagePreview ? "Changer l'image" : "Choisir une image"}
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
                placeholder="Décrivez le logement en détail..."
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

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
              {error}
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => router.push(`/admin/logements/${id}`)}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sauvegarde...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Sauvegarder
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
