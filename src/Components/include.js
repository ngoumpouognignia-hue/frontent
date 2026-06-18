async function loadIncludes() {
    const includes = [
        { selector: '#header', url: 'src/Components/Header/Index.html' },
        { selector: '#footer', url: 'src/Components/Footer/Index.html' }
    ];

    await Promise.all(
        includes.map(async ({ selector, url }) => {
            const element = document.querySelector(selector);
            if (!element) return;

            const response = await fetch(url);
            element.outerHTML = await response.text();
        })
    );

    document.dispatchEvent(new Event('includesLoaded'));
}

document.addEventListener('DOMContentLoaded', loadIncludes);
