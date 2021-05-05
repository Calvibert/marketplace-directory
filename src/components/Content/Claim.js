import translate from "../../lib/translate";

export default function Claim({ french }) {
    function handleNewCustomField(e) {
        var row = document.createElement('tr');
        row.innerHTML = '<td><br/><label><input class="form-control custom-input" placeholder="your custom field"/><input class="form-control custom-input" placeholder="your value"/></label></td>';
        document.getElementById('fields').append(row);
    }

    function handleClaimBusiness(e) {
        var fields = document.getElementsByClassName('custom-input');
        var data = {};
        for (var i=0; i < fields.length; ++i) {
            data[fields[i].id] = fields[i].value;
        }
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3001/add", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send(JSON.stringify(data));
    }

    return (
        <>
            <div className="" id="fields">
                <label>{translate('claim_business',french)}<input id="business" className="form-control custom-input"/></label><br/>
                <label>{translate('claim_logo',french)}<input id="logo" className="form-control custom-input"/></label><br/>
                <label>{translate('claim_website',french)}<input id="website" className="form-control custom-input"/></label><br/>
                <label>{translate('claim_description',french)}<input id="description" className="form-control custom-input"/></label><br/><br/>
            </div>
            <button onClick={handleNewCustomField} className="btn btn-primary">{translate('claim_customField',french)}</button>&nbsp;<br/><br/>
            <button onClick={handleClaimBusiness} className="btn btn-lg btn-custom">{translate('claim_submit',french)}</button>
        </>
    );
}