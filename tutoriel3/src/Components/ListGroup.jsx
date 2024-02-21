function ListGroup() {
  const villes = ['Tunis', 'Sousse', 'Touzeur', 'Sfax', 'Sidi Bouzid', 'Tataouine'];
  const startWith = "S"; 
  const Svilles = villes.filter(ville => ville.startsWith(startWith));
  const sVilles = Svilles.map((ville) => <li key={ville.id}>{ville}</li>);
  return (
    <ul>
      {sVilles}
    </ul>
  );
}

export default ListGroup;
