\documentclass{article}

\usepackage[OT4]{polski}
\usepackage[utf8]{inputenc}
\usepackage[left=2cm,right=2cm,top=1.5cm,bottom=2cm,includeheadfoot,a4paper]{geometry}
\usepackage{listings}
\usepackage{hyperref}

\geometry{a4paper}
\linespread{1.5}
\frenchspacing
\renewcommand{\arraystretch}{1.4}

\title{
	Zaawansowane metody programowania\\
	\Huge{Bimbeer}
}

\date{}

\begin{document}
	\maketitle

	\section {Opis funkcjonalny systemu}
    Bimbeer to innowacyjny system składający się z aplikacji webowej, desktopowej i mobilnej. Jest to klon popularnej aplikacji randkowej Tinder, ale z unikalnym podejściem skierowanym do miłośników piwa. Dzięki Bimbeer użytkownicy mogą poznać innych miłośników kosztowania browarów i umówić się z nimi na spotkanie w realnym świecie. 

    
    \subsection{Funkcjonalność aplikacji obejmuje:}
    \begin{itemize}
        \item Uwierzytelnianie użytkownika przy pomocy maila;
        \item Uwierzytelnianie przy pomocy social media;
        \item Customizacja profilu;
        \item Chat real-time;
        \item Statusy wiadomości;
        \item Proponowanie użytkowników na podstawie preferencji;
        \item Proponowanie użytkowników na podstawie lokalizacji;
        \item Swipe’owanie profili;
        \item Panel wyboru lubianych browarów;
        \item Tworzenie par;
        \item Rozłączanie par.
    \end{itemize}

    \section{Streszczenie opisu technologicznego}

    \subsection{WEB}
    \begin{itemize}
        \item VUE.js - otwartoźródłowy framework do aplikacji webowych typu front-end, oparty na języku JavaScript;
        \item Firebase - platforma do tworzenia i zarządzania aplikacjami mobilnymi i webowymi, oferująca m.in. bazę danych w czasie rzeczywistym oraz autentykację użytkowników.
        \item Vercel - platforma chmurowa jako firma usługowa. Firma utrzymuje framework do tworzenia stron internetowych Next.js. Architektura Vercel jest zbudowana wokół Jamstack, a wdrożenia są obsługiwane przez repozytoria Git.
        \item ChakraUI for VUE.js - biblioteka komponentów interfejsu użytkownika dla Reacta, umożliwiająca szybkie tworzenie atrakcyjnych i spójnych interfejsów.
        \item GitHub - miejsce do kontroli wersji kodu. Pozwala na łatwą synchronizację między członkami grupy oraz na prostą kontrolę zmian w kodzie.
        \item ESLint - narzędzie do analizy statycznej kodu JavaScript w celu wykrycia problemów i niezgodności ze standardami kodowania.
        \item Prettier - narzędzie do formatowania kodu, zapewniające spójny styl kodowania w całym projekcie.
    \end{itemize}

    \subsection{Desktop}

    \begin{itemize}
        \item Electron - framework umożliwiający tworzenie aplikacji desktopowych przy użyciu technologii webowych.
        \item React - biblioteka JavaScript do tworzenia interfejsów użytkownika.
        \item React Router - biblioteka do zarządzania nawigacją w aplikacjach Reacta.
        \item React Fast Refresh - funkcja umożliwiająca szybkie odświeżanie komponentów Reacta podczas rozwoju aplikacji.
        \item Webpack - narzędzie do budowania i pakowania aplikacji JavaScript.
        \item Firebase - platforma do tworzenia i zarządzania aplikacjami mobilnymi i webowymi, oferująca m.in. bazę danych w czasie rzeczywistym oraz autentykację użytkowników.
        \item ChakraUI - biblioteka komponentów interfejsu użytkownika dla Reacta, umożliwiająca szybkie tworzenie atrakcyjnych i spójnych interfejsów.
        \item GitHub - miejsce do kontroli wersji kodu. Pozwala na łatwą synchronizację między członkami grupy oraz na prostą kontrolę zmian w kodzie.
        \item ESLint - narzędzie do analizy statycznej kodu JavaScript w celu wykrycia problemów i niezgodności ze standardami kodowania.
        \item Prettier - narzędzie do formatowania kodu, zapewniające spójny styl kodowania w całym projekcie.
    \end{itemize}


    \subsection{Mobile}
    Aplikacja mobilna została napisana przy wykorzystaniu języka Dart wraz z cross-platformowym framework’iem Flutter. Implementacja obejmuje jedynie część wymaganą do uruchomienia aplikacji na platformie android.

