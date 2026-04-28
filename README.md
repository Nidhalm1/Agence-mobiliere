# 🏡 Agence Immobilière – Formulaire de Contact

Application fullstack développée avec **Next.js, Tailwind CSS et Prisma** permettant de contacter une agence immobilière, avec gestion des disponibilités et stockage des messages en base de données.

---

##  Fonctionnalités

* Formulaire de contact complet
* Sélection civilité (Mme / M)
* Choix du type de demande :
    * Demande de visite
    * Être rappelé
    * Plus de photos
* Ajout dynamique de disponibilités
* Message personnalisé
* Feedback utilisateur (toast succès / erreur)
* Sauvegarde en base de données (Prisma + SQLite)

---

## 🛠️ Stack technique

* **Next.js (App Router)**
* **React**
* **Tailwind CSS**
* **Prisma ORM**
* **SQLite**
* **react-hot-toast**

---

## 📁 Installation

### 1. Cloner le projet

```bash
git clone <ton-repo>
cd agence-form
```

---

### 2. Installer les dépendances

```bash
npm install
```

---

### 3. Configurer la base de données

```bash
npx prisma generate
npx prisma migrate dev
```

---

### 4. Lancer le projet

```bash
npm run dev
```

👉 Ouvrir : http://localhost:3000

---

## 🗄️ Accéder aux données

### Interface Prisma

```bash
npx prisma studio
```

👉 Ouvrir : http://localhost:5555

---

## 📡 API

### POST `/api/contact`

Permet d’envoyer un message

#### Exemple de payload :

```json
{
  "civility": "M",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@email.com",
  "phone": "0600000000",
  "message": "Je suis intéressé par le bien",
  "subject": "Demande de visite",
  "disponibilites": ["Lundi à 10h", "Mardi à 14h"]
}
```

---

### GET `/api/contact`

Récupère tous les messages enregistrés

---

## 🎨 UI

* Design inspiré d’une maquette immobilière
* Effet glassmorphism (blur + transparence)
* Responsive
* Expérience utilisateur fluide

---

## ⚠️ Notes

* Prisma peut nécessiter un redémarrage si erreur Windows (EPERM)
* Utiliser `taskkill /F /IM node.exe` si blocage

---

## 📌 Améliorations possibles

* Validation des champs (Zod)
* Authentification admin
* Dashboard de gestion des contacts
* Stockage avancé des disponibilités (PostgreSQL)

---

## 👨‍💻 Auteur

Projet réalisé dans le cadre d’un test technique / entraînement fullstack.

---
