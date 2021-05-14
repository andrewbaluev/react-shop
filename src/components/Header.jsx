function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a href='https://andrewbaluev.github.io/react-shop/' className='brand-logo'>
                    Ract Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/andrewbaluev/react-shop' target="_blank" rel="noreferrer">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
