const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Initialisation de la base de données...");

  // Créer un utilisateur admin
  const hashedPassword = await bcrypt.hash("admin123", 12);

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@sica.com" },
    update: {},
    create: {
      email: "admin@sica.com",
      password: hashedPassword,
      name: "Administrateur SICA",
      role: "ADMIN",
    },
  });

  console.log("✅ Utilisateur admin créé:", adminUser.email);

  // Créer quelques logements d'exemple
  const logements = [
    {
      titre: "Appartement moderne au centre-ville",
      description:
        "Magnifique appartement rénové avec vue sur la ville, proche des transports et commerces.",
      adresse: "123 Rue Sainte-Catherine",
      ville: "Montréal",
      codePostal: "H2X 1L1",
      prix: 1500,
      surface: 75,
      chambres: 2,
      sallesDeBain: 1,
      type: "APPARTEMENT",
      statut: "DISPONIBLE",
      images: JSON.stringify(["/logement-haut-gamme.png"]),
      caracteristiques: JSON.stringify([
        "Balcon",
        "Parking",
        "Ascenseur",
        "Climatisation",
      ]),
    },
    {
      titre: "Maison de ville avec jardin",
      description:
        "Belle maison de ville avec jardin privatif, idéale pour une famille.",
      adresse: "456 Avenue du Parc",
      ville: "Montréal",
      codePostal: "H2V 2H1",
      prix: 2500,
      surface: 120,
      chambres: 3,
      sallesDeBain: 2,
      type: "MAISON",
      statut: "DISPONIBLE",
      images: JSON.stringify(["/gestion-logement.png"]),
      caracteristiques: JSON.stringify([
        "Jardin",
        "Terrasse",
        "Garage",
        "Cave",
      ]),
    },
  ];

  for (const logementData of logements) {
    const logement = await prisma.logement.create({
      data: logementData,
    });
    console.log("✅ Logement créé:", logement.titre);
  }

  console.log("🎉 Base de données initialisée avec succès!");
  console.log("📧 Connectez-vous avec: admin@sica.com / admin123");
}

main()
  .catch((e) => {
    console.error("❌ Erreur lors de l'initialisation:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
