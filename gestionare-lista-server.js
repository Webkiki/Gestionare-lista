//selectez din DOMN elementele necesare pt interactiunea cu utilizatorul

const buton = document.querySelector("#adauga-date-local"); //butonul
const listaDate = document.querySelector("#lista-nume-nota"); //lista li
const nume = document.querySelector("#nume-local"); //nume din input
const nota = document.querySelector("#nota-locala"); //nota din input
//se initializeaza lista - verificam daca exista date in localeStorage. Daca exista se parseaza datele JSON si se populeaza lista
//se afiseaza initial lista de studenti daca exista altfel se seteaza valoarea constantei la un array gol
const listaNoua = JSON.parse(localStorage.getItem("student"))
  ? JSON.parse(localStorage.getItem("student"))
  : [];

//se verifica daca lista are elemente. Dacă are, parcurge fiecare
// element din listă și creează un element de listă (li) pentru fiecare student
//elementul de listă este adăugat la listaDate.
if (listaNoua.length > 0) {
  listaNoua.forEach((student) => {
    const elemente = document.createElement("li");
    elemente.textContent = `${student.nume} ${student.nota}`;
    listaDate.appendChild(elemente);
  });
}
//eveniment pt adaugare date
//obtin valorile din inputurile pt nume si nota
//se obține valoarea din câmpul de text "nota". Se creează un nou obiect "student" cu proprietățile "nume" și
//"nota" care conțin valorile obținute din câmpurile de text
//"student" - se adauga la listaNoua - localeStorage

buton.addEventListener("click", () => {
  const numeInput = nume.value.toUpperCase();
  const notaInput = nota.value;
  const student = { nume: numeInput, nota: notaInput };
  listaNoua.push(student);

  //vreau sa verific daca inputurile sunt goale. Daca sunt goale nu vreau sa se
  //execute codul si sa se adauge valori goale din input
  if (numeInput.trim() === "" || notaInput.trim() === "") {
    alert("Numele și nota sunt obligatorii!");
    return; // Întrerupem execuția funcției
  }
  //Codul salvează listaNoua în localStorage sub numele "student"-key-ul
  //creeaza un li pentru ultimul student adăugat în listaNoua și îl adaugă la
  //listaDate - de unde se va afisa pe ecran
  //pregatim campurile pt noi date

  localStorage.setItem("student", JSON.stringify(listaNoua));
  elemente = document.createElement("li");
  elemente.textContent = `${student.nume} ${student.nota}`;
  listaDate.appendChild(elemente);
  nume.value = "";
  nota.value = "";
});

//cod stergere student conform preferinta
//

const stergeUltimulButton = document.getElementById("sterge-datele"); // Buton pentru ștergere

stergeUltimulButton.addEventListener("click", () => {
  // Funcție pentru a șterge un student specific conform index afisat pe ecran - 1.
  //in JS array sunt indexate de la ZERO
  function stergeStudent(index) {
    if (index >= 0 && index < listaNoua.length) {
      listaNoua.splice(index, 1);
      localStorage.setItem("student", JSON.stringify(listaNoua));

      location.reload();
    }
    //e necesara conditie suplimentara ca sa nu mai ruleze codul de mai jos
    else {
      alert("Numarul introdus nu este valid!");
    }
  }

  // Afișează un alert cu numele studenților și cere indexul
  let numeStudenti = "";
  listaNoua.forEach((student, index) => {
    numeStudenti += `${index + 1}. ${student.nume}\n`;
  });

  const indexDeSters = prompt(
    numeStudenti +
      "\nIntroduceti numarul studentului pe care vreti sa il stergeti:"
  );

  // Scade 1 din index deoarece array-urile sunt indexate de la 0
  stergeStudent(indexDeSters - 1);
});

//Sortare alfabetica si invers
const butonAlfabetic = document.querySelector("#buton-alfabetic");
let elemente;
butonAlfabetic.addEventListener("click", () => {
  listaNoua.sort((a, b) => a.nume.localeCompare(b.nume));
  //actualizez in localStorage

  localStorage.setItem("student", JSON.stringify(listaNoua));
  listaDate.innerHTML = "";
  // Reafișează lista sortată
  listaNoua.forEach((student) => {
    elemente = document.createElement("li");
    elemente.textContent = `${student.nume} ${student.nota}`;
    listaDate.appendChild(elemente);
  });
});

//sortare invers alfabetic

const butonInversAlfabetic = document.querySelector("#buton-reverse-alfabetic");

butonInversAlfabetic.addEventListener("click", () => {
  listaNoua.sort((a, b) => b.nume.localeCompare(a.nume));
  //actualizez in localStorage

  localStorage.setItem("student", JSON.stringify(listaNoua));
  listaDate.innerHTML = "";
  // Reafișează lista sortată
  listaNoua.forEach((student) => {
    elemente = document.createElement("li");
    elemente.textContent = `${student.nume} ${student.nota}`;
    listaDate.appendChild(elemente);
  });
});

//TEST CU FUNCTIE -- MAI JOS PT SORTARE INVERS ALFABETIC
//reverse cu functie-- este ok-- functioneaza

//const butonInversAlfabetic = document.querySelector("#buton-reverse-alfabetic");

//function adaugaElementeInLista(lista) {
//lista.forEach((student) => {
//const element = document.createElement("li");
//element.textContent = `${student.nume} ${student.nota}`;
//listaDate.appendChild(element);
//});
//}

//butonInversAlfabetic.addEventListener("click", () => {
//listaNoua.sort((a, b) => b.nume.localeCompare(a.nume));
//localStorage.setItem("student", JSON.stringify(listaNoua));
//listaDate.innerHTML = "";
//adaugaElementeInLista(listaNoua);
//});

//sortare nota crescator --
const butonCrescator = document.querySelector("#buton-crescator");

butonCrescator.addEventListener("click", () => {
  listaNoua.sort((a, b) => a.nota - b.nota);

  //actualizez in localStorage

  localStorage.setItem("student", JSON.stringify(listaNoua));
  listaDate.innerHTML = "";
  // Reafișează lista sortată
  listaNoua.forEach((student) => {
    elemente = document.createElement("li");
    elemente.textContent = `${student.nume} ${student.nota}`;
    listaDate.appendChild(elemente);
  });
});

//sortare nota descrescator

const butonDescrescator = document.querySelector("#buton-descrescator");

butonDescrescator.addEventListener("click", () => {
  listaNoua.sort((a, b) => b.nota - a.nota);

  //actualizez in localStorage

  localStorage.setItem("student", JSON.stringify(listaNoua));
  listaDate.innerHTML = "";
  // Reafișează lista sortată
  listaNoua.forEach((student) => {
    elemente = document.createElement("li");
    elemente.textContent = `${student.nume} ${student.nota}`;
    listaDate.appendChild(elemente);
  });
});
