import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full px-4">
        <ContactForm />
      </div>
    </main>
  );
}