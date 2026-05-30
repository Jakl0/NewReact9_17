import React, { useState } from "react";

function ListaStudentow() {
  const [studenci, setStudenci] = useState([]);
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [ocena, setOcena] = useState("");

  const dodajStudenta = (e) => {
    e.preventDefault();
    if (!imie || !nazwisko || !ocena) return;
    const nowyStudent = {
      id: Date.now(),
      imie,
      nazwisko,
      ocena: parseFloat(ocena),
    };
    setStudenci([...studenci, nowyStudent]);

    setImie("");
    setNazwisko("");
    setOcena("");
  };

  const usunStudenta = (id) => {
    setStudenci(studenci.filter((student) => student.id !== id));
  };

  const posortowaniStudenci = [...studenci].sort((a, b) =>
    a.imie.localeCompare(b.imie)
  );

  const srednia =
    studenci.length > 0?(studenci.reduce((suma, student) => suma + student.ocena, 0) /studenci.length) : 0;
  return (
    <div>
      <h2>Lista Studentów</h2>

      <form onSubmit={dodajStudenta}>
        <input type="text" placeholder="Imię" value={imie} onChange={(e) => setImie(e.target.value)}
        />

        <input type="text" placeholder="Nazwisko" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)}
        />

        <input type="number" placeholder="Ocena" value={ocena} onChange={(e) => setOcena(e.target.value)}
        />

        <button type="submit">Dodaj</button>
      </form>

      <h3>Średnia ocen: {srednia}</h3>

      <ul>
        {posortowaniStudenci.map((student) => (
          <li key={student.id}>
            {student.imie} {student.nazwisko} Ocena: {student.ocena}
            <button onClick={() => usunStudenta(student.id)}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaStudentow;