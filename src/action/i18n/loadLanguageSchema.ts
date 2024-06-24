export const loadLanguageSchema = function (language: string) {
    return fetch(`/locale/${ language }.json`, {
        method : 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json());
};