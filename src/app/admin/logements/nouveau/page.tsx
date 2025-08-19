"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Plus, X } from "lucide-react";

export default function NouveauLogement() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    adresse: "",
    ville: "",
    codePostal: "",
    prix: "",
    surface: "",
    chambres: "",
    sallesDeBain: "",
    type: "APPARTEMENT",
    statut: "DISPONIBLE",
    images: [] as string[],
    caracteristiques: [] as string[],
  });
  const [newImage, setNewImage] = useState("");
  const [newCaracteristique, setNewCaracteristique] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/logements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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

  const addImage = () => {
    if (newImage.trim()) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, newImage.trim()],
      }));
      setNewImage("");
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const addCaracteristique = () => {
    if (newCaracteristique.trim()) {
      setFormData((prev) => ({
        ...prev,
        caracteristiques: [...prev.caracteristiques, newCaracteristique.trim()],
      }));
      setNewCaracteristique("");
    }
  };

  const removeCaracteristique = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      caracteristiques: prev.caracteristiques.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">Nouveau logement</h1>
        <p className="mt-2 text-gray-600">
          Ajoutez un nouveau logement à votre portefeuille
        </p>
      </motion.div>

      <motion.form
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-6"
      >
        {/* Informations de base */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Titre *
            </label>
            <input
              type="text"
              required
              value={formData.titre}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, titre: e.target.value }))
              }
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Appartement moderne au centre-ville"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type *
            </label>
            <select
              required
              value={formData.type}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, type: e.target.value }))
              }
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="APPARTEMENT">Appartement</option>
              <option value="MAISON">Maison</option>
              <option value="DUPLEX">Duplex</option>
              <option value="LOFT">Loft</option>
              <option value="STUDIO">Studio</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            required
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Décrivez le logement, ses atouts, son environnement..."
          />
        </div>

        {/* Adresse */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adresse *
            </label>
            <input
              type="text"
              required
              value={formData.adresse}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, adresse: e.target.value }))
              }
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="123 Rue de la Paix"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ville *
            </label>
            <input
              type="text"
              required
              value={formData.ville}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, ville: e.target.value }))
              }
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Montréal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Code postal *
            </label>
            <input
              type="text"
              required
              value={formData.codePostal}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, codePostal: e.target.value }))
              }
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="H2X 1L1"
            />
          </div>
        </div>

        {/* Caractéristiques */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prix (€) *
            </label>
            <input
              type="number"
              required
              min="0"
              step="0.01"
              value={formData.prix}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, prix: e.target.value }))
              }
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="1500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Surface (m²) *
            </label>
            <input
              type="number"
              required
              min="0"
              step="0.1"
              value={formData.surface}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, surface: e.target.value }))
              }
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="75"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chambres *
            </label>
            <input
              type="number"
              required
              min="0"
              value={formData.chambres}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, chambres: e.target.value }))
              }
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Salles de bain *
            </label>
            <input
              type="number"
              required
              min="0"
              value={formData.sallesDeBain}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  sallesDeBain: e.target.value,
                }))
              }
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="1"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Statut
          </label>
          <select
            value={formData.statut}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, statut: e.target.value }))
            }
            className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="DISPONIBLE">Disponible</option>
            <option value="OCCUPE">Occupé</option>
            <option value="EN_MAINTENANCE">En maintenance</option>
            <option value="RESERVE">Réservé</option>
          </select>
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Images
          </label>
          <div className="flex space-x-2 mb-2">
            <input
              type="url"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="flex-1 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={addImage}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          {formData.images.length > 0 && (
            <div className="space-y-2">
              {formData.images.map((image, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{image}</span>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Caractéristiques */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Caractéristiques
          </label>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              value={newCaracteristique}
              onChange={(e) => setNewCaracteristique(e.target.value)}
              placeholder="Balcon, Parking, Ascenseur..."
              className="flex-1 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={addCaracteristique}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          {formData.caracteristiques.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.caracteristiques.map((carac, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800"
                >
                  {carac}
                  <button
                    type="button"
                    onClick={() => removeCaracteristique(index)}
                    className="ml-2 text-indigo-600 hover:text-indigo-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Création..." : "Créer le logement"}
          </button>
        </div>
      </motion.form>
    </div>
  );
}
