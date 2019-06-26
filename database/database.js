const Entry = require("./Entry.js");
const { isUid } = require("./uid.js");
const { getFirstHeadingLinkSafe } = require("./parseMarkdown.js");

class DB {
	constructor () {
		this.articles = [
			new Entry({
				title: "cmd-amsterdam",
				raw: "# CMD-Amsterdam"
					+ "\n## Opleiding voor digital interactive design."
					+ "\n\nWij zijn Communication and Multimedia Design (CMD). Wij zijn een "
					+ "HBO-ontwerpopleiding voor digital interactive design. Onze studenten "
					+ "ontwerpen en realiseren digitale interactieve oplossingen die "
					+ "optimaal aansluiten bij de behoeften van de gebruikers."
					+ "\n\nIn de kern van de opleiding zit interaction design, visual "
					+ "design en techniek (met name frontend development). Onze vakdocenten "
					+ "hebben een goed netwerk en vertalen continu recente ontwikkelingen "
					+ "naar het gehele onderwijsprogramma. Afgestudeerde studenten zijn "
					+ "daarmee van grote waarde in het huidige werkveld. Daar zijn wij "
					+ "trots op!"
					+ "\n\n![Foto van iemand die een interface ontwerpt.](/images/cmd_daantjebons_0007.jpg)"
			}),
			new Entry ({
				title: "contact",
				raw: "# Contact"
					+ "\nCMD Amsterdam"
					+ "\n\n#{contact}"
					+ "\n\n**Communication and Multimedia Design Amsterdam**"
					+ "\nHogeschool van Amsterdam | Theo Thijssenhuis "
					+ "\nMeer informatie over CMD ook op: [http://www.hva.nl/cmd](http://www.hva.nl/cmd)"
					+ "\n\nWibautstraat 2-4 | 1091 GM | Amsterdam"
					+ "\n+31 20 595 1855 | [info-cmd@hva.nl](info-cmd@hva.nl)"
					+ "\n\nJe kunt ons via het formulier en/of bovenstaande gegevens bereiken of direct een bericht sturen naar één van onderstaande contactpersonen."
					+ "\n\n#{contactpersonen}"
			}),
			new Entry ({
				title: "samenwerken",
				raw: "# Samenwerken"
					+ "\nAlle mogelijkheden vind je hier"
					+ "\n\n## Kennis. Delen. Mooi!"
					+ "\nOnze opleiding hecht grote waarde aan samenwerking. We kijken met interesse naar de ontwikkelingen in ons vakgebied en de samenleving en zoeken daar onderwerpen en partners uit. Daarnaast stellen wij onze kennis en kunde rond digital interactive design graag beschikbaar voor ons netwerk."
					+ "\nDit alles doen we via stages, het werken aan projecten, gastcolleges, bedrijfsbezoeken, bijbaantjes, (betaalde) ontwerpklussen voor onze studenten en korte cursussen en masterclasses voor bedrijven. We zetten hieronder de mogelijkheden uiteen. Samenwerken? Mail Mattijs Blekemolen, onze coördinator externe samenwerking."
					+ "\n\n![rotate](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/Cmd-Arrow-icon-transparant.gif)"
					+ "\n\n## Stages"
					+ "\n![Foto van iemand die een interface ontwerpt.](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_icon_pencilcross.png)"
					+ "\n\nBij CMD in Amsterdam worden studenten opgeleid tot digital interactive designers. Via vakken en projecten rond de specialismen interaction design, visual design en techniek (met name frontend development) ontwikkelen zij zich tot startende ontwerpers met een expertise in of met een combinatie van deze specialismen."
					+ "\nTijdens stages werken onze studenten mee aan de digital design projecten bij bedrijven. Aan het einde van het tweede studiejaar via een korte stage van tien weken, in het afstudeerjaar via een lange stage van twintig weken. Onze studievereniging IAM Core organiseert twee keer per jaar Stage Diving; een stagemarkt voor studenten en bedrijven. In februari voor de tweedejaars stage (start april), in juni gericht op de aankomende afstudeerstage (start september)."
					+ "\n[Informatie over stages](https://www.cmd-amsterdam.nl/samenwerken/informatie-over-stages/)"
					+ "\n[Stage diving](http://iamcore.nl/stagediving/)"
					+ "\n\n## Projecten"
					+ "\nHet werken in / aan projecten zit in de kern van onze opleiding. Van propedeuse tot afstudeerjaar wordt zowel in teamverband als individueel veel aan projecten gewerkt. Deze (onderzoeks)projecten bieden een goede mogelijkheid om externe opdrachten rond 'digital interactive design' uit het werkveld aan te bieden aan onze studenten."
					+ "\nAandachtspunt is dat er genoeg ruimte moet zijn voor de ideeën en de creativiteit van onze studenten. Externe opdrachten worden daarom altijd eerst met onze coördinatoren besproken. En soms eindigt een project van één team niet altijd volgens de verwachtingen. Dat hoort bij onderwijs en leren. Daarom vragen wij geen geld voor projecten. Wel uw inspanning en tijd als projectpartner / klant natuurlijk. Heeft u een specifieke vraag met een deadline en een duidelijke beeld over het eindproduct? Dan is een (betaalde) klus voor onze studenten buiten het curriculum wellicht een goed alternatief."
					+ "\nOns curriculum biedt volop mogelijkheden om met externe partijen samen te werken. Bekijk ons curriculum en mogelijk ziet u zelf al vakken, projecten en/of minoren die bij uw vraag aansluiten. We bespreken graag de mogelijkheden. Ook als u geen idee heeft waar uw vraag in het curriculum het beste past natuurlijk."
					+ "\n[curriculum cmd 2018 2019](https://www.cmd-amsterdam.nl/curriculum-cmd-2018-2019/)"
					+ "\n\n![afbeeldingen over projecten](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_daantjebons_0022.jpg)"
					+ "\n\n## Gastcolleges"
					+ "\n![mic icon](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_icon_mic.png)"
					+ "\n\nHoe kun je data in je designs toepassen? Of moet je je ontwerp zo maken dat er optimaal van data gebruik gemaakt kan worden? Hoe ziet het werken bij een ontwerpbureau er nu eigenlijk uit? En wat is de meerwaarde van CMD'ers daarin? Wanneer pas je nou wel of juist niet het 'hamburger-menu' toe in je ontwerp?"
					+ "\nEen greep uit een aantal goede vragen die in de recente gastcolleges zijn behandeld. Bedrijven delen hun expertises met onze studenten, docenten, alumni en andere bedrijven tijdens gastcolleges en de serie ICONS. Ook een gastcollege geven? Neem contact met ons op en dan bespreken we de mogelijkheden."
					+ "\n\n## Usability Lab"
					+ "\nGeen goed user centred design zonder Usability Lab natuurlijk! In ons Usability Lab testen onze studenten daarom of de door hun ontworpen applicaties (zowel voor desktop, tablet als small-screen) gebruiksvriendelijk zijn dus en goed scoren op 'usability'."
					+ "\nVia een speciale eyetracker wordt geregistreerd hoe testpersonen door bijvoorbeeld websites en mobiele applicaties navigeren. De ‘heatmap’ die hieruit voortkomt verschaft belangrijke informatie over hoe de gebruiker door de applicatie heeft genavigeerd. Hierdoor kan ook weer een redesign worden uitgevoerd. Het is ook mogelijk om als externe organisatie een opdracht voor ons Usability Lab in te dienen. Meten is weten!"
					+ "\n\n![usability lab image](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/u-lab.jpg)"
					+ "\n\n## Bedrijfsbezoeken en evenementen"
					+ "\n![bulb icon](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_icon_bulb.png)"
					+ "\n\nWat is er nou leuker dan een groep enthousiaste CMD-studenten uit te nodigen voor een bezoek aan uw organisatie of hulp bij uw evenementen? Onze studenten (en docenten) vinden het altijd erg leuk om langs te komen bij bedrijven uit ons vakgebied."
					+ "\nOp deze manier krijgen studenten beter inzicht in de verschillende soorten organisaties en hun bedrijfsculturen. Wat past er bij mij en wat niet? Waar voel ik mij thuis? Als organisatie is dit tevens een goede manier om toekomstige ontwerptalenten te interesseren voor een stage of een (bij)baan."
					+ "\nHulp bij evenementen kan bestaan uit bijvoorbeeld: filmpjes maken, bloggen, interviewen, foto’s maken, badges uitdelen, sprekers-assistentie of technische ondersteuning. Dat mag betaald, maar kan ook door toegangskaarten te geven en mogelijkheid tot het volgen van delen van het programma en te netwerken met bezoekers / sprekers."
					+ "\n\n## Opleidingsadviesraad"
					+ "\nOm onze studenten zo goed mogelijk op te leiden tot startende digital interactive designers is het belangrijk om op de hoogte te zijn van de ontwikkelingen in ons vakgebied. Eén van de instrumenten die wij hier als opleiding voor hanteren zijn gesprekken met de Opleidingsadviesraad (OAR). U kunt zich hiervoor als organisatie aanmelden."
					+ "\nDe OAR bestaat op dit moment uit een twintigtal professionals uit ons vakgebied, aangevuld met een aantal medewerkers van de opleiding. Gedurende het jaar komt de OAR een aantal keer samen om te praten over de ontwikkelingen in ons vakgebied en hoe of wij als opleiding nog de juiste ontwerpers opleiden voor dit (toekomstige) vakgebied. Deze sessies vinden plaats bij ons op de opleiding."
					+ "\n\n![image tagcloud](https://www.cmd-amsterdam.nl/wp-content/uploads/2014/05/tagcloud-01.png)"
					+ "\n\n## Golden Dot Awards"
					+ "\n\n#{gda}"
					+ "\n\nHet beste studentenwerk wordt ieder jaar beloond met prijzen tijdens de jaarlijkse Golden Dot Awards. Onze docenten nomineren het beste werk, een vakjury kiest daar de winnaars uit. Dit varieert van propedeuse tot afstudeerjaar en van individueel werk tot teamprojecten"
					+ "\nVoor en na de show kunnen bedrijven, docenten en studenten met elkaar in contact komen. We bieden een aantal bedrijven ook de mogelijkheid om plaats te nemen in de jury. De Golden Dot Awards 2019 wordt begin juli 2019 georganiseerd. Zie ook [www.goldendotawards.nl](www.goldendotawards.nl)"
			}),
			new Entry({
				title: "doorgroeien",
				raw: "# Doorgroeien"
					+ "\nChange your digital design skills."
					+ "\n\n## Cursussen digital interactive design"
					+ "\nVanuit BATTERY geven onze vakdocenten korte cursussen, masterclasses en workshops over de laatste ontwikkelingen rond digital interactive design. Hiermee helpen wij medewerkers en de organisaties waar zij voor werken voor een belangrijk deel 'future proof' te worden en te blijven."
					+ "\nBATTERY is een initiatief van docenten Communication and Multimedia Design. In gesprekken met (stage)bedrijven, merken wij steeds vaker een kennisachterstand m.b.t. de laatste ontwikkelingen in ons vakgebied. Vaak zijn de ‘waan van de dag’ en drukke agenda’s oorzaak bij zowel ontwerpers als management om achterop te raken in de digitale ontwikkelingen. BATTERY is daarbij van toegevoegde waarde."
					+ "\n\n![brain icon](https://www.cmd-amsterdam.nl/wp-content/uploads/2017/02/CMD-AI-transparant.gif)"
					+ "\n\n## Interesse? Laat het ons weten!"
					+ "\n![Battery Web](https://www.cmd-amsterdam.nl/wp-content/uploads/2018/11/battery-web.jpg)"
					+ "\n\nOp welk(e) gebied(en) zou je een cursus willen volgen? Bijvoorbeeld: UX, customer journey mapping, design patterns, service design, persuasive design, HTML/CSS, User Centred Design, ..."
					+ "\n\n### Onderwerpen"
					+ "\nCMD docenten zijn gespecialiseerd in het ‘user centered’ ontwerpen van digitale producten en diensten. De kern van ons aanbod gaat over het ontwerpproces, interaction design, visual design en front-end development. Hieronder vallen tal van onderwerpen, zoals bijvoorbeeld Customer Journey Mapping, User Centered Design, Persuasive Design, Datavisualisatie, HTML/CSS, etc. Meer onderwerpen vind je in ons curriculum. In de cursus kan een specifieke case van de organisatie centraal staan. [curriculum](https://www.cmd-amsterdam.nl/curriculum-cmd-2018-2019/)"
					+ "\n\n### Werkvormen"
					+ "\nDe docenten van BATTERY zijn zeer ervaren in het verzorgen van diverse werkvormen. Wij zullen een voorstel voor een cursus doen dat passend is bij de kennisbehoefte van de opdrachtgever. Deze voorstellen variëren van bijvoorbeeld een tweedaagse training en/of workshop tot een (wekelijkse) cursusdag over een aantal weken. Dit kan op locatie van de opdrachtgever of op een externe locatie met bijbehorende catering en faciliteiten. Het minimum en/of maximum aantal deelnemers is bespreekbaar."
					+ "\n\n### Digitale professionals"
					+ "\nVanuit de opleiding CMD zien wij de volwassenheid van digital design: bij steeds meer organisaties vormt digital design een kernelement in de dienstverlening naar en communicatie met stakeholders. Zowel intern als extern. Om als organisatie en individu over voldoende digital interactive design skills te blijven beschikken is dus continue scholing belangrijk. BATTERY helpt om deze digitale professionals op te leiden. Medewerkers kunnen hier bijvoorbeeld zeer goed hun jaarlijkse scholingsbudget vanuit de organisatie voor inzetten. Voor ZZP’ers zijn opleidingsvouchers beschikbaar gesteld. Onze cursussen zijn vrijgesteld van BTW."
					+ "\n\n### Hoe kunnen wij helpen?"
					+ "\nHeb je interesse in een cursus? We nemen graag contact met je op om de mogelijkheden te bespreken. Via onderstaand formulier kun je vrijblijvend aangeven waar je kennisbehoefte ligt. Je kunt ook ons curiculum eens bekijken ter inspiratie. Als je een mailadres achterlaat kunnen we contact met je opnemen. Mocht je nog meer mensen kennen waarvoor dit interessant zou kunnen zijn, stuur ze deze pagina door. Dan kunnen we voor een kleine groep een cursus aanbieden. We kunnen je dan ook meer vertellen over de kosten voor de cursus. We hanteren een prijs per cursist per dagdeel. Hoe groter de groep, hoe voordeliger de prijs. [curriculum](https://www.cmd-amsterdam.nl/curriculum-cmd-2018-2019/)"
					+ "\n\n## Meer informatie?"
					+ "\nNeem voor meer informatie over de mogelijkheden om met ons samen te werken via BATTERY contact met op met Mattijs Blekemolen, coördinator externe samenwerking CMD."
					+ "\n\n#{contact}"
			}),
			new Entry({
				title: "studentenwerk",
				raw: "# Studentenwerk"
					+ "\nBekijk ons werk"
					+ "\n\n#{studentenwerk}"
			}),
			new Entry({
				title: "cmd",
				raw: "# Info over de opleiding"
					+ "\nHuman Centred Design"
					+ "\n\n## Communication and Multimedia Design"
					+ "\nWij zijn een ontwerpopleiding (HBO) op het gebied van digitale interactieve producten en diensten. Onze studenten ontwerpen en realiseren digitale interactieve oplossingen die optimaal aansluiten bij de behoeften van de gebruikers. Hierbij staat human centred design centraal."
					+ "\nHet ontwerpproces starten we daarom met het onderzoeken van de gebruikers en hun behoeften en/of problemen. Om vervolgens ideeën te bedenken en die met behulp van eerste versies van het eindproduct (prototypes) steeds verder te verfijnen. De focus bij de uitwerking ligt daarbij op de combinatie van vormgeving, interactie, technologie en het bouwen van de producten."
					+ "\n\n![VR](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/cmd_icon_vr.png)"
					+ "\n\n## Wat maken onze studenten?"
					+ "\n![Ontwerp / probleem](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/cmd-core-nl.png)"
					+ "\n\nCMD-studenten ontwerpen oplossingen voor een diversiteit aan opdrachten en opdrachtgevers. Vanuit hun expertise als startende digital designers kunnen zij opdrachtgevers goed adviseren over de best mogelijke eindproducten."
					+ "\nVan een papieren gids voor internationale studenten in Nederland ontwierpen zij een handzame digitale versie. Maar ook een redesign van een webshop om zo de klantbeleving en verkoop te versterken. Het Academisch Medisch Centrum in Amsterdam kreeg een digitale applicatie voor de afdeling psychiatrie. En via een chip in je fiets op de bijbehorende app zien waar je fiets staat (Fietsie). Zo willen we de (digitale) wereld om ons heen wat mooier en beter te maken."
					+ "\n\n## De kern van de opleiding"
					+ "\nDe kern van de opleiding bestaat uit het meester worden van het onwerpproces: van het begrijpen van het ontwerpprobleem, via het uitwerken en realiseren van het product, tot de feestelijke lancering. En dan in de tweede versie weer beter."
					+ "\nZo hebben eerstejaars studenten bijvoorbeeld onderzocht welke problemen en behoeften buitenlandse studenten hebben die in Amsterdam komen studeren. Uit dat onderzoek kwam o.a. naar voren dat ze het moeilijk vonden om studenten te ontmoeten. Daarnaast vonden ze het wel leuk om als een echte Amsterdammer te leven door bijvoorbeeld Nederlandse gerechten te eten. Met dat als uitgangspunt hebben de studenten een app ontworpen en gerealiseerd voor kookclubjes voor buitenlandse studenten: “I’m going to make boerenkool today. Want to help cooking? Want a bite?”"
					+ "\nBinnen dit ontwerpproces voor digitaal interactieve producten focussen we op drie hoofdonderwerpen: interaction design, visual design en front-end development. Dat leggen we hieronder graag uit."
					+ "\n\n## T-shaped designers"
					+ "\n![kennen / kunnen / kennen](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/t-shap.png)"
					+ "\n\nTijdens de opleiding kunnen CMD studenten zich naast het gezamenlijke kernprogramma via profileringsvakken individueel ontwikkelen. CMD'ers worden op deze manier opgeleid tot T-shaped designers."
					+ "\nIn het CMD werkveld wordt vaak in teams met verschillende specialisten gewerkt (multidisciplinair). CMD studenten kunnen in deze teams uitstekend uit de voeten, omdat ze door hun brede basis andere teamleden goed begrijpen. CMD studenten zijn aan de ene kant dus meester in het ontwerpproces (hun lijf / kunnen) en aan de andere kant bekend met een breed begrip van factoren die hun werk beïnvloeden (hun handen / kennen). De mix van kunnen / kennen is voor elke student anders afhankelijk van zijn/haar vermogen, interesses en ambities."
					+ "\n\n## Soorten T-shaped designers"
					+ "\nCMD studenten kunnen zich tijdens de opleiding in de diepte of breedte ontwikkelen. Hierdoor ontstaan verschillende typen T-shaped designers."
					+ "\nOns kernprogramma richt zich op het gehele ontwerpproces, interaction design, visual design en front-end development. Door eigen keuzes van studenten ontstaan grofweg vier typen ontwerpers: brede ambachtslieden, specialisten, digitale duizendpoten en design researchers (uitzonderingen)."
					+ "\n\n### Brede ambachtslieden"
					+ "\nDe meeste van onze studenten ontwikkelen zich tijdens de opleiding in de breedte met een kleine specialisatie. Zij komen na de studie bijvoorbeeld bij full-service ontwerpbureaus als Info.nl of Fabrique in dienst. Maar ook bij bedrijven die hun digitale producen zelf ontwikkelen, zoals bijvoorbeeld Booking.com, ING en Coolblue."
					+ "\n\n![Brede ambachtslieden](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/uitgebalanceerde-brede-ambachtslieden.png)"
					+ "\n\n### Specialisten"
					+ "\nSommige CMD studenten vinden tijdens hun opleiding die ene passie, om daar vervolgens supergoed in te worden. Die werken na hun studie bijvoorbeeld als Usability Expert bij Valsplat of als Developer bij Q42. Anderen weten alles van een bepaald domein - zo werken er studenten bij Squla aan ‘leuk online leren’ voor kinderen."
					+ "\n\n![Specialisten](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/specialisten.png)"
					+ "\n\n### Digitale duizendpoten"
					+ "\nEen kleine groep van onze afgestudeerden is goed in alle onderdelen. Die werken vaak in kleine ontwerpbureaus waar je alle specialisaties moet beheersen. Of in kleine bedrijven waar ze de digitale duizendpoot zijn. En dan zijn er nog onze absolute toppers die in alles uitblinken en écht overal terecht kunnen (onze unicorns)."
					+ "\n\n![Digitale duizendpoten](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/eigen-ontwerpbureau-etc.png)"
					+ "\n\n### Design researchers"
					+ "\nEnkele afgestudeerden zijn werkzaam in het voortraject van het ontwerpproces. Bureau STBY doet bijvoorbeeld onderzoek naar 'digitale wensen van mensen', waar ontwerperbureaus vervolgens mee verder gaan. Bij Marktplaats is een CMD student als productmanager verantwoordelijk voor het tweedehands-auto deel van de site."
					+ "\n\n![Design researchers](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/design-researchers-NL.png)"
					+ "\n\n## Onderwijsprogramma"
					+ "\n![Onderwijsprogramma](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/cmd_icon_notebook-1-e1542316061901.png)"
					+ "\n\nDe vakken gaan over strategie, design, en techniek. Studenten leren te denken en te handelen als een ontwerper. Ze leren naast ‘ontwerpen’ ook ‘maken’, ‘onderzoeken’, ‘projectmanagen’ en ‘adviseren’. Studenten kunnen met behulp van profileringsvakken, stages en minoren zelf richting geven aan hun opleiding. Met een groeiend internationaal netwerk van bedrijven en universiteiten kunnen studenten ook hun internationale competenties verder ontwikkelen."
					+ "\nSteeds meer organisaties zien het belang van goed ontworpen online mediaproducten en diensten. CMD’ers zijn hier van toegevoegde waarde. Een flexibel onderwijsprogramma met vakken, projecten en gastcolleges van experts, springt continu in op nieuwe ontwikkelingen. De docenten hebben goede connecties in de creatieve industrie en vertalen zo recente ontwikkelingen naar het gehele onderwijsprogramma (curriculum). Bekijk ook eens onze Moodle (digitale leeromgeving) voor nog meer informatie."
				}),
				new Entry({
					title: "vakken",
					raw: "# Info over de studievakken"
						+ "\n\nCurriculum CMD amsterdam"
						+ "\n\n![Info over de studievakken](https://www.cmd-amsterdam.nl/wp-content/uploads/2016/09/poster-Curriculum-CMD-1819.png)"
				}),
				new Entry({
					title: "stages",
					raw: "# Stages"
						+ "\nDaar groei je van"
						+ "\n\n## Jonge digital designers. Een aanwinst voor elk bedrijf."
						+ "\n\nCMD-studenten gaan tweemaal op stage. Een korte stage in het tweede jaar en een lange stage in het derde of het laatste jaar. Zij kunnen zo hun verworven kennis, vaardigheden en houding rond interaction design, visual design en/of frontend development in de praktijk delen met en toetsen bij hun stagebedrijf."
						+ "\nDe tweedejaars stage stage duurt tien weken, vier of vijf dagen per week in de periode februari – april of april – juni. De lange stage is een full-time stage van 20 weken en loopt van september tot medio januari. Wanneer studenten hun minor en de stage omdraaien loopt hun lange stage van februari tot juni."
						+ "\n\n![Sfeerbeeld](http://www.cmd-amsterdam.nl/wp-content/uploads/2019/01/cmd_daantjebons_0015-1.jpg)"
						+ "\n\n[Info korte stage](http://www.cmd-amsterdam.nl/?p=1679)"
						+ "\n\n[Info lange stage](http://www.cmd-amsterdam.nl/samenwerken/informatie-over-stages/informatie-over-de-lange-stage/)"
						+ "\n\n## Geschikte stagebedrijven"
						+ "\n\nWij stellen vanuit CMD een aantal voorwaarden aan stagebedrijven. Dat doen wij om ervoor te zorgen dat onze studenten tijdens hun stages zoveel mogelijk kunnen leren en delen. Dat is in hun belang en ook in het belang van het stagebedrijf."
						+ "\nBij CMD Amsterdam worden studenten opgeleid tot digital interactive designers. Via vakken en projecten rond de beroepsrollen interaction design, visual design en frontend development ontwikkelen zij zich tot startende ontwerpers met een specialisme in of met een combinatie van deze rollen. Voorbeelden van startersfuncties zijn bijvoorbeeld: user experience designer, visual interface designer, webdeveloper en frontend designer."
						+ "\nHet is belangrijk dat stagebedrijven binnen één of meerdere van deze beroepsrollen mensen werkzaam heeft, zodat stagiairs door deze vakmensen begeleid kunnen worden. Goede stagebedrijven zijn bij voorkeur organisaties met vijf of meer vaste medewerkers en actief in het CMD werkveld. Ook moeten onze studenten in deze organisaties zoveel mogelijk kunnen samenwerken met professionals uit hun toekomstige werkveld. Dit team is dus een belangrijk criteria."
						+ "\n\n## Stagebureau CMD Amsterdam"
						+ "\n\nVoor meer vragen rondom stages kunt u contact opnemen met ons stagebureau. Onze stagecoördinator Jos Kok komt graag met u in gesprek over de mogelijkheden."
						+ "\n\nHet CMD Stagebureau is bereikbaar via mail of 06 – 21157122 (stagecoördinator Jos Kok). Jos is naast stagecoördinator ook nog docent bij CMD, dus hij doet zijn best om zo snel mogelijk alle verzoeken te beantwoorden."
						+ "\n\n[Mail onze stagebureau](#)"
				}),
				new Entry({
					title: "offline",
					raw: "# Je bent offline"
						+ "\nMaar dit kun je nog lezen"
						+ "\n\n[Info over deze opleiding](/read/cmd)"
						+ "\n[Info over de studievakken](/read/vakken)"
						+ "\n[Samenwerken met CMD](/read/doorgroeien)"
				}),
				new Entry({
					title: "studentenwerk-project",
					raw: "# Studentenwerk"
						+ "\nThe game changer"
						+ "\n#{voorbeeld-project}"
				}),
				new Entry({
					title: "home",
					raw: `<section class="hero-image" id="hero">
					<div class="hero-image__image">
						<img loading="lazy"
						sizes="(max-width: 428px) 100vw, 428px"
						srcset="/images/cmd-blocks_medium.png 150w,
						/images/cmd-blocks_big.png 428w"
						src="/images/cmd-blocks_big.png"
						alt="Drie blokken met daarin de letters C M en D. Je zou kunnen zeggen dat het blok-letters zijn. Hahaha!">
					</div>
					<div class="hero-image__textblock">
						<h1 aria-label="Welkom op de website van CMD Amsterdam. Hopelijk vind je wat je zoekt." class="block-border">CMD Amsterdam</h1>
						<p class="block-fill">Digital interactive design</p>
					</div>
					<img loading="lazy" class="icon hero-image__icon" src="/images/icon/laptop_icon.svg" alt="">
				</section>
				<section class="studentenwerk">
					<h2>Studentenwerk</h2>
					<div class="articles">
						<div class="studentenwerk__article">
							<img loading="lazy"
							sizes="(max-width: 600px) 100vw, 600px"
							data-srcset="/images/LR-kip-3-kopieren-small.jpg 320w,
							/images/LR-kip-3-kopieren-medium.jpg 490w,
							/images/LR-kip-3-kopieren-big.jpg 600w"
							data-src="/images/LR-kip-3-kopieren-big.jpg"
							alt="Een foto van een kip met een zonnebril. Mega wierd."
							class="lazy">
							<h3 lang="en">The game changer</h3>
							<p><span lang="en">The Game Changer</span> houdt de game-uren van uw kind bij. Als de tijd verstreken is kan uw kind niet meer spelen. Hoe eerder je stopt met gamen, hoe meer bonusuren je krijgt.</p>
						</div>
						<div class="studentenwerk__article">
							<img loading="lazy"
							sizes="(max-width: 600px) 100vw, 600px"
							data-srcset="/images/LR-Featured-screen_small.jpg 320w,
							/images/LR-Featured-screen_medium.jpg 536w,
							/images/LR-Featured-screen_big.jpg 600w"
							data-src="/images/LR-Featured-screen_big.jpg"
							alt="Een plaatje van een rups. Geen echte rups, maak je geen zorgen."
							class="lazy">
							<h3>Rupsie</h3>
							<p>Rupsie is een app voor kinderen van 5-6 jaar. Met Rupsie maken kinderen, in combinatie met <abbr aria-label="artificiële intelligentie" title="Artificial Intelligence">AR</abbr>,vrolijke deuntjes voor beestjes. Het combineert op slimme wijze de fysieke en digitale wereld.</p>
						</div>
						<div class="studentenwerk__article">
							<img loading="lazy"
							sizes="(max-width: 600px) 100vw, 600px"
							data-srcset="/images/LR-3-App-icon_small.jpg 320w,
							/images/LR-3-App-icon_big.jpg 600w"
							data-src="/images/LR-3-App-icon_big.jpg"
							alt="Een blauw app-icoontje met het logo van de HUB applicatie"
							class="lazy">
							<h3>HUB</h3>
							<p>Met HUB zal het vervoer van bedrijven in de binnenstad op een duurzame manier veranderen. Via een app kunnen werknemers slimme voertuigen - met digitaal slot - reserveren, beheren en classificeren.</p>
						</div>
					</div>
					<a class="btn--grey-shadow" href="/read/studentenwerk">Bekijk studentenwerk</a>
				</section>
				<section class="cmd">
					<div class="cmd__textblock">
						<h2>Over CMD</h2>
						<p class="p-big">Wij zijn Communication and Multimedia Design (CMD). Wij zijn een HBO-ontwerpopleiding voor digital interactive design. Onze studenten ontwerpen en realiseren digitale interactieve oplossingen die optimaal aansluiten bij de behoeften van de gebruikers.</p>
						<p>In de kern van de opleiding zit interaction design, visual design en techniek (met name frontend development). Onze vakdocenten hebben een goed netwerk en vertalen continu recente ontwikkelingen naar het gehele onderwijsprogramma. Afgestudeerde studenten zijn daarmee van grote waarde in het huidige werkveld. Daar zijn wij trots op!</p>
						<a class="btn--white-shadow" href="/read/cmd">Meer over CMD</a>
					</div>
					<div class="cmd__image">
						<img loading="lazy" class="icon icon-top-left lazy" data-src="/images/icon/rotate_icon.svg" alt="Dit is een icoontje dat heel grappig ronddraait. Helaas kan je het niet zien want hij gaat echt heel hard! wieweweweww!">
						<img loading="lazy"
						sizes="(max-width: 1440px) 100vw, 1440px"
						data-srcset="/images/cmd_daantjebons_0007_small.jpg 320w,
						/images/cmd_daantjebons_0007_medium.jpg 1097w,
						/images/cmd_daantjebons_0007_big.jpg 1440w"
						data-src="/images/cmd_daantjebons_0007_big.jpg"
						alt="Iemand is een interface aan het designen, dan krijg je een beetje een idee van wat CMD'ers doen. Allemaal blokjes en tekentjes, ik begrijp er niks van."
						class="primary-image lazy">
						<img loading="lazy" class="icon icon-bottom-right lazy" data-src="/images/icon/robot_icon.svg" alt="Hee kijk een robot. Ik ben ook een robot, misschien ken ik hem wel.">
					</div>
				</section>
				<section class="subjects">
					<div class="subjects__image">
						<img loading="lazy" class="icon icon-top-right lazy" data-src="/images/icon/card_icon.svg" alt="Wooow, dit icoontje van speelkaarten doet echt hele rare dingen. Hij groeit en krimpt de hele tijd. Gek zeg.">
						<img loading="lazy"
						sizes="(max-width: 1440px) 100vw, 1440px"
						data-srcset="/images/cmd_daantjebons_0025_small.jpg 320w,
						/images/cmd_daantjebons_0025_medium.jpg 990w,
						/images/cmd_daantjebons_0025_big.jpg 1440w"
						data-src="/images/cmd_daantjebons_0025_big.jpg"
						alt="Op deze foto kun je een hele rommelige tafel zien. De studenten zijn lekker aan het werk, helaas leren ze hier niet om hun rotzooi op te ruimen, hiehie"
						class="primary-image lazy">
						<img loading="lazy" class="icon icon-bottom-left lazy" data-src="/images/icon/hand_icon.svg" alt="Aaah, een bewegende hand! Oh nee, het is maar een plaatje. Gelukkig.">
					</div>
					<div class="subjects__textblock">
						<h2>Studievakken</h2>
						<p class="p-big">Het werk van onze studenten varieert van websites tot webshops, en van fysieke producten met een <abbr title="Near Field Communication" lang="en">NFC</abbr>-chip tot interactieve datavisualisaties. En dan zijn we er vast nog een paar vergeten.</p>
						<p>We hebben een mooie selectie van studentenwerk voor je gemaakt. Hierbij kun je ook kiezen tussen werk uit de vier studiejaren. Laat je verrassen en voel je vrij om er comments bij te plaatsen!</p>
						<a class="btn--grey-shadow" href="/read/vakken">Bekijk de studievakken</a>
					</div>
				</section>
				<section class="grow">
					<div class="grow__image">
						<img loading="lazy"
						sizes="(max-width: 776px) 100vw, 776px"
						data-srcset="/images/t-shaped-designers_small.png 320w,
						/images/t-shaped-designers_big.png 776w"
						data-src="/images/t-shaped-designers_big.png"
						alt="Vier diagrammen die illustreren wat de expertise van een CMD'er kan zijn."
						class="lazy">
					</div>
					<div class="grow__textblock">
						<h2>Doorgroeien</h2>
						<p class="p-big">CMD studenten kunnen zich tijdens de opleiding in de diepte of breedte ontwikkelen. Hierdoor ontstaan verschillende typen T-shaped designers. </p>
						<p>Ons kernprogramma richt zich op het gehele ontwerpproces, interaction design, visual design en front-end development. Door eigen keuzes van studenten ontstaan grofweg vier typen ontwerpers:</p>
						<ul>
							<li>Brede ambachtslieden</li>
							<li>Specialisten</li>
							<li>Digitale duizendpoten</li>
							<li>Design researchers (uitzonderingen)</li>
						</ul>
						<img loading="lazy" class="icon icon-section lazy" data-src="/images/icon/pin_icon.svg" alt="Een knipperende punaise, het moet niet gekker worden.">
						<a class="btn--grey-shadow" href="/read/doorgroeien">Meer over doorgroeien</a>
					</div>
				</section>
				<section class="work-together">
					<div class="work-together__textblock">
						<h2>Samenwerken</h2>
						<p class="p-big">Onze opleiding hecht grote waarde aan samenwerking. We kijken met interesse naar de ontwikkelingen in ons vakgebied en de samenleving en zoeken daar onderwerpen en partners uit. Daarnaast stellen wij onze kennis en kunde rond digital interactive design graag beschikbaar voor ons netwerk.</p>
						<p>Dit alles doen we via:</p>
						<ul>
							<li>Stages</li>
							<li>Het werken aan projecten</li>
							<li>Gastcolleges</li>
							<li>Bedrijfsbezoeken</li>
							<li>Bijbaantjes</li>
							<li>(Betaalde) ontwerp klussen voor onze studenten</li>
							<li>Korte cursussen en masterclasses voor bedrijven </li>
						</ul>
						<a href="/read/samenwerken">Meer over samenwerken</a>
					</div>
					<div class="work-together__image">
						<img loading="lazy" class="icon icon-top-left lazy" data-src="/images/icon/globe_icon.svg" alt="Een ronddraaiende globe. Deze plaatjes geven wel een unieke draai aan het verhaal. Hiehaho. Dat was een woordgrapje trouwens.">
						<img loading="lazy"
						sizes="(max-width: 740px) 100vw, 740px"
						data-srcset="/images/cmd_daantjebons_small.jpg 320w,
						/images/cmd_daantjebons_mediun.jpg 566w,
						/images/cmd_daantjebons_big.jpg 740w"
						data-src="/images/cmd_daantjebons_big.jpg"
						alt="Iemand houdt een presentatie, en een studente maakt notities. CMD'ers zijn dan ook hele oplettende mensen."
						class="primary-image lazy">
						<img loading="lazy" class="icon icon-bottom-right lazy" data-src="/images/icon/phone_icon.svg" alt="Een trillende telefoon, volgens mij heeft iemand een nieuwe tinder-notificatie. Spannend.">
					</div>
				</section>
				<section class="contact">
					<h2 class="contact__title">Contact</h2>
					<form action="" class="contact__form" id="contact-form">
						<div class="contact-form-left">
							<select class="dropbtn">
								<option selected disabled hidden>Kies een onderwerp</option>
								<option>Vraag</option>
								<option>Samenwerken</option>
								<option>Overig</option>
							</select>
							<input class="form__name" type="text" name="" placeholder="Naam" aria-label="Vul je naam in">
							<input class="form__email" type="email" class="email" name="" placeholder="Mailadres (i.v.m. reply)" aria-label="Vul je e-mailadres in">
						</div>
						<div class="contact-form-right">
							<textarea class="form" name="" id="" placeholder="Inhoud bericht" aria-label="Vul hier de inhoud van je bericht in"></textarea>
						</div>
					</form>
					<div class="contact__btn">
						<button type="submit" class="btn btn--secondary" form="contact-form">Verstuur</button>
					</div>
				</section>
				<section class="staff">
					<div class="staff__card">
						<img loading="lazy" class="card__image lazy" data-src="/images/staff/harry-zengerink.jpg" alt="Een zwart-wit foto van Harry Zengerink. Hij staat voor een weelderige haag en lacht je toe.">
						<p class="card__name">Harry Zengerink</p>
						<p class="card__position">Opleidingsmanager</p>
						<p class="card__phone">06 – 21 15 89 83</p>
					</div>
					<div class="staff__card">
						<img loading="lazy" class="card__image lazy" data-src="/images/staff/marielle-beekman.jpg" alt="Een zwart-wit foto van Marielle Beekman. Ze poseert voor een egale muur en ook zij lacht je toe.">
						<p class="card__name">Marielle Beekman</p>
						<p class="card__position">Hoofd Onderwijsbureau</p>
						<p class="card__phone">+31 (0) 20 595 1855</p>
					</div>
					<div class="staff__card">
						<img loading="lazy" class="card__image lazy" data-src="/images/staff/jos-kok.jpg" alt="Een zwart-wit foto van Jos Kok. Er weerkaatst licht in zijn bril terwijl hij naar je lacht.">
						<p class="card__name">Jos Kok</p>
						<p class="card__position">Stagecoördinator</p>
						<p class="card__phone">06 – 21 15 71 22</p>
					</div>
					<div class="staff__card">
						<img loading="lazy" class="card__image lazy" data-src="/images/staff/mattijs-blekemolen.jpg" alt="Een zwart-wit foto van Mattijs Blekemolen. Hij onderhoudt deze website, dus je mag best naar hem lachen. Dat ziet hij natuurlijk niet, maar jij ziet hem ook niet lachen dus dan staan jullie quitte.">
						<p class="card__name">Mattijs Blekemolen</p>
						<p class="card__position">Externe Samenwerking</p>
						<p class="card__phone">06 – 21 15 61 86</p>
					</div>
				</section>
				<section class="banner">
					<p class="banner__title">Studeren bij CMD?</p>
					<a class="banner__button" href="">Kom naar onze open dag!</a>
				</section>
				<a tabindex="0" title="Scroll terug naar boven" aria-label="Scroll terug naar boven" id="top-button" type="button" href="#hero">&#8593;</a>
				<script type="module" src="/js/home.js"></script>`
				})
			];
		}

