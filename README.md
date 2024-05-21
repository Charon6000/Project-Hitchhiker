<!-- # Project-Hitchhiker
## Jak Włączyć debuger na swoim telefonie?
1. Na wpisz w terminalu: ``npm install``
1. ściągnij pakiet nawigatorowy:``npm install @react-navigation/native @react-navigation/stack``
1. ściągnij pakiet image-picker: ``npx expo install expo-image-picker``
1. Na wpisz w terminalu: ``npx expo start``
1. Pobierz apke ``expo go`` na telefon
1. Zeskanuj kod QR
1. Aby wprowadzić zmiany klikasz trójkąt by odpalic program -->

<!-- ## Jak Włączyć debuger na swojej przegladarce? -->
# Szczegółowy opis obsługi projektu
## Dodanie emulatora
 Możliwe jest uruchomienie aplikacji na emulatorze telefonu na komputerze, w aplikacji na swoim fizycznym telefonie i w przeglądarce.
### Pobieranie emulatora android na komputer (Dla Windows/Linux/MacOS)
1. Wejdź na stronę ``https://developer.android.com/studio``.
1. Pobierz aplikacje ``Android Studio`` dla odpowiedniego systemu.
1. W przebiegu instalacyjnym wystarczy zawsze klikać ``NEXT``
1. Po uruchomieniu aplikacji należy wejść w katalog ``Projects`` wejść w zakłądkę ``Virtual Device Manager`` (może być też ukryta pod 3 kropkami w prawym górnym rogu aplikacji)
1. Jeżeli posiadasz już stworzony emulator przejdź do punktu ``10.``
1. Jeżeli nie masz stworzonego emulatora możesz stworzyć go klikając guzik ``+``
1. Wybierz odpowiadający Ci typ telefonu, a następnie kliknij ``next``
1. Wybierz interesujący Cię system. Powinieneś mieć domyślnie zainstalowany system ``UpsideDownCake``, znajdziesz go w zakładce ``x86 Image``. Przejdź dalej naciskając przycisk ``Next``
1.  Nazwij swój emulator i kliknij ``Finish``
1. Jeżeli znajdujesz się w Device Manage znadź swój emulator i kliknij przycisk trójkąta
1. Jeżeli twój telefon nie jest włączony kliknij ikone włączania znajdująca się po prawej stronie emulatora

## Możliwość uruchomienia na dowolnym fizycznym telefonie
1. Na urządzeniu należy pobrać aplikacje ``Expo``. Dzięki niej będzie uruchamiany projekt.

## Pobieranie koniecznych bibliotek i rozszerzeń
 Aplikacja napisana w node.js pozwala automatycznie zainstalować potrzebne biblioteki do debugowania aplikacji. 
 Program sprawdzi czy biblioteki są zainstalowane, a jeśli nie to je pobierze.
 Biblioteki są posortowane na npm i npx, więc ten sposób segregacji należy zachować.
 Włączenie programu jest banalnie proste. Wystarczy wejść w plik ``pobierz biblioteki.js`` i kliknąć ``strzałkę`` bądź wpisać komendę ``node <link do pliku>``.

## Włączanie debugowania aplikacji
### Dla emulatora android studio
1. Rozpocznij debugging aplikacji wpisując znajdując się w folderze ``Project-Hitchiker`` w terminalu ``npm run android``
1. Możesz również napisać ``npm start``, a po pełnym uruchomieniu ``a`` co oznacza ``android``.

### Dla dowolnego fizycznego telefonu
1. Rozpocznij debugging aplikacji wpisując znajdując się w folderze ``Project-Hitchiker`` w terminalu ``npm start``.
1. Po pełnym uruchomieniu wyświetli się kod ``QR``, który należy zeskanować urządzeniem. Uruchomi to debuger applikacji w aplikacji ``Expo``

<!-- ### Walidacja bazy danych
1. Jeżeli dane takie jak hasło, nazwa użytkownika w bazie danych będą się zgadzać z danymi naszego konta testowego, walidator funkcji GET zwróci nam wartość TRUE, a więc pobieranie danych dział poprawnie
1. Nastepnie za pomocą działającego pobierania danych będziemy wstanie sprawdzić czy tworząc nowe konto użytkownika wartości poprawnie dodadzą się do bazy danych, za pomocą walidatora funkcji GET, który powinien zwrócić wartość TRUE
1. Później znowu za pomocą już działającego pobierania danych będziemy w stanie sprawdzić czy usuwanie użytkownika działa poprawnie, za pomocą walidatora funkcji GET, który powinien zwrócić wartość FALSE, czyli dane zostały usunięte -->

## Wydajnosc aplikacji
1. Po dodaniu postu przez zalogowanego uzytkownika test obliczy nam czas jaki minął pomiędzy wykonaniem żądania a dostaniem odpowiedzi, dzięki czemu będziemy świadomi wydajności tej funkcji
1. Po poprawnym wprowadzeniu danych oraz wysłaniu żądania o utworzeniu nowego użytkownika, test obliczy czas pomiędzy kliknięciem przycisku a pojawieniem się użytkownika w bazie danych

