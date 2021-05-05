var HtmlToReactParser = require('html-to-react').Parser;

const translations = {
    title: {
        fr: '<span className="mb-hidden">Marché </span>Zuly',
        en: 'Zuly<span className="mb-hidden"> Marketplace</span>'
    },
    contact: {
        fr: 'Contact',
        en: 'Contact'
    },
    business: {
        fr: 'Votre entreprise',
        en: 'Your business'
    },
    directory: {
        fr: 'Répertoire',
        en: 'Directory'
    },
    claim_business: {
        fr: "Nom de l'entreprise",
        en: 'Business Name'
    },
    claim_logo: {
        fr: "Logo (Lien)",
        en: "Logo (Link)"
    },
    claim_website: {
        fr: "Site web (Lien)",
        en: "Website (Link)"
    },
    claim_description: {
        fr: "Description",
        en: "Description"
    },
    claim_customField: {
        fr: "+ Champ personnalisé",
        en: "+ Add Custom Field"
    },
    claim_submit: {
        fr: "Afficher votre entreprise sur Zuly!",
        en: "Claim your business on Zuly!"
    },
    footer_property: {
        fr: "Propriété de Zuly,",
        en: "Property of Zuly,"
    }
};

export default function translate(element,french) {
    var htmlToReactParser = new HtmlToReactParser();
    var language = 'en';
    if (french) {
        language = 'fr';
    }
    var reactElement = htmlToReactParser.parse(translations[element][language]);
    return reactElement;
}