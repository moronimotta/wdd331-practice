(() => {
    const allowedValues = new Set(['light', 'system', 'dark']);
    const storageKey = 'theme-preference';
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let syncRoot = document.getElementById('theme-preference-sync');

    if (!syncRoot) {
        syncRoot = document.createElement('div');
        syncRoot.id = 'theme-preference-sync';
        syncRoot.hidden = true;
        syncRoot.setAttribute('aria-hidden', 'true');

        for (const value of ['light', 'system', 'dark']) {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'theme-preference';
            input.value = value;

            if (value === 'system') {
                input.checked = true;
            }

            syncRoot.appendChild(input);
        }

        const mountPoint = document.head ?? document.documentElement;
        mountPoint.appendChild(syncRoot);
    }

    let storedPreference = null;

    try {
        storedPreference = window.localStorage.getItem(storageKey);
    } catch {
        storedPreference = null;
    }

    const resolvedPreference = allowedValues.has(storedPreference) ? storedPreference : 'system';
    const syncInput = syncRoot.querySelector(`input[value="${resolvedPreference}"]`);

    if (syncInput) {
        syncInput.checked = true;
    }

    function syncControls(preference) {
        const controls = document.querySelectorAll('input[name="theme-preference"]');

        for (const control of controls) {
            control.checked = control.value === preference;
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        syncControls(resolvedPreference);

        const controls = document.querySelectorAll('input[name="theme-preference"]');

        for (const control of controls) {
            control.addEventListener('change', (event) => {
                const nextPreference = event.target.value;

                try {
                    window.localStorage.setItem(storageKey, nextPreference);
                } catch {
                }

                syncControls(nextPreference);
            });
        }
    });

    document.addEventListener('change', (event) => {
        if (event.target instanceof HTMLInputElement && event.target.name === 'theme-preference') {
            try {
                window.localStorage.setItem(storageKey, event.target.value);
            } catch {
            }
        }
    });

    mediaQuery.addEventListener('change', () => {
        let preference = null;

        try {
            preference = window.localStorage.getItem(storageKey);
        } catch {
            preference = null;
        }

        if (preference === 'system' || !allowedValues.has(preference)) {
            syncControls('system');
        }
    });
})();