## Najważniejsze funkcje programu:
### Funkcja ``UserAddPost``
1. Opis funkcji
W pliku firebase.js znajduje się funkcja ``UserAddPost(id,nick,tresc)``, która dodaje nowy post zawierający konkretną treść dla osoby o danym nicku. 
1. Test wydajnościowy funkcji
Funkcja będąc użytą za każdym razem sprawdza ile czasu zajeło jej dodanie postu. Wynik podawany jest w sekundach.
1. Test jednostkowy funkcji
Testem jednostkowym tej funkcji zajmuje się funkcja ``TestPolaczeniaBazyDanych()``. Dodaje ona za pomocą testowaniej funkcji post o id ``0`` (0 jest id testowym. Posty dodawane z aplikacji mają id zaczynające się od 1), nicku ``test``, i treści ``test``. Nastepnie sprawdzana jest funkcją ``GetPost``, która sprawdza czy post o id 0 pojawił się w bazie danych czy nie ma go. Jeśli postu nie ma znaczy że funkcja nie działa poprawnie, a jeśli jest znaczy, że działa  prawidłowo.
### Funkcja ``GetPost``
1. Opis funkcji
W pliku firebase.js znajduje się funkcja ``GetPost(id)``, która pobiera dane postu o konkretnym ``id``. Funkcja zwraca wartość ``false`` jeśli nie będzie mogła znaleźć postu w bazie danych i zwraca wartości postu jeśli jej się to uda. 
1. Test wydajnościowy funkcji
Funkcja będąc użytą za każdym razem sprawdza ile czasu zajeło jej pobranie postu. Wynik podawany jest w sekundach.
1. Test jednostkowy funkcji
Testem jednostkowym tej funkcji zajmuje się funkcja ``TestPolaczeniaBazyDanych()``. Dodaje lub aktualizuje ona post o id ``0`` za pomocą funkcji ``UserAddPost``. Nastepnie pobiera wartości postu z bazy danych za pomocą testowanej funkcji, post zostaje usunięty funkcją ``UsunPost``, a funkcja próbuje pobrać z niego wartości jesze raz. Jeśli funkcja nie znajdzie postu po jego dodaniu albo znajdzie post po tym jak został usunięty oznacza to że nie działa ona prawidłowo.
### Funkcja ``UsunPost``
1. Opis funkcji
W pliku firebase.js znajduje się funkcja ``UsunPost(id)``, która usuwa post o konkretnym ``id``. 
1. Test wydajnościowy funkcji
Funkcja będąc użytą za każdym razem sprawdza ile czasu zajeło jej usunięcie postu. Wynik podawany jest w sekundach.
1. Test jednostkowy funkcji
Dodaje lub aktualizuje ona post o id ``0`` za pomocą funkcji ``UserAddPost``. Nastepnie sprawdza czy post istnieje funkcją ``GetPost``, post zostaje usunięty za pomocą testowanej funkcji, a funkcja ``GetPost``próbuje pobrać z niego wartości jesze raz. Jeśli funkcja ``GetPost`` znajdzie post po tym jak funkcja etstowana poróbowała go usunąć oznacza to że funkcja nie działa poprawnie.
### Funkcja ``checkAndInstallNpxLibraries``
1. Opis funkcji
Funkcja znajduje się w pliku ``pobierz_biblioteki.js`` i sprawdza czy wszystkie biblioteki z pliku ``npx_commands.txt`` zostały zainstalowane, a jeśli nie to instaluje je.
1. Test wydajnościowy funkcji
Funkcja sprawdza ile czasu zajęło jej sprawdzenie i zainstalowanie każdej z bibliotek i zwraca go jako ``time``. Wynik podawany jest w sekundach.
1. Test jednostkowy funkcji
Funkcja samodzielnie sprawdza czy udało jej się zainstalować daną bibliotekę. Te nieudane pobrania wprowadza do listy ``failed``, a udane do listy ``success`` i obie zwraca.
### Funkcja ``checkAndInstallNpmLibraries``
1. Opis funkcji
Funkcja znajduje się w pliku ``pobierz_biblioteki.js`` i sprawdza czy wszystkie biblioteki z pliku ``npm_commands.txt`` zostały zainstalowane, a jeśli nie to instaluje je.
1. Test wydajnościowy funkcji
Funkcja sprawdza ile czasu zajęło jej sprawdzenie i zainstalowanie każdej z bibliotek i zwraca go jako ``time``. Wynik podawany jest w sekundach.
1. Test jednostkowy funkcji
Funkcja samodzielnie sprawdza czy udało jej się zainstalować daną bibliotekę. Te nieudane pobrania wprowadza do listy ``failed``, a udane do listy ``success`` i obie zwraca.