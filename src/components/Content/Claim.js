
export default function Claim() {
    function handleNewCustomField(e) {
        var row = document.createElement('tr');
        row.innerHTML = '<td><br/><label><input class="form-control custom-input" placeholder="your custom field"/><input class="form-control custom-input" placeholder="your value"/></label></td>';
        document.getElementById('fields').append(row);
    }

    function handleClaimBusiness(e) {
        var fields = document.getElementById('fields');
        var data = {};
        fields.childNodes.forEach((node) => {
            let input = node.childNodes.item(0).childNodes.item(0).childNodes.item(1);
            if (input === null) {
                let container = node.childNodes.item(0).childNodes.item(1);
                data[container.childNodes.item(0).value] = container.childNodes.item(1).value;
            } else {
                data[input.id] = input.value;   
            }
        });
        console.log(data);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3001/add", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send(JSON.stringify(data));
    }

    return (
        <>
        <div className="d-flex justify-content-center" id="fields">
            <label>Your Business Name<input id="business" className="form-control custom-input"/></label><br/>
            <label>Your Logo<input id="logo" className="form-control custom-input"/></label><br/>
            <label>Website<input id="website" className="form-control custom-input"/></label><br/>
            <label>Description<input id="description" className="form-control custom-input"/></label><br/><br/>
        </div>
        
        <button onClick={handleNewCustomField} className="btn btn-primary">+ Add Custom Field</button>&nbsp;<br/><br/>
        <button onClick={handleClaimBusiness} className="btn btn-lg btn-custom">Claim your business on Zuly!</button>
        <br/><br/>
        </>
    );
}