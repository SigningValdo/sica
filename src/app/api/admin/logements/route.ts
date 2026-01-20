import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const logements = await prisma.logement.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(logements);
  } catch (error) {
    console.error("Erreur lors de la récupération des logements:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await request.json();

    const logement = await prisma.logement.create({
      data: {
        titre: body.titre,
        description: body.description,
        image: body.image,
      },
    });

    return NextResponse.json(logement, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création du logement:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
