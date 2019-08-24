const BASE_DOMAIN = "thepiratebay.";
const EXTENSIONS = ["org",
                    "se",
                    "gs",
                    "la",
                    "vg",
                    "mn",
                    "gd",
                    "am"];

const REPLACEMENT_DOMAIN = "uj3wazyk5u4hnvtk.onion";

// Do not run if the body doesn't have includes "thepiratebay."
if (document.body.innerHTML.includes(BASE_DOMAIN)) {

    // Print the ever useful hello message
    console.debug("Pirate Replacer v" + browser.runtime.getManifest().version + " - replacing with " + REPLACEMENT_DOMAIN);

    // Replace all EXTENSIONS in page
    for (var i = 0; i < EXTENSIONS.length; i++) {
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(BASE_DOMAIN + EXTENSIONS[i], 'gi'), REPLACEMENT_DOMAIN);
    }
}