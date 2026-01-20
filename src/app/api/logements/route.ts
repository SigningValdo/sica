import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// API publique pour récupérer les logements (côté public)
export async function GET() {
  try {
    const logements = await prisma.logement.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(logements);
  } catch (error) {
    console.error("Erreur lors de la récupération des logements:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des logements" },
      { status: 500 }
    );
  }
}
