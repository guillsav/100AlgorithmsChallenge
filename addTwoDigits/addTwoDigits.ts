function addTwoDigits(n: any): number {
 n = n.toString().split('');
 let total = 0;
 for(let i = 0; i < n.length; i++) {
   total += parseInt(n[i]);
 }
 return total;
}

console.log(addTwoDigits(29));