	getByTitle (title) {
		const lowerCaseTitle = title.toLowerCase();
		return this.articles.find(article => article.title.toLowerCase() === lowerCaseTitle);
	}

	getById (id) {
		return this.articles.find(article => article.id === id);
	}

	get (...args) {
		if (isUid(args[0]))
			return this.getById(...args);
		else
			return this.getByTitle(...args);
	}

	setByTitle (title = "", raw) {
		const lowerCaseTitle = title.toLowerCase();
		const index = this.articles.findIndex(article => article.title.toLowerCase() === lowerCaseTitle);
		let entry;
		if (index !== -1)
			this.articles.splice(index, 1, entry = new Entry({ title, raw }));
		else
			this.articles.push(entry = new Entry({ title: getFirstHeadingLinkSafe(raw), raw }));

		return entry;
	}

	setById (id, raw) {
		const index = this.articles.findIndex(article => article.id === id);
		let entry;
		if (index !== -1)
			this.articles.splice(index, 1, entry = new Entry({ title: getFirstHeadingLinkSafe(raw), raw }));
		else
			this.articles.push(entry = new Entry({ title: getFirstHeadingLinkSafe(raw), raw }));

		return entry;
	}

	set (...args) {
		if (isUid(args[0]))
			return this.setById(...args);
		else if (args[0] === undefined && typeof args[1] === "string")
			return this.setByTitle(getFirstHeadingLinkSafe(args[1]), ...args.slice(1));
		else
			return this.setByTitle(...args);
	}

	existsByTitle (title) {
		const lowerCaseTitle = title.toLowerCase();
		return this.articles.findIndex(article => article.title.toLowerCase() === lowerCaseTitle) !== -1;
	}

	existsById (id) {
		return this.articles.findIndex(article => article.id === id) !== -1;
	}

	exists (...args) {
		if (isUid(args[0]))
			return this.existsById(...args);
		else
			return this.existsByTitle(...args);
	}
}

module.exports = new DB();