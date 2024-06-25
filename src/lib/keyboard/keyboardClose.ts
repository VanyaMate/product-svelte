export const keyboardClose = function (opened: boolean, onClose: () => void) {
    if (opened) {
        const keyboardHandler = function (event: KeyboardEvent) {
            if (event.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', keyboardHandler);
        return () => window.removeEventListener('keydown', keyboardHandler);
    }
};