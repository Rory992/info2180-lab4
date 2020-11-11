function pageResult() {

    document.getElementsByClassName("btn")[0].addEventListener("click", function() {

        var inp = document.getElementById("Name").value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("Result").innerHTML = xhr.responseText;
            }
        }
        xhr.open("GET", "http://localhost:8080/superheroes.php?query=" + inp);
        xhr.send();
    })
}

window.onload=pageResult;