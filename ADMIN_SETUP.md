# Configuration du Dashboard Admin SICA

Ce guide explique comment configurer et utiliser le dashboard admin pour la gestion des logements.

## 🚀 Installation et Configuration

### 1. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec le contenu suivant :

```bash
# Configuration de la base de données
DATABASE_URL="file:./dev.db"

# Configuration NextAuth.js
NEXTAUTH_SECRET="votre-secret-ici-remplacez-par-une-valeur-securisee"
NEXTAUTH_URL="http://localhost:3000"
```

**Important :** Remplacez `votre-secret-ici-remplacez-par-une-valeur-securisee` par une chaîne aléatoire sécurisée.

### 2. Initialisation de la base de données

```bash
# Créer et appliquer les migrations Prisma
npx prisma migrate dev --name init

# Générer le client Prisma
npx prisma generate
```

### 3. Création des données initiales

```bash
# Créer un utilisateur admin et des données de test
node scripts/init-db.js
```

**Compte admin par défaut :**

- Email : `admin@sica.com`
- Mot de passe : `admin123`

## 🏗️ Structure du Dashboard

### Pages disponibles

1. **`/admin/login`** - Page de connexion
2. **`/admin/dashboard`** - Tableau de bord principal
3. **`/admin/logements`** - Liste des logements
4. **`/admin/logements/nouveau`** - Création d'un nouveau logement
5. **`/admin/logements/[id]`** - Détail d'un logement
6. **`/admin/logements/[id]/edit`** - Édition d'un logement

### Fonctionnalités CRUD

- ✅ **Create** : Ajouter de nouveaux logements
- ✅ **Read** : Consulter la liste et les détails
- ✅ **Update** : Modifier les informations existantes
- ✅ **Delete** : Supprimer des logements

## 🔐 Authentification

Le dashboard utilise NextAuth.js avec un système de credentials (email/mot de passe).

### Sécurité

- Les mots de passe sont hashés avec bcryptjs
- Sessions JWT sécurisées
- Protection des routes admin
- Rôles utilisateur (USER/ADMIN)

## 📊 Modèle de données

### Logement

```typescript
interface Logement {
  id: string;
  titre: string;
  description: string;
  adresse: string;
  ville: string;
  codePostal: string;
  prix: number;
  surface: number;
  chambres: number;
  sallesDeBain: number;
  type: TypeLogement;
  statut: StatutLogement;
  images: string; // JSON string
  caracteristiques: string; // JSON string
  createdAt: string;
  updatedAt: string;
}
```

### Types de logement

- APPARTEMENT
- MAISON
- DUPLEX
- LOFT
- STUDIO

### Statuts

- DISPONIBLE
- OCCUPE
- EN_MAINTENANCE
- RESERVE

## 🎨 Interface utilisateur

### Technologies utilisées

- **Next.js 14** - Framework React
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icônes
- **Prisma** - ORM base de données

### Design

- Interface responsive
- Animations fluides
- Thème moderne et professionnel
- Navigation intuitive

## 🚀 Démarrage rapide

1. **Installer les dépendances :**

   ```bash
   npm install
   ```

2. **Configurer l'environnement :**

   ```bash
   cp .env.example .env.local
   # Éditer .env.local avec vos valeurs
   ```

3. **Initialiser la base de données :**

   ```bash
   npx prisma migrate dev --name init
   node scripts/init-db.js
   ```

4. **Lancer le serveur de développement :**

   ```bash
   npm run dev
   ```

5. **Accéder au dashboard :**
   - Ouvrir http://localhost:3000/admin/login
   - Se connecter avec `admin@sica.com` / `admin123`

## 🔧 Développement

### Structure des fichiers

```
src/
├── app/
│   ├── admin/           # Routes admin
│   │   ├── login/       # Page de connexion
│   │   ├── dashboard/   # Tableau de bord
│   │   └── logements/   # Gestion des logements
│   └── api/             # API routes
│       └── admin/       # Endpoints admin
├── components/           # Composants réutilisables
├── lib/                 # Utilitaires et configuration
│   ├── auth.ts         # Configuration NextAuth
│   └── db.ts           # Configuration Prisma
└── prisma/              # Schéma et migrations
    └── schema.prisma    # Modèle de données
```

### API Endpoints

- `GET /api/admin/logements` - Liste des logements
- `POST /api/admin/logements` - Créer un logement
- `GET /api/admin/logements/[id]` - Détail d'un logement
- `PUT /api/admin/logements/[id]` - Modifier un logement
- `DELETE /api/admin/logements/[id]` - Supprimer un logement

## 🐛 Dépannage

### Erreurs courantes

1. **"Database connection failed"**

   - Vérifier que le fichier `.env.local` existe
   - Vérifier la valeur de `DATABASE_URL`

2. **"Authentication failed"**

   - Vérifier que la base de données est initialisée
   - Vérifier que l'utilisateur admin existe

3. **"Prisma client not generated"**
   - Exécuter `npx prisma generate`

### Logs et débogage

- Vérifier la console du navigateur
- Vérifier les logs du serveur Next.js
- Utiliser les outils de développement Prisma

## 📝 Maintenance

### Sauvegarde de la base de données

```bash
# Sauvegarder SQLite
cp prisma/dev.db backup/dev.db.backup

# Restaurer
cp backup/dev.db.backup prisma/dev.db
```

### Mise à jour des dépendances

```bash
npm update
npx prisma migrate dev
```

## 🤝 Contribution

Pour contribuer au développement :

1. Fork le projet
2. Créer une branche feature
3. Implémenter les modifications
4. Tester localement
5. Créer une pull request

## 📞 Support

Pour toute question ou problème :

- Vérifier la documentation
- Consulter les issues GitHub
- Contacter l'équipe de développement

---

**Dashboard Admin SICA** - Gestion complète des logements immobiliers
