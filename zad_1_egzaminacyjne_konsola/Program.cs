using System;

/*
*********************************************************************
*
    klasa:
        Osoba

    opis:
        Klasa Osoba reprezentuje osobę uczestniczącą w systemie forum użytkowników.
        Zawiera prywatne pola dla identyfikatora i imienia osoby oraz statyczne pole
        zliczające liczbę instancji klasy.

    pola:
        int id - prywatny identyfikator osoby
        string imie - prywatna nazwa osoby
        static int LiczbaInstancji - ogólnodostępne pole statyczne zliczające instancje klasy

    autor:
        Bartek Pyka

*********************************************************************
*/
class Osoba
{
    private int id;
    private string imie;
    public static int LiczbaInstancji = 0;

    public Osoba()
    {
        this.id = 0;
        this.imie = string.Empty;
        LiczbaInstancji++;
    }

    public Osoba(int id, string imie)
    {
        this.id = id;
        this.imie = imie;
        LiczbaInstancji++;
    }

    public Osoba(Osoba innaOsoba)
    {
        this.id = innaOsoba.id;
        this.imie = innaOsoba.imie;
        LiczbaInstancji++;
    }

    public void WypiszImie(string argument)
    {
        if (!string.IsNullOrEmpty(this.imie))
        {
            Console.WriteLine($"Cześć {argument}, mam na imię {this.imie}");
        }
        else
        {
            Console.WriteLine("Brak danych");
        }
    }
}

class Program
{
    static void Main()
    {
        Osoba osoba1 = new Osoba();
        Osoba osoba2 = new Osoba(1, "Janusz");
        Osoba osoba3 = new Osoba(osoba2);

        osoba1.WypiszImie("Marcin");
        osoba2.WypiszImie("Marcin");
        osoba3.WypiszImie("Michał");

        Console.WriteLine($"Liczba stworzonych instancji klasy Osoba: {Osoba.LiczbaInstancji}");
    }
}
