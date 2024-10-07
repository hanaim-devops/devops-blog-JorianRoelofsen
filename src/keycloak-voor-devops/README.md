# Een andere kijk op inloggen: Keycloak voor DevOps

*[Jorian Roelofsen, oktober 2024.](https://github.com/hanaim-devops/devops-blog-JorianRoelofsen)*
<hr/>

Inloggen is altijd een hoop extra moeite in een project, vooral als je het werkend moet houden in in een microservices-architectuur. Keycloak is een open-source identity en access management tool die dit proces een stuk versimpeld. In deze blog ga ik in op de voordelen van Keycloak en hoe je het kan integreren in een moderne IT-infrastructuur.

## Wat is Keycloak?

Keycloak is een Identity and Access Management (IAM) oplossing, die gecentraliseerde authenticatie en autorisatie biedt voor applicaties en API's. Het zorgt voor een complete IAM-service in één image, waardoor het makkelijk is te implementeren. De applicatie kan gebruikt worken voor single sign-on in applicaties en infrastructuren en om API-aanroepen te beveiligen.

Keycloak werkt goed samen met andere cloud native systemen, het werkt goed samen met kubernetes en kan worden geïntegreerd met andere cloud native systemen zoals Argo, Envoy en Jaeger. ([TODO: bron](https://www.cncf.io/blog/2023/04/11/keycloak-joins-cncf-as-an-incubating-project/))

## Voor- en nadelen van Keycloak

### Voordelen van Keycloak

#### 1. Single Sign-On (SSO)

Een van de grootste voordelen van Keycloak is de SSO-functionaliteit, waarmee gebruikers slechts één keer hoeven in te loggen om toegang te krijgen tot meerdere applicaties. Dit verbetert de gebruikerservaring aanzienlijk en verhoogt de beveiliging door het beperken van meerdere aanmeldpogingen. Vooral in omgevingen met meerdere services, zoals microservices of bedrijfsapplicaties, kan SSO een grote efficiëntieslag betekenen.

#### 2. Standaardondersteuning voor SAML 2.0 en OpenID Connect

Keycloak ondersteunt de meest gebruikte protocollen voor authenticatie, zoals **SAML 2.0** en **OpenID Connect (OIDC)**. Dit maakt de integratie met bestaande systemen en applicaties eenvoudiger en zorgt ervoor dat Keycloak breed inzetbaar is binnen verschillende IT-omgevingen.

#### 3. Gebruikersfederatie en Identiteitsbemiddeling

Een ander sterk punt van Keycloak is de mogelijkheid om gebruikersgegevens te integreren vanuit externe bronnen zoals **LDAP** of **Active Directory**. Daarnaast kunnen gebruikers inloggen met inloggegevens van derde partijen, zoals Google of Facebook, wat de flexibiliteit en gebruiksvriendelijkheid vergroot.

#### 4. Twee-factor Authenticatie (2FA)

Veiligheid staat centraal in Keycloak, en de tool biedt ondersteuning voor **twee-factor authenticatie (2FA)**, wat extra beveiligingslagen toevoegt door bijvoorbeeld de integratie van Google Authenticator. Dit is vooral belangrijk in omgevingen waar gevoelige informatie wordt beheerd.

#### 5. Open Source en Community-gedreven

Keycloak is een open-source project, wat betekent dat het actief wordt onderhouden en uitgebreid door een grote gemeenschap. Dit zorgt voor continue verbetering en een breed scala aan integratiemogelijkheden, zonder de kosten van een commerciële licentie.

### Nadelen van Keycloak

#### 1. Single Point of Failure

Hoewel Keycloak krachtige beveiliging biedt, kan het een enkel storingspunt worden binnen de infrastructuur als het niet goed wordt geconfigureerd. Een storing in Keycloak kan ervoor zorgen dat gebruikers geen toegang meer hebben tot essentiële applicaties, wat voor organisaties met strikte uptime-eisen een groot risico kan vormen.

#### 2. Complexiteit in Beheer

Het beheren en configureren van Keycloak kan complex zijn, vooral voor grotere organisaties met geavanceerde behoeften. Het vereist ervaring en deskundigheid om Keycloak correct te implementeren, high availability (HA) te waarborgen en de juiste schaalbaarheid te garanderen. Dit kan leiden tot een steilere leercurve voor teams zonder ervaring met IAM-oplossingen.

#### 3. Onderhoud en Updates

Keycloak is een zelf-gehoste oplossing, wat betekent dat teams verantwoordelijk zijn voor het up-to-date houden van de software, het toepassen van beveiligingspatches en het uitvoeren van prestatiemonitoring. Dit kan de onderhoudslast vergroten in vergelijking met volledig beheerde diensten, zoals commerciële IAM-oplossingen.


<!-- https://www.intension.de/en/infoblog/keycloak-advantages-disadvantages/
https://pretius.com/blog/keycloak-sso/
https://www.reddit.com/r/devops/comments/1ak7pex/is_keycloak_worth_the_maintenance/
https://stackoverflow.com/questions/49606861/should-i-use-keycloak-or-not -->
**TODO: bronnen in text**

## Keycloak vs andere identity management tools
<!-- https://www.reddit.com/r/linuxadmin/comments/gdegxl/keycloak_freeipa_openldap_proscons/
https://www.reddit.com/r/KeyCloak/comments/12hexya/reasons_you_decided_to_choose_keycloak_as_main/ -->

## Hoe integreer je Keycloak in een microservices-architectuur?
