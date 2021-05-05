import translate from '../lib/translate';

export default function Footer({ french }) {
    const year = new Date().getFullYear();
    return (
        <>
        <div style={{height:"40px"}}></div>
        <div className="footer">
            <p className="footer-smalltext">{translate('footer_property', french)} {year}</p>
        </div>
        </>
    );
}