function ListGroup() {
  const villes = ['Tunis', 'Sousse', 'Touzeur', 'Sfax', 'Sidi Bouzid', 'Tataouine'];

  let list = villes.length === 0 ? <p>Liste vide</p> : villes.map((ville) => (
    <li key={ville.id}>{ville}</li>
  ));

  return (
    <ul>
      {list}
    </ul>
  );
}

export default ListGroup;
