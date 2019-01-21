for( let rec od data ){
  let bill = rec['bill']
  if( rec['crg'] ){
    bill = addChange(bill);
  }
  createMail( rec['name'], bill );
}
