function myFunction() {
  // Chiedere nome all'utente
  let name = (prompt("Inserisci il tuo nome"));

  // Chiedere cognome all'utente
  let surname = (prompt("Inserisci il tuo cognome"));

  // Chiedere il colore preferito all'utente
  let preferredColor = (prompt("Inserisci il tuo colore preferito"));

  // Aggiungere un livello di sicurezza maggiore per la password
  const moreSecure = "21";

  // Mostrare password all'utente
  document.getElementById("password").innerHTML = `Questa e' la tua password super sicura ${name}${surname}${preferredColor}${moreSecure}`;
}
