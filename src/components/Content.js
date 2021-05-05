import Home from './Content/Home';
import Directory from './Content/Directory';
import Contact from './Content/Contact';

function Content({ content, french }) {

    if (content === 'home') {
        return <Home french={french}/>;
    } else if (content === 'directory') {
        return <Directory />;
    } else if (content === 'contact') {
        return <Contact />;
    } else if (content === 'claim') {
        return <Claim french={french}/>;
    }
    return content;
}

export default Content;