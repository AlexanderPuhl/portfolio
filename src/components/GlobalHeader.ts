interface NavLink {
	href: string;
	label: string;
}

const NAV_LINKS: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
];

class GlobalHeader extends HTMLElement {
	connectedCallback(): void {
		const path = window.location.pathname;

		const links = NAV_LINKS.map(({ href, label }) => {
			const isActive = href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`);

			return `<a href="${href}"${isActive ? ' class="active"' : ''}>${label}</a>`;
		}).join('\n\t\t\t');

		this.innerHTML = `
			<header class="global-header">
				<nav class="global-nav">
					${links}
				</nav>
			</header>
		`;
	}
}

customElements.define('global-header', GlobalHeader);
