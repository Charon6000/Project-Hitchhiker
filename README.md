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
1. Na wpisz w terminalu: ``npm install``
1. ``npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0``
1. ``npx expo install expo-image-picker``
1. ``npm install @react-navigation/native @react-navigation/stack``
1. ``npm install styled-components``
1. ``npx expo install expo-location``
1. ``npm i firebase``
1. ``npx expo install react-native-gesture-handler``
1.``npm i @react-native-google-signin/google-signin``

## Włączanie debugowania aplikacji
### Dla emulatora android studio
1. Rozpocznij debugging aplikacji wpisując znajdując się w folderze ``Project-Hitchiker`` w terminalu ``npm run android``
1. Możesz również napisać ``npm start``, a po pełnym uruchomieniu ``a`` co oznacza ``android``.

### Dla dowolnego fizycznego telefonu
1. Rozpocznij debugging aplikacji wpisując znajdując się w folderze ``Project-Hitchiker`` w terminalu ``npm start``.
1. Po pełnym uruchomieniu wyświetli się kod ``QR``, który należy zeskanować urządzeniem. Uruchomi to debuger applikacji w aplikacji ``Expo``

### Walidacja bazy danych
1. Jeżeli dane takie jak hasło, nazwa użytkownika w bazie danych będą się zgadzać z danymi naszego konta testowego, walidator funkcji GET zwróci nam wartość TRUE, a więc pobieranie danych dział poprawnie
1. Nastepnie za pomocą działającego pobierania danych będziemy wstanie sprawdzić czy tworząc nowe konto użytkownika wartości poprawnie dodadzą się do bazy danych, za pomocą walidatora funkcji GET, który powinien zwrócić wartość TRUE
1. Później znowu za pomocą już działającego pobierania danych będziemy w stanie sprawdzić czy usuwanie użytkownika działa poprawnie, za pomocą walidatora funkcji GET, który powinien zwrócić wartość FALSE, czyli dane zostały usunięte
