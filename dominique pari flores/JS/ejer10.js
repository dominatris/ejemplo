let sumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 36000; i++) {

  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let suma = dado1 + dado2;
 
 sumas[suma-2]++;
}

for (let i = 0; i < 11; i++) {
  console.log("La suma", i+2, "apareció", sumas[i], "veces");
} 