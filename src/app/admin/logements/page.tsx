"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Plus, Search, Eye, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Logement {
  id: string;
  titre: string;
  description: string;
  adresse: string;
  ville: string;
  codePostal: string;
  prix: number;
  surface: number;
  chambres: number;
  sallesDeBain: number;
  type: string;
  statut: string;
  images: string;
  caracteristiques: string;
  createdAt: string;
}

export default function LogementsList() {
  const [logements, setLogements] = useState<Logement[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    fetchLogements();
  }, []);

  const fetchLogements = async () => {
    try {
      const response = await fetch("/api/admin/logements");
      if (response.ok) {
        const data = await response.json();
        setLogements(data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des logements:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce logement ?")) {
      try {
        const response = await fetch(`/api/admin/logements/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setLogements(logements.filter((l) => l.id !== id));
        }
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    }
  };

  const filteredLogements = logements.filter((logement) => {
    const matchesSearch =
      logement.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      logement.ville.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || logement.statut === statusFilter;
    const matchesType = !typeFilter || logement.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DISPONIBLE":
        return "bg-green-100 text-green-800";
      case "OCCUPE":
        return "bg-red-100 text-red-800";
      case "EN_MAINTENANCE":
        return "bg-yellow-100 text-yellow-800";
      case "RESERVE":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Logements</h1>
          <p className="mt-2 text-gray-600">
            Gérez tous vos logements disponibles
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            href="/admin/logements/nouveau"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un logement
          </Link>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white shadow rounded-lg p-6"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recherche
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un logement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Statut
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Tous les statuts</option>
              <option value="DISPONIBLE">Disponible</option>
              <option value="OCCUPE">Occupé</option>
              <option value="EN_MAINTENANCE">En maintenance</option>
              <option value="RESERVE">Réservé</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Tous les types</option>
              <option value="APPARTEMENT">Appartement</option>
              <option value="MAISON">Maison</option>
              <option value="DUPLEX">Duplex</option>
              <option value="LOFT">Loft</option>
              <option value="STUDIO">Studio</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Logements Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredLogements.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <Building2 className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Aucun logement trouvé
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || statusFilter || typeFilter
                ? "Essayez de modifier vos filtres de recherche."
                : "Commencez par ajouter votre premier logement."}
            </p>
            {!searchTerm && !statusFilter && !typeFilter && (
              <div className="mt-6">
                <Link
                  href="/admin/logements/nouveau"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un logement
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLogements.map((logement) => {
              const images = JSON.parse(logement.images || "[]");
              // const caracteristiques = JSON.parse(
              //   logement.caracteristiques || "[]"
              // );

              return (
                <div
                  key={logement.id}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-200">
                    {images.length > 0 ? (
                      <Image
                        src={images[0]}
                        alt={logement.titre}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Building2 className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(logement.statut)}`}
                      >
                        {logement.statut}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {logement.titre}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {logement.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                      <div>📍 {logement.ville}</div>
                      <div>💰 {logement.prix}€</div>
                      <div>🏠 {logement.surface}m²</div>
                      <div>🛏️ {logement.chambres} ch.</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        Ajouté le{" "}
                        {new Date(logement.createdAt).toLocaleDateString(
                          "fr-FR"
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Link
                          href={`/admin/logements/${logement.id}`}
                          className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 rounded"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/admin/logements/${logement.id}/edit`}
                          className="p-2 text-yellow-600 hover:text-yellow-900 hover:bg-yellow-50 rounded"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(logement.id)}
                          className="p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}
