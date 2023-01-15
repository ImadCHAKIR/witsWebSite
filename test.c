#include <stdio.h>
#define N = 1000; // nombre de points à évaluer

main (){
    int i;
    double pas, x, pi, somme = 0.0;
    pas = 1.0/N; // distance entre deux abscisses
    for (i = 0; i < N; i++){ // considérer n points
        x = (i + 0.5)*pas; // calculer l'abscisse à évaluer
        somme += 4.0/(1.0 + x*x); // accumuler les ordonnées dans
    }
    pi = pas * somme; // trouver une approximation de pi
    printf("Pi=%20.19f ",pi);
}