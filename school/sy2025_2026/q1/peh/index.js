const infos = [
	{
		name: "Eucalyptus",
		description: "lorem ipsum dolor sit amet",
		image: "./img/eucalyptus.jpg",
	},
	{
		name: "Eucalyptus",
		description: "lorem ipsum dolor sit amet",
		image: "./img/eucalyptus.jpg",
	},
	{
		name: "Eucalyptus",
		description: "lorem ipsum dolor sit amet",
		image: "./img/eucalyptus.jpg",
	},
	{
		name: "Eucalyptus",
		description: "lorem ipsum dolor sit amet",
		image: "./img/eucalyptus.jpg",
	},
	{
		name: "Eucalyptus",
		description: "lorem ipsum dolor sit amet",
		image: "./img/eucalyptus.jpg",
	},
	{
		name: "Eucalyptus",
		description: "lorem ipsum dolor sit amet",
		image: "./img/eucalyptus.jpg",
	},
];

const gridContainer = document.querySelector("#grid-container")

for (const info of infos) {
    const infobox = document.createElement("div");
    const titleSpan = document.createElement("span");
    const description = document.createElement("span");
    infobox.classList.add("infobox")
    infobox.style.backgroundImage = `linear_gradient(to top, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.1)), url('${info.image}')`
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