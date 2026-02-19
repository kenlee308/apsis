/**
 * APSIS Shared Navigation Component
 * Centralizes the header and mobile menu for consistency across all pages.
 */

class ApsisNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.initMobileMenu();
        this.highlightActiveLink();
    }

    render() {
        this.innerHTML = `
        <nav class="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center max-w-[1400px] left-1/2 -translate-x-1/2">
            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="md:hidden relative z-[60] p-2 text-slate-400 hover:text-white transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    <path id="close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Branding -->
            <div class="relative z-[60] flex flex-col items-center md:items-start flex-1 md:flex-none">
                <a href="index.html" class="text-xl md:text-2xl font-bold glow tracking-wider block">APSIS INC.</a>
                <p class="text-[8px] md:text-[10px] text-slate-500 uppercase tracking-[0.3em] mt-1">Human-AI Evolution</p>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex space-x-10 text-slate-400 font-medium text-sm tracking-wide">
                <a href="index.html" class="nav-link hover:text-white transition" data-page="index">Home</a>
                <a href="aboutme.html" class="nav-link hover:text-white transition" data-page="aboutme">About</a>
                <a href="projects.html" class="nav-link hover:text-white transition" data-page="projects">Projects</a>
                <a href="Javascript%20Maze%20Game.html" target="_blank" class="nav-link hover:text-white transition" data-page="maze">AI Maze</a>
                <a href="https://medium.com/@apsis.g9" target="_blank" class="nav-link hover:text-white transition">Blog</a>
            </div>

            <!-- Symmetry Spacer -->
            <div class="md:hidden w-10"></div>

            <!-- Mobile Menu Dropdown -->
            <div id="mobile-menu"
                class="absolute top-full left-0 w-max min-w-[200px] bg-[#0b0d17]/95 backdrop-blur-xl z-[55] flex flex-col items-start px-12 py-8 space-y-6 opacity-0 pointer-events-none -translate-y-4 transition-all duration-300 md:hidden border-b border-white/10">
                <a href="index.html" class="text-xl font-semibold text-slate-400 hover:text-white" data-page="index">Home</a>
                <a href="aboutme.html" class="text-xl font-semibold text-slate-400 hover:text-white" data-page="aboutme">About</a>
                <a href="projects.html" class="text-xl font-semibold text-slate-400 hover:text-white" data-page="projects">Projects</a>
                <a href="Javascript%20Maze%20Game.html" target="_blank" class="text-xl font-semibold text-slate-400 hover:text-white" data-page="maze">AI Maze</a>
                <a href="https://medium.com/@apsis.g9" target="_blank" class="text-xl font-semibold text-slate-400 hover:text-white">Blog</a>
            </div>
        </nav>
        `;
    }

    initMobileMenu() {
        const btn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');
        const menuIcon = this.querySelector('#menu-icon');
        const closeIcon = this.querySelector('#close-icon');

        if (!btn || !menu) return;

        btn.addEventListener('click', () => {
            const isOpen = !menu.classList.contains('opacity-0');

            if (isOpen) {
                // Close
                menu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            } else {
                // Open
                menu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        });

        // Close menu on click outside
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                menu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }

    highlightActiveLink() {
        const path = window.location.pathname;
        const page = path.split("/").pop() || "index.html";

        // Find links targeting this page
        const links = this.querySelectorAll(`a[href="${page}"], a[href="${decodeURIComponent(page)}"]`);
        links.forEach(link => {
            link.classList.remove('text-slate-400');
            link.classList.add('text-white');
            if (link.dataset.page) {
                // For desktop nav highlighting
                link.classList.add('glow');
            }
        });
    }
}

customElements.define('apsis-nav', ApsisNav);

// --- Stealth Analytics (GoatCounter) ---
// Privacy-first, no cookies, no tracking banners needed.
// This script runs silently to provide "who" (location/referrers) and "how many" stats.
(function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//gc.zgo.at/count.js";
    script.dataset.goatcounter = "https://apsis.goatcounter.com/count";
    document.head.appendChild(script);
})();
