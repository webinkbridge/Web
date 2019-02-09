var flag = false;

function check() {
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    if (password1 == (password)) {
        return true;
    }
    
    else {
        alert("Passwords didn't match");
        return false;
    }
}

function alterflag() {
    flag = true;
}

function fillcheck() {
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var fullname = document.getElementById("fullname").value;
    var penname = document.getElementById("penname").value;
    var email = document.getElementById("email").value;
    var f = document.getElementById("next");
    if (flag == true)
        f.style.display = 'none';
    else {
        if (password.length != 0 && password1.length != 0 && fullname.length != 0 && penname.length != 0 && email.length != 0) {
            f.disabled = false;
        } else {
            f.disabled = true;
        }
    }
}

function showafter() {
    document.getElementById('mainform').style.marginTop = "30px";
    document.getElementById('mainform').style.marginBottom = "30px";
    document.getElementById('next').style.display = "none";
    document.getElementById('after').style.display = "block";
    document.getElementById('extraquotes').style.display = "block";
}

function addgenre() {
    genreval = document.getElementById("select_id").value;

    var buttonadd = document.createElement("button");
    var name = "btn btn-danger marg hashbutton";
    var arr = buttonadd.className.split(" ");
    if (arr.indexOf(name) == -1) {
        buttonadd.className += " " + name;
    }
    buttonadd.id = genreval+"b";
    var node = document.createTextNode(genreval);
    buttonadd.appendChild(node);
    
    var myElement = document.getElementById(genreval+"b");
    if (myElement) {
        document.getElementById("repeattext").innerHTML="* Already Selected";
    } else {
        document.getElementById("repeattext").innerHTML="";
        if (genreval.length > 0) {
            var element = document.getElementById("addhere");
            element.appendChild(buttonadd);
            document.getElementById("genre").value = "";
        }
    }
}

function enabler() {
    var i = 1;
    var check = document.getElementById("regoption");
    console.log(check);
    if (check.checked) {
        for (i = 1; i <= 5; i++) {
            var subele = document.getElementById(i.toString());
            console.log(i.toString());
            subele.disabled = false;
        }
    }
    if (!(check.checked)) {
        for (i = 1; i <= 5; i++) {
            var subele = document.getElementById(i.toString());
            subele.disabled = true;
        }
    }
}

function enabler1() {
    var i = 1;
    var check = document.getElementById("intoption");
    console.log(check);
    if (check.checked) {
        for (i = 1; i <= 5; i++) {
            var subele = document.getElementById("lang" + i.toString());
            console.log(i.toString());
            subele.disabled = false;
        }
    }
    if (!(check.checked)) {
        for (i = 1; i <= 5; i++) {
            var subele = document.getElementById("lang" + i.toString());
            subele.disabled = true;
        }
    }
}

function activateblockregional() {
    var check = document.getElementById("regoption");
    var f = document.getElementById("reglang");
    if (check.checked) {
        f.style.display = 'block';
    }
    if (!check.checked) {
        f.style.display = 'none';
    }
}

function activateblockinternational() {
    var check = document.getElementById("intoption");
    var f = document.getElementById("intlang");
    if (check.checked) {
        f.style.display = 'block';
    }
    if (!check.checked) {
        f.style.display = 'none';
    }
}

var enter = document.getElementById("genre");
enter.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
        addgenre();
    }
});

document.getElementById("mainform").onkeypress = function (e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
        e.preventDefault();
    }
}

$("#genre").on("keyup", () => {
    var search = $("#genre").val();
    console.log(search);
    $.ajax({
            url: "/tag",
            method: 'GET',
            data: {
                search: search
            },
            dataType: 'json'
        })
        .done(function (response) {
            $("#select_id").html($('<option>', {
                value: "dummy",
                text: "-------SELECT HERE------",
                id: "dummy",
            }));
            response.tags.forEach((tag) => {
                $('#select_id').append($('<option>', {
                    value: tag.name,
                    text: tag.name,
                    id: tag.name,
                }));
            });
        })
        .fail(function () {
            alert("no internet");
        })
});