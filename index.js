function toonUitkomst() {
    var categorie = document.getElementById("categorie").value;
    var resultaat = "";
    
    switch(categorie) {
        case "sanctie1":
            resultaat = "1e keer: Mondelinge waarschuwing – Een officiële waarschuwing van een leidinggevende.<br>" +
                        "2e keer: Schriftelijke berisping – Een officiële notitie in het personeelsdossier.<br>" +
                        "3e keer: Extra toezicht/begeleiding – De agent wordt tijdelijk onder extra toezicht geplaatst.";
            break;
        case "sanctie2":
            resultaat = "1e keer: Tijdelijke schorsing – De agent wordt voor een korte periode geschorst (bijvoorbeeld enkele dagen).<br>" +
                        "2e keer: Inhouding van salaris – Een deel van het loon wordt ingehouden als disciplinaire maatregel.<br>" +
                        "3e keer: Overplaatsing naar een andere afdeling – Om verdere incidenten te voorkomen.";
            break;
        case "sanctie3":
            resultaat = "1e keer: Lange schorsing – Een langere periode van schorsing, bijvoorbeeld enkele weken of maanden. <br>" +
                        "2e keer: Degradatie in rang – Verlaging van de rang als strafmaatregel.<br>" +
                        "3e keer: Plaatsing op een zwarte lijst voor promoties – Tijdelijk of permanent uitgesloten van bevordering.";
            break;
        case "sanctie4":
            resultaat = "Mogelijkheden:<br><br>" +
                        "Ontslag op staande voet – Direct ontslag wegens ernstige schendingen.<br>" +
                        "Aangifte en strafrechtelijke vervolging – De agent wordt vervolgd voor gepleegde strafbare feiten.<br>" +
                        "Verbod op toekomstige politiebanen – De persoon mag niet meer in dienst treden bij de politie.";
            break;
        default:
            resultaat = "Maak een keuze uit de categorieën!";
    }
    
    document.getElementById("resultaat").innerHTML = resultaat;
}

function resetChoices() {
    document.getElementById("categorie").selectedIndex = 0;
    document.getElementById("resultaat").innerHTML = "";
}
