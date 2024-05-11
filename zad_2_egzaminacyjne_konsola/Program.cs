using System;

/*
*********************************************************************
*
    klasa:
        Program
    opis:
        Aplikacja konsolowa do obliczania Największego Wspólnego Dzielnika (NWD)
        dwóch liczb całkowitych dodatnich za pomocą algorytmu Euklidesa.
    autor:
        Bartek Pyka
*********************************************************************
*/



class Program
{
    // Funkcja do znajdowania NWD dwóch liczb
    static int NWD(int a, int b)
    {
        while (a!=b)
        {
            if(a>b)
            {
                a = a - b;
            }
            else
            {
                b = b - a;
            }
        }
        return a;
    }

    static void Main()
    {
        Console.WriteLine("Podaj dwie liczby całkowite dodatnie:");

        Console.Write("a = ");
        int a = int.Parse(Console.ReadLine());
        Console.Write("b = ");
        int b = int.Parse(Console.ReadLine());

        if (a > 0 && b > 0)
        {
            int wynik = NWD(a, b);
            Console.WriteLine($"NWD = {wynik}");
        }
        else
        {
            Console.WriteLine("Podaj liczby całkowite dodatnie.");
        }
    }
}