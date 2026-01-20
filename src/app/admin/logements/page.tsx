"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Plus,
  Search,
  Eye,
  Edit,
  Trash2,
  Calendar,
} from "lucide-react";
import Link from "next/link";

interface Logement {
  id: string;
  titre: string;
  description: string;
  image: string;
  createdAt: string;
}

export default function LogementsList() {
  const [logements, setLogements] = useState<Logement[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredLogements = logements.filter((logement) =>
    logement.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des logements...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Logements</h1>
            <p className="mt-2 text-gray-600">
              {logements.length} logement{logements.length > 1 ? "s" : ""} au
              total
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/admin/logements/nouveau"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/25"
            >
              <Plus className="h-5 w-5 mr-2" />
              Ajouter un logement
            </Link>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un logement..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </motion.div>

        {/* Logements Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredLogements.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Building2 className="mx-auto h-16 w-16 text-gray-300" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Aucun logement trouvé
              </h3>
              <p className="mt-2 text-gray-500">
                {searchTerm
                  ? "Essayez de modifier votre recherche."
                  : "Commencez par ajouter votre premier logement."}
              </p>
              {!searchTerm && (
                <div className="mt-6">
                  <Link
                    href="/admin/logements/nouveau"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Ajouter un logement
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredLogements.map((logement, index) => (
                <motion.div
                  key={logement.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-indigo-100 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-56 bg-gray-100 overflow-hidden">
                    {logement.image ? (
                      <img
                        src={logement.image}
                        alt={logement.titre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Building2 className="h-16 w-16 text-gray-300" />
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Quick actions on hover */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Link
                        href={`/admin/logements/${logement.id}`}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-indigo-600 hover:bg-white transition-colors"
                        title="Voir"
                      >
                        <Eye className="h-5 w-5" />
                      </Link>
                      <Link
                        href={`/admin/logements/${logement.id}/edit`}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-amber-600 hover:bg-white transition-colors"
                        title="Modifier"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(logement.id)}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-red-600 hover:bg-white transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase line-clamp-2">
                      {logement.titre}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 whitespace-pre-line line-clamp-3">
                      {logement.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(logement.createdAt).toLocaleDateString(
                          "fr-FR",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </div>
                      <Link
                        href={`/admin/logements/${logement.id}`}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        Voir détails →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
