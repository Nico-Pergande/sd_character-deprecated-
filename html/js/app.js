function play1() {
    $.post("http://sd_character/CharacterChosen", JSON.stringify({
        charid: 1,
        ischar: "true",
    }));
    Kashacter.CloseUI();
}

function play2() {
    $.post("http://sd_character/CharacterChosen", JSON.stringify({
        charid: 2,
        ischar: "true",
    }));
    Kashacter.CloseUI();
}

function play3() {
    $.post("http://sd_character/CharacterChosen", JSON.stringify({
        charid: 3,
        ischar: "true",
    }));
    Kashacter.CloseUI();
}

function play4() {
    $.post("http://sd_character/CharacterChosen", JSON.stringify({
        charid: 4,
        ischar: "true",
    }));
    Kashacter.CloseUI();
}

function create(el) {
    $.post("http://sd_character/CharacterChosen", JSON.stringify({
        charid: $(el).attr('data-charid'),
        ischar: "false",
    }));
    Kashacter.CloseUI();
}

(() => {
    Kashacter = {};

    Kashacter.ShowUI = function(data) {
        $('.main-container').css({"display":"block"});        

        switch(data.limit) {
            /**
             * 
            case 1:
                $('.character-box[data-charid="1"]').show()
                $('.character-box[data-charid="2"]').hide()
                $('.character-box[data-charid="3"]').hide()
                $('.character-box[data-charid="4"]').hide()
            break;

            ///////////////////////////////////

            case 2:
                $('.character-box[data-charid="1"]').show()
                $('.character-box[data-charid="2"]').show()
                $('.character-box[data-charid="3"]').hide()
                $('.character-box[data-charid="4"]').hide()
            break;
            *
            **/

            ///////////////////////////////////

            case 3:
                $('.character-box[data-charid="1"]').show()
                $('.character-box[data-charid="2"]').show()
                $('.character-box[data-charid="3"]').show()
                $('.character-box[data-charid="4"]').hide()
            break;

            ///////////////////////////////////

            case 4:
                $('.character-box[data-charid="1"]').show()
                $('.character-box[data-charid="2"]').show()
                $('.character-box[data-charid="3"]').show()
                $('.character-box[data-charid="4"]').show()
            break;

            ///////////////////////////////////
        }

        if (data.characters !== null) {
            $.each(data.characters, function (index, char) {
                if (char.charid !== 0) {
                    var charid = char.identifier.charAt(4);
                    var classs = "";

                    // Geschlecht
                    if (char.sex == 'f') {
                        classs = "cpb-female"
                    } else {
                        classs = "cpb-male"
                    }

                    // Name
                    if (char.streamer == '1') {
                        var lastname = "Metaschutz"
                    } else {
                        var lastname = char.lastname
                    }

                    // Geburtsdatum
                    if (char.streamer == '1') {
                        var dateofbirth = "Metaschutz"
                    } else {
                        var dateofbirth = char.dateofbirth
                    }

                    // Bargeld
                    if (char.streamer == '1') {
                        var money = "Metaschutz"
                        var dollar = ""
                    } else {
                        var money = char.money
                        var dollar = "$"
                    }

                    // Kontostand
                    if (char.streamer == '1') {
                        var bank = "Metaschutz"
                        var dollar = ""
                    } else {
                        var bank = char.bank
                        var dollar = "$"
                    }

                    // Telefonnummer
                    if (char.streamer == '1') {
                        var nummer = "Metaschutz"
                    } else {
                        var nummer = char.phone_number
                    }

                    // Job
                    if (char.streamer == '1') {
                        var job = "Metaschutz"
                        var grade = "Metaschutz"
                    } else {
                        if (char.job == 'police') {
                            var job = "L.S.P.D."
                            var grade = char.job_grade
                        } else if (char.job == 'state') {
                            var job = "Regierung"
                            var grade = char.job_grade
                        } else if (char.job == 'army') {
                            var job = "U.S. - Army"
                            var grade = char.job_grade
                        } else if (char.job == 'ambulance') {
                            var job = "L.S.M.C."
                            var grade = char.job_grade
                        } else {
                            var job = "Arbeitslos"
                        }
                    }

                    /////////////////////////////////////
                    
                    //Streamermode
                    if (char.streamer == '1') {
                        var streamer = "aktiviert"
                    } else {
                        var streamer = "deaktiviert"
                    }
                    
                    // VIP
                    if (char.streamer == '1') {
                        var vip = "Metaschutz"
                    } else {
                        if (char.vip == '1') {
                            var vip = "aktiviert"
                        } else {
                            var vip = "deaktiviert"
                        }
                    }
                    
                    // Rolle
                    if (char.streamer == '1') {
                        var group = "Metaschutz"
                    } else {
                        if (char.group == 'superadmin') {
                            var group = "Superadministrator"
                        } else if (char.group == 'admin') {
                            var group = "Administrator"
                        } else if (char.group == 'mod') {
                            var group = "Moderator"
                        } else if (char.group == '_dev') {
                            var group = "Developer"
                        } else {
                            var group = "Spieler"
                        }
                    }

                    $('[data-charid=' + charid + ']').html(`
                    
                    <div class="character-bg"></div>
                    <div class="character-profile ` + classs + `"></div>
                    <p class="character-name">` + char.firstname + ` ` + lastname + `</p>
                    <p class="character-extradata">` + dateofbirth + `</p><br>
                    <p class="character-extradata">Bargeld: ` + money + `` + dollar + `</p>
                    <p class="character-extradata">Kontostand: ` + bank + `` + dollar + `</p>
                    <p class="character-extradata">Telefonnummer: ` + nummer + `</p>
                    <p class="character-extradata">Job: ` + job + `</p>
                    <p class="character-extradata">Rang: ` + grade + `</p><br>
                    <p class="character-extradata">Streamermodus: ` + streamer + `</p>
                    <p class="character-extradata">VIP Status: ` + vip + `</p>
                    <p class="character-extradata">Rolle: ` + group + `</p>
                    <button class="btn btn-play" id="play` + charid + `" onclick="play` + charid + `()" data-charid="` + charid + `">Spielen</button>
                    
                    `).attr("data-ischar", "true");
                }
            });
        }
    };

    Kashacter.CloseUI = function() {
        $('.main-container').css({"display":"none"});
        $(".character-box").removeClass('active-char');
        $("#delete").css({"display":"none"});
        $(".character-box").html(`
        
        <div class="character-bg"></div>
        <div class="character-profile cpb-unknown"></div>
        <p class="character-name">Neuer Charakter</p>
        <p class="character-extradata">noch keine Daten vorhanden</p>
        <button class="btn btn-play" onclick="create(this)">Erstellen</button>
        
        `).attr("data-ischar", "false");
    };
    window.onload = function(e) {
        window.addEventListener('message', function(event) {
            switch(event.data.action) {
                case 'openui':
                    Kashacter.ShowUI(event.data);
                    break;
            }
        })
    }

})();