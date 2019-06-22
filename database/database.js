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
					+ "\n\n![Foto van iemand die een interface ontwerpt.](../images/cmd_daantjebons_0007.jpg)"
			}),
			new Entry ({
				title: "contact",
				raw: "# Contact"
					+ "\n#{contact}"
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
					+ "\n![afbeeldingen over projecten](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_daantjebons_0022.jpg)"
					+ "\n\nHet werken in / aan projecten zit in de kern van onze opleiding. Van propedeuse tot afstudeerjaar wordt zowel in teamverband als individueel veel aan projecten gewerkt. Deze (onderzoeks)projecten bieden een goede mogelijkheid om externe opdrachten rond 'digital interactive design' uit het werkveld aan te bieden aan onze studenten."
					+ "\nAandachtspunt is dat er genoeg ruimte moet zijn voor de ideeën en de creativiteit van onze studenten. Externe opdrachten worden daarom altijd eerst met onze coördinatoren besproken. En soms eindigt een project van één team niet altijd volgens de verwachtingen. Dat hoort bij onderwijs en leren. Daarom vragen wij geen geld voor projecten. Wel uw inspanning en tijd als projectpartner / klant natuurlijk. Heeft u een specifieke vraag met een deadline en een duidelijke beeld over het eindproduct? Dan is een (betaalde) klus voor onze studenten buiten het curriculum wellicht een goed alternatief."
					+ "\nOns curriculum biedt volop mogelijkheden om met externe partijen samen te werken. Bekijk ons curriculum en mogelijk ziet u zelf al vakken, projecten en/of minoren die bij uw vraag aansluiten. We bespreken graag de mogelijkheden. Ook als u geen idee heeft waar uw vraag in het curriculum het beste past natuurlijk."
					+ "\n[curriculum cmd 2018 2019](https://www.cmd-amsterdam.nl/curriculum-cmd-2018-2019/)"
					+ "\n\n## Gastcolleges"
					+ "\nHoe kun je data in je designs toepassen? Of moet je je ontwerp zo maken dat er optimaal van data gebruik gemaakt kan worden? Hoe ziet het werken bij een ontwerpbureau er nu eigenlijk uit? En wat is de meerwaarde van CMD'ers daarin? Wanneer pas je nou wel of juist niet het 'hamburger-menu' toe in je ontwerp?"
					+ "\nEen greep uit een aantal goede vragen die in de recente gastcolleges zijn behandeld. Bedrijven delen hun expertises met onze studenten, docenten, alumni en andere bedrijven tijdens gastcolleges en de serie ICONS. Ook een gastcollege geven? Neem contact met ons op en dan bespreken we de mogelijkheden."
					+ "\n\n![mic icon](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_icon_mic.png)"
					+ "\n\n## Usability Lab"
					+ "\n![usability lab image](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/u-lab.jpg)"
					+ "\n\nGeen goed user centred design zonder Usability Lab natuurlijk! In ons Usability Lab testen onze studenten daarom of de door hun ontworpen applicaties (zowel voor desktop, tablet als small-screen) gebruiksvriendelijk zijn dus en goed scoren op 'usability'."
					+ "\nVia een speciale eyetracker wordt geregistreerd hoe testpersonen door bijvoorbeeld websites en mobiele applicaties navigeren. De ‘heatmap’ die hieruit voortkomt verschaft belangrijke informatie over hoe de gebruiker door de applicatie heeft genavigeerd. Hierdoor kan ook weer een redesign worden uitgevoerd. Het is ook mogelijk om als externe organisatie een opdracht voor ons Usability Lab in te dienen. Meten is weten!"
					+ "\n\n## Bedrijfsbezoeken en evenementen"
					+ "\nWat is er nou leuker dan een groep enthousiaste CMD-studenten uit te nodigen voor een bezoek aan uw organisatie of hulp bij uw evenementen? Onze studenten (en docenten) vinden het altijd erg leuk om langs te komen bij bedrijven uit ons vakgebied."
					+ "\nOp deze manier krijgen studenten beter inzicht in de verschillende soorten organisaties en hun bedrijfsculturen. Wat past er bij mij en wat niet? Waar voel ik mij thuis? Als organisatie is dit tevens een goede manier om toekomstige ontwerptalenten te interesseren voor een stage of een (bij)baan."
					+ "\nHulp bij evenementen kan bestaan uit bijvoorbeeld: filmpjes maken, bloggen, interviewen, foto’s maken, badges uitdelen, sprekers-assistentie of technische ondersteuning. Dat mag betaald, maar kan ook door toegangskaarten te geven en mogelijkheid tot het volgen van delen van het programma en te netwerken met bezoekers / sprekers."
					+ "\n\n![bulb icon](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_icon_bulb.png)"
					+ "\n\n## Opleidingsadviesraad"
					+ "\nOm onze studenten zo goed mogelijk op te leiden tot startende digital interactive designers is het belangrijk om op de hoogte te zijn van de ontwikkelingen in ons vakgebied. Eén van de instrumenten die wij hier als opleiding voor hanteren zijn gesprekken met de Opleidingsadviesraad (OAR). U kunt zich hiervoor als organisatie aanmelden."
					+ "\nDe OAR bestaat op dit moment uit een twintigtal professionals uit ons vakgebied, aangevuld met een aantal medewerkers van de opleiding. Gedurende het jaar komt de OAR een aantal keer samen om te praten over de ontwikkelingen in ons vakgebied en hoe of wij als opleiding nog de juiste ontwerpers opleiden voor dit (toekomstige) vakgebied. Deze sessies vinden plaats bij ons op de opleiding."
					+ "\n\n![image tagcloud](https://www.cmd-amsterdam.nl/wp-content/uploads/2014/05/tagcloud-01.png)"
					+ "\n\n## Golden Dot Awards"
					+ "\n\n#{gda}"
					+ "\n\nHet beste studentenwerk wordt ieder jaar beloond met prijzen tijdens de jaarlijkse Golden Dot Awards. Onze docenten nomineren het beste werk, een vakjury kiest daar de winnaars uit. Dit varieert van propedeuse tot afstudeerjaar en van individueel werk tot teamprojecten"
					+ "\nVoor en na de show kunnen bedrijven, docenten en studenten met elkaar in contact komen. We bieden een aantal bedrijven ook de mogelijkheid om plaats te nemen in de jury. De Golden Dot Awards 2019 wordt begin juli 2019 georganiseerd. Zie ook [www.goldendotawards.nl](www.goldendotawards.nl)."
			}),
			new Entry({
				title: "doorgroeien",
				raw: "# Doorgroeien"
					+ "\nChange your digital design skills."
					+ "\n\n## Cursussen digital interactive design"
					+ "\nVanuit BATTERY geven onze vakdocenten korte cursussen, masterclasses en workshops over de laatste ontwikkelingen rond digital interactive design. Hiermee helpen wij medewerkers en de organisaties waar zij voor werken voor een belangrijk deel 'future proof' te worden en te blijven."
					+ "\nBATTERY is een initiatief van docenten Communication and Multimedia Design. In gesprekken met (stage)bedrijven, merken wij steeds vaker een kennisachterstand m.b.t. de laatste ontwikkelingen in ons vakgebied. Vaak zijn de ‘waan van de dag’ en drukke agenda’s oorzaak bij zowel ontwerpers als management om achterop te raken in de digitale ontwikkelingen. BATTERY is daarbij van toegevoegde waarde."
					+ "\n\n![brain icon](https://www.cmd-amsterdam.nl/wp-content/uploads/2017/02/CMD-AI-transparant.gif)"
					+ "\n\n### Onderwerpen"
					+ "\nCMD docenten zijn gespecialiseerd in het ‘user centered’ ontwerpen van digitale producten en diensten. De kern van ons aanbod gaat over het ontwerpproces, interaction design, visual design en front-end development. Hieronder vallen tal van onderwerpen, zoals bijvoorbeeld Customer Journey Mapping, User Centered Design, Persuasive Design, Datavisualisatie, HTML/CSS, etc. Meer onderwerpen vind je in ons [curriculum](https://www.cmd-amsterdam.nl/curriculum-cmd-2018-2019/). In de cursus kan een specifieke case van de organisatie centraal staan."
					+ "\n\n### Werkvormen"
					+ "\nDe docenten van BATTERY zijn zeer ervaren in het verzorgen van diverse werkvormen. Wij zullen een voorstel voor een cursus doen dat passend is bij de kennisbehoefte van de opdrachtgever. Deze voorstellen variëren van bijvoorbeeld een tweedaagse training en/of workshop tot een (wekelijkse) cursusdag over een aantal weken. Dit kan op locatie van de opdrachtgever of op een externe locatie met bijbehorende catering en faciliteiten. Het minimum en/of maximum aantal deelnemers is bespreekbaar."
					+ "\n\n### Digitale professionals"
					+ "\nVanuit de opleiding CMD zien wij de volwassenheid van digital design: bij steeds meer organisaties vormt digital design een kernelement in de dienstverlening naar en communicatie met stakeholders. Zowel intern als extern. Om als organisatie en individu over voldoende digital interactive design skills te blijven beschikken is dus continue scholing belangrijk. BATTERY helpt om deze digitale professionals op te leiden. Medewerkers kunnen hier bijvoorbeeld zeer goed hun jaarlijkse scholingsbudget vanuit de organisatie voor inzetten. Voor ZZP’ers zijn opleidingsvouchers beschikbaar gesteld. Onze cursussen zijn vrijgesteld van BTW."
					+ "\n\n### Hoe kunnen wij helpen?"
					+ "\nHeb je interesse in een cursus? We nemen graag contact met je op om de mogelijkheden te bespreken. Via onderstaand formulier kun je vrijblijvend aangeven waar je kennisbehoefte ligt. Je kunt ook ons [curriculum](https://www.cmd-amsterdam.nl/curriculum-cmd-2018-2019/) eens bekijken ter inspiratie. Als je een mailadres achterlaat kunnen we contact met je opnemen. Mocht je nog meer mensen kennen waarvoor dit interessant zou kunnen zijn, stuur ze deze pagina door. Dan kunnen we voor een kleine groep een cursus aanbieden. We kunnen je dan ook meer vertellen over de kosten voor de cursus. We hanteren een prijs per cursist per dagdeel. Hoe groter de groep, hoe voordeliger de prijs."
					+ "\n\n## Interesse? Laat het ons weten!"
					+ "\nOp welk(e) gebied(en) zou je een cursus willen volgen? Bijvoorbeeld: UX, customer journey mapping, design patterns, service design, persuasive design, HTML/CSS, User Centred Design, ..."
					+ "\n\n## Meer informatie?"
					+ "\nNeem voor meer informatie over de mogelijkheden om met ons samen te werken via BATTERY contact met op met Mattijs Blekemolen, coördinator externe samenwerking CMD."
					+ "\n\n#{contact}"
			}),
			new Entry({
				title: "studentenwerk",
				raw: "# Studentenwerk"
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
					+ "\n\n![Brede ambachtslieden](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/uitgebalanceerde-brede-ambachtslieden.png)"
					+ "\n\n### Brede ambachtslieden"
					+ "\nDe meeste van onze studenten ontwikkelen zich tijdens de opleiding in de breedte met een kleine specialisatie. Zij komen na de studie bijvoorbeeld bij full-service ontwerpbureaus als Info.nl of Fabrique in dienst. Maar ook bij bedrijven die hun digitale producen zelf ontwikkelen, zoals bijvoorbeeld Booking.com, ING en Coolblue."
					+ "\n\n![Specialisten](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/specialisten.png)"
					+ "\n\n### Specialisten"
					+ "\nSommige CMD studenten vinden tijdens hun opleiding die ene passie, om daar vervolgens supergoed in te worden. Die werken na hun studie bijvoorbeeld als Usability Expert bij Valsplat of als Developer bij Q42. Anderen weten alles van een bepaald domein - zo werken er studenten bij Squla aan ‘leuk online leren’ voor kinderen."
					+ "\n\n![Digitale duizendpoten](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/eigen-ontwerpbureau-etc.png)"
					+ "\n\n### Brede ambachtslieden"
					+ "\nEen kleine groep van onze afgestudeerden is goed in alle onderdelen. Die werken vaak in kleine ontwerpbureaus waar je alle specialisaties moet beheersen. Of in kleine bedrijven waar ze de digitale duizendpoot zijn. En dan zijn er nog onze absolute toppers die in alles uitblinken en écht overal terecht kunnen (onze unicorns)."
					+ "\n\n![Design researchers](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/design-researchers-NL.png)"
					+ "\n\n### Design researchers"
					+ "\nEnkele afgestudeerden zijn werkzaam in het voortraject van het ontwerpproces. Bureau STBY doet bijvoorbeeld onderzoek naar 'digitale wensen van mensen', waar ontwerperbureaus vervolgens mee verder gaan. Bij Marktplaats is een CMD student als productmanager verantwoordelijk voor het tweedehands-auto deel van de site."
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