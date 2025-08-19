import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const logement = await prisma.logement.findUnique({
      where: { id: params.id },
    });

    if (!logement) {
      return NextResponse.json(
        { error: "Logement non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(logement);
  } catch (error) {
    console.error("Erreur lors de la récupération du logement:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await request.json();

    const logement = await prisma.logement.update({
      where: { id: params.id },
      data: {
        titre: body.titre,
        description: body.description,
        adresse: body.adresse,
        ville: body.ville,
        codePostal: body.codePostal,
        prix: parseFloat(body.prix),
        surface: parseFloat(body.surface),
        chambres: parseInt(body.chambres),
        sallesDeBain: parseInt(body.sallesDeBain),
        type: body.type,
        statut: body.statut,
        images: JSON.stringify(body.images || []),
        caracteristiques: JSON.stringify(body.caracteristiques || []),
      },
    });

    return NextResponse.json(logement);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du logement:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    await prisma.logement.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Logement supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du logement:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
