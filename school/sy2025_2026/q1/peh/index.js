const infos = [
	{
		name: "Camphor",
		description:
			"Camphor has a wide variety of topical uses due to its antibacterial, antifungal, and anti-inflammatory properties. It can be used to treat skin conditions, improve respiratory function, and relieve pain. It can be used to relieve skin irritation and itchiness and may help to improve the overall appearance of skin.",
		image: "./img/camphor.png",
	},
	{
		name: "Menthol",
		description:
			'Menthol produces a cooling effect that "creates a pleasant diversion from pain or other irritations." It can also relieve indigestion, boost brain function, combat cold symptoms, lessen headache pain, boost energy, and fight bacteria.',
		image: "./img/menthol.png",
	},
	{
		name: "Eucalyptus Oil",
		description:
			"Originally native to Australia, eucalyptus trees are now grown all over the world and used for their medicinal properties. Their healing power comes from eucalyptus oil, which is made from the tree's oval-shaped leaves. This oil can treat your coughs, clear your chest, make you breathe easier, ease joint pain, and more on respiratory issues and pain reduction.",
		image: "./img/eucalyptus.jpg",
	},
	{
		name: "Aloe Vera",
		description:
			"Aloe vera, or Aloe barbadensis, is a thick, short-stemmed plant that stores water in its leaves. It is best known for treating skin injuries but has several other uses that could potentially benefit health. Aloe vera is a medicinal plant with antioxidant and antibacterial properties. Aloe vera benefits can include reducing dental plaque, accelerating wound healing, improving skin barrier function, and managing blood sugar.",
		image: "./img/aloe_vera.png",
	},
	{
		name: "Mugwort",
		description:
			"Mugwort has been used for centuries to help with pregnancy and menstruation-related issues. It is believed to have various health benefits, including pain relief, supporting liver health, easing muscle cramps, and improving digestion. Mugwort is regularly used for amenorrhea, anxiety, chronic fatigue, colic, constipation, depression, eczema, diarrhea, epilepsy, headaches and migraines, insomnia, and nausea or vomitting.",
		image: "./img/mugwort.png",
	},
	{
		name: "Castor Oil",
		description:
			"Castor oil is a thick, odorless oil made from the seeds of the castor plant. It can act as a natural laxative to help relieve temporary constipation. It is also a good moisturizer that can help hydrate and soften the skin. For hair, it is believed to nourish and strengthen strands leading to healther, shinier hair and reduced hair fall.",
		image: "./img/castor_oil.png",
	},
	{
		name: "Honey",
		description:
			"Honey offers various health benefits due to its rich composition of antioxidants, anti-inflammatory properties, and antimicrobial effects. This can be a natural remedy for coughs or sore throat with potential to be more effective than over-the-counter medicines. Honey is also good for healing wounds reducing infection, pain, and scarring.",
		image: "./img/honey.png",
	},
	{
		name: "Chamomile Oil",
		description:
			"Chamomile is a well-known relaxant, helping to ease stress, anxiety, and promote sleep. Chamomile has been valued as a digestive relaxant and has been used to treat various gastrointestinal disturbances including flatulence, indigestion, diarrhea, anorexia, motion sickness, nausea, and vomiting. Chamomile has also been used to treat colic, croup, and fevers in children.",
		image: "./img/chamomile_oil.png",
	},
	{
		name: "Rosemary Water",
		description:
			"Rosemary Water is known for improving memory and focus, boosting mood, promoting hair growth, and supporting digestion. It has been linked to improved cognitive performance and mental clarity. It can improve hair shine and softness by smoothing the hair cuticle. Rosemary water can stimulate bile production, aiding digestion.",
		image: "./img/rosemary_water.png",
	},
	{
		name: "Coconut Oil",
		description:
			"Possible benefits of coconut oil include increasing good cholesterol, controlling blood sugar, reducing stress, and more. Some people apply coconut oil to their hair to increase shine and protect it from damage. It may penetrate the scalp better than mineral oils. Applying a coconut extract to human skin may enhance its protective barrier functions and have an anti-inflammatory effect.",
		image: "./img/coconut_oil.png",
	},
	{
		name: "Barley",
		description:
			"Barley, a nutritious grain, offers various health benefits due to its high fiber content and the presence of beneficial compounds like beta-glucan, phenolic acids, and antioxidants. It can help manage blood sugar levels, lower cholesterol, improve digestion, and potentially reduce the risk of certain cancers and heart disease.",
		image: "./img/barley.png",
	},
	{
		name: "Garlic",
		description:
			"Current research shows that garlic may have some real health benefits, such as protection against the common cold and the potential to help lower blood pressure and cholesterol levels. Throughout ancient history, people widely used garlic for its health and medicinal properties. Scientists now know that most of garlic's health benefits are due to the formation of sulfur compounds when you chop, crush, or chew a garlic clove.",
		image: "./img/garlic.png",
	},
	{
		name: "Turmeric",
		description:
			"Turmeric has been studied over the past few decades to understand its potential health benefits. One 2020 study found Curcuma to be associated with anti-inflammatory, anticancer, antidiabetic, antidiarrheal, antimicrobial, antiviral, and antioxidant properties.",
		image: "./img/turmeric.png",
	},
	{
		name: "Ginger",
		description:
			"People have used ginger for cooking and medication since antiquity. It may help to relieve nausea and stomach pain. Ginger may also have other health benefits, such as antioxidant and antimicrobial properties. Ginger may help relieve nausea and vomiting and aid digestion. Antioxidants and other nutrients in ginger root may help prevent or treat arthritis, inflammation, and various types of infection.",
		image: "./img/ginger.png",
	},
	{
		name: "Pandan",
		description:
			"Pandan leaves, offer several potential health benefits. They are a source of vitamins A, B, and C, and are believed to possess anti-inflammatory and antioxidant properties. Traditionally, pandan has been used to relieve headaches, arthritis pain, and earaches, and may also aid in blood sugar control and heart health. ",
		image: "./img/pandan.png",
	},
	{
		name: "Atis Leaves",
		description:
			"Atis (sugar apple) leaves offer a range of potential health benefits. They are rich in antioxidants, which can help protect the body from damage caused by oxidative stress. Additionally, they exhibit antidiabetic, anti-inflammatory, and anti-microbial properties. Some studies also suggest potential benefits for wound healing and pain relief.",
		image: "./img/atis_leaves.png",
	},
	{
		name: "Cucumber",
		description:
			"Cucumbers are a nutritious food with a high water content. They can help relieve dehydration and contain many essential vitamins and minerals. Cucumbers may also benefit skin health. Research states that cucumbers may help moisturize the skin and have anti-wrinkle properties. Cucumbers placed on the eyes can also help decrease morning puffiness.",
		image: "./img/cucumber.png",
	},
	{
		name: "Lemon",
		description:
			"Lemons offer a variety of health benefits due to their rich nutrient profile, including Vitamin C, potassium, folate, and various plant compounds. These benefits include supporting the immune system, aiding digestion, promoting hydration, and potentially reducing the risk of heart disease and certain cancers.",
		image: "./img/lemon.png",
	},
	{
		name: "Hybrid Tea Rose",
		description:
			"Hybrid tea roses, while primarily known for their beauty, also offer several potential health benefits, particularly when consumed as rose tea. These benefits stem from the rich antioxidant and anti-inflammatory properties found in the petals. Many popular hot drinks, including coffee, tea, and even hot chocolate, contain caffeine. Rose tea is naturally caffeine-free and thus could be a great replacement for some of the more common hot caffeinated beverages.",
		image: "./img/hybrid_tea_rose.png",
	},
	{
		name: "Yellow Alder",
		description:
			"This can help treat gastrointestinal problems (constipation, diarrhea), colds and flu, and circulatory problems (heart palpitations), menstrual spasms, and dermatological problems and is used in herbal medicine in South America and the West Indies.",
		image: "./img/yellow_alder.png",
	},
	{
		name: "Pilea Nummulariifolia",
		description:
			"Pilea Nummulariifolia is rich in nutrients containing copper, iron and vitamin C. It has been traditionally used as a diuretic and can help reduce inflammation. It has been used to make tea, poultices, and tinctures for various ailments.",
		image: "./img/pilea_nummulariifolia.png",
	},
	{
		name: "Tatarian Aster",
		description:
			"Aster tataricus is an ancient herbal medicine with a broad spectrum of pharmaco logical activities that has been used for thousands of years in China, and has shown remarkable effectiveness in the treatment of various diseases, especially cough, asthma, inflammation.",
		image: "./img/tatarian_aster.png",
	},
	{
		name: "Kalanchoe Daigremontiana",
		description:
			"Kalanchoe Daigremontiana has a history of use in traditional medicine for various ailments and is being investigated for potential health benefits. It's been explored for its anti-inflammatory, wound healing, anti-tumor, and anti-ulcer properties, among others.",
		image: "./img/kalanchoe_daigremontiana.png",
	},
];

const gridContainer = document.querySelector("#grid-container")

for (const info of infos) {
    const infobox = document.createElement("div");
    const titleSpan = document.createElement("span");
    const description = document.createElement("span");
    infobox.classList.add("infobox")
    infobox.style.backgroundImage = `linear-gradient(to top, rgb(0, 0, 0, 0.6), rgb(0, 0, 0, 0.2)), url('${info.image}')`
    titleSpan.classList.add("title")
    titleSpan.textContent = info.name

    description.style.display = "none"
    description.textContent = info.description

    infobox.appendChild(titleSpan)
    infobox.appendChild(description)

    infobox.addEventListener('click', () => {
        if (description.style.display == "none") {
            description.style.display = "block"
            titleSpan.style.display = "none"
        } else {
            description.style.display = "none";
			titleSpan.style.display = "block";
        }
    })

    gridContainer.appendChild(infobox)
}