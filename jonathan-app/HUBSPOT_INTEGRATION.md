# 🎯 INTÉGRATION HUBSPOT - NEWSLETTER JONATHAN

## ✅ IMPLÉMENTATION RÉALISÉE

### 1. **API Newsletter mise à jour** (`/api/newsletter`)
- ✅ Intégration avec l'API Offstone : `https://offstone.fr/api/newsletter-jonathan`
- ✅ Gestion des paramètres UTM (source, medium, campaign, content, term)
- ✅ Tracking de la page URL et referrer
- ✅ Gestion d'erreur robuste (continue même si Offstone échoue)

### 2. **Composant NewsletterSignup** (`NewsletterSignup.tsx`)
- ✅ Récupération automatique des paramètres UTM depuis l'URL
- ✅ Sauvegarde des UTM dans localStorage
- ✅ Envoi des données complètes à l'API

### 3. **Script HubSpot** (`layout.tsx`)
- ✅ Script HubSpot chargé avec Portal ID : 146846899
- ✅ Callback `onHubSpotFormSubmit` configuré
- ✅ Intégration directe avec l'API Offstone

## 🧪 COMMENT TESTER

### **Test 1 : Formulaire personnalisé**
1. Ouvrir la console du navigateur (F12)
2. Aller sur la page avec le formulaire newsletter
3. Remplir et soumettre le formulaire
4. Vérifier dans la console :
   ```
   Newsletter envoyée à Offstone: {ok: true, ...}
   ```

### **Test 2 : Formulaire HubSpot (si configuré)**
1. Ouvrir la console du navigateur (F12)
2. Utiliser un formulaire HubSpot intégré
3. Soumettre le formulaire
4. Vérifier dans la console :
   ```
   Newsletter envoyée à Offstone: {ok: true, ...}
   ```

### **Test 3 : Paramètres UTM**
1. Accéder à la page avec des paramètres UTM :
   ```
   https://jonathananguelov.com?utm_source=google&utm_medium=cpc&utm_campaign=newsletter_test
   ```
2. Soumettre le formulaire
3. Vérifier que les UTM sont correctement transmis

## 📊 PAYLOAD ENVOYÉ À OFFSTONE

```json
{
  "email": "user@example.com",
  "utm_source": "jonathananguelov",
  "utm_medium": "newsletter", 
  "utm_campaign": "newsletter_jonathan",
  "utm_content": "newsletter_signup",
  "utm_term": "",
  "page_url": "https://jonathananguelov.com/page-actuelle",
  "referrer": "https://google.com",
  "cta_id": "newsletter_jonathan_signup"
}
```

## 🔧 CONFIGURATION HUBSPOT

### Variables d'environnement requises :
```bash
HUBSPOT_PORTAL_ID=146846899
HUBSPOT_FORM_GUID=1b21a07d-051f-4cfc-b8cf-1b5c749e46d6
HUBSPOT_OPPORTUNITIES_FORM_GUID=01eedbca-d37b-4519-ae4c-ed615e1faee7
HUBSPOT_NEWSLETTER_FORM_GUID=0cb0b552-7e58-4e7c-a6e1-b06c9d6843b1
HUBSPOT_FORMS_API=https://api.hsforms.com/submissions/v3/integration/submit
```

## 🎯 HIÉRARCHIE DES PRIORITÉS

1. **WaitingListModal** (Priorité 3 - Plus forte)
2. **Opportunités Exclusives** (Priorité 2 - Moyenne)  
3. **Newsletter Jonathan** (Priorité 1 - Plus faible) ✅

## 🚀 DÉPLOIEMENT

L'intégration est prête pour la production. Les emails seront :
- ✅ Enregistrés dans la table `newsletter_jonathan` de Supabase
- ✅ Envoyés à HubSpot avec priorité 1 (plus faible)
- ✅ Trackés avec tous les paramètres UTM

## 📝 LOGS DE DEBUG

Tous les logs apparaissent dans la console du navigateur :
- `Newsletter envoyée à Offstone:` - Succès
- `Erreur envoi newsletter:` - Erreur
- `Erreur API Offstone:` - Erreur API








