// RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
// 5! = 5 x 4 x 3 x 2 x1
// 5! = 5 x 4!

// n! = n x (n1)
console.log(fatorial(5))