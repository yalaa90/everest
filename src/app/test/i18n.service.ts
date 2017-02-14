import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';

export function getTranslationProviders(): Promise<Object>[] {

    const locale = document['local'] as string;

    const noProviders: Object[] = [];

   

    const translationFile = `./locale/messages.${locale}.xlf`;

    return getTranslationsWithSystemJs(translationFile)
        .then((translations: string) => [
            { provide: TRANSLATIONS, useValue: translations },
            { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
            { provide: LOCALE_ID, useValue: locale }
        ])
        .catch(() => noProviders); // ignore if file not found

}

declare var System: any;

function getTranslationsWithSystemJs(file: string) {
    return System.import(file + '!text'); // relies on text plugin
}
