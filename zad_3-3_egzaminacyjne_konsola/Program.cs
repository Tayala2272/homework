/***************************************************************
 * 
 klasa: 
        Note
 opis: 
        Klasa do obsługi notatek, umożliwiająca tworzenie notatek 
        z unikalnym identyfikatorem oraz tytułem i treścią. 
        Zapewnia metody do wyświetlania notatek oraz diagnostyki.
 pola: 
        static int licznik - statyczny licznik notatek, 
                                używany do nadawania unikalnego ID.
        int id - unikalny identyfikator notatki.
        string title - tytuł notatki, dostępny dla klas dziedziczących.
        string content - treść notatki, dostępna dla klas dziedziczących.

 autor: 
        Bartek Pyka

 ***************************************************************/
using System;

class Note
{
    private static int licznik = 0;
    private readonly int id;
    protected string title;
    protected string content;

    public Note(string title, string content)
    {
        licznik++;
        this.id = licznik;
        this.title = title;
        this.content = content;
    }

    public void wyswietlNotatke()
    {
        Console.WriteLine("Tytuł: " + title);
        Console.WriteLine("Zawartość: " + content);
    }

    public void getInfo()
    {
        Console.WriteLine($"ID: {id}; Tytuł: {title}; Zawartość: {content}");
    }

    public static void Main()
    {
        Note jeden = new Note("Pierwsza Notatka", "Treść notatki numer jeden");
        Note dwa = new Note("Druga Notatka", "Treść notatki numer dwa");

        Console.WriteLine("Pierwsza notatka:");
        jeden.wyswietlNotatke();
        jeden.getInfo();

        Console.WriteLine("\nDruga notatka:");
        dwa.wyswietlNotatke();
        dwa.getInfo();
    }
}
