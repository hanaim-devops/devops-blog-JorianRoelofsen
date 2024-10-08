# Een andere kijk op inloggen: Keycloak voor DevOps

*[Jorian Roelofsen, oktober 2024.](https://github.com/hanaim-devops/devops-blog-JorianRoelofsen)*
<hr/>

Inloggen is altijd een hoop extra moeite in een project, vooral als je het werkend moet houden in in een microservices-architectuur. Keycloak is een open-source identity en access management tool die dit proces een stuk versimpeld. In deze blog ga ik in op de voordelen van Keycloak en hoe je het kan integreren in een moderne IT-infrastructuur.

## Wat is Keycloak?

Keycloak is een open-source identity and access management (IAM) tool, ontworpen om gebruikersbeheer en authenticatie te vereenvoudigen. Het biedt een centrale plek waar je toegang tot applicaties kunt beheren, zonder dat elke applicatie apart gebruikersbeheer en authenticatie hoeft te implementeren.

Je kan gebruikers laten inloggen met verschillende identiteitsproviders, zoals sociale netwerken (Google, Facebook), LDAP-servers of standaard login-systemen. Het ondersteunt ook Single Sign-On (SSO), wat betekent dat gebruikers maar één keer hoeven in te loggen om toegang te krijgen tot meerdere applicaties.

Keycloak is goed geïntegreerd in het cloud-native ecosysteem. Het draait op Kubernetes en kan worden geïnstalleerd met Operators die zijn gebouwd met het Operator Framework(https://www.cncf.io/projects/operator-framework/). Daarnaast biedt het metrics aan voor Prometheus en het integreert goed met een standaard Kubernetes-stack.

TODO: rework en langer maken
([TODO: bron](https://www.cncf.io/blog/2023/04/11/keycloak-joins-cncf-as-an-incubating-project/))

## Keycloak voor en nadelen

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


<!-- 
https://www.intension.de/en/infoblog/keycloak-advantages-disadvantages/
https://pretius.com/blog/keycloak-sso/
https://www.reddit.com/r/devops/comments/1ak7pex/is_keycloak_worth_the_maintenance/
https://stackoverflow.com/questions/49606861/should-i-use-keycloak-or-not 
-->
**TODO: bronnen in text**

## Keycloak vs de concurrentie

Bij het kiezen van een Identity en Access Management (IAM) oplossing is het essentieel om verschillende opties te overwegen. Naast Keycloak zijn er namelijk tal van alternatieven beschikbaar die elk unieke voordelen en beperkingen hebben. Laten we enkele veelgebruikte alternatieven bekijken en deze vergelijken met Keycloak op basis van functies, schaalbaarheid, en beheer.

### FreeIPA en OpenLDAP

FreeIPA en OpenLDAP zijn populaire open-source oplossingen voor identiteitsbeheer, maar ze verschillen aanzienlijk van Keycloak. FreeIPA biedt een alles-in-één oplossing voor Identity, Policy en Audit, en is vooral sterk in Unix-achtige omgevingen. Het biedt robuuste integraties voor LDAP en Kerberos, maar mist de ingebouwde ondersteuning voor moderne protocollen zoals OpenID Connect en SAML, die cruciaal zijn in cloud-native omgevingen.

OpenLDAP is een pure LDAP-directorydienst, wat het ideaal maakt voor gebruik in organisaties met zware eisen op het gebied van gegevensbeheer. Echter, het is beperkt in zijn ondersteuning van moderne authenticatieprotocollen en heeft geen standaard Single Sign-On (SSO)-functionaliteit, wat Keycloak wel biedt.

### FusionAuth

FusionAuth is een andere veelgebruikte concurrent van Keycloak en richt zich op ontwikkelaars die een eenvoudig te implementeren oplossing willen zonder complexe configuraties. FusionAuth biedt uitgebreide ondersteuning voor SAML, OAuth2, en OpenID Connect, net als Keycloak. Het grote verschil is echter dat FusionAuth gebruiksvriendelijker is voor teams zonder veel IAM-ervaring, terwijl Keycloak meer configuratie-opties biedt voor gevorderde gebruikers.

### Auth0

Auth0 is een commercieel alternatief voor Keycloak en biedt een beheerde IAM-oplossing, wat betekent dat je je geen zorgen hoeft te maken over hosting, onderhoud of updates. Auth0 staat bekend om zijn uitgebreide documentatie en gebruiksvriendelijke interfaces, maar heeft wel een prijskaartje, wat een drempel kan zijn voor kleinere teams of startups. Keycloak, als open-source optie, biedt een gratis oplossing die volledig in eigen beheer is.

<!-- 
https://www.reddit.com/r/linuxadmin/comments/gdegxl/keycloak_freeipa_openldap_proscons/
https://www.reddit.com/r/KeyCloak/comments/12hexya/reasons_you_decided_to_choose_keycloak_as_main/ 
https://www.zluri.com/blog/keycloak-alternatives/
https://permify.co/post/top-open-source-keycloak-alternatives/
https://fusionauth.io/guides/keycloak-alternatives/	
-->

## Keycloak in microservices?
