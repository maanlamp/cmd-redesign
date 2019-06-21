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
			new Entry({
				title: "studentenwerk",
				raw: "# Studentenwerk"
					+ "\n\n#{studentenwerk}"
			}),
			new Entry({
				title: "cmd",
				raw: "# Info over de opleiding"
					+ "\n\n## Communication and Multimedia Design"
					+ "\n\nWij zijn een ontwerpopleiding (HBO) op het gebied van digitale interactieve producten en diensten. Onze studenten ontwerpen en realiseren digitale interactieve oplossingen die optimaal aansluiten bij de behoeften van de gebruikers. Hierbij staat human centred design centraal."
					+ "\n\nHet ontwerpproces starten we daarom met het onderzoeken van de gebruikers en hun behoeften en/of problemen. Om vervolgens ideeën te bedenken en die met behulp van eerste versies van het eindproduct (prototypes) steeds verder te verfijnen. De focus bij de uitwerking ligt daarbij op de combinatie van vormgeving, interactie, technologie en het bouwen van de producten."
					+ "\n\n![VR](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/cmd_icon_vr.png)"
					+ "\n\n## Wat maken onze studenten?"
					+ "\n\nCMD-studenten ontwerpen oplossingen voor een diversiteit aan opdrachten en opdrachtgevers. Vanuit hun expertise als startende digital designers kunnen zij opdrachtgevers goed adviseren over de best mogelijke eindproducten."
					+ "\n\nVan een papieren gids voor internationale studenten in Nederland ontwierpen zij een handzame digitale versie. Maar ook een redesign van een webshop om zo de klantbeleving en verkoop te versterken. Het Academisch Medisch Centrum in Amsterdam kreeg een digitale applicatie voor de afdeling psychiatrie. En via een chip in je fiets op de bijbehorende app zien waar je fiets staat (Fietsie). Zo willen we de (digitale) wereld om ons heen wat mooier en beter te maken."
					+ "\n\n![Ontwerp / probleem](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/cmd-core-nl.png)"
					+ "\n\n## De kern van de opleiding"
					+ "\n\nDe kern van de opleiding bestaat uit het meester worden van het onwerpproces: van het begrijpen van het ontwerpprobleem, via het uitwerken en realiseren van het product, tot de feestelijke lancering. En dan in de tweede versie weer beter."
					+ "\n\nZo hebben eerstejaars studenten bijvoorbeeld onderzocht welke problemen en behoeften buitenlandse studenten hebben die in Amsterdam komen studeren. Uit dat onderzoek kwam o.a. naar voren dat ze het moeilijk vonden om studenten te ontmoeten. Daarnaast vonden ze het wel leuk om als een echte Amsterdammer te leven door bijvoorbeeld Nederlandse gerechten te eten. Met dat als uitgangspunt hebben de studenten een app ontworpen en gerealiseerd voor kookclubjes voor buitenlandse studenten: “I’m going to make boerenkool today. Want to help cooking? Want a bite?”"
					+ "\n\nBinnen dit ontwerpproces voor digitaal interactieve producten focussen we op drie hoofdonderwerpen: interaction design, visual design en front-end development. Dat leggen we hieronder graag uit."
					+ "\n\n## T-shaped designers"
					+ "\n\nTijdens de opleiding kunnen CMD studenten zich naast het gezamenlijke kernprogramma via profileringsvakken individueel ontwikkelen. CMD'ers worden op deze manier opgeleid tot T-shaped designers."
					+ "\n\nIn het CMD werkveld wordt vaak in teams met verschillende specialisten gewerkt (multidisciplinair). CMD studenten kunnen in deze teams uitstekend uit de voeten, omdat ze door hun brede basis andere teamleden goed begrijpen. CMD studenten zijn aan de ene kant dus meester in het ontwerpproces (hun lijf / kunnen) en aan de andere kant bekend met een breed begrip van factoren die hun werk beïnvloeden (hun handen / kennen). De mix van kunnen / kennen is voor elke student anders afhankelijk van zijn/haar vermogen, interesses en ambities."
					+ "\n\n![kennen / kunnen / kennen](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/t-shap.png)"
					+ "\n\n## Soorten T-shaped designers"
					+ "\n\nCMD studenten kunnen zich tijdens de opleiding in de diepte of breedte ontwikkelen. Hierdoor ontstaan verschillende typen T-shaped designers."
					+ "\n\nOns kernprogramma richt zich op het gehele ontwerpproces, interaction design, visual design en front-end development. Door eigen keuzes van studenten ontstaan grofweg vier typen ontwerpers: brede ambachtslieden, specialisten, digitale duizendpoten en design researchers (uitzonderingen)."
					+ "\n\n![Brede ambachtslieden](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/uitgebalanceerde-brede-ambachtslieden.png)"
					+ "\n\n### Brede ambachtslieden"
					+ "\n\nDe meeste van onze studenten ontwikkelen zich tijdens de opleiding in de breedte met een kleine specialisatie. Zij komen na de studie bijvoorbeeld bij full-service ontwerpbureaus als Info.nl of Fabrique in dienst. Maar ook bij bedrijven die hun digitale producen zelf ontwikkelen, zoals bijvoorbeeld Booking.com, ING en Coolblue."
					+ "\n\n![Specialisten](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/specialisten.png)"
					+ "\n\n### Specialisten"
					+ "\n\nSommige CMD studenten vinden tijdens hun opleiding die ene passie, om daar vervolgens supergoed in te worden. Die werken na hun studie bijvoorbeeld als Usability Expert bij Valsplat of als Developer bij Q42. Anderen weten alles van een bepaald domein - zo werken er studenten bij Squla aan ‘leuk online leren’ voor kinderen."
					+ "\n\n![Digitale duizendpoten](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/eigen-ontwerpbureau-etc.png)"
					+ "\n\n### Brede ambachtslieden"
					+ "\n\nEen kleine groep van onze afgestudeerden is goed in alle onderdelen. Die werken vaak in kleine ontwerpbureaus waar je alle specialisaties moet beheersen. Of in kleine bedrijven waar ze de digitale duizendpoot zijn. En dan zijn er nog onze absolute toppers die in alles uitblinken en écht overal terecht kunnen (onze unicorns)."
					+ "\n\n![Design researchers](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/design-researchers-NL.png)"
					+ "\n\n### Design researchers"
					+ "\n\nEnkele afgestudeerden zijn werkzaam in het voortraject van het ontwerpproces. Bureau STBY doet bijvoorbeeld onderzoek naar 'digitale wensen van mensen', waar ontwerperbureaus vervolgens mee verder gaan. Bij Marktplaats is een CMD student als productmanager verantwoordelijk voor het tweedehands-auto deel van de site."
					+ "\n\n![Onderwijsprogramma](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/11/cmd_icon_notebook-1-e1542316061901.png)"
					+ "\n\n## Onderwijsprogramma"
					+ "\n\nDe vakken gaan over strategie, design, en techniek. Studenten leren te denken en te handelen als een ontwerper. Ze leren naast ‘ontwerpen’ ook ‘maken’, ‘onderzoeken’, ‘projectmanagen’ en ‘adviseren’. Studenten kunnen met behulp van profileringsvakken, stages en minoren zelf richting geven aan hun opleiding. Met een groeiend internationaal netwerk van bedrijven en universiteiten kunnen studenten ook hun internationale competenties verder ontwikkelen."
					+ "\n\nSteeds meer organisaties zien het belang van goed ontworpen online mediaproducten en diensten. CMD’ers zijn hier van toegevoegde waarde. Een flexibel onderwijsprogramma met vakken, projecten en gastcolleges van experts, springt continu in op nieuwe ontwikkelingen. De docenten hebben goede connecties in de creatieve industrie en vertalen zo recente ontwikkelingen naar het gehele onderwijsprogramma (curriculum). Bekijk ook eens onze Moodle (digitale leeromgeving) voor nog meer informatie."
				}),
				new Entry({
					title: "vakken",
					raw: "# Info over de studievakken"
					+ "\n![Info over de studievakken](https://www.cmd-amsterdam.nl/wp-content/uploads/2016/09/poster-Curriculum-CMD-1819.png)"
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