Lista najważniejszych technologii i bibliotek, na bazie których powstała aplikacja: 

    \begin{itemize}
        \item Dart + Flutter - język programowania i framework do tworzenia aplikacji na różne platformy. Flutter oferuje szybkość i wydajność, a także hot reload, ułatwiający iteracyjną pracę deweloperów.
\item Bloc - wzorzec projektowy umożliwiający separację logiki biznesowej od warstwy prezentacyjnej w aplikacjach. Logika biznesowa jest zaimplementowana jako klasa BLoC, która obsługuje zdarzenia i generuje stany aplikacji.

\item Firebase - platforma backendowa oferująca wiele usług, takich jak autentykacja użytkowników, baza danych Firestore i przechowywanie plików w chmurze. Firebase zapewnia również narzędzia do analityki i monitorowania aplikacji.
\item Rxdart - biblioteka do programowania reaktywnego w języku Dart, umożliwiająca tworzenie i transformację strumieni danych w aplikacjach.
\item Formz - biblioteka do tworzenia i walidacji formularzy w aplikacjach Flutter, oferująca wiele gotowych walidatorów i ułatwiająca obsługę różnych typów pól.
\item SwipeCards - biblioteka umożliwiająca przesuwanie kart w aplikacjach z wieloma konfigurowalnymi opcjami.
\item Github - platforma hostingowa dla projektów programistycznych oferująca narzędzia do kontroli wersji, zarządzania projektem i łatwej współpracy z innymi deweloperami.

    \end{itemize}


    
    \section{Streszczenie wykorzystanych wzorców projektowych}
    \subsection{WEB}
    \begin{itemize}
        \item Conditional Rendering - wzorzec pozwalający na wyświetlanie różnych komponentów lub elementów w zależności od spełnienia określonych warunków.
        \item Komponenty prezentacyjne i kontenerowe (Presentational and container components) - wzorzec polegający na oddzieleniu logiki zarządzania stanem i danymi od prezentacji.
        \item Komponenty wyższego rzędu (Higher-order components, HOC) - wzorzec służący do ponownego wykorzystania logiki komponentów.
        \item Provider pattern - wzorzec umożliwiający udostępnianie wartości w całym drzewie komponentów bez konieczności przekazywania ich przez każdy poziom.
    \end{itemize}
    \subsection{Desktop}
    \begin{itemize}
        \item Komponenty wyższego rzędu (Higher-order components, HOC) - wzorzec służący do ponownego wykorzystania logiki komponentów.
        \item Provider pattern - wzorzec umożliwiający udostępnianie wartości w całym drzewie komponentów bez konieczności przekazywania ich przez każdy poziom.
        \item Hooks Pattern - wzorzec umożliwiający wykorzystanie stanu i innych funkcjonalności Reacta w komponentach funkcyjnych.
        \item Conditional Rendering - wzorzec pozwalający na wyświetlanie różnych komponentów lub elementów w zależności od spełnienia określonych warunków.
        \item Komponenty prezentacyjne i kontenerowe (Presentational and container components) - wzorzec polegający na oddzieleniu logiki zarządzania stanem i danymi od prezentacji.
        \item Singleton - wzorzec pozwalający zapewnienie istnienia wyłącznie jednej instancji danej klasy.
    \end{itemize}
    \subsection{Mobile}
    \begin{itemize}
        \item Feature first approach - sposób strukturyzacji projektu, polegający na umieszczaniu elementów oprogramowania dotyczących określonej funkcjonalności w przeznaczonych dla nich folderach
