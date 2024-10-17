//document.getElementById("text-sample-card").addEventListener("click", generateSampleText, false);
document.addEventListener("DOMContentLoaded", generateSampleText, false);



function generateSampleText() {
    var samples = [
        {
            sample: "...happening all at once. Time is<br>yellow... 50 mgs. every 12 hours.<br>Not more, not less.",
            source: "Breathing Optional",
            author: "Liam Marshall",
            link: "/product-pages/breathingoptional/",
        },
        {
            sample: "You look at the white walls, you are<br>desperate. A witness...",
            source: "Breathing Optional",
            author: "Liam Marshall",
            link: "/product-pages/breathingoptional/",
        },
        {
            sample: "Meanwhile, go on, continue<br>carving your statue of air.",
            source: "Breathing Optional",
            author: "Liam Marshall",
            link: "/product-pages/breathingoptional/",
        },
        {
            sample: "Everything holds on like it was the last and only<br>answer. An atonement.",
            source: "Breathing Optional",
            author: "Liam Marshall",
            link: "/product-pages/breathingoptional/",
        },
        {
            sample: "Someone hits the jukebox, the song<br>it plays is yours, but the voice isn’t, because<br>no one would believe you’re a rainbow.",
            source: "Breathing Optional",
            author: "Liam Marshall",
            link: "/product-pages/breathingoptional/",
        },
        {
            sample: "Rush of kiss and specificity and boilings over: sitting on the curb in late afternoon in the afterglow of the skin’s giving up. When I crawl inside my body the street saturates with radios.",
            source: "Tensegrity",
            author: "Daniel Sinderson",
            link: "/product-pages/tensegrity/",
        },
        {
            sample: "I spent all night crying in the parking lot of the boarded up MegaFoods again.",
            source: "Tensegrity",
            author: "Daniel Sinderson",
            link: "/product-pages/tensegrity/",
        },
        {
            sample: "Closed eyes: sparkle of the brain starved for light: of shadows and capillaries and eyelids: a bramble of images and blood-hum.",
            source: "Tensegrity",
            author: "Daniel Sinderson",
            link: "/product-pages/tensegrity/",
        },
        {
            sample: "Like glitter, you felt like you were here for something special.",
            source: "Tensegrity",
            author: "Daniel Sinderson",
            link: "/product-pages/tensegrity/",
        },
        {
            sample: "Blank paper doesn’t exist, only shifting sets of what’s ignorable.",
            source: "Tensegrity",
            author: "Daniel Sinderson",
            link: "/product-pages/tensegrity/",
        },
        {
            sample: "This is what remains of you: song sunken with years into the granulated limit of what’s here.",
            source: "Tensegrity",
            author: "Daniel Sinderson",
            link: "/product-pages/tensegrity/",
        },
        {
            sample: "Of generations and pantomimes, of repetitions and filters and flocculation: reality is tap water. It’s always been tap water.",
            source: "Tensegrity",
            author: "Daniel Sinderson",
            link: "/product-pages/tensegrity/",
        },
        {
            sample: "Park bench, cold hands shaking, pills into mouth, spit swallowed, body hunched like it doesn’t belong here.",
            source: "Tensegrity",
            author: "Daniel Sinderson",
            link: "/product-pages/tensegrity/",
        },
        {
            sample: "Fireworks eye level, village in the valley below you celebrating the time they pushed a sword down someone’s throat.",
            source: "Tensegrity",
            author: "Daniel Sinderson",
            link: "/product-pages/tensegrity/",
        },
        {
            sample: "It seems strange that when you<br>ask someone what their favorite animal is,<br>they never tell you it's humans.",
            source: "Wax",
            author: "Liam Marshall",
            link: "/product-pages/wax/",
        },
        {
            sample: "Once you get the trick of all this, perhaps<br>try out translating the sound of rain.<br>Go ahead. Between meals.<br>Pretend you're fluent.",
            source: "Wax",
            author: "Liam Marshall",
            link: "/product-pages/wax/",
        },
        {
            sample: "Like the time it was your turn<br>to jump off a bridge<br>your parents<br>designed for the dead<br>winter crossing.<br>You were<br>submerged.",
            source: "Wax",
            author: "Liam Marshall",
            link: "/product-pages/wax/",
        },
        {
            sample: "Red, black, and blue.<br>Therapy and pills. Estranged<br>salvation.",
            source: "Wax",
            author: "Liam Marshall",
            link: "/product-pages/wax/",
        },
        {
            sample: "Panic is not a strategy.",
            source: "Wax",
            author: "Liam Marshall",
            link: "/product-pages/wax/",
        },
        {
            sample: "Rust, like a truth,<br>witnessing<br>breath's chain-reaction,<br>scabbed and under repair.",
            source: "Wax",
            author: "Liam Marshall",
            link: "/product-pages/wax/",
        },
    ];
    var textSample = samples[Math.floor(Math.random() * samples.length)];
    var sampleText = textSample["sample"];
    var sampleSource = textSample["source"];
    var sampleAuthor = textSample["author"];
    var sampleLink = textSample["link"];
    //console.log(sampleText);
    document.getElementById("sampleText").innerHTML = sampleText;
    document.getElementById("sampleSource").innerHTML = sampleSource;
    document.getElementById("sampleAuthor").innerHTML = sampleAuthor;
    document.getElementById("text-sample-card").href = sampleLink;
}

