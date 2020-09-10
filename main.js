$(document).ready(function() {
    console.log("ready!");
    $(".copied").hide();
    $("#clear").click(function() {
        $("#text").val("");
        $("#TextArea").val("");
    });

    $("#copy").click(function() {
        if ($("#text").val()) {
            $("#TextArea").select();
            document.execCommand("copy");
            $(".copied .alert").text("Nusxalandi");
            $(".copied .alert").css("color", "green");
            $(".copied .alert").addClass('alert-success')
            $(".copied .alert").removeClass('alert-danger')
            $(".copied").fadeIn(500);
        } else {
            $(".copied .alert").text("Nusxalashga hech narsa yo'q!");
            $(".copied .alert").css("color", "red");
            $(".copied .alert").addClass('alert-danger')
            $(".copied .alert").removeClass('alert-success')
            $(".copied").fadeIn(500);
        }
    });

    function identify1(text) {
        var i;
        for (i = 0; i < text.length; i++) {
            if ((((text.charCodeAt(i) >= 65) && (text.charCodeAt(i) <= 95))) || (((text.charCodeAt(i) >= 97) && (text.charCodeAt(i) <= 123)))) {
                return "lotin";
            } else {
                if ((text.charCodeAt(i) >= 1040) && (text.charCodeAt(i) <= 1104)) {
                    return "kiril";
                }
            }
        }
    }

    class charTranslater {
        constructor(sentence, identify) {
            this.sentence = " " + sentence + " ";
            this.identify = identify;
            this.lotin_to_kiril = {
                "a": "а",
                "b": "б",
                "d": "д",
                "c": "с",
                "e": "е",
                "f": "ф",
                "g": "г",
                "h": "ҳ",
                "i": "и",
                "j": "ж",
                "k": "к",
                "l": "л",
                "m": "м",
                "n": "н",
                "o": "о",
                "p": "п",
                "q": "қ",
                "r": "р",
                "s": "с",
                "t": "т",
                "u": "у",
                "v": "в",
                "x": "х",
                "y": "й",
                "z": "з",
                "o'": "ў",
                "g'": "ғ",
                "sh": "ш",
                "ch": "ч",
                "ng": "нг",
                "ye": "е",
                "yo": "ё",
                "yu": "ю",
                "ya": "я"
            }
            this.kiril_to_lotin = {
                "а": "a",
                "б": "b",
                "в": "v",
                "г": "g",
                "д": "d",
                "е": "e",
                "ё": "yo",
                "ж": "j",
                "з": "z",
                "и": "i",
                "й": "y",
                "к": "k",
                "л": "l",
                "м": "m",
                "н": "n",
                "о": "o",
                "п": "p",
                "қ": "q",
                "р": "r",
                "с": "s",
                "т": "t",
                "у": "u",
                "ф": "f",
                "х": "x",
                "ц": "s",
                "ч": "ch",
                "ш": "sh",
                "ъ": "'",
                "э": "e",
                "ю": "yu",
                "я": "ya",
                "ў": "o'",
                "ҳ": "h",
                "ғ": "g'"
            }
        }
        transfer() {
            var output = [];
            var index = 0;

            if (this.identify === "lotin") {
                while (index < this.sentence.length) {
                    if (this.sentence[index].toLowerCase() in this.lotin_to_kiril) {
                        if (this.sentence[index] == this.sentence[index].toUpperCase()) {
                            if ((this.sentence.slice(index, index + 2) == "Sh") || (this.sentence.slice(index, index + 2) == "SH")) {
                                output.push(this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()].toUpperCase());
                                index += 1;
                            } else if ((this.sentence.slice(index, index + 2) == "Ch") || (this.sentence.slice(index, index + 2) == "CH")) {
                                output.push(this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()].toUpperCase());
                                index += 1;
                            } else if (this.sentence.slice(index, index + 2) == "G'") {
                                output.push(this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()].toUpperCase());
                                index += 1;
                            } else if (this.sentence.slice(index, index + 2) == "O'") {
                                output.push(this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()].toUpperCase());
                                index += 1;
                            } else if ((this.sentence.slice(index, index + 2) == "Ye") || (this.sentence.slice(index, index + 2) == "YE")) {
                                output.push(this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()].toUpperCase());
                                index += 1;
                            } else if ((this.sentence.slice(index, index + 2) == "Yo") || (this.sentence.slice(index, index + 2) == "YO")) {
                                output.push(this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()].toUpperCase());
                                index += 1;
                            } else if ((this.sentence.slice(index, index + 2) == "Ya") || (this.sentence.slice(index, index + 2) == "YA")) {
                                output.push(this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()].toUpperCase());
                                index += 1;
                            } else if ((this.sentence.slice(index, index + 2) == "Yu") || (this.sentence.slice(index, index + 2) == "YU")) {
                                output.push(this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()].toUpperCase());
                                index += 1;
                            } else if ((this.sentence[index + 1] == "'") && (this.sentence[index] == "E")) {
                                output.push("Э");
                            } else if ((this.sentence[index] == "E") && !(this.sentence[index - 1].toLowerCase() in this.lotin_to_kiril)) {
                                output.push("Э");
                            } else {
                                output.push(this.lotin_to_kiril[this.sentence[index].toLowerCase()].toUpperCase())
                            }
                        } else if (this.sentence.slice(index, index + 2) == "sh") {
                            output.push((this.lotin_to_kiril[this.sentence.slice(index, index + 2)]))
                            index += 1
                        } else if (this.sentence.slice(index, index + 2) == "sh") {
                            output.push((this.lotin_to_kiril[this.sentence.slice(index, index + 2)]))
                            index += 1
                        } else if (this.sentence.slice(index, index + 2) == "ch") {
                            output.push((this.lotin_to_kiril[this.sentence.slice(index, index + 2)]))
                            index += 1
                        } else if (this.sentence.slice(index, index + 2) == "o'") {
                            output.push((this.lotin_to_kiril[this.sentence.slice(index, index + 2)]))
                            index += 1
                        } else if (this.sentence.slice(index, index + 2) == "g'") {
                            output.push((this.lotin_to_kiril[this.sentence.slice(index, index + 2)]))
                            index += 1
                        } else if (this.sentence.slice(index, index + 2) == "ye") {
                            output.push((this.lotin_to_kiril[this.sentence.slice(index, index + 2)]))
                            index += 1
                        } else if (this.sentence.slice(index, index + 2) == "yo") {
                            output.push((this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()]))
                            index += 1
                        } else if (this.sentence.slice(index, index + 2) == "ya") {
                            output.push((this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()]))
                            index += 1
                        } else if (this.sentence.slice(index, index + 2) == "yu") {
                            output.push((this.lotin_to_kiril[this.sentence.slice(index, index + 2).toLowerCase()]))
                            index += 1
                        } else if ((this.sentence[index + 1] == "'") && (this.sentence[index] == "e")) {
                            output.push("э")
                        } else if ((this.sentence[index] == "e") && !(this.sentence[index - 1].toLowerCase() in this.lotin_to_kiril)) {
                            output.push("э");
                        } else {
                            output.push(this.lotin_to_kiril[this.sentence[index]])
                        }
                    } else if (this.sentence[index] == "'") {
                        output.push("ъ")
                    } else {
                        output.push(this.sentence[index])
                    }
                    index += 1
                }
            } else if (this.identify === "kiril") {
                index = 0;
                output = [];

                while (index < this.sentence.length) {
                    if (this.sentence[index].toLowerCase() in this.kiril_to_lotin) {
                        if (this.sentence[index] == this.sentence[index].toUpperCase()) {
                            if (((this.sentence[index + 1] == "ъ") || (this.sentence[index + 1] == "Ъ")) && (this.sentence[index] == "Е")) {
                                output.push("E")
                            } else if (this.sentence[index] == "Ч") {
                                if ((this.sentence[index - 1] == this.sentence[index - 1].toUpperCase()) || (this.sentence[index + 1] == this.sentence[index + 1].toUpperCase())) {
                                    output.push("CH")
                                } else {
                                    output.push("Ch")
                                }
                            } else if (this.sentence[index] == "Ш") {
                                if ((this.sentence[index - 1] == this.sentence[index - 1].toUpperCase()) || (this.sentence[index + 1] == this.sentence[index + 1].toUpperCase())) {
                                    output.push("SH")
                                } else {
                                    output.push("Sh")
                                }
                            } else if ((this.sentence[index] == "Е") && !(this.sentence[index - 1].toLowerCase() in this.kiril_to_lotin)) {
                                if ((this.sentence[index - 1] == this.sentence[index - 1].toUpperCase()) || (this.sentence[index + 1] == this.sentence[index + 1].toUpperCase())) {
                                    output.push("YE")
                                    console.log("working")
                                }
                            } else if (this.sentence[index] == "Ё") {
                                if ((this.sentence[index - 1] == this.sentence[index - 1].toUpperCase()) || (this.sentence[index + 1] == this.sentence[index + 1].toUpperCase())) {
                                    output.push("YO")
                                } else {
                                    output.push("Yo")
                                }
                            } else if (this.sentence[index] == "Ю") {
                                if ((this.sentence[index - 1] == this.sentence[index - 1].toUpperCase()) || (this.sentence[index + 1] == this.sentence[index + 1].toUpperCase())) {
                                    output.push("YU")
                                } else {
                                    output.push("Yu")
                                }
                            } else if (this.sentence[index] == "Я") {
                                if ((this.sentence[index - 1] == this.sentence[index - 1].toUpperCase()) || (this.sentence[index + 1] == this.sentence[index + 1].toUpperCase())) {
                                    output.push("YA")
                                } else {
                                    output.push("Ya")
                                }
                            } else {
                                output.push(this.kiril_to_lotin[this.sentence[index].toLowerCase()].toUpperCase())
                            }
                        } else if ((this.sentence[index] == "е") && !(this.sentence[index - 1].toLowerCase() in this.kiril_to_lotin)) {
                            output.push("ye")
                        } else {
                            output.push(this.kiril_to_lotin[this.sentence[index]])
                        }
                    } else {
                        output.push(this.sentence[index])
                    }
                    index += 1
                }
            }
            output.pop()
            output.shift()
            var result = output.join("")
            return result
        }
    }

    $('#text').on('input propertychange', function(e) {
        $(".copied").hide(500);
        text = $("#text").val();
        var identify = identify1(text);
        console.log(identify);

        var res = new charTranslater(text, identify);
        $("#TextArea").val(res.transfer());
        console.log(res.transfer());
    });

});