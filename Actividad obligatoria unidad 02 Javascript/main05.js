
for (let number = 11; number >= 9; number--) {
    document.write("<h4>Tabla del " + number + "</h4>");
    for (let n = 1; n <= 10; n++) {
        document.write('<p>' + number + " x " + n + " = " + number * n + '</p>');
    }
}

