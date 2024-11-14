// Prototype
let object = {
    a: 2,
    icrement: function(){
        return this.a + 1;
    }
}

document.writeln(object.a)
document.writeln('<br></br>')
document.writeln(object.icrement)
document.writeln('<br></br>')
document.writeln(object.icrement())
document.writeln('<br></br>')

// Property Proto
let Person = {
    nama : 'Farhan',
    umur : 20,
    job : 'Junior Programer'
}

document.writeln(`Ini Adalah Contoh Non Proto = ${Person.nama} ${Person.umur} ${Person.job}`)

document.writeln('<br></br>')

let manusia = {}
manusia.__proto__ = Person

document.writeln(`Ini Contoh Dengan Proto = ${manusia.nama} ${manusia.umur} ${manusia.job}`)

// Contoh Dari ChatGpt
function Manusia(nama) {
    this.nama = nama;
  }
  
  // Tambahin kemampuan ke semua manusia lewat prototype
  Manusia.prototype.sapa = function() {
    return `Halo, Nama Saya ${this.nama}`;
  };
  
  const ali = new Manusia('Ali');
  document.writeln('<br></br>')
  document.writeln(ali.sapa()); // Output: Halo, nama saya Ali