\item Bloc (Business Logic Component) to wzorzec projektowy, który jest oparty na podejściu "Separation of Concerns" (SoC), czyli separacji zadań. W praktyce oznacza to, że Bloc oddziela logikę biznesową od prezentacji (warstwy widoku) oraz od zarządzania stanem (warstwy modelu). Bloc wykorzystuje podejście unidirectional data flow, w którym zdarzenia (Events) przekazywane są do Bloca, który przetwarza je i zwraca nowy stan (State). Widok (View) reaguje na zmiany stanu i aktualizuje interfejs użytkownika. Dzięki temu podejściu, Bloc zapewnia separację zadań, co ułatwia utrzymanie i testowanie aplikacji.

\item Repository Pattern - to wzorzec projektowy, który ma na celu oddzielenie logiki biznesowej od sposobu dostępu do danych. Repository udostępnia jednolite API dla warstwy biznesowej, niezależnie od źródła danych (np. bazy danych, plików, serwisów sieciowych).

\item Value Object - to wzorzec projektowy, który ma na celu reprezentowanie prostych obiektów, których wartość jest najważniejsza, a nie ich identyfikator. Obiekty te są immutable (niemodyfikowalne), co oznacza, że ich stan nie może być zmieniony po utworzeniu.

\item Dependency Injection - polega na przekazywaniu obiektów, na których inny obiekt polega, jako argumentów do konstruktora lub metod tego obiektu, zamiast tworzenia ich wewnątrz obiektu. Dzięki temu, zależności są odseparowane od obiektu, co ułatwia testowanie, rozwijanie i zarządzanie nimi. Wzorzec ten pozwala na elastyczne podmienianie zależności w zależności od potrzeb, co zwiększa modularność i łatwość utrzymywania kodu.

\item Walidator - wzorzec używany do sprawdzania poprawności danych wejściowych w różnych kontekstach aplikacji. Wzorzec ten zazwyczaj składa się z klas walidujących, które weryfikują dane wejściowe i zwracają informacje o ewentualnych błędach.
\item Obserwator - to wzorzec projektowy, który umożliwia obiektom reagowanie na zmiany stanu innego obiektu (zwany podmiotem) poprzez subskrybowanie jego zdarzeń. Podmiot powiadamia swoich obserwatorów o zmianach, a obserwatorzy podejmują odpowiednie działania w zależności od otrzymanych informacji.

    \end{itemize}


    
    \section{Instrukcja lokalnego i zdalnego uruchomienia}
        \subsection{WEB}
        \subsubsection{Uruchomienie systemu}
        \begin{itemize}
            \item Lokalnie
            \begin{itemize}
                \item Zainstaluj Node.js
                \item Zainstaluj klienta Git
                \item Uruchom konsole i wpisz:
                \begin{lstlisting}
    git clone https://github.com/bimbeer/WEB.git
                \end{lstlisting}
                \item Następnie przejdź do folderu z projektem, otwórz konsolę i wpisz:
                \begin{lstlisting}
    npm install
                \end{lstlisting}
                \item Poczekaj na koniec procesu i wpisz w konsoli:
                \begin{lstlisting}
    npm start
                \end{lstlisting}
            \end{itemize}
            Po tych krokach powinna uruchomić się przeglądarka internetowa z adresem \textbf{localhost:3000} i po chwili wyświetlić stronę startową projektu.
        \end{itemize}
        
            

\begin{itemize}
    \item Zdalnie
    \begin{itemize}
        \item Wystarczy przejść na stronę                 \begin{lstlisting}
    https://bimbeer.vercel.app/
                \end{lstlisting}
                a aplikacja otworzy się w oknie przeglądarki
    \end{itemize}
