"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [form, setForm] = useState({
    civility: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
    disponibilites: [] as string[],
  });

  const [dispo, setDispo] = useState({
    day: "Lundi",
    hour: "7h",
    minute: "0m",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message envoyé !");
        setForm({
          civility: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
          disponibilites: [],
        });
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const addDispo = () => {
    const value = `${dispo.day} à ${dispo.hour}${dispo.minute}`;
    setForm({
      ...form,
      disponibilites: [...form.disponibilites, value],
    });
  };

  const removeDispo = (index: number) => {
    const updated = form.disponibilites.filter((_, i) => i !== index);
    setForm({ ...form, disponibilites: updated });
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">CONTACTEZ L’AGENCE</h1>
      {/* Message de succès propre */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10">
          {/* LEFT */}
          <div>
            <h2 className="mb-4 font-semibold">VOS COORDONNÉES</h2>
            {/* CIVILITY */}
            <div className="flex gap-6 mb-4">
              {["Mme", "M"].map((civ) => (
                <label key={civ} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="civility"
                    value={civ}
                    checked={form.civility === civ}
                    onChange={() => setForm({ ...form, civility: civ })}
                  />
                  {civ}
                </label>
              ))}
            </div>
            <div className="space-y-4">
              <input
                className="input"
                placeholder="Nom"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
              <input
                className="input"
                placeholder="Prénom"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              <input
                className="input"
                placeholder="Adresse mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                className="input"
                placeholder="Téléphone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            {/* DISPO */}
            <h3 className="mt-6 mb-2">DISPONIBILITÉS POUR UNE VISITE</h3>
            <div className="flex gap-2 mb-3">
              <select
                className="input"
                value={dispo.day}
                onChange={(e) => setDispo({ ...dispo, day: e.target.value })}
              >
                <option>Lundi</option>
                <option>Mardi</option>
                <option>Mercredi</option>
                <option>Jeudi</option>
                <option>Vendredi</option>
              </select>
              <select
                className="input"
                value={dispo.hour}
                onChange={(e) => setDispo({ ...dispo, hour: e.target.value })}
              >
                <option>7h</option>
                <option>8h</option>
                <option>9h</option>
                <option>10h</option>
                <option>11h</option>
                <option>12h</option>
              </select>
              <select
                className="input"
                value={dispo.minute}
                onChange={(e) => setDispo({ ...dispo, minute: e.target.value })}
              >
                <option>0m</option>
                <option>30m</option>
              </select>
              <button
                type="button"
                onClick={addDispo}
                className="bg-purple-600 px-4 rounded-full"
              >
                AJOUTER
              </button>
            </div>
            {/* CHIPS */}
            <div className="flex flex-wrap gap-2">
              {form.disponibilites.map((d, i) => (
                <div
                  key={i}
                  className="bg-white/80 text-black px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {d}
                  <button type="button" onClick={() => removeDispo(i)}>✕</button>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT */}
          <div>
            <h2 className="mb-4 font-semibold">VOTRE MESSAGE</h2>
            {/* SUBJECT */}
            <div className="flex gap-4 mb-4">
              {["Demande de visite", "Être rappelé", "Plus de photos"].map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subject"
                    value={s}
                    checked={form.subject === s}
                    onChange={() => setForm({ ...form, subject: s })}
                  />
                  {s}
                </label>
              ))}
            </div>
            <textarea
              className="input h-40"
              placeholder="Votre message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <div className="flex justify-end mt-6">
              <button
                className="bg-orange-500 px-6 py-3 rounded-full"
                type="submit"
                disabled={loading}
              >
                {loading ? "Envoi..." : "ENVOYER"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}