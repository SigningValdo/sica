"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-6 sm:px-0"
        >
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Tableau de bord administrateur
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Bienvenue, {session.user?.name || session.user?.email} !
              </p>

              <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Informations de session
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Email:</strong> {session.user?.email}
                  </p>
                  <p>
                    <strong>Nom:</strong> {session.user?.name}
                  </p>
                  <p>
                    <strong>Rôle:</strong> {session.user?.role}
                  </p>
                  <p>
                    <strong>ID:</strong> {session.user?.id}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => router.push("/admin/logements")}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors mr-4"
                >
                  Gérer les logements
                </button>
                <button
                  onClick={() => router.push("/admin/users")}
                  className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Gérer les utilisateurs
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
