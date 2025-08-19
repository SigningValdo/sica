"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Home,
  Building,
  MapPin,
  DollarSign,
  Ruler,
  Bed,
  Bath,
  Calendar,
  Clock,
} from "lucide-react";

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
  updatedAt: string;
}

export default function LogementDetailPage() {
  const [logement, setLogement] = useState<Logement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    if (id) {
      fetchLogement();
    }
  }, [id]);

  const fetchLogement = async () => {
    try {
      const response = await fetch(`/api/admin/logements/${id}`);
      if (response.ok) {
        const data = await response.json();
        setLogement(data);
      } else {
        setError("Logement non trouvé");
      }
    } catch (error) {
      setError("Erreur lors du chargement du logement");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce logement ?")) {
      try {
        const response = await fetch(`/api/admin/logements/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          router.push("/admin/logements");
        }
      } catch (error) {
        setError("Erreur lors de la suppression");
      }
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "APPARTEMENT":
        return <Building className="w-6 h-6" />;
      case "MAISON":
        return <Home className="w-6 h-6" />;
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  const getStatutColor = (statut: string) => {
    switch (statut) {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !logement) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <div className="text-red-500 text-lg mb-4">{error}</div>
          <button
            onClick={() => router.push("/admin/logements")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

  const images = JSON.parse(logement.images || "[]");
  const caracteristiques = JSON.parse(logement.caracteristiques || "[]");

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => router.push("/admin/logements")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à la liste
          </button>
          <div className="flex gap-3">
            <button
              onClick={() => router.push(`/admin/logements/${id}/edit`)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Edit className="w-4 h-4" />
              Modifier
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Supprimer
            </button>
          </div>
        </div>

        {/* Informations principales */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {logement.titre}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  {getTypeIcon(logement.type)}
                  <span className="capitalize">
                    {logement.type.toLowerCase().replace("_", " ")}
                  </span>
                </div>
                <span
                  className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatutColor(
                    logement.statut
                  )}`}
                >
                  {logement.statut.replace("_", " ")}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">
                {logement.prix.toLocaleString()}€
              </div>
              <div className="text-sm text-gray-500">Prix</div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {logement.description}
          </p>

          {/* Caractéristiques principales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Ruler className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Surface</div>
                <div className="font-semibold">{logement.surface}m²</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Bed className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Chambres</div>
                <div className="font-semibold">{logement.chambres}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Bath className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Salles de bain</div>
                <div className="font-semibold">{logement.sallesDeBain}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Prix/m²</div>
                <div className="font-semibold">
                  {Math.round(logement.prix / logement.surface)}€
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Localisation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Localisation
            </h2>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500">Adresse</div>
                <div className="font-medium">{logement.adresse}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Ville</div>
                <div className="font-medium">{logement.ville}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Code postal</div>
                <div className="font-medium">{logement.codePostal}</div>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm border p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Images ({images.length})
            </h2>
            {images.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${logement.titre} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Aucune image disponible
              </div>
            )}
          </motion.div>
        </div>

        {/* Caractéristiques détaillées */}
        {caracteristiques.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm border p-6 mt-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Caractéristiques
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {caracteristiques.map((carac: string, index: number) => (
                <div
                  key={index}
                  className="bg-gray-50 px-3 py-2 rounded-lg text-sm"
                >
                  {carac}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Informations temporelles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-lg shadow-sm border p-6 mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-600" />
            Informations temporelles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Créé le</div>
                <div className="font-medium">
                  {formatDate(logement.createdAt)}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Modifié le</div>
                <div className="font-medium">
                  {formatDate(logement.updatedAt)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
