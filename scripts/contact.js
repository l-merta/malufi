const saveBtn = document.querySelector(".contact-save");
saveBtn.addEventListener("click", function () {
  console.log("halo");
  // Get the contact information from the website
  const contact = {
    name: "Matyáš Merta",
    phone: "724 377 961",
    email: "info@malufi.cz"
  };
  // create a vcard file
  const vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;
  
  newLink.click();
});