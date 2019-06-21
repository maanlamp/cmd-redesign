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
					+ "\n\nDit alles doen we via stages, het werken aan projecten, gastcolleges, bedrijfsbezoeken, bijbaantjes, (betaalde) ontwerpklussen voor onze studenten en korte cursussen en masterclasses voor bedrijven. We zetten hieronder de mogelijkheden uiteen. Samenwerken? Mail Mattijs Blekemolen, onze coördinator externe samenwerking."
					+ "\n\n![rotate](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/Cmd-Arrow-icon-transparant.gif)"
					+ "\n\n## Stages"
					+ "\n![Foto van iemand die een interface ontwerpt.](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_icon_pencilcross.png)"
					+ "\n\nBij CMD in Amsterdam worden studenten opgeleid tot digital interactive designers. Via vakken en projecten rond de specialismen interaction design, visual design en techniek (met name frontend development) ontwikkelen zij zich tot startende ontwerpers met een expertise in of met een combinatie van deze specialismen."
					+ "\n\nTijdens stages werken onze studenten mee aan de digital design projecten bij bedrijven. Aan het einde van het tweede studiejaar via een korte stage van tien weken, in het afstudeerjaar via een lange stage van twintig weken. Onze studievereniging IAM Core organiseert twee keer per jaar Stage Diving; een stagemarkt voor studenten en bedrijven. In februari voor de tweedejaars stage (start april), in juni gericht op de aankomende afstudeerstage (start september)."
					+ "\n[Informatie over stages](https://www.cmd-amsterdam.nl/samenwerken/informatie-over-stages/)"
					+ "\n[Stage diving](http://iamcore.nl/stagediving/)"
					+ "\n\n## Projecten"
					+ "\n![afbeeldingen over projecten](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_daantjebons_0022.jpg)"
					+ "\n\nHet werken in / aan projecten zit in de kern van onze opleiding. Van propedeuse tot afstudeerjaar wordt zowel in teamverband als individueel veel aan projecten gewerkt. Deze (onderzoeks)projecten bieden een goede mogelijkheid om externe opdrachten rond 'digital interactive design' uit het werkveld aan te bieden aan onze studenten."
					+ "\n\nAandachtspunt is dat er genoeg ruimte moet zijn voor de ideeën en de creativiteit van onze studenten. Externe opdrachten worden daarom altijd eerst met onze coördinatoren besproken. En soms eindigt een project van één team niet altijd volgens de verwachtingen. Dat hoort bij onderwijs en leren. Daarom vragen wij geen geld voor projecten. Wel uw inspanning en tijd als projectpartner / klant natuurlijk. Heeft u een specifieke vraag met een deadline en een duidelijke beeld over het eindproduct? Dan is een (betaalde) klus voor onze studenten buiten het curriculum wellicht een goed alternatief."
					+ "\n\nOns curriculum biedt volop mogelijkheden om met externe partijen samen te werken. Bekijk ons curriculum en mogelijk ziet u zelf al vakken, projecten en/of minoren die bij uw vraag aansluiten. We bespreken graag de mogelijkheden. Ook als u geen idee heeft waar uw vraag in het curriculum het beste past natuurlijk."
					+ "\n[curriculum cmd 2018 2019](https://www.cmd-amsterdam.nl/curriculum-cmd-2018-2019/)"
					+ "\n\n## Gastcolleges"
					+ "\nHoe kun je data in je designs toepassen? Of moet je je ontwerp zo maken dat er optimaal van data gebruik gemaakt kan worden? Hoe ziet het werken bij een ontwerpbureau er nu eigenlijk uit? En wat is de meerwaarde van CMD'ers daarin? Wanneer pas je nou wel of juist niet het 'hamburger-menu' toe in je ontwerp?"
					+ "\n\nEen greep uit een aantal goede vragen die in de recente gastcolleges zijn behandeld. Bedrijven delen hun expertises met onze studenten, docenten, alumni en andere bedrijven tijdens gastcolleges en de serie ICONS. Ook een gastcollege geven? Neem contact met ons op en dan bespreken we de mogelijkheden."
					+ "\n\n![mic icon](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_icon_mic.png)"
					+ "\n\n![usability lab image](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/u-lab.jpg)"
					+ "\n\n## Usability Lab"
					+ "\nGeen goed user centred design zonder Usability Lab natuurlijk! In ons Usability Lab testen onze studenten daarom of de door hun ontworpen applicaties (zowel voor desktop, tablet als small-screen) gebruiksvriendelijk zijn dus en goed scoren op 'usability'."
					+ "\n\nVia een speciale eyetracker wordt geregistreerd hoe testpersonen door bijvoorbeeld websites en mobiele applicaties navigeren. De ‘heatmap’ die hieruit voortkomt verschaft belangrijke informatie over hoe de gebruiker door de applicatie heeft genavigeerd. Hierdoor kan ook weer een redesign worden uitgevoerd. Het is ook mogelijk om als externe organisatie een opdracht voor ons Usability Lab in te dienen. Meten is weten!"
					+ "\n\n## Bedrijfsbezoeken en evenementen"
					+ "\nWat is er nou leuker dan een groep enthousiaste CMD-studenten uit te nodigen voor een bezoek aan uw organisatie of hulp bij uw evenementen? Onze studenten (en docenten) vinden het altijd erg leuk om langs te komen bij bedrijven uit ons vakgebied."
					+ "\n\nOp deze manier krijgen studenten beter inzicht in de verschillende soorten organisaties en hun bedrijfsculturen. Wat past er bij mij en wat niet? Waar voel ik mij thuis? Als organisatie is dit tevens een goede manier om toekomstige ontwerptalenten te interesseren voor een stage of een (bij)baan."
					+ "\n\nHulp bij evenementen kan bestaan uit bijvoorbeeld: filmpjes maken, bloggen, interviewen, foto’s maken, badges uitdelen, sprekers-assistentie of technische ondersteuning. Dat mag betaald, maar kan ook door toegangskaarten te geven en mogelijkheid tot het volgen van delen van het programma en te netwerken met bezoekers / sprekers."
					+ "\n\n![bulb icon](https://www.cmd-amsterdam.nl/wp-content/uploads/2013/12/cmd_icon_bulb.png)"
					+ "\n\n## Opleidingsadviesraad"
					+ "\nOm onze studenten zo goed mogelijk op te leiden tot startende digital interactive designers is het belangrijk om op de hoogte te zijn van de ontwikkelingen in ons vakgebied. Eén van de instrumenten die wij hier als opleiding voor hanteren zijn gesprekken met de Opleidingsadviesraad (OAR). U kunt zich hiervoor als organisatie aanmelden."
					+ "\n\nDe OAR bestaat op dit moment uit een twintigtal professionals uit ons vakgebied, aangevuld met een aantal medewerkers van de opleiding. Gedurende het jaar komt de OAR een aantal keer samen om te praten over de ontwikkelingen in ons vakgebied en hoe of wij als opleiding nog de juiste ontwerpers opleiden voor dit (toekomstige) vakgebied. Deze sessies vinden plaats bij ons op de opleiding."
					+ "\n\n![image tagcloud](https://www.cmd-amsterdam.nl/wp-content/uploads/2014/05/tagcloud-01.png)"
					+ "\n\n#{gda}"
					+ "\n\n## Golden Dot Awards"
					+ "\nHet beste studentenwerk wordt ieder jaar beloond met prijzen tijdens de jaarlijkse Golden Dot Awards. Onze docenten nomineren het beste werk, een vakjury kiest daar de winnaars uit. Dit varieert van propedeuse tot afstudeerjaar en van individueel werk tot teamprojecten"
					+ "\n\nVoor en na de show kunnen bedrijven, docenten en studenten met elkaar in contact komen. We bieden een aantal bedrijven ook de mogelijkheid om plaats te nemen in de jury. De Golden Dot Awards 2019 wordt begin juli 2019 georganiseerd. Zie ook [www.goldendotawards.nl](www.goldendotawards.nl)."
			}),
			new Entry({
				title: "doorgroeien",
				raw: "# Doorgroeien"
					+ "\nChange your digital design skills."
					+ "\n\n## Cursussen digital interactive design"
					+ "\nVanuit BATTERY geven onze vakdocenten korte cursussen, masterclasses en workshops over de laatste ontwikkelingen rond digital interactive design. Hiermee helpen wij medewerkers en de organisaties waar zij voor werken voor een belangrijk deel 'future proof' te worden en te blijven."
					+ "\n\nBATTERY is een initiatief van docenten Communication and Multimedia Design. In gesprekken met (stage)bedrijven, merken wij steeds vaker een kennisachterstand m.b.t. de laatste ontwikkelingen in ons vakgebied. Vaak zijn de ‘waan van de dag’ en drukke agenda’s oorzaak bij zowel ontwerpers als management om achterop te raken in de digitale ontwikkelingen. BATTERY is daarbij van toegevoegde waarde."
					+ "\n\n![brain icon](https://www.cmd-amsterdam.nl/wp-content/uploads/2017/02/CMD-AI-transparant.gif)"
					+ "\n\n## Onderwerpen"
					+ "\nCMD docenten zijn gespecialiseerd in het ‘user centered’ ontwerpen van digitale producten en diensten. De kern van ons aanbod gaat over het ontwerpproces, interaction design, visual design en front-end development. Hieronder vallen tal van onderwerpen, zoals bijvoorbeeld Customer Journey Mapping, User Centered Design, Persuasive Design, Datavisualisatie, HTML/CSS, etc. Meer onderwerpen vind je in ons [curriculum](https://www.cmd-amsterdam.nl/curriculum-cmd-2018-2019/). In de cursus kan een specifieke case van de organisatie centraal staan."
					+ "\n\n## Werkvormen"
					+ "\nDe docenten van BATTERY zijn zeer ervaren in het verzorgen van diverse werkvormen. Wij zullen een voorstel voor een cursus doen dat passend is bij de kennisbehoefte van de opdrachtgever. Deze voorstellen variëren van bijvoorbeeld een tweedaagse training en/of workshop tot een (wekelijkse) cursusdag over een aantal weken. Dit kan op locatie van de opdrachtgever of op een externe locatie met bijbehorende catering en faciliteiten. Het minimum en/of maximum aantal deelnemers is bespreekbaar."
					+ "\n\n## Digitale professionals"
					+ "\nVanuit de opleiding CMD zien wij de volwassenheid van digital design: bij steeds meer organisaties vormt digital design een kernelement in de dienstverlening naar en communicatie met stakeholders. Zowel intern als extern. Om als organisatie en individu over voldoende digital interactive design skills te blijven beschikken is dus continue scholing belangrijk. BATTERY helpt om deze digitale professionals op te leiden. Medewerkers kunnen hier bijvoorbeeld zeer goed hun jaarlijkse scholingsbudget vanuit de organisatie voor inzetten. Voor ZZP’ers zijn opleidingsvouchers beschikbaar gesteld. Onze cursussen zijn vrijgesteld van BTW."
					+ "\n\n## Hoe kunnen wij helpen?"
					+ "\nHeb je interesse in een cursus? We nemen graag contact met je op om de mogelijkheden te bespreken. Via onderstaand formulier kun je vrijblijvend aangeven waar je kennisbehoefte ligt. Je kunt ook ons [curriculum](https://www.cmd-amsterdam.nl/curriculum-cmd-2018-2019/) eens bekijken ter inspiratie. Als je een mailadres achterlaat kunnen we contact met je opnemen. Mocht je nog meer mensen kennen waarvoor dit interessant zou kunnen zijn, stuur ze deze pagina door. Dan kunnen we voor een kleine groep een cursus aanbieden. We kunnen je dan ook meer vertellen over de kosten voor de cursus. We hanteren een prijs per cursist per dagdeel. Hoe groter de groep, hoe voordeliger de prijs."
					+ "\n\n## Interesse? Laat het ons weten!"
					+ "\nOp welk(e) gebied(en) zou je een cursus willen volgen? Bijvoorbeeld: UX, customer journey mapping, design patterns, service design, persuasive design, HTML/CSS, User Centred Design, ..."
					+ "\n\n## Meer informatie?"
					+ "\nNeem voor meer informatie over de mogelijkheden om met ons samen te werken via BATTERY contact met op met Mattijs Blekemolen, coördinator externe samenwerking CMD."
					+ "\n\n#{contact}"
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