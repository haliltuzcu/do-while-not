let again;
do {
  let ortalama = 0;
  const vize = Number(prompt("your vize notu"));
  const final = Number(prompt("your final notu"));
  ortalama = vize * 0.4 + final * 0.6;
  console.log(`ortalama ${ortalama}`);
  again = prompt(`tekrar girmek istiyormusunuz(e/E)?`);
} while (again === "e" || again === "E");
console.log(`grsrz`);
