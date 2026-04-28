import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("DATA:", data); // 👈 DEBUG

    const contact = await prisma.contact.create({
    data: {
      civility: data.civility,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      subject: data.subject, // 👈 AJOUT
      disponibilites: data.disponibilites.join(", "), // 👈 AJOUT
    },
});
    return Response.json(contact);
  } catch (error) {
    console.error("ERROR API:", error); // 👈 TU VAS VOIR L’ERREUR ICI
    return new Response("Erreur serveur", { status: 500 });
  }
}
export async function GET() {
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });

  return Response.json(contacts);
}