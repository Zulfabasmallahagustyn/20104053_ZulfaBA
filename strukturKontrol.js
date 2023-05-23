var nilai = 80;

if (nilai >= 80) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

switch (nilai) {
  case 80:
    console.log("Nilai B");
    break;
  case 90:
    console.log("Nilai A");
    break;
  default:
    console.log("Nilai tidak diketahui");
}

for (var i = 0; i < 5; i++) {
  console.log(i);
}

while (nilai > 0) {
  console.log(nilai);
  nilai--;
}
