import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Créer l'utilisateur admin
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@sica.com" },
    update: {},
    create: {
      email: "admin@sica.com",
      password: hashedPassword,
      name: "Administrateur",
      role: "ADMIN",
    },
  });

  console.log("✅ Utilisateur admin créé:", admin.email);

  // Créer les logements réels du site
  const logements = [
    {
      id: "logement-baronet-1",
      titre: "Complexe le Baronet",
      description:
        "23 logements répartie sur 4 étages avec différent type de 3 ½, 4 ½ et 5 ½",
      image: "/Image - 01.jpg",
    },
    {
      id: "logement-baronet-2",
      titre: "Complexe le Baronet",
      description:
        "64 logements répartie sur 4 étages offrant une piscine extérieure, gym, salle commune et stationnement intérieur",
      image: "/Image - 02.jpg",
    },
    {
      id: "logement-pech-1",
      titre: "Établissement Pech",
      description:
        "77 logements répartie sur 10 étages avec local commercial et café au rez-de-chaussée",
      image: "/Image - 03.jpg",
    },
    {
      id: "logement-pech-2",
      titre: "Établissement Pech",
      description:
        "11 logements répartie sur 3 étages avec garage double et local commercial",
      image: "/Image - 04.jpg",
    },
    {
      id: "logement-livernois",
      titre: "30 logements modernes dans un immeubles de 4 étages",
      description:
        "L'immeuble Livernois séduit par son architecture contemporaine raffinée, sa généreuse fenestration, ses balcons invitants et le choix de matériaux haut de gamme qui témoignent d'un souci du détail remarquable.",
      image: "/Immeuble-exterieur 2.jpg",
    },
    {
      id: "logement-canardiere",
      titre: "Batiment à 4 niveaux",
      description:
        "Rez-de-chaussée commercial (restaurants, cafés, services) + 24 studios répartis aux 2e, 3e et 4e étages.\nStyle Contemporain, sobre et raffiné.\nSitué au 1785 chemin de la Canardière, dans le quartier Limoilou",
      image: "/Extérieur-1.jpg",
    },
  ];

  for (const logement of logements) {
    await prisma.logement.upsert({
      where: { id: logement.id },
      update: {
        titre: logement.titre,
        description: logement.description,
        image: logement.image,
      },
      create: logement,
    });
  }

  console.log("✅ Logements créés:", logements.length);
}

main()
  .catch((e) => {
    console.error("❌ Erreur:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
