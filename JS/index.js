function toonUitkomst() {
    var categorie = document.getElementById("categorie").value;
    var resultaat = "";

    switch (categorie) {
        case "sanctie1":
            resultaat = "<span class='first'>1e keer:</span> Mondelinge waarschuwing – Een officiële waarschuwing van een leidinggevende.<br> <br>" +
                        "<span class='second'>2e keer:</span> Schriftelijke berisping – Een officiële notitie in het personeelsdossier.<br> <br>" +
                        "<span class='third'>3e keer:</span> Extra toezicht/begeleiding – De agent wordt tijdelijk onder extra toezicht geplaatst.";
            break;
        case "sanctie2":
            resultaat = "<span class='first'>1e keer:</span> Tijdelijke schorsing – De agent wordt voor een korte periode geschorst (bijvoorbeeld enkele dagen).<br> <br>" +
                        "<span class='second'>2e keer:</span> Inhouding van salaris – Een deel van het loon wordt ingehouden als disciplinaire maatregel.<br> <br>" +
                        "<span class='third'>3e keer:</span> Overplaatsing naar een andere afdeling – Om verdere incidenten te voorkomen.";
            break;
        case "sanctie3":
            resultaat = "<span class='first'>1e keer:</span> Lange schorsing – Een langere periode van schorsing, bijvoorbeeld enkele weken of maanden.<br> <br>" +
                        "<span class='second'>2e keer:</span> Degradatie in rang – Verlaging van de rang als strafmaatregel.<br> <br>" +
                        "<span class='third'>3e keer:</span> Plaatsing op een zwarte lijst voor promoties – Tijdelijk of permanent uitgesloten van bevordering.";
            break;
        case "sanctie4":
            resultaat = "<span class='first'>Mogelijkheden:</span><br><br>" +
                        "Ontslag op staande voet – Direct ontslag wegens ernstige schendingen.<br> <br>" +
                        "Aangifte en strafrechtelijke vervolging – De agent wordt vervolgd voor gepleegde strafbare feiten.<br> <br>" +
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
