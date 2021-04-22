
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
        <div style={{height:"40px"}}></div>
        <div className="footer">
            <p className="footer-smalltext">Property of Zuly, {year}</p>
        </div>
        </>
    );
}