\end{itemize}
    
            \subsection{Desktop}
    \subsubsection{Uruchomienie testów}
    \begin{itemize}
        \item Lokalnie - Lokalne uruchomienie testów wymaga pobrania repozytorium, instalacji zależności i manualne uruchomienie testów.

\begin{itemize}
    \item Pobranie i instalacja Node.js ze strony internetowej:  https://nodejs.org/
    \item Sklonowanie repozytorium: git clone --branch main https://github.com/bimbeer/desktop
    \item Przejście do folderu projektu: cd your-project-name
    \item Instalacja zależności: npm install
    \item Uruchomienie testów: npm test
    
\end{itemize}
\item Zdalnie - uruchomienie testów wymaga jedynie otwarcia Github Actions, w których są automatycznie przeprowadzane testy CLI.
\begin{itemize}
    \item Otwarcie repozytorium: https://github.com/bimbeer/desktop
    \item Przejście do zakładki Actions
    \item Otwarcie workflow’u testowego Node.js CI
\end{itemize}
\end{itemize}
\subsubsection{Uruchomienie systemu}
\begin{itemize}
    \item Manualne uruchomienie
    \begin{itemize}
        \item Sklonowanie repozytorium: git clone --branch main https://github.com/bimbeer/desktop
        \item Przejście do folderu projektu: cd your-project-name
        \item Instalacja zależności: npm install
        \item Uruchomienie projektu: npm start
    \end{itemize}
    \item Instalacja przy użyciu pliku wykonywalnego
    \begin{itemize}
        \item Pobranie pliku archiwum: https://github.com/bimbeer/desktop/releases/tag/v1.0.0
        \item Rozpakowanie archiwum
        \item Przejście do folderu build (release/build)
        \item Uruchomienie instalatora “Bimbeer Setup 1.0.0.exe”
        \item Uruchomienie aplikacji Bimbeer
    \end{itemize}
    





    




\end{itemize}


%       \subsection{Mobile}
%         \subsubsection{Uruchomienie systemu}
%         \begin{itemize}
%             \item Lokalnie
%             \begin{itemize}
%             \end{itemize}
%         \end{itemize}
        
            

% \begin{itemize}
%     \item Zdalnie
%     \begin{itemize}
%     \end{itemize}
% \end{itemize}
    





    \section{Wnioski projektowe}
    Proces tworzenia systemu okazał się dużym wyzwaniem pod względem wymagań funkcjonalnych. Projektowanie systemu obejmującego trzy platformy: webową, desktopową i mobilną wymagało od naszej drużyny starannego planowania i koordynacji działań. Musieliśmy wziąć pod uwagę różnice między platformami i zapewnić spójność doświadczenia użytkownika na wszystkich z nich.
Jednym z kluczowych wyzwań było zapoznanie się z nieznanymi nam wcześniej platformami i technologiami. Musieliśmy szybko nauczyć się nowych narzędzi i metod pracy, aby sprostać wymaganiom projektu. Dodatkowo musieliśmy pilnować by przestrzegać zasady czystego kodu oraz stosować wzorce projektowe i dobre praktyki w celu zapewnienia skalowalności i łatwości utrzymania kodu.
Podczas tworzenia projektu mieliśmy okazję wzmocnić kompetencje miękkie, takie jak: umiejętność pracy w zespole, komunikatywność, samodyscyplina, kreatywność, a także cierpliwość i wytrwałość, które były niezwykle kluczowe w najtrudniejszych momentach tworzenia systemu.
Komunikacja w zespole była kluczowa dla sukcesu projektu. Głównym narzędziem komunikacji był Discord, który umożliwił nam skuteczne dzielenie się informacjami i koordynowanie działań. Dzięki temu udało nam się zrealizować projekt na czas i zgodnie z oczekiwaniami.
Podsumowując, proces tworzenia systemu dla trzech platform był pełen wyzwań, ale dzięki starannemu planowaniu, zastosowaniu dobrych praktyk i skutecznej komunikacji w zespole udało nam się doprowadzić projekt do końca.


\end{document}